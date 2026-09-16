const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

// Helper for smooth easing scroll
async function smoothScrollTo(page, targetY, durationMs = 1200) {
  await page.evaluate(async ({ targetY, durationMs }) => {
    const startY = window.scrollY;
    const diff = targetY - startY;
    const startTime = performance.now();
    return new Promise((resolve) => {
      function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        // easeInOutCubic
        const ease = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        window.scrollTo(0, startY + diff * ease);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          resolve();
        }
      }
      requestAnimationFrame(step);
    });
  }, { targetY, durationMs });
  await page.waitForTimeout(200);
}

// Helper to get element top
async function getElementY(page, selector) {
  return await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    return window.scrollY + rect.top;
  }, selector);
}

// Find ffmpeg binary if available
function getFFmpegPath() {
  try {
    const staticFFmpeg = require('ffmpeg-static');
    if (staticFFmpeg && fs.existsSync(staticFFmpeg)) return staticFFmpeg;
  } catch (e) {}
  const localAppData = process.env.LOCALAPPDATA || '';
  const pwFFmpeg = path.join(localAppData, 'ms-playwright', 'ffmpeg-1011', 'ffmpeg-win64.exe');
  if (fs.existsSync(pwFFmpeg)) return pwFFmpeg;
  try {
    execSync('where ffmpeg', { stdio: 'ignore' });
    return 'ffmpeg';
  } catch (e) {
    return null;
  }
}

async function run() {
  console.log('🚀 Starting NexaWeb Studio Showcase Reel recording (30s mobile format)...');

  const marketingDir = path.resolve(__dirname, '../public/marketing');
  const tempDir = path.join(marketingDir, 'temp-record');
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  fs.mkdirSync(tempDir, { recursive: true });

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
    recordVideo: {
      dir: tempDir,
      size: { width: 390, height: 844 }
    }
  });

  const page = await context.newPage();

  console.log('🌐 Loading https://www.nexawebstudio.uk ...');
  try {
    await page.goto('https://www.nexawebstudio.uk', { waitUntil: 'networkidle', timeout: 30000 });
  } catch (err) {
    console.warn('Network idle timeout, waiting for domcontentloaded...', err.message);
    await page.waitForLoadState('domcontentloaded');
  }

  // Hide any cookie or debug popups if present
  await page.waitForTimeout(1000);

  // --------------------------------------------------------------------------
  // SCENE 1 (0 - 5s): Hero Section with glowing green badge & headline
  // --------------------------------------------------------------------------
  console.log('🎬 [Scene 1: 0-5s] Capturing Hero section...');
  await page.waitForTimeout(2000);
  // Gentle subtle scroll preview
  await smoothScrollTo(page, 150, 800);
  await page.waitForTimeout(600);
  await smoothScrollTo(page, 0, 800);
  await page.waitForTimeout(1200);

  // --------------------------------------------------------------------------
  // SCENE 2 (5 - 13s): Smooth scroll to Demos, Toggle Language Switcher (EN -> PT -> FR -> AR)
  // --------------------------------------------------------------------------
  console.log('🎬 [Scene 2: 5-13s] Smooth scroll to Demos & Multilingual Switcher...');
  const demosY = (await getElementY(page, '#demos')) || 1200;
  await smoothScrollTo(page, Math.max(0, demosY - 70), 1200);
  await page.waitForTimeout(1000);

  // Open mobile drawer
  const menuButton = page.locator('button[aria-label*="navigation menu"], button:has(svg.lucide-menu)').first();
  if (await menuButton.isVisible()) {
    await menuButton.click();
    await page.waitForTimeout(700);

    // Find language switcher in mobile drawer
    const langBtn = page.locator('button:has(svg.lucide-globe)').last();
    
    // Switch to Português
    if (await langBtn.isVisible()) {
      await langBtn.click();
      await page.waitForTimeout(400);
      const ptBtn = page.locator('button[role="menuitem"]:has-text("Português")').first();
      if (await ptBtn.isVisible()) await ptBtn.click();
      await page.waitForTimeout(800);

      // Switch to Français
      await langBtn.click();
      await page.waitForTimeout(400);
      const frBtn = page.locator('button[role="menuitem"]:has-text("Français")').first();
      if (await frBtn.isVisible()) await frBtn.click();
      await page.waitForTimeout(800);

      // Switch to العربية
      await langBtn.click();
      await page.waitForTimeout(400);
      const arBtn = page.locator('button[role="menuitem"]:has-text("العربية")').first();
      if (await arBtn.isVisible()) await arBtn.click();
      await page.waitForTimeout(800);
    }

    // Close mobile drawer to reveal Demos in Arabic RTL!
    const closeBtn = page.locator('button[aria-label*="Close"], button:has(svg.lucide-x)').first();
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
      await page.waitForTimeout(1200);
    }
  }

  // --------------------------------------------------------------------------
  // SCENE 3 (13 - 22s): Scroll to Contact / WhatsApp CTA & Fill Demo Inquiry
  // --------------------------------------------------------------------------
  console.log('🎬 [Scene 3: 13-22s] Scroll to Contact & fill demo inquiry form...');
  const contactY = (await getElementY(page, '#contact')) || 4500;
  await smoothScrollTo(page, Math.max(0, contactY - 50), 1200);
  await page.waitForTimeout(800);

  // Scroll specifically to the form
  const formElement = page.locator('#contact form').first();
  if (await formElement.isVisible()) {
    const formY = (await getElementY(page, '#contact form')) || contactY;
    await smoothScrollTo(page, Math.max(0, formY - 60), 800);
    await page.waitForTimeout(400);

    // Fill Name
    const nameInput = page.locator('#contact input[type="text"]').first();
    if (await nameInput.isVisible()) {
      await nameInput.click();
      await nameInput.pressSequentially('Alexander Wright', { delay: 40 });
      await page.waitForTimeout(200);
    }

    // Fill Business Name
    const bizInput = page.locator('#contact input[type="text"]').nth(1);
    if (await bizInput.isVisible()) {
      await bizInput.click();
      await bizInput.pressSequentially('Wright Architecture Ltd', { delay: 35 });
      await page.waitForTimeout(200);
    }

    // Fill Email
    const emailInput = page.locator('#contact input[type="email"]').first();
    if (await emailInput.isVisible()) {
      await emailInput.click();
      await emailInput.pressSequentially('alexander@wrightarch.co.uk', { delay: 30 });
      await page.waitForTimeout(200);
    }

    // Fill Phone
    const phoneInput = page.locator('#contact input[type="tel"]').first();
    if (await phoneInput.isVisible()) {
      await phoneInput.click();
      await phoneInput.pressSequentially('+44 7911 123456', { delay: 35 });
      await page.waitForTimeout(200);
    }

    // Select options if available
    const selects = page.locator('#contact select');
    const selectCount = await selects.count();
    if (selectCount > 0) {
      await selects.first().selectOption({ index: 1 });
      await page.waitForTimeout(200);
    }
    if (selectCount > 1) {
      await selects.nth(1).selectOption({ index: 1 });
      await page.waitForTimeout(200);
    }

    // Fill message textarea
    const msgInput = page.locator('#contact textarea').first();
    if (await msgInput.isVisible()) {
      await msgInput.click();
      await msgInput.pressSequentially('Looking for a high-converting website redesign.', { delay: 25 });
      await page.waitForTimeout(400);
    }
  }
  await page.waitForTimeout(1000);

  // --------------------------------------------------------------------------
  // SCENE 4 (22 - 30s): Scroll to Footer showing NexaWeb Studio branding
  // --------------------------------------------------------------------------
  console.log('🎬 [Scene 4: 22-30s] Scroll to Footer & NexaWeb Studio branding...');
  const footerY = (await getElementY(page, 'footer')) || 7000;
  await smoothScrollTo(page, footerY - 50, 1500);
  await page.waitForTimeout(2000);

  // Scroll to bottom copyright
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
  await page.waitForTimeout(3000);

  console.log('✅ Recording finished, closing browser to finalize video file...');
  const video = page.video();
  await page.close();
  await context.close();
  await browser.close();

  // Save the video file
  const recordedVideoPath = await video.path();
  console.log(`📹 Source recorded video at: ${recordedVideoPath}`);

  const targetWebm = path.join(marketingDir, 'nexaweb-showcase-reel.webm');
  fs.copyFileSync(recordedVideoPath, targetWebm);
  console.log(`💾 Saved WebM to: ${targetWebm} (${(fs.statSync(targetWebm).size / (1024 * 1024)).toFixed(2)} MB)`);

  // Convert to MP4 if ffmpeg is available
  const ffmpeg = getFFmpegPath();
  const targetMp4 = path.join(marketingDir, 'nexaweb-showcase-reel.mp4');
  if (ffmpeg) {
    console.log(`⚙️ Converting to MP4 using ffmpeg: ${ffmpeg}...`);
    try {
      execSync(`"${ffmpeg}" -y -i "${targetWebm}" -c:v libx264 -pix_fmt yuv420p -r 30 -movflags +faststart "${targetMp4}"`, {
        stdio: 'inherit'
      });
      console.log(`💾 Saved MP4 to: ${targetMp4} (${(fs.statSync(targetMp4).size / (1024 * 1024)).toFixed(2)} MB)`);
    } catch (err) {
      console.warn('⚠️ FFmpeg MP4 conversion warning:', err.message);
    }
  }

  // Cleanup temp recording folder
  try {
    fs.rmSync(tempDir, { recursive: true, force: true });
  } catch (e) {}

  console.log('🎉 Recording complete!');
}

run().catch((err) => {
  console.error('❌ Error during reel recording:', err);
  process.exit(1);
});


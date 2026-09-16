const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const { spawnSync } = require('child_process');
const ffmpegPath = require('ffmpeg-static');

const marketingDir = path.resolve(__dirname, '../public/marketing');
const TARGET_URL = 'https://www.nexawebstudio.uk';

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
  try {
    const loc = page.locator(selector).first();
    const count = await loc.count();
    if (count === 0) return null;
    const box = await loc.boundingBox();
    if (!box) return null;
    const scrollY = await page.evaluate(() => window.scrollY);
    return scrollY + box.y;
  } catch (e) {
    return null;
  }
}

// Helper to get base64 data URI
function getBase64(filePath) {
  if (!fs.existsSync(filePath)) return '';
  const ext = path.extname(filePath).replace('.', '').toLowerCase();
  const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : ext === 'svg' ? 'image/svg+xml' : 'image/png';
  const data = fs.readFileSync(filePath).toString('base64');
  return `data:${mime};base64,${data}`;
}

// ----------------------------------------------------------------------------
// 1. GENERATE THE IPHONE 15 PRO 1080x1920 STUDIO OVERLAY FRAME
// ----------------------------------------------------------------------------
async function generateChassisOverlay(browser) {
  console.log('📱 Creating 1080x1920 iPhone 15 Pro Studio Overlay Frame...');
  const overlayPath = path.join(marketingDir, 'temp-chassis-frame.png');
  if (fs.existsSync(overlayPath)) return overlayPath;

  const context = await browser.newContext({
    viewport: { width: 1080, height: 1920 },
    deviceScaleFactor: 1
  });
  const page = await context.newPage();
  const logoIcon = getBase64(path.join(marketingDir, 'logo-icon.png'));

  const overlayHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          width: 1080px;
          height: 1920px;
          margin: 0;
          padding: 0;
          background: transparent;
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, Roboto, sans-serif;
          position: relative;
          overflow: hidden;
        }
      </style>
    </head>
    <body>
      <svg width="1080" height="1920" style="position: absolute; inset: 0; z-index: 1;">
        <defs>
          <linearGradient id="bg-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#050814" />
            <stop offset="45%" stop-color="#091024" />
            <stop offset="100%" stop-color="#040610" />
          </linearGradient>
          <radialGradient id="emerald-glow" cx="50%" cy="45%" r="48%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.22" />
            <stop offset="60%" stop-color="#050814" stop-opacity="0.85" />
            <stop offset="100%" stop-color="#040610" stop-opacity="1" />
          </radialGradient>
          <mask id="phone-screen-mask">
            <!-- White reveals everything, black cuts out the transparent phone window -->
            <rect width="1080" height="1920" fill="#ffffff" />
            <rect x="228" y="285" width="624" height="1350" rx="52" ry="52" fill="#000000" />
          </mask>
          <filter id="phone-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="35" stdDeviation="40" flood-color="#000000" flood-opacity="0.95" />
            <feDropShadow dx="0" dy="0" stdDeviation="30" flood-color="#10b981" flood-opacity="0.3" />
          </filter>
        </defs>

        <!-- Studio Background with cutout hole for video -->
        <rect width="1080" height="1920" fill="url(#bg-grad)" mask="url(#phone-screen-mask)" />
        <rect width="1080" height="1920" fill="url(#emerald-glow)" mask="url(#phone-screen-mask)" />

        <!-- Titanium Bezel Stroke around the cutout -->
        <rect x="220" y="277" width="640" height="1366" rx="58" ry="58" fill="none" stroke="#334155" stroke-width="14" filter="url(#phone-shadow)" />
        <rect x="220" y="277" width="640" height="1366" rx="58" ry="58" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2" />

        <!-- Dynamic Island Pill -->
        <rect x="470" y="302" width="140" height="34" rx="17" fill="#000000" />
        <circle cx="492" cy="319" r="5" fill="#0f172a" />
        <circle cx="580" cy="319" r="4.5" fill="#082f49" />
      </svg>

      <!-- Top Studio Header -->
      <div style="position: absolute; top: 85px; left: 0; width: 100%; text-align: center; z-index: 10; color: #fff;">
        <div style="display: inline-flex; align-items: center; gap: 12px; padding: 10px 24px; border-radius: 999px; background: rgba(16, 185, 129, 0.14); border: 1px solid rgba(16, 185, 129, 0.4); margin-bottom: 16px;">
          <img src="${logoIcon}" style="width: 28px; height: 28px; border-radius: 8px;" alt="Logo">
          <span style="font-size: 17px; font-weight: 800; letter-spacing: 0.04em;">NEXA<span style="color: #10b981;">WEB</span> STUDIO</span>
        </div>
        <h1 style="font-size: 42px; font-weight: 800; letter-spacing: -0.03em;">
          High-Converting <span style="color: #34d399;">Websites</span>
        </h1>
      </div>

      <!-- Bottom Agency Value Strip -->
      <div style="position: absolute; bottom: 85px; left: 0; width: 100%; display: flex; align-items: center; justify-content: center; gap: 32px; font-size: 16px; font-weight: 700; color: #94a3b8; z-index: 10;">
        <div style="display: flex; align-items: center; gap: 8px;"><span style="color: #10b981;">⚡</span> 100/100 Lighthouse</div>
        <div style="display: flex; align-items: center; gap: 8px;"><span style="color: #10b981;">🌍</span> 4 Languages</div>
        <div style="display: flex; align-items: center; gap: 8px;"><span style="color: #10b981;">💬</span> WhatsApp Direct</div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(overlayHtml);
  await page.waitForTimeout(600);
  await page.screenshot({
    path: overlayPath,
    clip: { x: 0, y: 0, width: 1080, height: 1920 },
    omitBackground: true
  });
  await page.close();
  await context.close();
  return overlayPath;
}

// ----------------------------------------------------------------------------
// COMPOSITE MOBILE VIDEO INTO 1080x1920 IPHONE CHASSIS
// ----------------------------------------------------------------------------
function compositeReel(rawVideoPath, overlayPath, finalMp4Path) {
  console.log(`⚙️ Compositing ${path.basename(finalMp4Path)} (1080x1920 vertical format)...`);
  const ffmpegArgs = [
    '-y',
    '-f', 'lavfi',
    '-i', 'color=c=#050814:s=1080x1920:r=30',
    '-i', rawVideoPath,
    '-loop', '1',
    '-i', overlayPath,
    '-filter_complex',
    '[1:v]scale=624:1350:flags=lanczos[vid];' +
    '[0:v][vid]overlay=228:285:shortest=1[base];' +
    '[base][2:v]overlay=0:0:shortest=1[outv]',
    '-map', '[outv]',
    '-c:v', 'libx264',
    '-preset', 'slow',
    '-crf', '19',
    '-pix_fmt', 'yuv420p',
    '-r', '30',
    '-movflags', '+faststart',
    finalMp4Path
  ];

  const result = spawnSync(ffmpegPath, ffmpegArgs, { stdio: 'inherit' });
  if (result.status === 0 && fs.existsSync(finalMp4Path)) {
    const size = (fs.statSync(finalMp4Path).size / (1024 * 1024)).toFixed(2);
    console.log(`✅ Success! Generated ${finalMp4Path} (${size} MB)`);
  } else {
    throw new Error(`FFmpeg failed on ${finalMp4Path} with code ${result.status}`);
  }
}

// ----------------------------------------------------------------------------
// REEL 1: BRAND SHOWCASE (25s)
// ----------------------------------------------------------------------------
async function recordReel1(browser, overlayPath) {
  const finalMp4 = path.join(marketingDir, 'reel-1-brand.mp4');
  if (fs.existsSync(finalMp4) && fs.statSync(finalMp4).size > 1000000) {
    console.log(`⚡ Reel 1 already generated at ${finalMp4}, skipping...`);
    return;
  }

  console.log('\n========================================');
  console.log('🎥 Recording Reel 1: Brand & Multilingual Flow (25s)...');
  console.log('========================================');

  const tempDir = path.join(marketingDir, 'temp-reel-1');
  if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(tempDir, { recursive: true });

  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
    recordVideo: { dir: tempDir, size: { width: 390, height: 844 } }
  });

  const page = await context.newPage();
  await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  // Scene 1: Hero preview (0-5s)
  await page.waitForTimeout(1500);
  await smoothScrollTo(page, 120, 800);
  await page.waitForTimeout(500);
  await smoothScrollTo(page, 0, 800);
  await page.waitForTimeout(1200);

  // Scene 2: Scroll to Demos & Multilingual Switch (5-14s)
  const demosY = (await getElementY(page, '#demos')) || 1200;
  await smoothScrollTo(page, Math.max(0, demosY - 70), 1200);
  await page.waitForTimeout(800);

  const menuButton = page.locator('header button[aria-label*="navigation menu"], header button:has(svg.lucide-menu)').first();
  if (await menuButton.isVisible()) {
    await menuButton.click({ force: true });
    await page.waitForTimeout(700);

    const mobileOverlay = page.locator('div.fixed.inset-0');
    const langBtn = mobileOverlay.locator('button:has(svg.lucide-globe)').first();

    if (await langBtn.isVisible()) {
      // Português
      await langBtn.click({ force: true });
      await page.waitForTimeout(350);
      const ptBtn = mobileOverlay.locator('button[role="menuitem"]:has-text("Português")').first();
      if (await ptBtn.isVisible()) await ptBtn.click({ force: true });
      await page.waitForTimeout(700);

      // Français
      await langBtn.click({ force: true });
      await page.waitForTimeout(350);
      const frBtn = mobileOverlay.locator('button[role="menuitem"]:has-text("Français")').first();
      if (await frBtn.isVisible()) await frBtn.click({ force: true });
      await page.waitForTimeout(700);

      // العربية
      await langBtn.click({ force: true });
      await page.waitForTimeout(350);
      const arBtn = mobileOverlay.locator('button[role="menuitem"]:has-text("العربية")').first();
      if (await arBtn.isVisible()) await arBtn.click({ force: true });
      await page.waitForTimeout(700);
    }

    const closeBtn = mobileOverlay.locator('button[aria-label*="Close"], button:has(svg.lucide-x)').first();
    if (await closeBtn.isVisible()) {
      await closeBtn.click({ force: true });
      await page.waitForTimeout(1200);
    }
  }

  // Scene 3: Contact Section & WhatsApp Card (14-20s)
  const contactY = (await getElementY(page, '#contact')) || 4500;
  await smoothScrollTo(page, Math.max(0, contactY - 50), 1200);
  await page.waitForTimeout(1200);

  // Copy email click feedback
  const copyBtn = page.locator('#contact button:has(svg.lucide-copy)').first();
  if (await copyBtn.isVisible()) {
    await copyBtn.click({ force: true });
    await page.waitForTimeout(1200);
  }

  // Scene 4: Footer branding (20-25s)
  const footerY = (await getElementY(page, 'footer')) || 7000;
  await smoothScrollTo(page, footerY - 50, 1200);
  await page.waitForTimeout(2500);

  const video = page.video();
  await page.close();
  await context.close();

  const recordedPath = await video.path();
  compositeReel(recordedPath, overlayPath, finalMp4);
  try { fs.rmSync(tempDir, { recursive: true, force: true }); } catch (e) {}
}

// ----------------------------------------------------------------------------
// REEL 2: DEMOS & BOOKING FLOW (25s)
// ----------------------------------------------------------------------------
async function recordReel2(browser, overlayPath) {
  const finalMp4 = path.join(marketingDir, 'reel-2-demos.mp4');
  if (fs.existsSync(finalMp4) && fs.statSync(finalMp4).size > 1000000) {
    console.log(`⚡ Reel 2 already generated at ${finalMp4}, skipping...`);
    return;
  }

  console.log('\n========================================');
  console.log('🎥 Recording Reel 2: Demos & Booking Flow (25s)...');
  console.log('========================================');

  const tempDir = path.join(marketingDir, 'temp-reel-2');
  if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(tempDir, { recursive: true });

  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
    recordVideo: { dir: tempDir, size: { width: 390, height: 844 } }
  });

  const page = await context.newPage();
  await page.goto(TARGET_URL + '/#demos', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  // Scene 1: Header of Demos & Filter Pills (0-6s)
  const demosY = (await getElementY(page, '#demos')) || 1200;
  await smoothScrollTo(page, Math.max(0, demosY - 20), 800);
  await page.waitForTimeout(1200);

  // Click Barber filter pill
  const filterButtons = page.locator('#demos button');
  const count = await filterButtons.count();
  if (count > 2) {
    await filterButtons.nth(2).click({ force: true });
    await page.waitForTimeout(1200);
  }

  // Scene 2: Interactive Card interaction (6-13s)
  await smoothScrollTo(page, demosY + 280, 1000);
  await page.waitForTimeout(1200);

  // Click Dental Clinic filter pill
  if (count > 3) {
    await smoothScrollTo(page, demosY, 800);
    await page.waitForTimeout(400);
    await filterButtons.nth(3).click({ force: true });
    await page.waitForTimeout(1200);
    await smoothScrollTo(page, demosY + 300, 1000);
    await page.waitForTimeout(1200);
  }

  // Reset to All
  if (count > 0) {
    await filterButtons.first().click({ force: true });
    await page.waitForTimeout(800);
  }

  // Scene 3: Scroll to Contact & WhatsApp CTA / Form (13-25s)
  const contactY = (await getElementY(page, '#contact')) || 4500;
  await smoothScrollTo(page, Math.max(0, contactY - 40), 1200);
  await page.waitForTimeout(1000);

  const formElement = page.locator('#contact form').first();
  if (await formElement.isVisible()) {
    const formY = (await getElementY(page, '#contact form')) || contactY + 300;
    await smoothScrollTo(page, Math.max(0, formY - 60), 800);
    await page.waitForTimeout(400);

    const nameInput = page.locator('#contact input[type="text"]').first();
    if (await nameInput.isVisible()) {
      await nameInput.click();
      await nameInput.pressSequentially('Elena Rostova', { delay: 35 });
      await page.waitForTimeout(250);
    }

    const emailInput = page.locator('#contact input[type="email"]').first();
    if (await emailInput.isVisible()) {
      await emailInput.click();
      await emailInput.pressSequentially('elena@rostovaclinic.com', { delay: 30 });
      await page.waitForTimeout(350);
    }
  }

  // Hold on WhatsApp CTA button
  await smoothScrollTo(page, contactY + 140, 800);
  await page.waitForTimeout(2500);

  const video = page.video();
  await page.close();
  await context.close();

  const recordedPath = await video.path();
  compositeReel(recordedPath, overlayPath, finalMp4);
  try { fs.rmSync(tempDir, { recursive: true, force: true }); } catch (e) {}
}

// ----------------------------------------------------------------------------
// REEL 3: SPEED & TECH PERFORMANCE (20s)
// ----------------------------------------------------------------------------
async function recordReel3(browser, overlayPath) {
  const finalMp4 = path.join(marketingDir, 'reel-3-speed.mp4');
  if (fs.existsSync(finalMp4) && fs.statSync(finalMp4).size > 1000000) {
    console.log(`⚡ Reel 3 already generated at ${finalMp4}, skipping...`);
    return;
  }

  console.log('\n========================================');
  console.log('🎥 Recording Reel 3: Speed & Tech Performance (20s)...');
  console.log('========================================');

  const tempDir = path.join(marketingDir, 'temp-reel-3');
  if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(tempDir, { recursive: true });

  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
    recordVideo: { dir: tempDir, size: { width: 390, height: 844 } }
  });

  const page = await context.newPage();
  await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  // Scene 1 (0-5s): Trust Strip & High Performance Badges
  await page.waitForTimeout(1000);
  await smoothScrollTo(page, 450, 1000);
  await page.waitForTimeout(2000);

  // Scene 2 (5-10s): Built To Sell / High Conversion Architecture
  await smoothScrollTo(page, 950, 1000);
  await page.waitForTimeout(1500);

  const builtY = ((await getElementY(page, '#demos')) || 1200) + 900;
  await smoothScrollTo(page, builtY - 50, 1000);
  await page.waitForTimeout(2000);

  // Scene 3 (10-15s): Client Ownership & Transparent Stack
  const ownershipY = builtY + 800;
  await smoothScrollTo(page, ownershipY - 50, 1000);
  await page.waitForTimeout(2000);

  // Scene 4 (15-20s): Pricing & Instant WhatsApp Turnaround
  const pricingY = (await getElementY(page, '#pricing')) || (ownershipY + 700);
  await smoothScrollTo(page, pricingY - 40, 1000);
  await page.waitForTimeout(2500);

  const video = page.video();
  await page.close();
  await context.close();

  const recordedPath = await video.path();
  compositeReel(recordedPath, overlayPath, finalMp4);
  try { fs.rmSync(tempDir, { recursive: true, force: true }); } catch (e) {}
}

async function main() {
  console.log('🚀 Starting NexaWeb Studio Agency Reels Production Suite (1080x1920 Vertical)...');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const overlayPath = await generateChassisOverlay(browser);

    await recordReel1(browser, overlayPath);
    await recordReel2(browser, overlayPath);
    await recordReel3(browser, overlayPath);

    try { fs.rmSync(overlayPath, { force: true }); } catch (e) {}

    console.log('\n========================================');
    console.log('🎉 ALL 3 VERTICAL REELS GENERATED SUCCESSFULLY (1080x1920)!');
    console.log('========================================');
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error('❌ Reels generation failed:', err);
  process.exit(1);
});


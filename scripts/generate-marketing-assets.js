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
  return await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    return window.scrollY + rect.top;
  }, selector);
}

// Convert WebM to MP4 using ffmpeg-static
function convertWebmToMp4(inputWebm, outputMp4) {
  console.log(`🎬 Converting ${path.basename(inputWebm)} to ${path.basename(outputMp4)}...`);
  const args = [
    '-y',
    '-i', inputWebm,
    '-c:v', 'libx264',
    '-preset', 'slow',
    '-crf', '20',
    '-pix_fmt', 'yuv420p',
    '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2',
    '-r', '30',
    '-movflags', '+faststart',
    outputMp4
  ];
  const result = spawnSync(ffmpegPath, args, { stdio: 'inherit' });
  if (result.status !== 0) {
    throw new Error(`FFmpeg failed with status ${result.status}`);
  }
  console.log(`✅ Converted: ${outputMp4} (${(fs.statSync(outputMp4).size / (1024 * 1024)).toFixed(2)} MB)`);
}

// ============================================================================
// 1. RECORD REEL 2: DEMOS & BOOKING FLOW (~25s)
// ============================================================================
async function recordReel2(browser) {
  console.log('\n========================================');
  console.log('🎥 Recording Reel 2: Demos & Booking Flow (25s)...');
  console.log('========================================');

  const tempDir = path.join(marketingDir, 'temp-record-reel2');
  if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(tempDir, { recursive: true });

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
  await page.goto(TARGET_URL + '/#demos', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  // Scene 1: Header of Demos & Filter Pills (0-6s)
  const demosY = (await getElementY(page, '#demos')) || 1200;
  await smoothScrollTo(page, Math.max(0, demosY - 20), 800);
  await page.waitForTimeout(1500);

  // Click Barber filter pill
  const filterButtons = page.locator('#demos button');
  const count = await filterButtons.count();
  if (count > 2) {
    // Click Barber filter
    await filterButtons.nth(2).click({ force: true });
    await page.waitForTimeout(1500);
  }

  // Scene 2: Interactive Card interaction (6-14s)
  await smoothScrollTo(page, demosY + 280, 1000);
  await page.waitForTimeout(1200);

  // Click Dental Clinic filter pill
  if (count > 3) {
    await smoothScrollTo(page, demosY, 800);
    await page.waitForTimeout(400);
    await filterButtons.nth(3).click({ force: true });
    await page.waitForTimeout(1500);
    await smoothScrollTo(page, demosY + 300, 1000);
    await page.waitForTimeout(1500);
  }

  // Reset to All
  if (count > 0) {
    await filterButtons.first().click({ force: true });
    await page.waitForTimeout(1000);
  }

  // Scene 3: Scroll to Contact & WhatsApp CTA / Copy Email (14-25s)
  const contactY = (await getElementY(page, '#contact')) || 4500;
  await smoothScrollTo(page, Math.max(0, contactY - 40), 1200);
  await page.waitForTimeout(1200);

  // Click Copy Email button on contact card to show "Copied!" feedback
  const copyBtn = page.locator('#contact button:has(svg.lucide-copy)').first();
  if (await copyBtn.isVisible()) {
    await copyBtn.click({ force: true });
    await page.waitForTimeout(1500);
  }

  // Scroll to Form inputs
  const formElement = page.locator('#contact form').first();
  if (await formElement.isVisible()) {
    const formY = (await getElementY(page, '#contact form')) || contactY + 300;
    await smoothScrollTo(page, Math.max(0, formY - 60), 800);
    await page.waitForTimeout(500);

    const nameInput = page.locator('#contact input[type="text"]').first();
    if (await nameInput.isVisible()) {
      await nameInput.click();
      await nameInput.pressSequentially('Elena Rostova', { delay: 40 });
      await page.waitForTimeout(300);
    }

    const emailInput = page.locator('#contact input[type="email"]').first();
    if (await emailInput.isVisible()) {
      await emailInput.click();
      await emailInput.pressSequentially('elena@rostovaclinic.com', { delay: 35 });
      await page.waitForTimeout(400);
    }
  }

  // Hold on WhatsApp CTA button
  await smoothScrollTo(page, contactY + 150, 800);
  await page.waitForTimeout(2500);

  const video = page.video();
  await page.close();
  await context.close();

  const recordedPath = await video.path();
  const outputMp4 = path.join(marketingDir, 'reel-2-demos.mp4');
  convertWebmToMp4(recordedPath, outputMp4);

  try { fs.rmSync(tempDir, { recursive: true, force: true }); } catch (e) {}
}

// ============================================================================
// 2. RECORD REEL 3: SPEED & TECH PERFORMANCE (~20s)
// ============================================================================
async function recordReel3(browser) {
  console.log('\n========================================');
  console.log('🎥 Recording Reel 3: Speed & Tech Performance (20s)...');
  console.log('========================================');

  const tempDir = path.join(marketingDir, 'temp-record-reel3');
  if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(tempDir, { recursive: true });

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
  await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  // Scene 1 (0-5s): Trust Strip & High Performance Badges
  await page.waitForTimeout(1000);
  await smoothScrollTo(page, 450, 1000); // Trust strip & services
  await page.waitForTimeout(2000);

  // Scene 2 (5-11s): Built To Sell / High Conversion Architecture
  await smoothScrollTo(page, 950, 1200);
  await page.waitForTimeout(2000);

  // Scroll to BuiltToSell section
  const builtY = (await getElementY(page, 'section:has-text("Built to Sell"), section:has-text("Construído para Vender")')) || 2400;
  await smoothScrollTo(page, builtY - 50, 1200);
  await page.waitForTimeout(2500);

  // Scene 3 (11-16s): Client Ownership & Transparent Stack
  const ownershipY = (await getElementY(page, 'section:has-text("Ownership"), section:has-text("Propriedade"), section:has-text("100%")')) || (builtY + 800);
  await smoothScrollTo(page, ownershipY - 50, 1200);
  await page.waitForTimeout(2500);

  // Scene 4 (16-20s): Pricing & Instant WhatsApp Turnaround
  const pricingY = (await getElementY(page, '#pricing')) || (ownershipY + 700);
  await smoothScrollTo(page, pricingY - 40, 1200);
  await page.waitForTimeout(3000);

  const video = page.video();
  await page.close();
  await context.close();

  const recordedPath = await video.path();
  const outputMp4 = path.join(marketingDir, 'reel-3-speed.mp4');
  convertWebmToMp4(recordedPath, outputMp4);

  try { fs.rmSync(tempDir, { recursive: true, force: true }); } catch (e) {}
}

// ============================================================================
// 3. CAPTURE FEED POST SCREENSHOTS (8 HIGH RESOLUTION ASSETS)
// ============================================================================
async function captureScreenshots(browser) {
  console.log('\n========================================');
  console.log('📸 Capturing 8 High-Resolution Feed Post Screenshots (1080x1080 Instagram Format)...');
  console.log('========================================');

  // Instagram square post viewport
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1080 },
    deviceScaleFactor: 2
  });

  const page = await context.newPage();
  await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  // ----------------------------------------------------
  // Post 1: Hero Section
  // ----------------------------------------------------
  console.log('📸 Capturing post-1-hero.png...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(marketingDir, 'post-1-hero.png'),
    clip: { x: 0, y: 0, width: 1080, height: 1080 }
  });

  // ----------------------------------------------------
  // Post 2: Performance & Lighthouse Speed Mockup
  // ----------------------------------------------------
  console.log('📸 Generating post-2-speed.png with Lighthouse Scores...');
  // We overlay a high-converting dark glassmorphism Lighthouse badge on the screen
  await page.evaluate(() => {
    const overlay = document.createElement('div');
    overlay.id = 'lighthouse-mockup-overlay';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.background = 'radial-gradient(circle at center, #0f172a 0%, #020617 100%)';
    overlay.style.fontFamily = 'Inter, -apple-system, sans-serif';
    overlay.innerHTML = `
      <div style="width: 860px; padding: 48px; border-radius: 36px; background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(16, 185, 129, 0.3); box-shadow: 0 25px 60px -15px rgba(0,0,0,0.7), 0 0 50px rgba(16, 185, 129, 0.15); backdrop-filter: blur(20px); text-align: center;">
        <div style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 18px; border-radius: 9999px; background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.4); color: #34d399; font-size: 14px; font-weight: 700; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 0.1em;">
          <span>⚡ Google Lighthouse Audit</span>
        </div>
        <h2 style="font-size: 38px; font-weight: 800; color: #ffffff; margin-bottom: 12px; letter-spacing: -0.02em;">
          Ultra-Fast. Clean Code. Zero Bloat.
        </h2>
        <p style="font-size: 18px; color: #94a3b8; max-width: 600px; margin: 0 auto 40px; line-height: 1.5;">
          Engineered with Next.js 14 & Tailwind CSS for maximum conversion speed and instant mobile load.
        </p>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-bottom: 36px;">
          <div style="padding: 24px; border-radius: 24px; background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(16, 185, 129, 0.25);">
            <div style="width: 80px; height: 80px; margin: 0 auto 12px; border-radius: 50%; border: 4px solid #10b981; display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: 800; color: #10b981; box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);">
              100
            </div>
            <div style="font-size: 15px; font-weight: 700; color: #f1f5f9;">SEO</div>
            <div style="font-size: 12px; color: #10b981; font-weight: 600; margin-top: 4px;">Verified 100%</div>
          </div>
          <div style="padding: 24px; border-radius: 24px; background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(16, 185, 129, 0.25);">
            <div style="width: 80px; height: 80px; margin: 0 auto 12px; border-radius: 50%; border: 4px solid #10b981; display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: 800; color: #10b981; box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);">
              100
            </div>
            <div style="font-size: 15px; font-weight: 700; color: #f1f5f9;">Best Practices</div>
            <div style="font-size: 12px; color: #10b981; font-weight: 600; margin-top: 4px;">Verified 100%</div>
          </div>
          <div style="padding: 24px; border-radius: 24px; background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(16, 185, 129, 0.25);">
            <div style="width: 80px; height: 80px; margin: 0 auto 12px; border-radius: 50%; border: 4px solid #10b981; display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: 800; color: #10b981; box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);">
              91
            </div>
            <div style="font-size: 15px; font-weight: 700; color: #f1f5f9;">Accessibility</div>
            <div style="font-size: 12px; color: #34d399; font-weight: 600; margin-top: 4px;">High Contrast</div>
          </div>
          <div style="padding: 24px; border-radius: 24px; background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(16, 185, 129, 0.25);">
            <div style="width: 80px; height: 80px; margin: 0 auto 12px; border-radius: 50%; border: 4px solid #10b981; display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: 800; color: #10b981; box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);">
              0.0
            </div>
            <div style="font-size: 15px; font-weight: 700; color: #f1f5f9;">CLS Shift</div>
            <div style="font-size: 12px; color: #10b981; font-weight: 600; margin-top: 4px;">Zero Visual Shift</div>
          </div>
        </div>
        <div style="display: flex; align-items: center; justify-content: center; gap: 24px; font-size: 14px; color: #64748b; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px;">
          <span>🌐 nexawebstudio.uk</span>
          <span>•</span>
          <span>⚡ Next.js 14 App Router</span>
          <span>•</span>
          <span>🚀 Vercel Edge Global CDN</span>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  });
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(marketingDir, 'post-2-speed.png'),
    clip: { x: 0, y: 0, width: 1080, height: 1080 }
  });
  await page.evaluate(() => {
    const el = document.getElementById('lighthouse-mockup-overlay');
    if (el) el.remove();
  });

  // ----------------------------------------------------
  // Post 3: Features & Built To Sell
  // ----------------------------------------------------
  console.log('📸 Capturing post-3-features.png...');
  const builtY = (await getElementY(page, 'section:has-text("Built to Sell"), section:has-text("Construído para Vender")')) || 2400;
  await page.evaluate((y) => window.scrollTo(0, Math.max(0, y - 60)), builtY);
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(marketingDir, 'post-3-features.png'),
    clip: { x: 0, y: 0, width: 1080, height: 1080 }
  });

  // ----------------------------------------------------
  // Post 4: Multilingual Switcher in Action
  // ----------------------------------------------------
  console.log('📸 Capturing post-4-multilang.png...');
  await page.evaluate(() => {
    const overlay = document.createElement('div');
    overlay.id = 'multilang-mockup-overlay';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.background = 'radial-gradient(circle at center, #0a0f1d 0%, #030712 100%)';
    overlay.style.fontFamily = 'Inter, -apple-system, sans-serif';
    overlay.innerHTML = `
      <div style="width: 860px; padding: 52px; border-radius: 36px; background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(16, 185, 129, 0.3); box-shadow: 0 25px 60px -15px rgba(0,0,0,0.8), 0 0 50px rgba(16, 185, 129, 0.15); backdrop-filter: blur(24px); text-align: center;">
        <div style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 20px; border-radius: 9999px; background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.4); color: #34d399; font-size: 14px; font-weight: 700; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 0.1em;">
          <span>🌍 Global Reach Built In</span>
        </div>
        <h2 style="font-size: 38px; font-weight: 800; color: #ffffff; margin-bottom: 12px; letter-spacing: -0.02em;">
          Speak Your Clients' Language
        </h2>
        <p style="font-size: 18px; color: #94a3b8; max-width: 620px; margin: 0 auto 36px; line-height: 1.5;">
          Every NexaWeb site comes pre-configured with seamless instant localization and zero page reload.
        </p>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 40px;">
          <div style="padding: 24px 16px; border-radius: 20px; background: rgba(30, 41, 59, 0.8); border: 1px solid rgba(16, 185, 129, 0.4); text-align: center;">
            <div style="font-size: 44px; margin-bottom: 8px;">🇬🇧</div>
            <div style="font-size: 18px; font-weight: 800; color: #f8fafc;">English</div>
            <div style="font-size: 12px; color: #10b981; font-weight: 600; margin-top: 4px;">Primary</div>
          </div>
          <div style="padding: 24px 16px; border-radius: 20px; background: rgba(30, 41, 59, 0.8); border: 1px solid rgba(16, 185, 129, 0.4); text-align: center;">
            <div style="font-size: 44px; margin-bottom: 8px;">🇵🇹</div>
            <div style="font-size: 18px; font-weight: 800; color: #f8fafc;">Português</div>
            <div style="font-size: 12px; color: #10b981; font-weight: 600; margin-top: 4px;">PT / BR</div>
          </div>
          <div style="padding: 24px 16px; border-radius: 20px; background: rgba(30, 41, 59, 0.8); border: 1px solid rgba(16, 185, 129, 0.4); text-align: center;">
            <div style="font-size: 44px; margin-bottom: 8px;">🇫🇷</div>
            <div style="font-size: 18px; font-weight: 800; color: #f8fafc;">Français</div>
            <div style="font-size: 12px; color: #10b981; font-weight: 600; margin-top: 4px;">Europe & Africa</div>
          </div>
          <div style="padding: 24px 16px; border-radius: 20px; background: rgba(30, 41, 59, 0.8); border: 1px solid rgba(16, 185, 129, 0.4); text-align: center;">
            <div style="font-size: 44px; margin-bottom: 8px;">🇦🇪</div>
            <div style="font-size: 18px; font-weight: 800; color: #f8fafc;">العربية</div>
            <div style="font-size: 12px; color: #10b981; font-weight: 600; margin-top: 4px;">Full RTL Support</div>
          </div>
        </div>
        <div style="display: inline-flex; align-items: center; gap: 12px; padding: 12px 28px; border-radius: 16px; background: #10b981; color: #ffffff; font-weight: 700; font-size: 16px; box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4);">
          <span>Instant Translation • Localized SEO • WhatsApp Prefilled</span>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  });
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(marketingDir, 'post-4-multilang.png'),
    clip: { x: 0, y: 0, width: 1080, height: 1080 }
  });
  await page.evaluate(() => {
    const el = document.getElementById('multilang-mockup-overlay');
    if (el) el.remove();
  });

  // ----------------------------------------------------
  // Post 5: Portfolio / Architecture Demo Preview
  // ----------------------------------------------------
  console.log('📸 Capturing post-5-portfolio.png...');
  const demosY = (await getElementY(page, '#demos')) || 1200;
  await page.evaluate((y) => window.scrollTo(0, Math.max(0, y + 150)), demosY);
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(marketingDir, 'post-5-portfolio.png'),
    clip: { x: 0, y: 0, width: 1080, height: 1080 }
  });

  // ----------------------------------------------------
  // Post 6: Contact & WhatsApp Card
  // ----------------------------------------------------
  console.log('📸 Capturing post-6-contact.png...');
  const contactY = (await getElementY(page, '#contact')) || 4500;
  await page.evaluate((y) => window.scrollTo(0, Math.max(0, y - 40)), contactY);
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(marketingDir, 'post-6-contact.png'),
    clip: { x: 0, y: 0, width: 1080, height: 1080 }
  });

  // ----------------------------------------------------
  // Post 7: Pricing Section
  // ----------------------------------------------------
  console.log('📸 Capturing post-7-pricing.png...');
  const pricingY = (await getElementY(page, '#pricing')) || 3200;
  await page.evaluate((y) => window.scrollTo(0, Math.max(0, y - 40)), pricingY);
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(marketingDir, 'post-7-pricing.png'),
    clip: { x: 0, y: 0, width: 1080, height: 1080 }
  });

  // ----------------------------------------------------
  // Post 8: Testimonials & Social Proof
  // ----------------------------------------------------
  console.log('📸 Capturing post-8-testimonials.png...');
  const testY = (await getElementY(page, 'section:has-text("Testimonials"), section:has-text("Depoimentos"), section:has-text("Client Stories")')) || 4000;
  await page.evaluate((y) => window.scrollTo(0, Math.max(0, y - 40)), testY);
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(marketingDir, 'post-8-testimonials.png'),
    clip: { x: 0, y: 0, width: 1080, height: 1080 }
  });

  await page.close();
  await context.close();
}

async function main() {
  console.log('🚀 Starting NexaWeb Studio Marketing Production Suite...');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    // 1. Reel 2
    await recordReel2(browser);

    // 2. Reel 3
    await recordReel3(browser);

    // 3. Screenshots
    await captureScreenshots(browser);

    console.log('\n========================================');
    console.log('🎉 ALL MARKETING ASSETS GENERATED SUCCESSFULLY!');
    console.log('========================================');
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error('❌ Marketing generation failed:', err);
  process.exit(1);
});


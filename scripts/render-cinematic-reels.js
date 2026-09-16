/**
 * ============================================================================
 * NEXAWEB STUDIO — CINEMATIC AGENCY REELS PRODUCTION SUITE (1080x1920 VERTICAL)
 * ============================================================================
 *
 * 1. Reel 1: public/marketing/reel-1-safari-entry.mp4 (25s)
 *    - Simulated iOS Safari top UI bar with realistic typing: "nexawebstudio.uk" -> Go
 *    - Smooth transition into live site with zero lag
 *    - Floating guidance cards:
 *      * 0-5s: "Step 1: Open nexawebstudio.uk"
 *      * 5-15s: "Step 2: Experience sub-second speed & smooth 4-language toggle"
 *      * 15-25s: "Step 3: Launch your website in 5–7 days"
 *
 * 2. Reel 2: public/marketing/reel-2-live-demos.mp4 (25s)
 *    - Floating guidance cards:
 *      * 0-6s: "Step 1: Explore Industry Demos"
 *      * 6-16s: "Step 2: Filter by your business" (Barber & Clinic demo cards)
 *      * 16-25s: "Step 3: Experience 1-click WhatsApp booking"
 *    - Zoom/pan effect on interactive demo cards inside iPhone 15 Pro chassis
 *
 * 3. Reel 3: public/marketing/reel-3-contact-flow.mp4 (22s)
 *    - Floating guidance cards:
 *      * 0-5s: "Need a high-converting website?"
 *      * 5-14s: "Step 1: Fill out the 30-second inquiry form"
 *      * 14-22s: "Step 2: Direct 1-tap WhatsApp consultation"
 * ============================================================================
 */

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const { spawnSync } = require('child_process');

const ffmpegPath = path.join(__dirname, '../node_modules/ffmpeg-static/ffmpeg.exe');
const marketingDir = path.join(__dirname, '../public/marketing');
const TARGET_URL = 'https://www.nexawebstudio.uk';

// Helper to inject touch pointer & visual ripple
async function injectInteractiveHelpers(page) {
  await page.evaluate(() => {
    if (!document.getElementById('touch-cursor')) {
      const cursor = document.createElement('div');
      cursor.id = 'touch-cursor';
      cursor.style.cssText = `
        position: fixed;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(16, 185, 129, 0.45) 0%, rgba(16, 185, 129, 0.15) 70%, transparent 100%);
        border: 2px solid rgba(255, 255, 255, 0.85);
        box-shadow: 0 0 16px rgba(16, 185, 129, 0.6), inset 0 0 8px rgba(16, 185, 129, 0.4);
        pointer-events: none;
        z-index: 999999;
        transform: translate(-50%, -50%);
        transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
        opacity: 0;
      `;
      document.body.appendChild(cursor);

      const rippleContainer = document.createElement('div');
      rippleContainer.id = 'ripple-container';
      rippleContainer.style.cssText = 'position: fixed; inset: 0; pointer-events: none; z-index: 999998;';
      document.body.appendChild(rippleContainer);
    }

    window.moveCursorTo = (x, y, visible = true) => {
      const cursor = document.getElementById('touch-cursor');
      if (!cursor) return;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      cursor.style.opacity = visible ? '1' : '0';
    };

    window.tapCursorAt = (x, y) => {
      window.moveCursorTo(x, y, true);
      const cursor = document.getElementById('touch-cursor');
      if (cursor) {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.75)';
        setTimeout(() => {
          cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 150);
      }

      const ring = document.createElement('div');
      ring.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 2.5px solid #10b981;
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        transition: transform 0.5s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 0.5s ease-out;
        pointer-events: none;
      `;
      document.getElementById('ripple-container').appendChild(ring);
      requestAnimationFrame(() => {
        ring.style.transform = 'translate(-50%, -50%) scale(5.5)';
        ring.style.opacity = '0';
      });
      setTimeout(() => ring.remove(), 600);
    };
  });
}

// Smooth scroll helper
async function smoothScrollTo(page, targetY, durationMs = 1000) {
  await page.evaluate(async ({ targetY, durationMs }) => {
    const startY = window.scrollY;
    const diff = targetY - startY;
    const startTime = performance.now();

    return new Promise((resolve) => {
      function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const ease = 0.5 * (1 - Math.cos(Math.PI * progress));
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
}

// ----------------------------------------------------------------------------
// 1. GENERATE BASE IPHONE 15 PRO CHASSIS FRAME (1080x1920)
// ----------------------------------------------------------------------------
async function generateChassisOverlay(browser) {
  const overlayPath = path.join(marketingDir, 'temp-cinematic-chassis.png');
  console.log('📱 Generating 1080x1920 iPhone 15 Pro Titanium Studio Frame (IG Reels Safe Zone)...');
  console.log('📱 Generating 1080x1920 iPhone 15 Pro Titanium Frame (680px width, 1380px height)...');

  const context = await browser.newContext({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  const page = await context.newPage();

  const overlayHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Cabinet+Grotesk:wght@700;800;900&display=swap" rel="stylesheet">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          width: 1080px;
          height: 1920px;
          background: transparent;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          position: relative;
        }

        .phone-svg {
          position: absolute;
          inset: 0;
          width: 1080px;
          height: 1920px;
          z-index: 50;
        }
      </style>
    </head>
    <body>
      <svg class="phone-svg" viewBox="0 0 1080 1920" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <!-- Exact radial glow: circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, rgba(6, 9, 19, 1) 75% -->
          <radialGradient id="studio-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.15" />
            <stop offset="75%" stop-color="#060913" stop-opacity="1" />
            <stop offset="100%" stop-color="#060913" stop-opacity="1" />
          </radialGradient>
          <mask id="phone-screen-mask">
            <rect width="1080" height="1920" fill="#ffffff" />
            <rect x="290" y="266" width="500" height="1082" rx="44" ry="44" fill="#000000" />
            <!-- Screen Cutout: width 652, height 1352, centered at X=540, Y=274 -->
            <rect x="214" y="274" width="652" height="1352" rx="46" ry="46" fill="#000000" />
          </mask>
          <filter id="phone-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="30" stdDeviation="35" flood-color="#000000" flood-opacity="0.95" />
            <feDropShadow dx="0" dy="25" stdDeviation="30" flood-color="#000000" flood-opacity="0.95" />
            <feDropShadow dx="0" dy="0" stdDeviation="25" flood-color="#10b981" flood-opacity="0.25" />
          </filter>
        </defs>

        <!-- Studio Background with cutout hole for video -->
        <rect width="1080" height="1920" fill="url(#bg-grad)" mask="url(#phone-screen-mask)" />
        <rect width="1080" height="1920" fill="url(#emerald-glow)" mask="url(#phone-screen-mask)" />
        <!-- Studio Background with subtle centered radial glow and phone cutout -->
        <rect width="1080" height="1920" fill="#060913" mask="url(#phone-screen-mask)" />
        <rect width="1080" height="1920" fill="url(#studio-glow)" mask="url(#phone-screen-mask)" />

        <!-- Titanium Bezel Stroke around the cutout -->
        <rect x="282" y="258" width="516" height="1098" rx="50" ry="50" fill="none" stroke="#334155" stroke-width="12" filter="url(#phone-shadow)" />
        <rect x="282" y="258" width="516" height="1098" rx="50" ry="50" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="2" />
        <!-- Titanium Frame: EXACTLY 680px wide, 1380px tall, top offset strictly 260px, centered horizontally at x=200 -->
        <rect x="200" y="260" width="680" height="1380" rx="58" ry="58" fill="none" stroke="#2b384e" stroke-width="14" filter="url(#phone-shadow)" />
        <rect x="200" y="260" width="680" height="1380" rx="58" ry="58" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="2" />

        <!-- Dynamic Island Pill -->
        <rect x="480" y="278" width="120" height="28" rx="14" fill="#000000" />
        <circle cx="498" cy="292" r="4" fill="#0f172a" />
        <circle cx="570" cy="292" r="3.5" fill="#082f49" />
        <!-- Dynamic Island Pill (centered at X=540) -->
        <rect x="465" y="288" width="150" height="34" rx="17" fill="#000000" />
        <circle cx="488" cy="305" r="5" fill="#0f172a" />
        <circle cx="580" cy="305" r="4.5" fill="#082f49" />

        <!-- Home Indicator Bar -->
        <rect x="470" y="1332" width="140" height="4" rx="2" fill="rgba(255, 255, 255, 0.45)" />
        <!-- Home Indicator Bar (centered at X=540) -->
        <rect x="460" y="1600" width="160" height="5" rx="2.5" fill="rgba(255, 255, 255, 0.45)" />
      </svg>
    </body>
    </html>
  `;

  await page.setContent(overlayHtml);
  await page.waitForTimeout(500);
  await page.screenshot({ path: overlayPath, clip: { x: 0, y: 0, width: 1080, height: 1920 }, omitBackground: true });
  await page.close();
  await context.close();
  return overlayPath;
}

// ----------------------------------------------------------------------------
// 2. GENERATE FLOATING STEP GUIDANCE BADGE CARDS
// ----------------------------------------------------------------------------
async function generateBadgePNG(browser, { badgeTag, title, subtitle, iconSvg, activeStepIndex, filename }) {
  const badgePath = path.join(marketingDir, filename);
  const context = await browser.newContext({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  const page = await context.newPage();

  const badgeHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Cabinet+Grotesk:wght@700;800;900&display=swap" rel="stylesheet">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          width: 1080px;
          height: 1920px;
          background: transparent;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          position: relative;
        }

        .guidance-card {
          position: absolute;
          top: 1395px;
          left: 540px;
          top: 145px;
          left: 50%;
          transform: translateX(-50%);
          width: 720px;
          padding: 16px 22px;
          border-radius: 22px;
          width: 680px;
          max-width: 700px;
          padding: 14px 22px;
          border-radius: 20px;
          background: rgba(10, 15, 29, 0.94);
          border: 1.5px solid rgba(16, 185, 129, 0.45);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.85), 0 0 30px rgba(16, 185, 129, 0.22);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.85), 0 0 25px rgba(16, 185, 129, 0.2);
          display: flex;
          align-items: center;
          gap: 16px;
          backdrop-filter: blur(25px);
        }

        .icon-box {
          width: 52px;
          height: 52px;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, #10b981 0%, #047857 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
          box-shadow: 0 0 18px rgba(16, 185, 129, 0.4);
          flex-shrink: 0;
        }
        .icon-box svg {
          width: 28px;
          height: 28px;
          width: 26px;
          height: 26px;
          stroke: #ffffff;
        }

        .content-box {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .badge-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          width: fit-content;
          background: rgba(16, 185, 129, 0.18);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #34d399;
          font-size: 11px;
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 3px 10px;
          padding: 2.5px 9px;
          border-radius: 999px;
          margin-bottom: 4px;
          margin-bottom: 3px;
        }
        .card-title {
          font-family: 'Cabinet Grotesk', sans-serif;
          font-size: 20px;
          font-size: 19px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.22;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
        .card-subtitle {
          font-size: 12.5px;
          font-size: 12px;
          font-weight: 500;
          color: #94a3b8;
          margin-top: 2px;
        }

        .step-dots {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: 8px;
          flex-shrink: 0;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #334155;
        }
        .dot.active {
          width: 24px;
          height: 8px;
          border-radius: 4px;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
        }
      </style>
    </head>
    <body>
      <div class="guidance-card">
        <div class="icon-box">
          ${iconSvg}
        </div>
        <div class="content-box">
          <div class="badge-tag">${badgeTag}</div>
          <div class="card-title">${title}</div>
          <div class="card-subtitle">${subtitle}</div>
        </div>
        <div class="step-dots">
          <div class="dot ${activeStepIndex === 0 ? 'active' : ''}"></div>
          <div class="dot ${activeStepIndex === 1 ? 'active' : ''}"></div>
          <div class="dot ${activeStepIndex === 2 ? 'active' : ''}"></div>
        </div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(badgeHtml);
  await page.waitForTimeout(300);
  await page.screenshot({ path: badgePath, clip: { x: 0, y: 0, width: 1080, height: 1920 }, omitBackground: true });
  await page.close();
  await context.close();
  return badgePath;
}

// ----------------------------------------------------------------------------
// 3. COMPOSITE VIDEO + OVERLAY + 3 TIMED GUIDANCE BADGES
// ----------------------------------------------------------------------------
function compositeCinematicReel({ rawVideoPath, overlayPath, badges, finalMp4Path }) {
  console.log(`\n⚙️ Compositing ${path.basename(finalMp4Path)} (1080x1920 @ 30fps) with synced animated guidance cards...`);

  const ffmpegArgs = [
    '-y',
    '-f', 'lavfi',
    '-i', 'color=c=#060913:s=1080x1920:r=30',
    '-i', rawVideoPath,
    '-loop', '1',
    '-i', overlayPath,
    '-loop', '1',
    '-i', badges[0].path,
    '-loop', '1',
    '-i', badges[1].path,
    '-loop', '1',
    '-i', badges[2].path,
    '-filter_complex',
    '[1:v]scale=500:1082:flags=lanczos[vid];' +
    '[0:v][vid]overlay=290:266:shortest=1[base0];' +
    '[1:v]scale=652:1352:flags=lanczos[vid];' +
    '[0:v][vid]overlay=214:274:shortest=1[base0];' +
    '[base0][2:v]overlay=0:0:shortest=1[base1];' +
    `[3:v]format=rgba,fade=in:st=${badges[0].start}:d=0.35:alpha=1,fade=out:st=${badges[0].end - 0.35}:d=0.35:alpha=1[b1];` +
    `[4:v]format=rgba,fade=in:st=${badges[1].start}:d=0.35:alpha=1,fade=out:st=${badges[1].end - 0.35}:d=0.35:alpha=1[b2];` +
    `[5:v]format=rgba,fade=in:st=${badges[2].start}:d=0.35:alpha=1,fade=out:st=${badges[2].end - 0.35}:d=0.35:alpha=1[b3];` +
    `[base1][b1]overlay=0:0:enable='between(t,${badges[0].start},${badges[0].end})':shortest=1[v1];` +
    `[v1][b2]overlay=0:0:enable='between(t,${badges[1].start},${badges[1].end})':shortest=1[v2];` +
    `[v2][b3]overlay=0:0:enable='between(t,${badges[2].start},${badges[2].end})':shortest=1[outv]`,
    '-map', '[outv]',
    '-c:v', 'libx264',
    '-preset', 'slow',
    '-crf', '19',
    '-pix_fmt', 'yuv420p',
    '-r', '30',
    '-shortest',
    '-movflags', '+faststart',
    finalMp4Path
  ];

  const result = spawnSync(ffmpegPath, ffmpegArgs, { stdio: 'inherit' });
  if (result.status === 0 && fs.existsSync(finalMp4Path)) {
    const size = (fs.statSync(finalMp4Path).size / (1024 * 1024)).toFixed(2);
    console.log(`✅ Success! Generated ${finalMp4Path} (${size} MB)`);
  } else {
    throw new Error(`FFmpeg compositing failed on ${finalMp4Path}`);
  }
}

// ============================================================================
// REEL 1: SAFARI ENTRY & MULTILINGUAL SPEED FLOW (25s)
// ============================================================================
async function renderReel1(browser, overlayPath) {
  const finalMp4 = path.join(marketingDir, 'reel-1-safari-entry.mp4');
  console.log('\n======================================================');
  console.log('🎬 Rendering Reel 1: Safari Entry & Multilingual Speed (25s)...');
  console.log('======================================================');

  const b1 = await generateBadgePNG(browser, {
    badgeTag: 'Step 1',
    title: 'Open nexawebstudio.uk',
    subtitle: 'Direct iOS Safari address navigation with instant response',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    activeStepIndex: 0,
    filename: 'temp-r1-b1.png'
  });

  const b2 = await generateBadgePNG(browser, {
    badgeTag: 'Step 2',
    title: 'Experience Sub-Second Speed & 4-Language Toggle',
    subtitle: 'Instant switch between EN, PT, and Arabic RTL',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    activeStepIndex: 1,
    filename: 'temp-r1-b2.png'
  });

  const b3 = await generateBadgePNG(browser, {
    badgeTag: 'Step 3',
    title: 'Launch Your Website in 5–7 Days',
    subtitle: 'Bespoke design, fast turnaround, guaranteed ROI',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>`,
    activeStepIndex: 2,
    filename: 'temp-r1-b3.png'
  });

  const tempDir = path.join(marketingDir, 'temp-cinematic-r1');
  if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(tempDir, { recursive: true });

  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    viewport: { width: 390, height: 809 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
    recordVideo: { dir: tempDir, size: { width: 390, height: 844 } }
    recordVideo: { dir: tempDir, size: { width: 390, height: 809 } }
  });

  const page = await context.newPage();
  await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await injectInteractiveHelpers(page);

  // Inject Safari iOS Chrome Overlay for realistic typing
  await page.evaluate(() => {
    const safariOverlay = document.createElement('div');
    safariOverlay.id = 'safari-mockup';
    safariOverlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: #0b0f19;
      z-index: 999990;
      display: flex;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    `;

    safariOverlay.innerHTML = `
      <div style="height: 52px; display: flex; align-items: flex-end; justify-content: space-between; padding: 0 24px 8px; color: #fff; font-size: 14px; font-weight: 600;">
        <span>9:41</span>
        <div style="display: flex; gap: 6px; align-items: center;">
          <svg width="15" height="11" viewBox="0 0 15 11" fill="white"><path d="M0 8.5C0 7.67 0.67 7 1.5 7H2.5C3.33 7 4 7.67 4 8.5V9.5C4 10.33 3.33 11 2.5 11H1.5C0.67 11 0 10.33 0 9.5V8.5ZM5 5.5C5 4.67 5.67 4 6.5 4H7.5C8.33 4 9 4.67 9 5.5V9.5C9 10.33 8.33 11 7.5 11H6.5C5.67 11 5 10.33 5 9.5V5.5ZM10 2.5C10 1.67 10.67 1 11.5 1H12.5C13.33 1 14 1.67 14 2.5V9.5C14 10.33 13.33 11 12.5 11H11.5C10.67 11 10 10.33 10 9.5V2.5Z"/></svg>
          <span style="font-size: 11px;">5G</span>
          <div style="width: 20px; height: 10px; border: 1px solid white; border-radius: 3px; padding: 1px;"><div style="width: 100%; height: 100%; background: white; border-radius: 1.5px;"></div></div>
        </div>
      </div>

      <div style="padding: 10px 16px 14px; border-bottom: 1px solid rgba(255,255,255,0.08); background: #131b2e;">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
          <div id="safari-url-bar" style="flex: 1; height: 42px; background: #1c273e; border: 1px solid #2e3e60; border-radius: 12px; display: flex; align-items: center; padding: 0 14px; gap: 8px; color: #fff; font-size: 15px; position: relative; overflow: hidden;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span id="typing-text" style="color: #ffffff; font-weight: 500;"></span>
            <span id="blinking-cursor" style="display: inline-block; width: 2px; height: 18px; background: #3b82f6; margin-left: 2px; animation: blink 0.8s infinite;"></span>
            <div id="safari-progress" style="position: absolute; bottom: 0; left: 0; height: 2.5px; width: 0%; background: linear-gradient(90deg, #10b981, #34d399); transition: width 0.35s ease;"></div>
          </div>
          <button id="safari-go-btn" style="color: #3b82f6; font-size: 15px; font-weight: 600; background: none; border: none; padding: 4px 6px;">Go</button>
        </div>
      </div>

      <div style="flex: 1; padding: 36px 24px; display: flex; flex-direction: column; align-items: center;">
        <div style="font-size: 26px; font-weight: 800; color: #fff; margin-bottom: 24px; letter-spacing: -0.02em;">Favorites</div>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; width: 100%; max-width: 320px;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <div style="width: 56px; height: 56px; border-radius: 14px; background: #10b981; display: flex; align-items: center; justify-content: center; font-weight: 900; color: white; font-size: 22px; box-shadow: 0 4px 15px rgba(16,185,129,0.4);">N</div>
            <span style="font-size: 11px; color: #cbd5e1; font-weight: 500;">NexaWeb</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <div style="width: 56px; height: 56px; border-radius: 14px; background: #1e293b; display: flex; align-items: center; justify-content: center; font-weight: 800; color: white; font-size: 20px;"></div>
            <span style="font-size: 11px; color: #94a3b8;">Apple</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <div style="width: 56px; height: 56px; border-radius: 14px; background: #1e293b; display: flex; align-items: center; justify-content: center; font-weight: 800; color: white; font-size: 18px;">G</div>
            <span style="font-size: 11px; color: #94a3b8;">Google</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <div style="width: 56px; height: 56px; border-radius: 14px; background: #1e293b; display: flex; align-items: center; justify-content: center; font-weight: 800; color: white; font-size: 18px;">⌨️</div>
            <span style="font-size: 11px; color: #94a3b8;">GitHub</span>
          </div>
        </div>
      </div>
    `;

    const style = document.createElement('style');
    style.innerHTML = `@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`;
    document.head.appendChild(style);
    document.body.appendChild(safariOverlay);
  });

  // Scene 1 (0-5s): Safari address-bar typing & launch
  await page.waitForTimeout(600);
  const targetDomain = 'nexawebstudio.uk';
  for (let i = 1; i <= targetDomain.length; i++) {
    const sub = targetDomain.substring(0, i);
    await page.evaluate((text) => {
      document.getElementById('typing-text').innerText = text;
    }, sub);
    await page.waitForTimeout(70 + Math.floor(Math.random() * 40));
  }

  // Tap Go button
  await page.waitForTimeout(300);
  await page.evaluate(() => {
    window.tapCursorAt(350, 75);
    const progress = document.getElementById('safari-progress');
    progress.style.width = '100%';
  });

  // Dissolve Safari overlay smoothly to reveal live site
  await page.waitForTimeout(400);
  await page.evaluate(() => {
    const overlay = document.getElementById('safari-mockup');
    if (overlay) {
      overlay.style.opacity = '0';
      overlay.style.transform = 'scale(1.04)';
      setTimeout(() => overlay.remove(), 600);
    }
  });

  // Scene 2 (5-15s): Sub-second speed & smooth 4-language toggle
  await page.waitForTimeout(1000);
  await smoothScrollTo(page, 320, 900);
  await page.waitForTimeout(600);

  // Click hamburger navigation menu
  const menuButton = page.locator('header button[aria-label*="navigation menu"], header button:has(svg.lucide-menu)').first();
  if (await menuButton.isVisible()) {
    const box = await menuButton.boundingBox();
    if (box) {
      await page.evaluate(({ x, y }) => window.tapCursorAt(x + 20, y + 20), box);
      await menuButton.click({ force: true });
    }
    await page.waitForTimeout(800);

    // Click Language Switcher inside mobile drawer
    const mobileOverlay = page.locator('div.fixed.inset-0');
    const langBtn = mobileOverlay.locator('button:has(svg.lucide-globe)').first();
    if (await langBtn.isVisible()) {
      const lbox = await langBtn.boundingBox();
      if (lbox) {
        await page.evaluate(({ x, y }) => window.tapCursorAt(x + 25, y + 15), lbox);
        await langBtn.click({ force: true });
      }
      await page.waitForTimeout(800);

      // Select Portuguese (PT)
      const ptOption = page.locator('div[role="menu"] button:has-text("Português"), div[role="menu"] button:has-text("PT")').first();
      if (await ptOption.isVisible()) {
        const ptBox = await ptOption.boundingBox();
        if (ptBox) {
          await page.evaluate(({ x, y }) => window.tapCursorAt(x + 40, y + 15), ptBox);
          await ptOption.click({ force: true });
        }
        await page.waitForTimeout(1200);
      }

      // Re-open Language Switcher to Arabic (AR) to show RTL
      if (await langBtn.isVisible()) {
        await langBtn.click({ force: true });
        await page.waitForTimeout(600);
        const arOption = page.locator('div[role="menu"] button:has-text("العربية"), div[role="menu"] button:has-text("AR")').first();
        if (await arOption.isVisible()) {
          const arBox = await arOption.boundingBox();
          if (arBox) {
            await page.evaluate(({ x, y }) => window.tapCursorAt(x + 40, y + 15), arBox);
            await arOption.click({ force: true });
          }
          await page.waitForTimeout(1200);
        }
      }
    }

    // Close menu
    const closeBtn = page.locator('div.fixed.inset-0 button[aria-label*="Close"]').first();
    if (await closeBtn.isVisible()) {
      await closeBtn.click({ force: true });
    }
    await page.waitForTimeout(1000);
  }

  // Scene 3 (15-25s): Step 3: Launch your website in 5–7 days
  const pricingY = (await page.evaluate(() => {
    const el = document.getElementById('pricing');
    return el ? el.offsetTop : 3000;
  })) || 3000;

  await smoothScrollTo(page, Math.max(0, pricingY - 40), 1200);
  await page.waitForTimeout(1500);

  // Focus on pricing tier CTA
  const ctaBtn = page.locator('#pricing a[href*="whatsapp"], #pricing button').first();
  if (await ctaBtn.isVisible()) {
    const cbox = await ctaBtn.boundingBox();
    if (cbox) {
      await page.evaluate(({ x, y }) => window.tapCursorAt(x + cbox.width / 2, y + cbox.height / 2), cbox);
      await page.evaluate((b) => window.tapCursorAt(b.x + b.width / 2, b.y + b.height / 2), cbox);
    }
  }
  await page.waitForTimeout(3000);
  await page.waitForTimeout(4500);

  const video = page.video();
  await page.close();
  await context.close();

  const recordedPath = await video.path();
  compositeCinematicReel({
    rawVideoPath: recordedPath,
    overlayPath,
    badges: [
      { path: b1, start: 0, end: 5 },
      { path: b2, start: 5, end: 15 },
      { path: b3, start: 15, end: 25 }
    ],
    finalMp4Path: finalMp4
  });

  try {
    fs.rmSync(tempDir, { recursive: true, force: true });
    fs.rmSync(b1, { force: true });
    fs.rmSync(b2, { force: true });
    fs.rmSync(b3, { force: true });
  } catch (e) {}
}

// ============================================================================
// REEL 2: LIVE DEMOS & INTERACTIVE BOOKING (25s)
// ============================================================================
async function renderReel2(browser, overlayPath) {
  const finalMp4 = path.join(marketingDir, 'reel-2-live-demos.mp4');
  console.log('\n======================================================');
  console.log('🎬 Rendering Reel 2: Live Demos & Interactive Booking (25s)...');
  console.log('======================================================');

  const b1 = await generateBadgePNG(browser, {
    badgeTag: 'Step 1',
    title: 'Explore Industry Demos',
    subtitle: 'High-conversion interactive demo templates',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    activeStepIndex: 0,
    filename: 'temp-r2-b1.png'
  });

  const b2 = await generateBadgePNG(browser, {
    badgeTag: 'Step 2',
    title: 'Filter By Your Business',
    subtitle: 'Interactive Barbershop & Dental Clinic live flows',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
    activeStepIndex: 1,
    filename: 'temp-r2-b2.png'
  });

  const b3 = await generateBadgePNG(browser, {
    badgeTag: 'Step 3',
    title: 'Experience 1-Click WhatsApp Booking',
    subtitle: 'Convert cold traffic into scheduled client appointments',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
    activeStepIndex: 2,
    filename: 'temp-r2-b3.png'
  });

  const tempDir = path.join(marketingDir, 'temp-cinematic-r2');
  if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(tempDir, { recursive: true });

  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    viewport: { width: 390, height: 809 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
    recordVideo: { dir: tempDir, size: { width: 390, height: 844 } }
    recordVideo: { dir: tempDir, size: { width: 390, height: 809 } }
  });

  const page = await context.newPage();
  await page.goto(TARGET_URL + '/#demos', { waitUntil: 'networkidle', timeout: 30000 });
  await injectInteractiveHelpers(page);

  // Scene 1 (0-6s): Step 1: Explore Industry Demos
  const demosY = (await page.evaluate(() => {
    const el = document.getElementById('demos');
    return el ? el.offsetTop : 1200;
  })) || 1200;

  await smoothScrollTo(page, Math.max(0, demosY - 30), 800);
  await page.waitForTimeout(1500);

  // Scene 2 (6-16s): Step 2: Filter by your business (Barber & Clinic zoom/pan effect)
  const filterPills = page.locator('#demos button');
  const count = await filterPills.count();

  // Tap Barber Filter Pill
  if (count > 2) {
    const barberBtn = filterPills.nth(2);
    const box = await barberBtn.boundingBox();
    if (box) {
      await page.evaluate((b) => window.tapCursorAt(b.x + b.width / 2, b.y + b.height / 2), box);
      await barberBtn.click({ force: true });
    }
    await page.waitForTimeout(1000);

    // Zoom into Barber Card with sleek CSS pop
    await smoothScrollTo(page, demosY + 280, 800);
    await page.evaluate(() => {
      const card = document.querySelector('#demos .grid > div:first-child');
      if (card) {
        card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease';
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 20px 40px rgba(16, 185, 129, 0.35)';
      }
    });
    await page.waitForTimeout(1800);
  }

  // Tap Dental Clinic Filter Pill
  if (count > 3) {
    await smoothScrollTo(page, demosY, 700);
    await page.waitForTimeout(400);

    const clinicBtn = filterPills.nth(3);
    const box = await clinicBtn.boundingBox();
    if (box) {
      await page.evaluate((b) => window.tapCursorAt(b.x + b.width / 2, b.y + b.height / 2), box);
      await clinicBtn.click({ force: true });
    }
    await page.waitForTimeout(1000);

    // Zoom into Dental Clinic Card
    await smoothScrollTo(page, demosY + 290, 800);
    await page.evaluate(() => {
      const card = document.querySelector('#demos .grid > div:first-child');
      if (card) {
        card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease';
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 20px 40px rgba(14, 165, 233, 0.35)';
      }
    });
    await page.waitForTimeout(1800);
  }

  // Scene 3 (16-25s): Step 3: Experience 1-click WhatsApp booking
  const ctaBtn = page.locator('#demos .grid a[href*="whatsapp"], #demos .grid button').first();
  if (await ctaBtn.isVisible()) {
    const cbox = await ctaBtn.boundingBox();
    if (cbox) {
      await page.evaluate((b) => window.tapCursorAt(b.x + b.width / 2, b.y + b.height / 2), cbox);
    }
  }
  await page.waitForTimeout(1000);

  // Scroll smoothly down to the Contact WhatsApp card
  const contactY = (await page.evaluate(() => {
    const el = document.getElementById('contact');
    return el ? el.offsetTop : 4500;
  })) || 4500;

  await smoothScrollTo(page, Math.max(0, contactY - 50), 1200);
  await page.waitForTimeout(2000);

  const directWaBtn = page.locator('#contact a[href*="whatsapp"]').first();
  if (await directWaBtn.isVisible()) {
    const wabox = await directWaBtn.boundingBox();
    if (wabox) {
      await page.evaluate((b) => window.tapCursorAt(b.x + b.width / 2, b.y + b.height / 2), wabox);
    }
  }
  await page.waitForTimeout(4000);

  const video = page.video();
  await page.close();
  await context.close();

  const recordedPath = await video.path();
  compositeCinematicReel({
    rawVideoPath: recordedPath,
    overlayPath,
    badges: [
      { path: b1, start: 0, end: 6 },
      { path: b2, start: 6, end: 16 },
      { path: b3, start: 16, end: 25 }
    ],
    finalMp4Path: finalMp4
  });

  try {
    fs.rmSync(tempDir, { recursive: true, force: true });
    fs.rmSync(b1, { force: true });
    fs.rmSync(b2, { force: true });
    fs.rmSync(b3, { force: true });
  } catch (e) {}
}

// ============================================================================
// REEL 3: CONTACT & DIRECT WHATSAPP CONSULTATION (22s)
// ============================================================================
async function renderReel3(browser, overlayPath) {
  const finalMp4 = path.join(marketingDir, 'reel-3-contact-flow.mp4');
  console.log('\n======================================================');
  console.log('🎬 Rendering Reel 3: Contact Form & WhatsApp Consultation (22s)...');
  console.log('======================================================');

  const b1 = await generateBadgePNG(browser, {
    badgeTag: 'Growth Partner',
    title: 'Need a High-Converting Website?',
    subtitle: 'Turn visitors into booked clients in under 7 days',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    activeStepIndex: 0,
    filename: 'temp-r3-b1.png'
  });

  const b2 = await generateBadgePNG(browser, {
    badgeTag: 'Step 1',
    title: 'Fill Out the 30-Second Inquiry Form',
    subtitle: 'Tell us about your brand, goals, and ideal launch timeline',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    activeStepIndex: 1,
    filename: 'temp-r3-b2.png'
  });

  const b3 = await generateBadgePNG(browser, {
    badgeTag: 'Step 2',
    title: 'Direct 1-Tap WhatsApp Consultation',
    subtitle: 'Instant response from our senior design engineers',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
    activeStepIndex: 2,
    filename: 'temp-r3-b3.png'
  });

  const tempDir = path.join(marketingDir, 'temp-cinematic-r3');
  if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(tempDir, { recursive: true });

  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    viewport: { width: 390, height: 809 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
    recordVideo: { dir: tempDir, size: { width: 390, height: 844 } }
    recordVideo: { dir: tempDir, size: { width: 390, height: 809 } }
  });

  const page = await context.newPage();
  await page.goto(TARGET_URL + '/#contact', { waitUntil: 'networkidle', timeout: 30000 });
  await injectInteractiveHelpers(page);

  // Scene 1 (0-5s): "Need a high-converting website?"
  const contactY = (await page.evaluate(() => {
    const el = document.getElementById('contact');
    return el ? el.offsetTop : 4500;
  })) || 4500;

  await smoothScrollTo(page, Math.max(0, contactY - 30), 800);
  await page.waitForTimeout(2000);

  // Scene 2 (5-14s): Step 1: Fill out the 30-second inquiry form
  const formElement = page.locator('#contact form').first();
  if (await formElement.isVisible()) {
    const fbox = await formElement.boundingBox();
    if (fbox) {
      await smoothScrollTo(page, Math.max(0, fbox.y + page.evaluate(() => window.scrollY) - 50), 700);
      await smoothScrollTo(page, Math.max(0, contactY + 200), 700);
    }
    await page.waitForTimeout(400);

    // 1. Name Field
    const nameInput = page.locator('#contact input[type="text"]').first();
    if (await nameInput.isVisible()) {
      const box = await nameInput.boundingBox();
      if (box) await page.evaluate(({ x, y }) => window.tapCursorAt(x + 20, y + 20), box);
      if (box) await page.evaluate((b) => window.tapCursorAt(b.x + 20, b.y + 20), box);
      await nameInput.click();
      await nameInput.pressSequentially('Marcus Vance', { delay: 45 });
      await page.waitForTimeout(300);
    }

    // 2. Business Name Field
    const businessInput = page.locator('#contact input[placeholder*="Brand"], #contact input[placeholder*="Company"], #contact input[name="businessName"]').first();
    if (await businessInput.isVisible()) {
      const box = await businessInput.boundingBox();
      if (box) await page.evaluate(({ x, y }) => window.tapCursorAt(x + 20, y + 20), box);
      if (box) await page.evaluate((b) => window.tapCursorAt(b.x + 20, b.y + 20), box);
      await businessInput.click();
      await businessInput.pressSequentially('Vance Motors UK', { delay: 40 });
      await page.waitForTimeout(300);
    }

    // 3. Email Field
    const emailInput = page.locator('#contact input[type="email"]').first();
    if (await emailInput.isVisible()) {
      const box = await emailInput.boundingBox();
      if (box) await page.evaluate(({ x, y }) => window.tapCursorAt(x + 20, y + 20), box);
      if (box) await page.evaluate((b) => window.tapCursorAt(b.x + 20, b.y + 20), box);
      await emailInput.click();
      await emailInput.pressSequentially('marcus@vancemotors.co.uk', { delay: 35 });
      await page.waitForTimeout(300);
    }

    // 4. Message Field
    const msgInput = page.locator('#contact textarea').first();
    if (await msgInput.isVisible()) {
      const box = await msgInput.boundingBox();
      if (box) await page.evaluate(({ x, y }) => window.tapCursorAt(x + 20, y + 20), box);
      if (box) await page.evaluate((b) => window.tapCursorAt(b.x + 20, b.y + 20), box);
      await msgInput.click();
      await msgInput.pressSequentially('Need a fast bespoke booking site with WhatsApp automation.', { delay: 30 });
      await page.waitForTimeout(500);
    }
  }

  // Scene 3 (14-22s): Step 2: Direct 1-tap WhatsApp consultation
  const waCard = page.locator('#contact a[href*="whatsapp"]').first();
  if (await waCard.isVisible()) {
    const wabox = await waCard.boundingBox();
    if (wabox) {
      await smoothScrollTo(page, Math.max(0, wabox.y + page.evaluate(() => window.scrollY) - 180), 800);
      await smoothScrollTo(page, Math.max(0, contactY + 50), 800);
      await page.waitForTimeout(400);

      await page.evaluate(() => {
        const btn = document.querySelector('#contact a[href*="whatsapp"]');
        if (btn) {
          btn.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
          btn.style.transform = 'scale(1.04)';
          btn.style.boxShadow = '0 0 35px rgba(16, 185, 129, 0.6)';
        }
      });

      await page.evaluate(({ x, y }) => window.tapCursorAt(x + wabox.width / 2, y + wabox.height / 2), wabox);
      await page.evaluate((b) => window.tapCursorAt(b.x + b.width / 2, b.y + b.height / 2), wabox);
    }
  }
  await page.waitForTimeout(3500);
  await page.waitForTimeout(4000);

  const video = page.video();
  await page.close();
  await context.close();

  const recordedPath = await video.path();
  compositeCinematicReel({
    rawVideoPath: recordedPath,
    overlayPath,
    badges: [
      { path: b1, start: 0, end: 5 },
      { path: b2, start: 5, end: 14 },
      { path: b3, start: 14, end: 22 }
    ],
    finalMp4Path: finalMp4
  });

  try {
    fs.rmSync(tempDir, { recursive: true, force: true });
    fs.rmSync(b1, { force: true });
    fs.rmSync(b2, { force: true });
    fs.rmSync(b3, { force: true });
  } catch (e) {}
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================
async function main() {
  console.log('🚀 Starting NexaWeb Studio Cinematic Reels Generator...');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const overlayPath = await generateChassisOverlay(browser);

    await renderReel1(browser, overlayPath);
    await renderReel2(browser, overlayPath);
    await renderReel3(browser, overlayPath);

    try { fs.rmSync(overlayPath, { force: true }); } catch (e) {}

    console.log('\n======================================================');
    console.log('🎉 ALL 3 CINEMATIC REELS CREATED SUCCESSFULLY!');
    console.log('1. public/marketing/reel-1-safari-entry.mp4 (25s, 1080x1920)');
    console.log('2. public/marketing/reel-2-live-demos.mp4 (25s, 1080x1920)');
    console.log('3. public/marketing/reel-3-contact-flow.mp4 (22s, 1080x1920)');
    console.log('======================================================');
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error('❌ Generation error:', err);
  process.exit(1);
});

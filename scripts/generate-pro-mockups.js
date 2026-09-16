const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const { spawnSync } = require('child_process');
const ffmpegPath = require('ffmpeg-static');

const marketingDir = path.resolve(__dirname, '../public/marketing');

// Helper to get base64 data URI
function getBase64Image(filePath) {
  if (!fs.existsSync(filePath)) return '';
  const ext = path.extname(filePath).replace('.', '').toLowerCase();
  const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : ext === 'svg' ? 'image/svg+xml' : 'image/png';
  const data = fs.readFileSync(filePath).toString('base64');
  return `data:${mime};base64,${data}`;
}

// ----------------------------------------------------------------------------
// 1. GENERATE PRO FEED POSTS (1080x1080 RETINA 2x)
// ----------------------------------------------------------------------------
async function generateProPosts(browser) {
  console.log('\n========================================');
  console.log('🎨 Generating Agency-Grade 3D Pro Posts (1080x1080)...');
  console.log('========================================');

  const context = await browser.newContext({
    viewport: { width: 1080, height: 1080 },
    deviceScaleFactor: 2
  });
  const page = await context.newPage();

  const logoIcon = getBase64Image(path.join(marketingDir, 'logo-icon.png'));
  const post1Hero = getBase64Image(path.join(marketingDir, 'post-1-hero.png'));
  const barberImg = getBase64Image(path.resolve(__dirname, '../public/images/barbershop/barbershop-hero.jpg'));
  const dentistImg = getBase64Image(path.resolve(__dirname, '../public/images/dentist/dentist-hero.jpg'));
  const architectImg = getBase64Image(path.resolve(__dirname, '../public/images/architect/architect-hero.jpg'));

  // --------------------------------------------------------------------------
  // PRO POST 1: Hero Section with 3D Floating iPhone 15 Pro & Emerald Glow
  // --------------------------------------------------------------------------
  console.log('📸 Rendering pro-post-1-hero.png...');
  const htmlPost1 = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          width: 1080px;
          height: 1080px;
          background: #060913;
          background-image: 
            radial-gradient(circle at 50% 38%, rgba(16, 185, 129, 0.22) 0%, rgba(6, 9, 19, 0.85) 55%, #060913 100%),
            radial-gradient(circle at 15% 15%, rgba(16, 185, 129, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 85% 85%, rgba(16, 185, 129, 0.06) 0%, transparent 40%);
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 60px 48px;
          overflow: hidden;
          position: relative;
        }

        /* Subtle Background Grid */
        body::before {
          content: '';
          position: absolute;
          inset: 0;
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
          pointer-events: none;
        }

        /* Header Bar */
        .top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          z-index: 10;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .brand img {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
        }
        .brand-text {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .brand-text span {
          color: #10b981;
        }
        .agency-pill {
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: #34d399;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* Center 3D Stage */
        .stage {
          position: relative;
          width: 100%;
          height: 680px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1600px;
          z-index: 5;
        }

        /* iPhone 15 Pro Chassis */
        .phone-mockup {
          width: 370px;
          height: 720px;
          border-radius: 54px;
          background: #02040a;
          border: 5px solid #334155;
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.1),
            0 35px 80px -15px rgba(0,0,0,0.95),
            0 0 70px rgba(16, 185, 129, 0.28);
          transform: rotateX(8deg) rotateY(-10deg) rotateZ(3deg);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* Dynamic Island */
        .dynamic-island {
          position: absolute;
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          width: 96px;
          height: 25px;
          background: #000;
          border-radius: 20px;
          z-index: 20;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.05);
        }

        /* Screen Contents */
        .phone-screen {
          width: 100%;
          height: 100%;
          border-radius: 48px;
          overflow: hidden;
          background: #0b1120;
        }
        .phone-screen img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        /* Glare Effect */
        .phone-glare {
          position: absolute;
          inset: 0;
          border-radius: 48px;
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.01) 40%, transparent 60%);
          pointer-events: none;
          z-index: 15;
        }

        /* Floating Badges */
        .floating-badge {
          position: absolute;
          padding: 14px 22px;
          border-radius: 20px;
          background: rgba(15, 23, 42, 0.88);
          border: 1px solid rgba(16, 185, 129, 0.4);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.6), 0 0 30px rgba(16, 185, 129, 0.2);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 25;
        }
        .badge-1 {
          top: 130px;
          left: 30px;
          transform: translateZ(50px);
        }
        .badge-2 {
          bottom: 120px;
          right: 30px;
          transform: translateZ(60px);
        }
        .badge-icon {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: #10b981;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 800;
        }
        .badge-title {
          font-size: 15px;
          font-weight: 800;
          color: #f8fafc;
        }
        .badge-subtitle {
          font-size: 12px;
          font-weight: 600;
          color: #10b981;
        }

        /* Bottom Footer */
        .bottom-card {
          width: 100%;
          text-align: center;
          z-index: 10;
        }
        .main-headline {
          font-size: 34px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin-bottom: 8px;
        }
        .main-headline span {
          background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .sub-features {
          font-size: 16px;
          font-weight: 600;
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }
        .sub-features span.dot {
          color: #10b981;
        }
      </style>
    </head>
    <body>
      <div class="top-bar">
        <div class="brand">
          <img src="${logoIcon}" alt="NexaWeb">
          <div class="brand-text">NEXA<span>WEB</span> STUDIO</div>
        </div>
        <div class="agency-pill">⚡ High-Converting Websites</div>
      </div>

      <div class="stage">
        <div class="floating-badge badge-1">
          <div class="badge-icon">⚡</div>
          <div>
            <div class="badge-title">Sub-Second Load Time</div>
            <div class="badge-subtitle">Verified 100/100 Core Web Vitals</div>
          </div>
        </div>

        <div class="phone-mockup">
          <div class="dynamic-island"></div>
          <div class="phone-glare"></div>
          <div class="phone-screen">
            <img src="${post1Hero}" alt="Hero Preview">
          </div>
        </div>

        <div class="floating-badge badge-2">
          <div class="badge-icon">💎</div>
          <div>
            <div class="badge-title">100% Client Ownership</div>
            <div class="badge-subtitle">Full Code, Domain & Assets</div>
          </div>
        </div>
      </div>

      <div class="bottom-card">
        <h1 class="main-headline">Websites That Make Your Business <span>Look Premium</span></h1>
        <div class="sub-features">
          <span>Next.js 14 Architecture</span>
          <span class="dot">•</span>
          <span>7-Day Fast Delivery</span>
          <span class="dot">•</span>
          <span>Starting at €299</span>
        </div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(htmlPost1);
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(marketingDir, 'pro-post-1-hero.png'),
    clip: { x: 0, y: 0, width: 1080, height: 1080 }
  });

  // --------------------------------------------------------------------------
  // PRO POST 2: Dark HUD Cockpit Displaying 100/100 Score Meters
  // --------------------------------------------------------------------------
  console.log('📸 Rendering pro-post-2-speed.png...');
  const htmlPost2 = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          width: 1080px;
          height: 1080px;
          background: #040711;
          background-image: 
            radial-gradient(circle at 50% 30%, rgba(16, 185, 129, 0.25) 0%, rgba(4, 7, 17, 0.9) 60%, #040711 100%),
            radial-gradient(circle at 90% 10%, rgba(52, 211, 153, 0.12) 0%, transparent 40%);
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 64px 48px;
          overflow: hidden;
          position: relative;
        }

        /* Glass HUD Cockpit Container */
        .hud-card {
          width: 960px;
          padding: 56px 48px;
          border-radius: 44px;
          background: rgba(13, 20, 36, 0.75);
          border: 1px solid rgba(16, 185, 129, 0.35);
          box-shadow: 
            0 30px 80px -15px rgba(0,0,0,0.85),
            0 0 60px rgba(16, 185, 129, 0.2);
          backdrop-filter: blur(28px);
          text-align: center;
          position: relative;
        }

        .top-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 22px;
          border-radius: 999px;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.45);
          color: #34d399;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .title {
          font-size: 46px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin-bottom: 12px;
        }
        .title span {
          color: #10b981;
        }

        .subtitle {
          font-size: 19px;
          color: #94a3b8;
          max-width: 680px;
          margin: 0 auto 46px;
          line-height: 1.5;
        }

        /* 4 Score Meters Grid */
        .meters-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          margin-bottom: 44px;
        }
        .meter-box {
          padding: 30px 16px;
          border-radius: 28px;
          background: rgba(22, 33, 56, 0.65);
          border: 1px solid rgba(16, 185, 129, 0.25);
          position: relative;
          overflow: hidden;
        }
        .meter-box::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .circle-gauge {
          width: 96px;
          height: 96px;
          margin: 0 auto 16px;
          border-radius: 50%;
          border: 5px solid #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 34px;
          font-weight: 900;
          color: #10b981;
          box-shadow: 0 0 25px rgba(16, 185, 129, 0.4);
          background: rgba(16, 185, 129, 0.06);
        }
        .meter-label {
          font-size: 17px;
          font-weight: 800;
          color: #f8fafc;
        }
        .meter-status {
          font-size: 13px;
          color: #34d399;
          font-weight: 700;
          margin-top: 5px;
        }

        /* Core Web Vitals Row */
        .vitals-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 32px;
          border-radius: 22px;
          background: rgba(15, 23, 42, 0.85);
          border: 1px solid rgba(255,255,255,0.08);
          font-size: 15px;
          font-weight: 700;
          color: #cbd5e1;
        }
        .vital-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .vital-val {
          color: #10b981;
        }
      </style>
    </head>
    <body>
      <div class="hud-card">
        <div class="top-badge">⚡ Verified Google Lighthouse Benchmark</div>
        <h1 class="title">Ultra-Fast. <span>Zero Bloat.</span></h1>
        <p class="subtitle">Engineered on Next.js 14 App Router and Tailwind CSS with instant edge caching worldwide.</p>

        <div class="meters-grid">
          <div class="meter-box">
            <div class="circle-gauge">100</div>
            <div class="meter-label">SEO Audit</div>
            <div class="meter-status">Verified 100%</div>
          </div>
          <div class="meter-box">
            <div class="circle-gauge">100</div>
            <div class="meter-label">Best Practices</div>
            <div class="meter-status">Verified 100%</div>
          </div>
          <div class="meter-box">
            <div class="circle-gauge">91</div>
            <div class="meter-label">Accessibility</div>
            <div class="meter-status">High Contrast</div>
          </div>
          <div class="meter-box">
            <div class="circle-gauge">0.0</div>
            <div class="meter-label">CLS Shift</div>
            <div class="meter-status">Zero Visual Jump</div>
          </div>
        </div>

        <div class="vitals-bar">
          <div class="vital-item">
            <span>Total Blocking Time:</span>
            <span class="vital-val">290 ms</span>
          </div>
          <div class="vital-item">
            <span>Global Edge CDN:</span>
            <span class="vital-val">Vercel HIT</span>
          </div>
          <div class="vital-item">
            <span>Audit Target:</span>
            <span class="vital-val">nexawebstudio.uk</span>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(htmlPost2);
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(marketingDir, 'pro-post-2-speed.png'),
    clip: { x: 0, y: 0, width: 1080, height: 1080 }
  });

  // --------------------------------------------------------------------------
  // PRO POST 3: 3D Angled Card Deck Showing Barber & Clinic Demos
  // --------------------------------------------------------------------------
  console.log('📸 Rendering pro-post-3-demos.png...');
  const htmlPost3 = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          width: 1080px;
          height: 1080px;
          background: #060913;
          background-image: 
            radial-gradient(circle at 50% 40%, rgba(16, 185, 129, 0.2) 0%, rgba(6, 9, 19, 0.9) 60%, #060913 100%);
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 60px 48px;
          overflow: hidden;
          position: relative;
        }

        .header-section {
          text-align: center;
          z-index: 10;
        }
        .category-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border-radius: 999px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: #34d399;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .main-title {
          font-size: 42px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .main-title span {
          color: #10b981;
        }

        /* 3D Cards Stage */
        .card-deck {
          position: relative;
          width: 100%;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1400px;
          z-index: 5;
        }

        .deck-card {
          width: 320px;
          height: 520px;
          border-radius: 36px;
          background: #0f172a;
          border: 2px solid rgba(255,255,255,0.12);
          position: absolute;
          overflow: hidden;
          box-shadow: 0 25px 60px -10px rgba(0,0,0,0.85);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }

        .card-img {
          width: 100%;
          height: 62%;
          object-fit: cover;
        }

        .card-body {
          padding: 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #090e1a;
        }
        .card-tag {
          font-size: 11px;
          font-weight: 800;
          color: #10b981;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 6px;
        }
        .card-name {
          font-size: 22px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
        }
        .card-price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 14px;
        }
        .card-price {
          font-size: 18px;
          font-weight: 800;
          color: #34d399;
        }
        .card-btn {
          font-size: 12px;
          font-weight: 700;
          color: #ffffff;
          padding: 6px 14px;
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid rgba(16, 185, 129, 0.4);
          border-radius: 12px;
        }

        /* Left Card (Barbershop) */
        .card-left {
          transform: translateX(-240px) translateY(30px) rotateZ(-9deg) rotateY(12deg) scale(0.9);
          border-color: rgba(255,255,255,0.08);
          z-index: 2;
          filter: brightness(0.85);
        }

        /* Right Card (Architecture) */
        .card-right {
          transform: translateX(240px) translateY(30px) rotateZ(9deg) rotateY(-12deg) scale(0.9);
          border-color: rgba(255,255,255,0.08);
          z-index: 2;
          filter: brightness(0.85);
        }

        /* Center Card (Dental Clinic) */
        .card-center {
          transform: translateX(0) translateY(-10px) scale(1.06);
          border-color: rgba(16, 185, 129, 0.5);
          box-shadow: 0 35px 80px -15px rgba(0,0,0,0.9), 0 0 50px rgba(16, 185, 129, 0.35);
          z-index: 10;
        }

        /* Bottom Row */
        .bottom-features {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          font-size: 15px;
          font-weight: 700;
          color: #94a3b8;
          z-index: 10;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .feature-item span.icon {
          color: #10b981;
        }
      </style>
    </head>
    <body>
      <div class="header-section">
        <div class="category-pill">💎 6 Pre-Built Industry Stacks</div>
        <h1 class="main-title">Customizable <span>Live Demos</span></h1>
      </div>

      <div class="card-deck">
        <!-- Left: Barber -->
        <div class="deck-card card-left">
          <img src="${barberImg}" class="card-img" alt="Barbershop">
          <div class="card-body">
            <div>
              <div class="card-tag">Luxury Grooming</div>
              <div class="card-name">The Grand Blade</div>
            </div>
            <div class="card-price-row">
              <div class="card-price">From €299</div>
              <div class="card-btn">Live Demo ↗</div>
            </div>
          </div>
        </div>

        <!-- Center: Dental Clinic -->
        <div class="deck-card card-center">
          <img src="${dentistImg}" class="card-img" alt="Dental Clinic">
          <div class="card-body">
            <div>
              <div class="card-tag">Healthcare & Medical</div>
              <div class="card-name">NovaSmile Clinic</div>
            </div>
            <div class="card-price-row">
              <div class="card-price">From €299</div>
              <div class="card-btn">Live Demo ↗</div>
            </div>
          </div>
        </div>

        <!-- Right: Architecture -->
        <div class="deck-card card-right">
          <img src="${architectImg}" class="card-img" alt="Architecture">
          <div class="card-body">
            <div>
              <div class="card-tag">Design & Real Estate</div>
              <div class="card-name">Atelier Forma</div>
            </div>
            <div class="card-price-row">
              <div class="card-price">From €299</div>
              <div class="card-btn">Live Demo ↗</div>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom-features">
        <div class="feature-item"><span class="icon">✓</span> 4-Step Booking Engine</div>
        <div class="feature-item"><span class="icon">✓</span> WhatsApp Direct Integration</div>
        <div class="feature-item"><span class="icon">✓</span> 7 Days Turnaround</div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(htmlPost3);
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(marketingDir, 'pro-post-3-demos.png'),
    clip: { x: 0, y: 0, width: 1080, height: 1080 }
  });

  // --------------------------------------------------------------------------
  // PRO POST 4: Sleek Studio Pricing Tier Card with Modern Checklist
  // --------------------------------------------------------------------------
  console.log('📸 Rendering pro-post-4-offer.png...');
  const htmlPost4 = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          width: 1080px;
          height: 1080px;
          background: #040711;
          background-image: 
            radial-gradient(circle at 50% 32%, rgba(16, 185, 129, 0.22) 0%, rgba(4, 7, 17, 0.92) 60%, #040711 100%);
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 48px;
          overflow: hidden;
          position: relative;
        }

        .pricing-card {
          width: 900px;
          padding: 56px 52px;
          border-radius: 44px;
          background: rgba(13, 20, 36, 0.82);
          border: 1px solid rgba(16, 185, 129, 0.4);
          box-shadow: 
            0 35px 80px -15px rgba(0,0,0,0.9),
            0 0 60px rgba(16, 185, 129, 0.22);
          backdrop-filter: blur(28px);
          position: relative;
        }

        .top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding-bottom: 32px;
          margin-bottom: 36px;
        }
        .offer-tag {
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #34d399;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: inline-block;
        }
        .tier-name {
          font-size: 38px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .price-box {
          text-align: right;
        }
        .price-num {
          font-size: 64px;
          font-weight: 900;
          color: #10b981;
          letter-spacing: -0.03em;
          line-height: 1;
        }
        .price-sub {
          font-size: 14px;
          color: #94a3b8;
          font-weight: 600;
          margin-top: 6px;
        }

        /* 2-Column Checklist */
        .checklist-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px 36px;
          margin-bottom: 40px;
        }
        .check-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .check-icon {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: rgba(16, 185, 129, 0.18);
          border: 1px solid rgba(16, 185, 129, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #34d399;
          font-size: 16px;
          font-weight: 900;
          shrink-0: 0;
        }
        .check-text {
          font-size: 17px;
          font-weight: 700;
          color: #e2e8f0;
        }

        /* Bottom Guarantee Bar */
        .guarantee-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 28px;
          border-radius: 20px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }
        .guarantee-title {
          font-size: 16px;
          font-weight: 800;
          color: #34d399;
        }
        .guarantee-details {
          font-size: 14px;
          font-weight: 600;
          color: #cbd5e1;
        }
      </style>
    </head>
    <body>
      <div class="pricing-card">
        <div class="top-row">
          <div>
            <div class="offer-tag">⚡ All-Inclusive Package</div>
            <div class="tier-name">Complete Launch Package</div>
          </div>
          <div class="price-box">
            <div class="price-num">€299</div>
            <div class="price-sub">One-Time Fee • No Lock-in</div>
          </div>
        </div>

        <div class="checklist-grid">
          <div class="check-item">
            <div class="check-icon">✓</div>
            <div class="check-text">Custom Next.js 14 Architecture</div>
          </div>
          <div class="check-item">
            <div class="check-icon">✓</div>
            <div class="check-text">WhatsApp Direct Chat & Form</div>
          </div>
          <div class="check-item">
            <div class="check-icon">✓</div>
            <div class="check-text">Multilingual Ready (EN/PT/FR/AR)</div>
          </div>
          <div class="check-item">
            <div class="check-icon">✓</div>
            <div class="check-text">Verified 100/100 Google SEO</div>
          </div>
          <div class="check-item">
            <div class="check-icon">✓</div>
            <div class="check-text">1st Month Post-Launch Support</div>
          </div>
          <div class="check-item">
            <div class="check-icon">✓</div>
            <div class="check-text">100% Full Code & Domain Ownership</div>
          </div>
        </div>

        <div class="guarantee-bar">
          <div class="guarantee-title">🛡️ NexaWeb Guarantee</div>
          <div class="guarantee-details">Full Code Handover • Zero Hidden Retainers • Ready in 7 Days</div>
        </div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(htmlPost4);
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(marketingDir, 'pro-post-4-offer.png'),
    clip: { x: 0, y: 0, width: 1080, height: 1080 }
  });

  await page.close();
  await context.close();
}

// ----------------------------------------------------------------------------
// 2. UPGRADE REEL 1: PRO REEL SHOWCASE (1080x1920 9:16 VERTICAL FORMAT)
// ----------------------------------------------------------------------------
async function generateProReel(browser) {
  console.log('\n========================================');
  console.log('🎥 Rendering Pro Reel Showcase inside iPhone 15 Pro Chassis (1080x1920)...');
  console.log('========================================');

  const sourceMp4 = path.join(marketingDir, 'nexaweb-showcase-reel.mp4');
  const targetProMp4 = path.join(marketingDir, 'pro-reel-showcase.mp4');

  if (!fs.existsSync(sourceMp4)) {
    console.error('❌ Source reel not found:', sourceMp4);
    return;
  }

  // 1. Generate 1080x1920 Transparent Cutout Overlay Frame using Playwright
  console.log('📱 Creating 1080x1920 iPhone 15 Pro Studio Overlay Frame...');
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1920 },
    deviceScaleFactor: 1
  });
  const page = await context.newPage();
  const logoIcon = getBase64Image(path.join(marketingDir, 'logo-icon.png'));

  // Masked SVG canvas: screen at (228, 285), size 624x1350, border-radius 52px
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
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif;
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
  const overlayFramePath = path.join(marketingDir, 'temp-phone-overlay.png');
  await page.screenshot({
    path: overlayFramePath,
    clip: { x: 0, y: 0, width: 1080, height: 1920 },
    omitBackground: true
  });
  await page.close();
  await context.close();

  // 2. FFmpeg composite:
  // Base background (0), scaled video (1) at (228, 285), and overlay frame (2) on top
  console.log('⚙️ Compositing video inside iPhone 15 Pro chassis using FFmpeg...');
  const ffmpegArgs = [
    '-y',
    '-f', 'lavfi',
    '-i', 'color=c=#050814:s=1080x1920:r=30',
    '-i', sourceMp4,
    '-loop', '1',
    '-i', overlayFramePath,
    '-filter_complex',
    '[1:v]scale=624:1350:flags=lanczos[scaled_vid];' +
    '[0:v][scaled_vid]overlay=228:285[base];' +
    '[base][2:v]overlay=0:0:shortest=1[outv]',
    '-map', '[outv]',
    '-shortest',
    '-c:v', 'libx264',
    '-preset', 'slow',
    '-crf', '19',
    '-pix_fmt', 'yuv420p',
    '-r', '30',
    '-movflags', '+faststart',
    targetProMp4
  ];

  const result = spawnSync(ffmpegPath, ffmpegArgs, { stdio: 'inherit' });
  if (result.status === 0 && fs.existsSync(targetProMp4)) {
    const proSize = (fs.statSync(targetProMp4).size / (1024 * 1024)).toFixed(2);
    console.log(`🎉 Success! Pro Reel generated at:\n${targetProMp4} (${proSize} MB)`);
  } else {
    console.error('❌ FFmpeg Pro Reel conversion failed with code:', result.status);
  }

  try { fs.rmSync(overlayFramePath, { force: true }); } catch (e) {}
}

async function main() {
  console.log('🚀 Starting NexaWeb Studio Agency-Grade 3D Mockup Production...');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    await generateProPosts(browser);
    await generateProReel(browser);
    console.log('\n========================================');
    console.log('🎉 ALL AGENCY-GRADE PRO ASSETS EXPORTED!');
    console.log('========================================');
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error('❌ Pro mockup generation failed:', err);
  process.exit(1);
});

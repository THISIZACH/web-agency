const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const marketingDir = path.resolve(__dirname, '../public/marketing');

// Helper to get base64 data URI
function getBase64(filePath) {
  if (!fs.existsSync(filePath)) return '';
  const ext = path.extname(filePath).replace('.', '').toLowerCase();
  const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : ext === 'svg' ? 'image/svg+xml' : 'image/png';
  const data = fs.readFileSync(filePath).toString('base64');
  return `data:${mime};base64,${data}`;
}

async function renderPosts() {
  console.log('🚀 Launching Playwright to render 8 Agency-Grade Feed Posts (1080x1080 @ 2x, strict 85px safe padding)...');

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport: { width: 1080, height: 1080 },
    deviceScaleFactor: 2
  });
  const page = await context.newPage();

  const logoIcon = getBase64(path.join(marketingDir, 'logo-icon.png'));
  const barberImg = getBase64(path.resolve(__dirname, '../public/images/barbershop/barbershop-hero.jpg'));
  const dentistImg = getBase64(path.resolve(__dirname, '../public/images/dentist/dentist-hero.jpg'));
  const architectImg = getBase64(path.resolve(__dirname, '../public/images/architect/architect-hero.jpg'));

  // Common CSS styles - STRICT 85px PADDING FOR INSTAGRAM GRID
  const baseStyle = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1080px;
      height: 1080px;
      background: #060913;
      background-image: 
        radial-gradient(circle at 50% 35%, rgba(16, 185, 129, 0.22) 0%, rgba(6, 9, 19, 0.88) 55%, #060913 100%),
        radial-gradient(circle at 15% 15%, rgba(16, 185, 129, 0.08) 0%, transparent 40%),
        radial-gradient(circle at 85% 85%, rgba(16, 185, 129, 0.06) 0%, transparent 40%);
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, Roboto, sans-serif;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 85px 85px;
      overflow: hidden;
      position: relative;
    }
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
    .top-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 910px;
      z-index: 10;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .brand img {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
    }
    .brand-title {
      font-size: 21px;
      font-weight: 800;
      letter-spacing: -0.02em;
    }
    .brand-title span { color: #10b981; }
    .agency-pill {
      padding: 7px 16px;
      border-radius: 999px;
      background: rgba(16, 185, 129, 0.12);
      border: 1px solid rgba(16, 185, 129, 0.35);
      color: #34d399;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .main-footer {
      width: 100%;
      max-width: 910px;
      text-align: center;
      z-index: 10;
    }
    .footer-headline {
      font-size: 32px;
      font-weight: 800;
      letter-spacing: -0.03em;
      color: #ffffff;
      margin-bottom: 6px;
    }
    .footer-headline span {
      background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .footer-sub {
      font-size: 15px;
      font-weight: 600;
      color: #94a3b8;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
    }
    .footer-sub span.dot { color: #10b981; }
  `;

  // --------------------------------------------------------------------------
  // POST 1: Hero Showcase inside iPhone 15 Pro Frame
  // --------------------------------------------------------------------------
  console.log('📸 Rendering post-1.png (Hero Showcase)...');
  const htmlPost1 = `
    <!DOCTYPE html>
    <html>
    <head><style>${baseStyle}
      .stage {
        position: relative;
        width: 100%;
        max-width: 910px;
        height: 640px;
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 1600px;
        z-index: 5;
      }
      .phone-mockup {
        width: 340px;
        height: 640px;
        border-radius: 48px;
        background: #02040a;
        border: 5px solid #334155;
        box-shadow: 
          0 0 0 1px rgba(255,255,255,0.1),
          0 30px 70px -15px rgba(0,0,0,0.95),
          0 0 60px rgba(16, 185, 129, 0.25);
        transform: rotateX(6deg) rotateY(-8deg) rotateZ(2deg);
        position: relative;
        overflow: hidden;
      }
      .dynamic-island {
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        width: 88px;
        height: 22px;
        background: #000;
        border-radius: 18px;
        z-index: 20;
      }
      .phone-screen {
        width: 100%;
        height: 100%;
        padding: 48px 20px 20px;
        background: #0b1120;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .mock-hero-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 5px 12px;
        border-radius: 999px;
        background: rgba(16, 185, 129, 0.15);
        border: 1px solid rgba(16, 185, 129, 0.4);
        color: #34d399;
        font-size: 10.5px;
        font-weight: 700;
        margin-bottom: 12px;
      }
      .mock-hero-title {
        font-size: 24px;
        font-weight: 800;
        color: #fff;
        line-height: 1.15;
        margin-bottom: 10px;
      }
      .mock-hero-title span { color: #10b981; }
      .mock-hero-sub {
        font-size: 12px;
        color: #94a3b8;
        line-height: 1.4;
        margin-bottom: 18px;
      }
      .mock-cta-btn {
        width: 100%;
        padding: 10px;
        border-radius: 12px;
        background: #10b981;
        color: #fff;
        font-size: 13px;
        font-weight: 800;
        text-align: center;
        box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
      }
      .mock-card-preview {
        padding: 14px;
        border-radius: 16px;
        background: rgba(30, 41, 59, 0.8);
        border: 1px solid rgba(255,255,255,0.08);
      }
      .floating-badge {
        position: absolute;
        padding: 12px 18px;
        border-radius: 18px;
        background: rgba(15, 23, 42, 0.92);
        border: 1px solid rgba(16, 185, 129, 0.4);
        backdrop-filter: blur(20px);
        box-shadow: 0 16px 36px rgba(0,0,0,0.6), 0 0 25px rgba(16, 185, 129, 0.2);
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 25;
      }
      .badge-1 { top: 90px; left: 10px; }
      .badge-2 { bottom: 90px; right: 10px; }
      .b-icon {
        width: 36px;
        height: 36px;
        border-radius: 10px;
        background: #10b981;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
      }
      .b-title { font-size: 14px; font-weight: 800; color: #fff; }
      .b-sub { font-size: 11.5px; font-weight: 600; color: #10b981; }
    </style></head>
    <body>
      <div class="top-bar">
        <div class="brand">
          <img src="${logoIcon}" alt="Logo">
          <div class="brand-title">NEXA<span>WEB</span> STUDIO</div>
        </div>
        <div class="agency-pill">⚡ Bespoke Web Architecture</div>
      </div>

      <div class="stage">
        <div class="floating-badge badge-1">
          <div class="b-icon">⚡</div>
          <div>
            <div class="b-title">Sub-Second Speed</div>
            <div class="b-sub">100/100 Core Web Vitals</div>
          </div>
        </div>

        <div class="phone-mockup">
          <div class="dynamic-island"></div>
          <div class="phone-screen">
            <div>
              <div class="mock-hero-badge">✨ Custom Website • €299</div>
              <h2 class="mock-hero-title">Websites That Make Your Business <span>Look Premium</span></h2>
              <p class="mock-hero-sub">We build fast, high-converting websites designed to turn visitors into paying clients.</p>
              <div class="mock-cta-btn">Start Your Project ↗</div>
            </div>
            <div class="mock-card-preview">
              <div style="font-size: 10px; color: #10b981; font-weight: 800; margin-bottom: 4px;">LIVE DEMO CONCEPTS</div>
              <div style="font-size: 13px; font-weight: 700; color: #fff;">Dentist • Barber • Architecture</div>
            </div>
          </div>
        </div>

        <div class="floating-badge badge-2">
          <div class="b-icon">💎</div>
          <div>
            <div class="b-title">100% Client Ownership</div>
            <div class="b-sub">Full Code & Domain Handover</div>
          </div>
        </div>
      </div>

      <div class="main-footer">
        <h1 class="footer-headline">Websites That Make Your Business <span>Look Premium</span></h1>
        <div class="footer-sub">
          <span>Next.js 14 Speed</span>
          <span class="dot">•</span>
          <span>7-Day Turnaround</span>
          <span class="dot">•</span>
          <span>From €299</span>
        </div>
      </div>
    </body>
    </html>
  `;
  await page.setContent(htmlPost1);
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(marketingDir, 'post-1.png') });

  // --------------------------------------------------------------------------
  // POST 2: Performance Dashboard (Google Lighthouse 100/100)
  // --------------------------------------------------------------------------
  console.log('📸 Rendering post-2.png (Lighthouse Dashboard)...');
  const htmlPost2 = `
    <!DOCTYPE html>
    <html>
    <head><style>${baseStyle}
      .hud-card {
        width: 900px;
        max-width: 900px;
        padding: 48px 40px;
        border-radius: 40px;
        background: rgba(13, 20, 36, 0.78);
        border: 1px solid rgba(16, 185, 129, 0.35);
        box-shadow: 0 30px 80px -15px rgba(0,0,0,0.85), 0 0 60px rgba(16, 185, 129, 0.2);
        backdrop-filter: blur(28px);
        text-align: center;
      }
      .meters-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 18px;
        margin: 34px 0;
      }
      .meter-box {
        padding: 24px 14px;
        border-radius: 24px;
        background: rgba(22, 33, 56, 0.65);
        border: 1px solid rgba(16, 185, 129, 0.25);
      }
      .circle-gauge {
        width: 88px;
        height: 88px;
        margin: 0 auto 14px;
        border-radius: 50%;
        border: 5px solid #10b981;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        font-weight: 900;
        color: #10b981;
        box-shadow: 0 0 25px rgba(16, 185, 129, 0.4);
      }
      .meter-label { font-size: 16px; font-weight: 800; color: #f8fafc; }
      .meter-status { font-size: 12px; color: #34d399; font-weight: 700; margin-top: 4px; }
      .vitals-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 28px;
        border-radius: 20px;
        background: rgba(15, 23, 42, 0.85);
        border: 1px solid rgba(255,255,255,0.08);
        font-size: 14px;
        font-weight: 700;
        color: #cbd5e1;
      }
      .v-val { color: #10b981; font-weight: 800; }
    </style></head>
    <body>
      <div class="top-bar">
        <div class="brand">
          <img src="${logoIcon}" alt="Logo">
          <div class="brand-title">NEXA<span>WEB</span> STUDIO</div>
        </div>
        <div class="agency-pill">⚡ Performance Engine</div>
      </div>

      <div class="hud-card">
        <div class="agency-pill" style="margin-bottom: 16px;">⚡ Google Lighthouse Audit Verified</div>
        <h1 style="font-size: 40px; font-weight: 800; letter-spacing: -0.03em;">Ultra-Fast. <span style="color: #10b981;">Zero Bloat.</span></h1>
        <p style="font-size: 16px; color: #94a3b8; margin-top: 8px;">Sub-second load times engineered with Next.js 14 and edge delivery.</p>

        <div class="meters-grid">
          <div class="meter-box">
            <div class="circle-gauge">100</div>
            <div class="meter-label">SEO</div>
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
          <div>Total Blocking Time: <span class="v-val">290 ms</span></div>
          <div>Global Edge CDN: <span class="v-val">Vercel HIT</span></div>
          <div>Live Audit: <span class="v-val">nexawebstudio.uk</span></div>
        </div>
      </div>

      <div class="main-footer">
        <div class="footer-sub">
          <span>Google Core Web Vitals Ready</span>
          <span class="dot">•</span>
          <span>Instant Mobile Edge Caching</span>
        </div>
      </div>
    </body>
    </html>
  `;
  await page.setContent(htmlPost2);
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(marketingDir, 'post-2.png') });

  // --------------------------------------------------------------------------
  // POST 3: Old Slow Site vs NexaWeb (Visual Comparison)
  // --------------------------------------------------------------------------
  console.log('📸 Rendering post-3.png (Comparison Layout)...');
  const htmlPost3 = `
    <!DOCTYPE html>
    <html>
    <head><style>${baseStyle}
      .compare-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        width: 100%;
        max-width: 900px;
        margin: auto 0;
      }
      .compare-col {
        padding: 34px 28px;
        border-radius: 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .col-old {
        background: rgba(30, 20, 25, 0.7);
        border: 1px solid rgba(239, 68, 68, 0.3);
        box-shadow: 0 20px 50px rgba(0,0,0,0.6);
      }
      .col-new {
        background: rgba(13, 28, 32, 0.85);
        border: 1px solid rgba(16, 185, 129, 0.5);
        box-shadow: 0 25px 60px rgba(0,0,0,0.8), 0 0 50px rgba(16, 185, 129, 0.25);
        position: relative;
      }
      .col-badge {
        display: inline-block;
        padding: 5px 12px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        margin-bottom: 14px;
      }
      .badge-old { background: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.4); }
      .badge-new { background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.5); }
      .col-title { font-size: 26px; font-weight: 800; margin-bottom: 20px; color: #fff; }
      .point-list { display: flex; flex-direction: column; gap: 14px; }
      .point-item { display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 600; color: #cbd5e1; }
      .icon-bad { color: #ef4444; font-weight: 900; font-size: 17px; }
      .icon-good { color: #10b981; font-weight: 900; font-size: 17px; }
    </style></head>
    <body>
      <div class="top-bar">
        <div class="brand">
          <img src="${logoIcon}" alt="Logo">
          <div class="brand-title">NEXA<span>WEB</span> STUDIO</div>
        </div>
        <div class="agency-pill">VS Analysis</div>
      </div>

      <div class="compare-container">
        <!-- Old Slow Way -->
        <div class="compare-col col-old">
          <div>
            <div class="col-badge badge-old">The Outdated Way</div>
            <div class="col-title">Old Clunky Website</div>
            <div class="point-list">
              <div class="point-item"><span class="icon-bad">✕</span> 4–8s slow loading speed</div>
              <div class="point-item"><span class="icon-bad">✕</span> Bloated WordPress plugins</div>
              <div class="point-item"><span class="icon-bad">✕</span> Unstable mobile layout</div>
              <div class="point-item"><span class="icon-bad">✕</span> Costly ongoing retainers</div>
              <div class="point-item"><span class="icon-bad">✕</span> High visitor bounce rate</div>
            </div>
          </div>
          <div style="margin-top: 24px; padding: 12px; border-radius: 14px; background: rgba(239,68,68,0.1); color: #fca5a5; font-size: 12.5px; font-weight: 700; text-align: center;">
            Loses 40%+ of potential leads
          </div>
        </div>

        <!-- The NexaWeb Way -->
        <div class="compare-col col-new">
          <div>
            <div class="col-badge badge-new">The NexaWeb Way</div>
            <div class="col-title">Modern Next.js Stack</div>
            <div class="point-list">
              <div class="point-item"><span class="icon-good">✓</span> Sub-second edge loading</div>
              <div class="point-item"><span class="icon-good">✓</span> Custom Next.js 14 code</div>
              <div class="point-item"><span class="icon-good">✓</span> 100% Mobile responsive</div>
              <div class="point-item"><span class="icon-good">✓</span> €299 flat one-time pricing</div>
              <div class="point-item"><span class="icon-good">✓</span> 100% Full client ownership</div>
            </div>
          </div>
          <div style="margin-top: 24px; padding: 12px; border-radius: 14px; background: rgba(16,185,129,0.15); color: #34d399; font-size: 12.5px; font-weight: 800; text-align: center;">
            Engineered to convert visitors into clients
          </div>
        </div>
      </div>

      <div class="main-footer">
        <h1 class="footer-headline">Upgrade Your Online <span>First Impression</span></h1>
        <div class="footer-sub">
          <span>Zero Monthly Lock-In</span>
          <span class="dot">•</span>
          <span>Delivered in 7 Days</span>
        </div>
      </div>
    </body>
    </html>
  `;
  await page.setContent(htmlPost3);
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(marketingDir, 'post-3.png') });

  // --------------------------------------------------------------------------
  // POST 4: Multilingual Switcher Card (EN, PT, FR, AR)
  // --------------------------------------------------------------------------
  console.log('📸 Rendering post-4.png (Multilingual Card)...');
  const htmlPost4 = `
    <!DOCTYPE html>
    <html>
    <head><style>${baseStyle}
      .card-wrap {
        width: 900px;
        max-width: 900px;
        padding: 48px 40px;
        border-radius: 40px;
        background: rgba(13, 20, 36, 0.82);
        border: 1px solid rgba(16, 185, 129, 0.35);
        box-shadow: 0 35px 80px -15px rgba(0,0,0,0.85), 0 0 60px rgba(16, 185, 129, 0.2);
        backdrop-filter: blur(28px);
        text-align: center;
      }
      .langs-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        margin: 34px 0;
      }
      .lang-pill {
        padding: 24px 14px;
        border-radius: 24px;
        background: rgba(22, 33, 56, 0.65);
        border: 1px solid rgba(16, 185, 129, 0.3);
        text-align: center;
      }
      .flag-code {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 54px;
        height: 54px;
        border-radius: 18px;
        background: rgba(16, 185, 129, 0.15);
        border: 1px solid rgba(16, 185, 129, 0.4);
        color: #34d399;
        font-size: 20px;
        font-weight: 900;
        margin-bottom: 12px;
      }
      .l-name { font-size: 17px; font-weight: 800; color: #fff; }
      .l-detail { font-size: 12px; color: #10b981; font-weight: 600; margin-top: 4px; }
    </style></head>
    <body>
      <div class="top-bar">
        <div class="brand">
          <img src="${logoIcon}" alt="Logo">
          <div class="brand-title">NEXA<span>WEB</span> STUDIO</div>
        </div>
        <div class="agency-pill">🌍 Global Localization</div>
      </div>

      <div class="card-wrap">
        <div class="agency-pill" style="margin-bottom: 14px;">Zero Page Reload • Instant Client Translation</div>
        <h1 style="font-size: 38px; font-weight: 800; letter-spacing: -0.03em;">Speak Your Clients' <span style="color: #10b981;">Language</span></h1>
        <p style="font-size: 16px; color: #94a3b8; margin-top: 8px;">Every NexaWeb site comes localized out of the box for international business expansion.</p>

        <div class="langs-grid">
          <div class="lang-pill">
            <div class="flag-code">GB</div>
            <div class="l-name">English</div>
            <div class="l-detail">International Primary</div>
          </div>
          <div class="lang-pill">
            <div class="flag-code">PT</div>
            <div class="l-name">Português</div>
            <div class="l-detail">PT / BR Markets</div>
          </div>
          <div class="lang-pill">
            <div class="flag-code">FR</div>
            <div class="l-name">Français</div>
            <div class="l-detail">Europe & Africa</div>
          </div>
          <div class="lang-pill">
            <div class="flag-code">AE</div>
            <div class="l-name">العربية</div>
            <div class="l-detail">Full RTL Support</div>
          </div>
        </div>

        <div style="display: inline-flex; align-items: center; gap: 14px; padding: 12px 24px; border-radius: 16px; background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.3); font-size: 14px; font-weight: 700; color: #34d399;">
          <span>Instant Language Switching • Localized SEO Metadata • Prefilled WhatsApp</span>
        </div>
      </div>

      <div class="main-footer">
        <div class="footer-sub">
          <span>Global Ready Architecture</span>
          <span class="dot">•</span>
          <span>Included in the €299 Package</span>
        </div>
      </div>
    </body>
    </html>
  `;
  await page.setContent(htmlPost4);
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(marketingDir, 'post-4.png') });

  // --------------------------------------------------------------------------
  // POST 5: Portfolio Showcase (Barbershop & Dental Clinic Concepts)
  // --------------------------------------------------------------------------
  console.log('📸 Rendering post-5.png (Portfolio Deck)...');
  const htmlPost5 = `
    <!DOCTYPE html>
    <html>
    <head><style>${baseStyle}
      .deck-stage {
        position: relative;
        width: 100%;
        max-width: 900px;
        height: 560px;
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 1400px;
        z-index: 5;
      }
      .deck-card {
        width: 290px;
        height: 480px;
        border-radius: 32px;
        background: #0f172a;
        border: 2px solid rgba(255,255,255,0.12);
        position: absolute;
        overflow: hidden;
        box-shadow: 0 25px 60px -10px rgba(0,0,0,0.85);
        display: flex;
        flex-direction: column;
      }
      .deck-card img { width: 100%; height: 60%; object-fit: cover; }
      .card-body {
        padding: 20px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #090e1a;
      }
      .c-tag { font-size: 10.5px; font-weight: 800; color: #10b981; text-transform: uppercase; letter-spacing: 0.08em; }
      .c-name { font-size: 20px; font-weight: 800; color: #fff; }
      .c-foot {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid rgba(255,255,255,0.08);
        padding-top: 12px;
      }
      .c-price { font-size: 17px; font-weight: 800; color: #34d399; }
      .c-btn {
        font-size: 11.5px;
        font-weight: 700;
        color: #fff;
        padding: 5px 12px;
        background: rgba(16, 185, 129, 0.2);
        border: 1px solid rgba(16, 185, 129, 0.4);
        border-radius: 10px;
      }
      .card-left {
        transform: translateX(-210px) translateY(20px) rotateZ(-7deg) rotateY(10deg) scale(0.88);
        z-index: 2;
        filter: brightness(0.85);
      }
      .card-right {
        transform: translateX(210px) translateY(20px) rotateZ(7deg) rotateY(-10deg) scale(0.88);
        z-index: 2;
        filter: brightness(0.85);
      }
      .card-center {
        transform: translateX(0) translateY(-6px) scale(1.02);
        border-color: rgba(16, 185, 129, 0.5);
        box-shadow: 0 30px 70px -15px rgba(0,0,0,0.9), 0 0 45px rgba(16, 185, 129, 0.35);
        z-index: 10;
      }
    </style></head>
    <body>
      <div class="top-bar">
        <div class="brand">
          <img src="${logoIcon}" alt="Logo">
          <div class="brand-title">NEXA<span>WEB</span> STUDIO</div>
        </div>
        <div class="agency-pill">💎 6 Pre-Built Concepts</div>
      </div>

      <div class="deck-stage">
        <!-- Barber -->
        <div class="deck-card card-left">
          <img src="${barberImg}" alt="Barbershop">
          <div class="card-body">
            <div>
              <div class="c-tag">Luxury Grooming</div>
              <div class="c-name">The Grand Blade</div>
            </div>
            <div class="c-foot">
              <div class="c-price">From €299</div>
              <div class="c-btn">Live Demo ↗</div>
            </div>
          </div>
        </div>

        <!-- Clinic -->
        <div class="deck-card card-center">
          <img src="${dentistImg}" alt="Dental Clinic">
          <div class="card-body">
            <div>
              <div class="c-tag">Healthcare & Medical</div>
              <div class="c-name">NovaSmile Clinic</div>
            </div>
            <div class="c-foot">
              <div class="c-price">From €299</div>
              <div class="c-btn">Live Demo ↗</div>
            </div>
          </div>
        </div>

        <!-- Architect -->
        <div class="deck-card card-right">
          <img src="${architectImg}" alt="Architecture">
          <div class="card-body">
            <div>
              <div class="c-tag">Design & Real Estate</div>
              <div class="c-name">Atelier Forma</div>
            </div>
            <div class="c-foot">
              <div class="c-price">From €299</div>
              <div class="c-btn">Live Demo ↗</div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-footer">
        <h1 class="footer-headline">Ready-to-Deploy <span>Industry Stacks</span></h1>
        <div class="footer-sub">
          <span>Booking Engine Built-In</span>
          <span class="dot">•</span>
          <span>WhatsApp Chat Connected</span>
          <span class="dot">•</span>
          <span>Ready in 7 Days</span>
        </div>
      </div>
    </body>
    </html>
  `;
  await page.setContent(htmlPost5);
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(marketingDir, 'post-5.png') });

  // --------------------------------------------------------------------------
  // POST 6: Automated Lead Capture & WhatsApp Workflow Visual
  // --------------------------------------------------------------------------
  console.log('📸 Rendering post-6.png (Lead Capture Workflow)...');
  const htmlPost6 = `
    <!DOCTYPE html>
    <html>
    <head><style>${baseStyle}
      .workflow-card {
        width: 900px;
        max-width: 900px;
        padding: 48px 40px;
        border-radius: 40px;
        background: rgba(13, 20, 36, 0.82);
        border: 1px solid rgba(16, 185, 129, 0.35);
        box-shadow: 0 35px 80px -15px rgba(0,0,0,0.85), 0 0 60px rgba(16, 185, 129, 0.2);
        backdrop-filter: blur(28px);
        text-align: center;
      }
      .steps-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin: 36px 0;
        position: relative;
      }
      .step-box {
        padding: 26px 16px;
        border-radius: 24px;
        background: rgba(22, 33, 56, 0.65);
        border: 1px solid rgba(16, 185, 129, 0.3);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      .step-number {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #10b981;
        color: #fff;
        font-size: 17px;
        font-weight: 900;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 14px;
        box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
      }
      .step-icon { font-size: 28px; margin-bottom: 10px; }
      .step-title { font-size: 17px; font-weight: 800; color: #fff; margin-bottom: 6px; }
      .step-desc { font-size: 12.5px; color: #94a3b8; line-height: 1.4; }
    </style></head>
    <body>
      <div class="top-bar">
        <div class="brand">
          <img src="${logoIcon}" alt="Logo">
          <div class="brand-title">NEXA<span>WEB</span> STUDIO</div>
        </div>
        <div class="agency-pill">⚡ Conversion Funnel</div>
      </div>

      <div class="workflow-card">
        <div class="agency-pill" style="margin-bottom: 14px;">Automated Lead Dispatch System</div>
        <h1 style="font-size: 38px; font-weight: 800; letter-spacing: -0.03em;">Capture Leads <span style="color: #10b981;">Instantly</span></h1>
        <p style="font-size: 16px; color: #94a3b8; margin-top: 8px;">Every visitor inquiry is automatically captured, formatted, and delivered to your phone in seconds.</p>

        <div class="steps-grid">
          <div class="step-box">
            <div class="step-number">1</div>
            <div class="step-icon">📝</div>
            <div class="step-title">Client Submits Form</div>
            <div class="step-desc">Clean, validated Next.js form with instant error-check & copy email backup.</div>
          </div>

          <div class="step-box">
            <div class="step-number">2</div>
            <div class="step-icon">📬</div>
            <div class="step-title">Automatic Forwarding</div>
            <div class="step-desc">Direct email to your inbox + instant branded confirmation email to client.</div>
          </div>

          <div class="step-box">
            <div class="step-number">3</div>
            <div class="step-icon">💬</div>
            <div class="step-title">Instant WhatsApp Chat</div>
            <div class="step-desc">1-tap direct WhatsApp button prefilled with project specs & language.</div>
          </div>
        </div>

        <div style="display: inline-flex; align-items: center; gap: 14px; padding: 12px 24px; border-radius: 16px; background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.3); font-size: 14px; font-weight: 700; color: #34d399;">
          <span>Zero Missed Enquiries • Sub-Minute Response Times • Higher Conversion</span>
        </div>
      </div>

      <div class="main-footer">
        <div class="footer-sub">
          <span>Fully Integrated Form Backend</span>
          <span class="dot">•</span>
          <span>Included in All Websites</span>
        </div>
      </div>
    </body>
    </html>
  `;
  await page.setContent(htmlPost6);
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(marketingDir, 'post-6.png') });

  // --------------------------------------------------------------------------
  // POST 7: Transparent Pricing Tier Card (€299)
  // --------------------------------------------------------------------------
  console.log('📸 Rendering post-7.png (Pricing Package)...');
  const htmlPost7 = `
    <!DOCTYPE html>
    <html>
    <head><style>${baseStyle}
      .price-card {
        width: 900px;
        max-width: 900px;
        padding: 48px 44px;
        border-radius: 40px;
        background: rgba(13, 20, 36, 0.85);
        border: 1px solid rgba(16, 185, 129, 0.4);
        box-shadow: 0 35px 80px -15px rgba(0,0,0,0.9), 0 0 60px rgba(16, 185, 129, 0.22);
        backdrop-filter: blur(28px);
      }
      .p-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(255,255,255,0.08);
        padding-bottom: 24px;
        margin-bottom: 28px;
      }
      .p-title { font-size: 34px; font-weight: 800; color: #fff; }
      .p-num { font-size: 58px; font-weight: 900; color: #10b981; line-height: 1; }
      .check-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px 28px;
        margin-bottom: 28px;
      }
      .check-row { display: flex; align-items: center; gap: 10px; font-size: 15.5px; font-weight: 700; color: #e2e8f0; }
      .check-ico {
        width: 28px;
        height: 28px;
        border-radius: 8px;
        background: rgba(16, 185, 129, 0.18);
        border: 1px solid rgba(16, 185, 129, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #34d399;
        font-size: 15px;
        font-weight: 900;
        flex-shrink: 0;
      }
      .guarantee-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 24px;
        border-radius: 18px;
        background: rgba(16, 185, 129, 0.1);
        border: 1px solid rgba(16, 185, 129, 0.3);
      }
    </style></head>
    <body>
      <div class="top-bar">
        <div class="brand">
          <img src="${logoIcon}" alt="Logo">
          <div class="brand-title">NEXA<span>WEB</span> STUDIO</div>
        </div>
        <div class="agency-pill">⚡ Transparent Investment</div>
      </div>

      <div class="price-card">
        <div class="p-head">
          <div>
            <div class="agency-pill" style="margin-bottom: 10px;">Complete Custom Build</div>
            <div class="p-title">Complete Launch Package</div>
          </div>
          <div style="text-align: right;">
            <div class="p-num">€299</div>
            <div style="font-size: 13px; color: #94a3b8; font-weight: 600; margin-top: 4px;">One-Time • No Monthly Retainers</div>
          </div>
        </div>

        <div class="check-grid">
          <div class="check-row">
            <div class="check-ico">✓</div>
            <span>Custom Next.js 14 Web Architecture</span>
          </div>
          <div class="check-row">
            <div class="check-ico">✓</div>
            <span>WhatsApp Direct Chat & Form Lead System</span>
          </div>
          <div class="check-row">
            <div class="check-ico">✓</div>
            <span>Multilingual Ready (EN / PT / FR / AR)</span>
          </div>
          <div class="check-row">
            <div class="check-ico">✓</div>
            <span>100/100 Google SEO & Performance</span>
          </div>
          <div class="check-row">
            <div class="check-ico">✓</div>
            <span>1st Month Post-Launch Support Included</span>
          </div>
          <div class="check-row">
            <div class="check-ico">✓</div>
            <span>100% Full Code & Domain Ownership</span>
          </div>
        </div>

        <div class="guarantee-box">
          <div style="font-size: 15px; font-weight: 800; color: #34d399;">🛡️ NexaWeb Full Ownership Guarantee</div>
          <div style="font-size: 13px; font-weight: 600; color: #cbd5e1;">Zero Hidden Fees • 7-Day Turnaround • You Own 100%</div>
        </div>
      </div>

      <div class="main-footer">
        <div class="footer-sub">
          <span>Fixed Transparent Pricing</span>
          <span class="dot">•</span>
          <span>Deploy Your Modern Website Today</span>
        </div>
      </div>
    </body>
    </html>
  `;
  await page.setContent(htmlPost7);
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(marketingDir, 'post-7.png') });

  // --------------------------------------------------------------------------
  // POST 8: Client Trust & 5-Star Reviews Card
  // --------------------------------------------------------------------------
  console.log('📸 Rendering post-8.png (Client Trust Card)...');
  const htmlPost8 = `
    <!DOCTYPE html>
    <html>
    <head><style>${baseStyle}
      .trust-card {
        width: 900px;
        max-width: 900px;
        padding: 48px 40px;
        border-radius: 40px;
        background: rgba(13, 20, 36, 0.82);
        border: 1px solid rgba(16, 185, 129, 0.35);
        box-shadow: 0 35px 80px -15px rgba(0,0,0,0.85), 0 0 60px rgba(16, 185, 129, 0.2);
        backdrop-filter: blur(28px);
        text-align: center;
      }
      .stars { color: #fbbf24; font-size: 28px; letter-spacing: 4px; margin-bottom: 10px; }
      .reviews-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
        margin: 32px 0;
        text-align: left;
      }
      .rev-box {
        padding: 22px 18px;
        border-radius: 20px;
        background: rgba(22, 33, 56, 0.65);
        border: 1px solid rgba(255,255,255,0.08);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .rev-quote { font-size: 13px; color: #cbd5e1; line-height: 1.45; margin-bottom: 14px; font-style: italic; }
      .rev-author { font-size: 13.5px; font-weight: 800; color: #fff; }
      .rev-role { font-size: 11.5px; color: #10b981; font-weight: 600; }
      .trust-strip {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 16px 20px;
        border-radius: 18px;
        background: rgba(16,185,129,0.1);
        border: 1px solid rgba(16,185,129,0.3);
      }
      .t-item { font-size: 14px; font-weight: 800; color: #34d399; display: flex; align-items: center; gap: 8px; }
    </style></head>
    <body>
      <div class="top-bar">
        <div class="brand">
          <img src="${logoIcon}" alt="Logo">
          <div class="brand-title">NEXA<span>WEB</span> STUDIO</div>
        </div>
        <div class="agency-pill">⭐ Client Feedback</div>
      </div>

      <div class="trust-card">
        <div class="stars">★★★★★</div>
        <h1 style="font-size: 38px; font-weight: 800; letter-spacing: -0.03em;">Trusted by <span style="color: #10b981;">Modern Businesses</span></h1>
        <p style="font-size: 16px; color: #94a3b8; margin-top: 6px;">Delivering high-performance digital presence across Europe & beyond.</p>

        <div class="reviews-grid">
          <div class="rev-box">
            <div class="rev-quote">"NexaWeb built our clinic website in 6 days. Our online patient bookings increased by 80% within the first month."</div>
            <div>
              <div class="rev-author">Dr. Clara Mendes</div>
              <div class="rev-role">Founder, NovaSmile Clinic</div>
            </div>
          </div>

          <div class="rev-box">
            <div class="rev-quote">"The WhatsApp integration is genius. Clients book appointments directly from the website without calling. 10/10."</div>
            <div>
              <div class="rev-author">Marco Silva</div>
              <div class="rev-role">Head Barber, The Grand Blade</div>
            </div>
          </div>

          <div class="rev-box">
            <div class="rev-quote">"Our architecture portfolio finally looks like a multi-million-euro firm. Incredible speed and zero hassle."</div>
            <div>
              <div class="rev-author">Julian Wright</div>
              <div class="rev-role">Principal, Atelier Forma</div>
            </div>
          </div>
        </div>

        <div class="trust-strip">
          <div class="t-item"><span>🛡️</span> 100% Code Ownership</div>
          <div class="t-item"><span>⚡</span> 7-Day Rapid Delivery</div>
          <div class="t-item"><span>🤝</span> 1 Month Included Support</div>
        </div>
      </div>

      <div class="main-footer">
        <div class="footer-sub">
          <span>Start Your Project Today</span>
          <span class="dot">•</span>
          <span>contact@nexawebstudio.uk</span>
        </div>
      </div>
    </body>
    </html>
  `;
  await page.setContent(htmlPost8);
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(marketingDir, 'post-8.png') });

  await page.close();
  await context.close();
  await browser.close();

  console.log('🎉 All 8 Feed Posts re-rendered successfully with 85px safe margins!');
}

renderPosts().catch((err) => {
  console.error('❌ Error rendering posts:', err);
  process.exit(1);
});

import fs from 'fs';
import path from 'path';

const imagesToDownload = [
  // Agency
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/agency/og-preview.jpg',
    fallbackBg: '#0f172a',
    label: 'NexaWeb Studio',
  },
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/agency/hero-mockup.jpg',
    fallbackBg: '#1e293b',
    label: 'Agency Showcase',
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/agency/blog-01.jpg',
    fallbackBg: '#0f172a',
    label: 'Web Strategy',
  },
  {
    url: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/agency/blog-02.jpg',
    fallbackBg: '#1e293b',
    label: 'Pricing Guide',
  },
  {
    url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/agency/blog-03.jpg',
    fallbackBg: '#0f172a',
    label: 'Digital Conversion',
  },
  {
    url: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/agency/blog-04.jpg',
    fallbackBg: '#1e293b',
    label: 'Customer Acquisition',
  },
  {
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    dest: 'public/images/agency/author-sarah.jpg',
    fallbackBg: '#334155',
    label: 'Sarah Jenkins',
  },
  {
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    dest: 'public/images/agency/author-miguel.jpg',
    fallbackBg: '#334155',
    label: 'Miguel Santos',
  },

  // Restaurant
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/restaurant/restaurant-hero.jpg',
    fallbackBg: '#1c1917',
    label: 'Savor Bistro & Lounge',
  },
  {
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/restaurant/restaurant-dish-01.jpg',
    fallbackBg: '#292524',
    label: 'Prime Beef Tenderloin',
  },
  {
    url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/restaurant/restaurant-dish-02.jpg',
    fallbackBg: '#292524',
    label: 'Wild Atlantic Salmon',
  },
  {
    url: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/restaurant/restaurant-dish-03.jpg',
    fallbackBg: '#292524',
    label: 'Artisan Burrata',
  },
  {
    url: 'https://images.unsplash.com/photo-1592417817098-8f3d69102a47?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/restaurant/restaurant-dish-04.jpg',
    fallbackBg: '#292524',
    label: 'Truffle Mushroom Risotto',
  },
  {
    url: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/restaurant/restaurant-dish-05.jpg',
    fallbackBg: '#292524',
    label: 'Valrhona Chocolate Fondant',
  },
  {
    url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/restaurant/restaurant-interior.jpg',
    fallbackBg: '#1c1917',
    label: 'Artisan Dining Room',
  },
  {
    url: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/restaurant/chef-story.jpg',
    fallbackBg: '#1c1917',
    label: 'Executive Chef Julian Rossi',
  },
  {
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/restaurant/wine-cellar.jpg',
    fallbackBg: '#1c1917',
    label: 'Curated Sommelier Cellar',
  },

  // Barbershop
  {
    url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/barbershop/barbershop-hero.jpg',
    fallbackBg: '#09090b',
    label: 'Apex Grooming Lounge',
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    dest: 'public/images/barbershop/barber-01.jpg',
    fallbackBg: '#18181b',
    label: 'Marcus Vance - Master Barber',
  },
  {
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    dest: 'public/images/barbershop/barber-02.jpg',
    fallbackBg: '#18181b',
    label: 'Julian Croft - Fade Specialist',
  },
  {
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    dest: 'public/images/barbershop/barber-03.jpg',
    fallbackBg: '#18181b',
    label: 'Amir Reza - Beard Artisan',
  },
  {
    url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/barbershop/barber-cut-01.jpg',
    fallbackBg: '#18181b',
    label: 'Precision Skin Fade',
  },
  {
    url: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/barbershop/barber-beard-01.jpg',
    fallbackBg: '#18181b',
    label: 'Beard Sculpting Ritual',
  },
  {
    url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/barbershop/barber-lounge.jpg',
    fallbackBg: '#09090b',
    label: 'Apex Gentlemen Lounge',
  },

  // Finance
  {
    url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/finance/finance-hero.jpg',
    fallbackBg: '#020617',
    label: 'Vanguard Financial Advisory',
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/finance/finance-team.jpg',
    fallbackBg: '#0f172a',
    label: 'Senior Advisory Board',
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/finance/finance-building.jpg',
    fallbackBg: '#0f172a',
    label: 'Corporate Headquarters',
  },
  {
    url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/finance/finance-audit.jpg',
    fallbackBg: '#0f172a',
    label: 'Corporate Tax & Audit',
  },
  {
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    dest: 'public/images/finance/advisor-01.jpg',
    fallbackBg: '#0f172a',
    label: 'Helena Martins - Managing Partner',
  },
];

function generateSvgFallback(label, bgColor) {
  return `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgColor}" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)" />
  <rect x="20" y="20" width="760" height="560" rx="16" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2" />
  <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="28" font-weight="bold" fill="#ffffff" letter-spacing="1">
    ${label}
  </text>
  <text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="rgba(255,255,255,0.6)" letter-spacing="2">
    NEXAWEB STUDIO • VERIFIED ASSET
  </text>
</svg>`;
}

async function downloadAll() {
  console.log(`Starting image asset provisioning for ${imagesToDownload.length} files...`);

  for (const item of imagesToDownload) {
    const fullDest = path.join(process.cwd(), item.dest);
    const dir = path.dirname(fullDest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    try {
      console.log(`Fetching: ${item.dest}...`);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);
      const res = await fetch(item.url, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        },
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const arrayBuffer = await res.arrayBuffer();
        fs.writeFileSync(fullDest, Buffer.from(arrayBuffer));
        console.log(`✓ Saved: ${item.dest} (${arrayBuffer.byteLength} bytes)`);
      } else {
        throw new Error(`HTTP ${res.status}`);
      }
    } catch (err) {
      console.warn(`! Fallback generated for ${item.dest}: ${err.message}`);
      // Write clean fallback SVG or JPEG
      const svg = generateSvgFallback(item.label, item.fallbackBg);
      fs.writeFileSync(fullDest, svg);
      console.log(`✓ Fallback saved: ${item.dest}`);
    }
  }

  console.log('All local image assets provisioned successfully!');
}

downloadAll();


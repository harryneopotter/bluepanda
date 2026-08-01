import fs from 'fs';
import path from 'path';
import { projects } from '../src/projects.js';

const CANONICAL_URL = 'https://www.bluepanda.in';

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

const pages = [
  '',
  '/services',
  '/case-studies',
  '/about',
  '/architect',
  '/contact',
  '/privacy',
];

const caseStudies = projects.map(p => `/case-studies/${slugify(p.title)}`);

const allUrls = [...pages, ...caseStudies];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(url => `
  <url>
    <loc>${CANONICAL_URL}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${url === '' ? '1.0' : url.startsWith('/case-studies/') ? '0.7' : '0.8'}</priority>
  </url>`)
    .join('')}
</urlset>`;

const publicDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully in public/sitemap.xml');

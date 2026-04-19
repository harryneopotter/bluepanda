import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('sitemap', () => {
  it('should exist in public folder after generation', () => {
    const sitemapPath = path.resolve(process.cwd(), 'public/sitemap.xml');
    expect(fs.existsSync(sitemapPath)).toBe(true);
  });

  it('should contain the canonical URL', () => {
    const sitemapPath = path.resolve(process.cwd(), 'public/sitemap.xml');
    const content = fs.readFileSync(sitemapPath, 'utf8');
    expect(content).toContain('https://www.bluepanda.in');
  });

  it('should contain all main pages', () => {
    const sitemapPath = path.resolve(process.cwd(), 'public/sitemap.xml');
    const content = fs.readFileSync(sitemapPath, 'utf8');
    expect(content).toContain('<loc>https://www.bluepanda.in/services</loc>');
    expect(content).toContain('<loc>https://www.bluepanda.in/case-studies</loc>');
    expect(content).toContain('<loc>https://www.bluepanda.in/about</loc>');
    expect(content).toContain('<loc>https://www.bluepanda.in/architect</loc>');
    expect(content).toContain('<loc>https://www.bluepanda.in/contact</loc>');
  });
});

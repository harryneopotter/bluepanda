import { describe, it, expect } from 'vitest';
import { slugify } from '../utils/slugify';

describe('slugify', () => {
  it('should convert strings to URL-friendly slugs', () => {
    expect(slugify('Hello World')).toBe('hello-world');
    expect(slugify('Hello   World')).toBe('hello-world');
    expect(slugify('Hello! World?')).toBe('hello-world');
    expect(slugify('Nobius Content Bot — Self-Healing CMS via Telegram')).toBe('nobius-content-bot-self-healing-cms-via-telegram');
  });
});

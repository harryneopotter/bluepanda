/**
 * Markdown Content Negotiation Edge Function
 *
 * When an agent sends Accept: text/markdown, serve markdown versions of HTML pages.
 * Otherwise pass through to the SPA.
 */
export default async (request, context) => {
  const accept = request.headers.get('accept') || '';

  if (!accept.includes('text/markdown')) {
    return context.next();
  }

  const url = new URL(request.url);

  // Map page routes to existing markdown files
  const markdownMap = {
    '/':                    '/agent-readme.md',
    '/services':            '/.well-known/agent-skills/service-documentation.md',
    '/about':               '/.well-known/agent-skills/company-information.md',
    '/contact':             '/.well-known/agent-skills/contact-information.md',
  };

  // Strip trailing slash for matching
  const path = url.pathname.endsWith('/') && url.pathname !== '/'
    ? url.pathname.slice(0, -1)
    : url.pathname;

  const markdownPath = markdownMap[path] || markdownMap[`${path}/`];

  if (!markdownPath) {
    return context.next();
  }

  // Rewrite internally — Netlify serves the file and applies [[headers]] Content-Type
  return context.rewrite(markdownPath);
};

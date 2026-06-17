/**
 * Markdown Content Negotiation Edge Function
 *
 * When an agent sends Accept: text/markdown, serve comprehensive markdown versions
 * of each page. Otherwise pass through to the SPA.
 */
export default async (request, context) => {
  const accept = request.headers.get('accept') || '';

  if (!accept.includes('text/markdown')) {
    return context.next();
  }

  const url = new URL(request.url);
  let path = url.pathname;

  // Strip trailing slash
  if (path.endsWith('/') && path !== '/') {
    path = path.slice(0, -1);
  }

  // Map page routes to existing markdown files
  const markdownMap = {
    '/':                    '/agent-readme.md',
    '/services':            '/.well-known/agent-skills/service-documentation.md',
    '/about':               '/.well-known/agent-skills/company-information.md',
    '/contact':             '/.well-known/agent-skills/contact-information.md',
    '/architect':           '/.well-known/agent-skills/ai-architect.md',
  };

  // Case studies — try to match /case-studies/some-title
  if (path.startsWith('/case-studies/')) {
    return context.rewrite('/.well-known/agent-skills/case-studies.md');
  }
  // Case studies index
  if (path === '/case-studies') {
    return context.rewrite('/.well-known/agent-skills/case-studies.md');
  }

  const markdownPath = markdownMap[path];

  if (!markdownPath) {
    return context.next();
  }

  // Rewrite internally — Netlify serves the file and applies [[headers]] Content-Type
  return context.rewrite(markdownPath);
};

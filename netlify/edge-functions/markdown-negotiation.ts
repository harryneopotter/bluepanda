export default async (request: Request, context: any) => {
  const url = new URL(request.url);
  const acceptHeader = request.headers.get("Accept") || "";

  // Only apply to HTML pages (not assets, images, etc.)
  if (acceptHeader.includes("text/markdown") &&
      !url.pathname.match(/\.(js|css|json|png|jpg|jpeg|gif|svg|ico)$/)) {

    // Attempt to fetch the markdown equivalent based on the path
    // For this basic implementation, we'll return a generalized agent-readme
    // You could also implement a more robust HTML-to-Markdown conversion here
    const mdUrl = new URL("/agent-readme.md", request.url);
    const mdResponse = await fetch(mdUrl);

    if (mdResponse.ok) {
      const markdown = await mdResponse.text();
      return new Response(markdown, {
        status: 200,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "X-Markdown-Tokens": "true", // Custom header for markdown
          "Vary": "Accept",
          "Link": '</.well-known/api-catalog>; rel="api-catalog"'
        }
      });
    }
  }

  // Fallback to normal behavior
  return context.next();
};

export const config = {
  path: "/*"
};

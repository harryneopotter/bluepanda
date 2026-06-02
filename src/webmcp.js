// WebMCP Integration for AI Agents
export const initWebMCP = () => {
  if (typeof navigator !== 'undefined' && 'modelContext' in navigator) {
    try {
      // @ts-ignore
      navigator.modelContext.provideContext({
        tools: [
          {
            name: "navigate_site",
            description: "Navigate to a specific page on the Blue Panda website (home, services, case-studies, about, architect, contact).",
            inputSchema: {
              type: "object",
              properties: {
                page: {
                  type: "string",
                  enum: ["home", "services", "case-studies", "about", "architect", "contact"],
                  description: "The page to navigate to."
                }
              },
              required: ["page"]
            },
            execute: async (args) => {
              const path = args.page === 'home' ? '/' : `/${args.page}`;
              window.history.pushState({}, '', path);
              // Dispatch popstate event to trigger React Router
              window.dispatchEvent(new PopStateEvent('popstate'));
              return { success: true, message: `Navigated to ${args.page}` };
            }
          },
          {
            name: "get_company_info",
            description: "Get summary information about Blue Panda services and philosophy.",
            inputSchema: {
              type: "object",
              properties: {}
            },
            execute: async () => {
              return {
                company: "Blue Panda",
                tagline: "Responsible infrastructure, applied systems, and system correction since 2013.",
                services: ["Cloud Infrastructure", "AI Integration", "Custom Dev"],
                philosophy: "Reliability over Hype."
              };
            }
          }
        ]
      });
      console.log("WebMCP tools registered successfully.");
    } catch (e) {
      console.error("Failed to register WebMCP tools:", e);
    }
  } else {
    console.log("WebMCP not supported in this browser/environment.");
  }
};

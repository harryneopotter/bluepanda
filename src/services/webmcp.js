/**
 * WebMCP — Expose site tools to AI agents via navigator.modelContext
 *
 * Spec: https://webmachinelearning.github.io/webmcp/
 * This is an experimental API; feature-detected at runtime.
 */

const TOOLS = [
  {
    name: 'getCompanyInfo',
    description: 'Returns Blue Panda company overview, mission, and background',
    inputSchema: {
      type: 'object',
      properties: {},
      required: [],
    },
    execute: async () => {
      const response = await fetch('/.well-known/agent-skills/company-information.md');
      const text = await response.text();
      return text;
    },
  },
  {
    name: 'getServices',
    description: 'Returns Blue Panda service offerings and infrastructure solutions',
    inputSchema: {
      type: 'object',
      properties: {},
      required: [],
    },
    execute: async () => {
      const response = await fetch('/.well-known/agent-skills/service-documentation.md');
      const text = await response.text();
      return text;
    },
  },
  {
    name: 'getContactInfo',
    description: 'Returns Blue Panda contact details and support channels',
    inputSchema: {
      type: 'object',
      properties: {},
      required: [],
    },
    execute: async () => {
      const response = await fetch('/.well-known/agent-skills/contact-information.md');
      const text = await response.text();
      return text;
    },
  },
  {
    name: 'generateBlueprint',
    description: 'Generate an AI infrastructure blueprint using the Gemini-powered architect',
    inputSchema: {
      type: 'object',
      properties: {
        prompt: {
          type: 'string',
          description: 'Description of the infrastructure architecture you need designed',
        },
      },
      required: ['prompt'],
    },
    execute: async ({ prompt }) => {
      const response = await fetch('/.netlify/functions/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      return data.text;
    },
  },
];

/**
 * Register WebMCP tools if the browser supports the API.
 * Call once on app mount.
 */
export function registerWebMCPTools() {
  if (typeof navigator !== 'undefined' && navigator.modelContext?.provideContext) {
    try {
      navigator.modelContext.provideContext({ tools: TOOLS });
      console.info('[WebMCP] Registered', TOOLS.length, 'tools for AI agents');
    } catch (err) {
      console.warn('[WebMCP] Registration failed:', err);
    }
  }
}

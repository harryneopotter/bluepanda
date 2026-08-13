import fs from "fs";
import path from "path";

const root = process.cwd();
const publicDir = path.join(root, "public");

const pages = [
  { title: "Home and company overview", route: "/", file: "agent-readme.md", description: "Blue Panda overview, services, case studies, AI Architect, and contact details." },
  { title: "Services", route: "/services", file: ".well-known/agent-skills/service-documentation.md", description: "Infrastructure, applied AI, automation, and custom engineering capabilities." },
  { title: "About", route: "/about", file: ".well-known/agent-skills/company-information.md", description: "Company history, current applied-AI focus, principles, and operating model." },
  { title: "Case studies", route: "/case-studies", file: ".well-known/agent-skills/case-studies.md", description: "Projects covering document intelligence, automation, security, context engineering, and AI products." },
  { title: "AI Architect", route: "/architect", file: ".well-known/agent-skills/ai-architect.md", description: "A reasoning surface for turning messy system constraints into a practical blueprint." },
  { title: "Contact", route: "/contact", file: ".well-known/agent-skills/contact-information.md", description: "How to contact Blue Panda about a system, automation, or applied-AI problem." },
  { title: "Privacy policy", route: "/privacy", file: ".well-known/agent-skills/privacy-policy.md", description: "Data handling for the contact form, AI Architect, and service providers." },
];

const baseUrl = "https://www.bluepanda.in";
const read = (file) => fs.readFileSync(path.join(publicDir, file), "utf8").trim();
const linkLines = pages.map(({ title, route, file, description }) => `- [${title}](${baseUrl}${route}): ${description} Markdown source: ${baseUrl}/${file}`).join("\n");
const llms = `# Blue Panda\n\n> Blue Panda builds and repairs systems where software, infrastructure, and real-world operations meet, using AI where it creates useful leverage without removing accountability.\n\nBlue Panda is an independently operated systems engineering and applied-AI practice led by Sachin in Delhi. The work focuses on reducing manual effort, preserving operational knowledge, improving reliability, and making difficult systems understandable.\n\n## Key pages\n\n${linkLines}\n\n## Optional\n\n- [Agent skills index](${baseUrl}/.well-known/agent-skills/index.json): Structured discovery index with hashes for page resources.\n- [Robots policy](${baseUrl}/robots.txt): Current search, training, and AI-input content signals.\n- [Sitemap](${baseUrl}/sitemap.xml): All public routes and case-study URLs.`;
const full = pages.map(({ title, route, file }) => `\n\n---\n\n# ${title}\n\nCanonical URL: ${baseUrl}${route}\n\n${read(file)}`).join("");
fs.writeFileSync(path.join(publicDir, "llms.txt"), `${llms}\n`);
fs.writeFileSync(path.join(publicDir, "llms-full.txt"), `# Blue Panda — Full LLM Content${full}\n`);
console.log("Generated public/llms.txt and public/llms-full.txt.");

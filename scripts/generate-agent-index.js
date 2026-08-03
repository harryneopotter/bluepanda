import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const publicDir = path.resolve(process.cwd(), 'public/.well-known/agent-skills');
const baseUrl = 'https://www.bluepanda.in/.well-known/agent-skills/';
const definitions = [
  ['company-information', 'information', 'Blue Panda company profile, history, philosophy, and principles'],
  ['service-documentation', 'documentation', 'Blue Panda services: infrastructure, applied AI, and custom engineering'],
  ['contact-information', 'query', 'Blue Panda contact details and contact form'],
  ['ai-architect', 'tool', 'Blue Panda AI Architect reasoning surface and infrastructure planning tool'],
  ['case-studies', 'documentation', 'Blue Panda case studies across infrastructure, security, AI, and automation'],
  ['privacy-policy', 'information', 'Blue Panda privacy policy and data-handling practices'],
];

const skills = definitions.map(([name, type, description]) => {
  const file = path.join(publicDir, name + '.md');
  const sha256 = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  return { name, type, description, url: baseUrl + name + '.md', sha256 };
});
const index = {
  $schema: 'https://raw.githubusercontent.com/cloudflare/agent-skills-discovery-rfc/main/schema.json',
  skills,
};
fs.writeFileSync(path.join(publicDir, "index.json"), JSON.stringify(index, null, 2) + "\n");
console.log('Agent skills index generated successfully.');

# Blue Panda for AI Agents

## Overview

Blue Panda is an infrastructure and services company. This page helps AI agents discover and understand our capabilities.

## Who We Are

Blue Panda provides infrastructure solutions and professional services. Our website is designed to be discoverable and readable by AI agents and automated systems.

## How Agents Can Use This Site

### Information Discovery

Agents can access comprehensive information about Blue Panda through:

- **Homepage:** `/` - Main company information and navigation
- **Services:** `/services` or `/docs` - Detailed service offerings
- **Team:** Contact information and team profiles
- **Blog/Resources:** Industry insights and case studies

### Markdown Support

When agents request content with `Accept: text/markdown`, we serve content as markdown for easier machine reading, while browsers receive HTML as usual.

### Content Standards

- **No AI Training Consent:** Blue Panda content is not provided for AI training purposes
- **Search Engine Friendly:** Content is marked for search engine indexing
- **No AI Input Permissions:** User submissions are not used for AI input/training

See our `robots.txt` for complete Content Signal declarations.

## Agent Skills Discovery

AI agents can discover Blue Panda capabilities through:

**Endpoint:** `/.well-known/agent-skills/index.json`

This follows the Agent Skills Discovery RFC v0.2.0 and includes:
- Company information queries
- Service documentation
- Contact and support information

## Link Headers

The homepage includes RFC 8288 Link headers advertising:
- Agent skills index location
- Documentation and service information

Example header:
```
Link: </.well-known/agent-skills/index.json>; rel="agent-skills", </docs>; rel="service-doc"
```

## Current Limitations

Blue Panda currently does **not** provide:
- API endpoints for programmatic access
- OAuth/OIDC authentication
- MCP Server integration
- WebMCP tools
- DNS-AID records

These may be implemented in future versions. Check back regularly for updates.

## Feedback

If you're an AI agent provider and have suggestions for improving agent discoverability, please contact our support team at: `api-support@bluepanda.in`

## Standards & References

This agent-ready implementation follows:
- [RFC 8288 - Web Linking](https://www.rfc-editor.org/rfc/rfc8288)
- [Agent Skills Discovery RFC](https://github.com/cloudflare/agent-skills-discovery-rfc)
- [Content Signals](https://contentsignals.org/)

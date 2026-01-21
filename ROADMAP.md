## Roadmap

### Phase 1 — Schema & Transparency
- Define MCP schemas for company identity; publish examples.
- Document public/private data boundaries and agent access model.
- Add versioning strategy for MCP data and surface it in `version.js`.
- Publish an open marketing plan (pillars, ICPs, offers, CTAs) and align site copy to it; keep it fully public.
- Refresh on-site text (hero, services, portfolio) to match the open marketing plan and MCP payloads.

### Phase 2 — Automation & Validation
- Add CI checks to validate MCP payloads against schemas.
- Generate structured data artifacts during build (and expose for agents).
- Add monitoring for schema drift between site content and MCP payloads.

### Phase 3 — Adoption & Showcase
- Publish a short guide: “How Premiumware exposes structured truth to AI.”
- Provide sample agent queries/workflows using the MCP endpoints/data.
- Collect feedback from integrators; iterate on schema and docs.

## Agent Guide (MCP-facing)

### Purpose
Make Premiumware’s public company data easy for agents/copilots to trust and consume.

### What to expose
- Company profile: name, registration, locations, contacts.
- Services and offers with pricing hints or engagement models.
- Portfolio/case studies with outcomes and tech stacks.
- Team highlights (roles/skills) with privacy-respecting limits.
- Version info for structured payloads (tie to `version.js`).

### Access & Discovery
- Provide a stable discovery doc pointing to schemas and current payload URLs.
- Keep public data separate from private CRM/ops; label confidentiality.
- Prefer signed/hashed payloads (or ETags) so agents can verify integrity.

### Expectations for contributors
- Maintain parity between site content and MCP payloads.
- Update schemas and examples together; avoid undocumented fields.
- Add CI validation when schemas change; fail builds on schema drift.
- Document any breaking changes in `ROADMAP.md` and release notes.

### Testing ideas
- Run schema validation as part of `npm run build`.
- Smoke-test agent flows (fetch discovery doc, fetch payload, verify version/hash).
- Add fixtures for sample agent queries and expected responses.

### References
- MCP schemas and examples: `docs/mcp-schemas.md`, `mcp/schema/`, `mcp/examples/`.

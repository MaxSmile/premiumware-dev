# MCP Schemas & Examples

This repo includes JSON Schemas and sample payloads to expose Premiumware’s company data to agents.

## Layout
- `mcp/schema/*.schema.json` — schemas for company, contact, service, project, team, offer.
- `mcp/examples/*.json` — sample payloads matching the schemas, plus a full company example.

## Usage
- Agents and integrators can validate payloads against these schemas to ensure consistency.
- When updating site copy or offers, update the matching example payloads to keep human and machine views aligned.
- Version and timestamp fields (`version`, `updatedAt`) help track changes.

## Next steps
- Add CI validation to prevent schema drift.
- Publish a discovery doc or endpoint that links to the current payloads and version info.

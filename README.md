## premiumware.dev / premiumware.top
Premiumware Ltd (UK) marketing site built with Next.js. Public repo: https://github.com/MaxSmile/premiumware-dev

### Purpose
- Simple marketing/portfolio site with animated hero and parallax portfolio grid.
- Reference example for keeping a company site open-source and agent-readable (MCP-friendly).

### Stack
- Next.js 16 / React 19
- Tailwind CSS 3
- Alpine.js for some interactive utilities (if needed in future)

### Quick start
```bash
npm install --force   # required to bypass peer dep noise on React 19
npm run dev
# open http://localhost:3000
```

### Scripts
- `npm run dev` – start local dev server
- `npm run build` – production build
- `npm run start` – serve built app
- `npm run lint` – run Next lint
- `npm run build-patch|build-minor|build-major` – bump version, regenerate `version.js`, build

### Notes
- Repo is intentionally public to make the company interface transparent and machine-consumable.
- Tailwind config lives in `tailwind.config.js`; global styles in `styles/globals.css`.
- Key pages/components are under `pages/` and `componenets/` (sic).
- MCP schemas and examples live in `docs/mcp-schemas.md`, `mcp/schema/`, `mcp/examples/` for agent consumption.

### Why open source (MCP angle)
- We want Premiumware to be an AI-readable company profile, not just a marketing site; openness makes the data model auditable.
- Serves as a reference pattern for MCP-ready companies (structure, exposure strategy, agent consumption).
- Transparency builds machine trust: anyone can see what data agents ingest and how it is structured.
- Open example others can fork for “company as structured data” playbooks.

### Marketing snapshot (free to reuse)
- “Premiumware Ltd’s site is open source to demonstrate how companies can expose structured truth to AI via MCP.”
- “Premiumware is not just a website; it’s an open MCP business interface with a human UI.”
- Positioning: AI-native, engineering-led, future-proofed for copilots, agents, procurement bots.

### TODO / roadmap
- Define MCP schema for company identity (public vs. private layers).
- Document agent access model and capability exposure.
- Add versioning strategy for MCP surface.
- Publish examples of services, team, projects as structured data.

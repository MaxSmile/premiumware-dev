## TODO

1. [x] Formalize MCP schema for company identity (services, team, projects, contact, offers).  
   details: define JSON schema + examples for each entity; store in repo.  
   outcome: agents can validate and consume consistent company data.

2. [ ] Split public vs. private data layers and document access gates.  
   details: mark fields as public/private; describe access rules; keep private out of repo.  
   outcome: clear boundaries for what agents/humans can see.

3. [ ] Ship example JSON/markdown payloads for agents (services, team, case studies).  
   details: include canonical examples matching the schema; version them.  
   outcome: ready-to-use payloads for agent integration demos.

4. [ ] Add lint/check for structured data drift (schema validation in CI).  
   details: run schema validation in CI; fail on drift.  
   outcome: MCP data stays in sync with definitions.

5. [ ] Publish MCP discovery doc for external agents (how to find and trust data).  
   details: link schemas, payload URLs, versioning, integrity/ETag info.  
   outcome: agents can self-discover and verify data.

6. [ ] Add deployment docs for keeping structured data in sync with the site.  
   details: describe build/deploy flow; how to update payloads with copy changes.  
   outcome: repeatable process to avoid stale data.

7. [ ] Update marketing text content (hero, services, portfolio blurbs) with the public positioning; ensure no private info is used.  
   details: rewrite key sections using approved messaging pillars; avoid client-sensitive data.  
   outcome: on-site copy matches public positioning and is safe to publish.

8. [ ] Publish a concise marketing plan in the repo (messaging pillars, CTA strategy, audience), fully public/no secrets.  
   details: add MARKETING.md with ICPs, offers, CTAs, tone.  
   outcome: transparent marketing plan others can reference.

9. [ ] Document how marketing copy maps to MCP payloads so agents and humans see the same narrative.  
   details: create a matrix mapping sections (hero/services/portfolio) to MCP fields.  
   outcome: aligned human and machine-readable messaging.

10. [ ] Add SEO meta tags per vasilkoff.com/blog/meta-tags guidance (title/description/keywords/open graph/twitter).  
    details: audit `_app`/`_document`/pages for meta coverage; add canonical URL.  
    outcome: complete meta coverage for crawlers and social previews.

11. [ ] Implement structured data (JSON-LD) for organization + website + breadcrumbs.  
    details: add schema.org markup in `_document` or page-level; include logo, contact, social links.  
    outcome: richer SERP presentation and better agent comprehension.

12. [ ] Ensure Open Graph/Twitter cards are correct for key pages.  
    details: set `og:title`, `og:description`, `og:image`, `twitter:card` with current branding.  
    outcome: consistent previews when shared.

13. [ ] Improve heading and content hierarchy for SEO readability.  
    details: ensure a single H1 per page; logical H2/H3; keyword-aligned copy.  
    outcome: better crawlability and accessibility.

14. [ ] Add sitemap.xml and robots.txt (with sitemap link).  
    details: generate/update on build; expose at root.  
    outcome: search engines discover pages reliably.

15. [ ] Performance and CWV check.  
    details: run Lighthouse; address LCP/CLS/INP; optimize hero media.  
    outcome: improved Core Web Vitals and SEO signals.

16. [ ] Internal linking and CTA flow.  
    details: add contextual links between sections; ensure clear CTAs to contact/portfolio.  
    outcome: better engagement and crawl depth.

17. [ ] Add alt text and captions for images.  
    details: ensure descriptive alt text for hero/portfolio images; optional captions.  
    outcome: accessibility and image SEO improvements.

18. [ ] Set canonical URLs and handle trailing slash/redirects.  
    details: configure `next.config.js` canonical host and redirects if needed.  
    outcome: avoid duplicate content issues.

19. [ ] Monitoring/reporting setup.  
    details: lightweight analytics and search console verification; privacy-safe.  
    outcome: visibility into traffic/queries to iterate on content.

20. [ ] Define ICPs and funnel entry points.  
    details: document primary audiences (e.g., AI-first startups, scale-ups needing product squads, enterprises needing pilot teams) and where they enter (organic, social, referrals).  
    outcome: clear who Premiumware serves and how they arrive.

21. [ ] Map top-of-funnel (TOF) assets.  
    details: plan blog/resources/mini-guides (e.g., “How to expose your company to AI via MCP”) and ensure meta/OG coverage.  
    outcome: attract qualified visitors with useful content.

22. [ ] Mid-funnel (MOF) trust builders.  
    details: publish case-study blurbs, team capabilities, tech stacks; add social proof and process overview.  
    outcome: visitors see credibility and delivery approach.

23. [ ] Bottom-funnel (BOF) conversion path.  
    details: add clear CTAs (book intro call, request proposal), short form, Calendly link, and concise offer summary.  
    outcome: reduce friction to contact/sales conversation.

24. [ ] Clarify Premiumware’s unique offer.  
    details: codify the marketing promise: AI-native, MCP-transparent company interface + senior product engineering teams; fast pilots with open artifacts.  
    outcome: differentiated positioning consistently reflected in site copy.

25. [ ] Add marketing attribution checkpoints.  
    details: tag CTAs/links; configure lightweight analytics to attribute TOF→MOF→BOF.  
    outcome: visibility into which channels and assets drive leads.

26. [ ] Create ICP-specific landing sections/pages.  
    details: tailor copy/CTAs for each ICP (startup, scale-up, enterprise) with relevant proof points.  
    outcome: higher conversion from aligned messaging.

27. [ ] Add social proof and testimonials.  
    details: publish client quotes (approved), logos, brief outcomes; avoid sensitive data.  
    outcome: increased credibility and trust.

28. [ ] Publish 2–3 flagship case studies.  
    details: short narrative (problem → approach → result), tech stack, timeline, team size.  
    outcome: concrete evidence of delivery capability.

29. [ ] Launch a lead magnet / resource.  
    details: e.g., “MCP readiness checklist” PDF/guide; gated with minimal form.  
    outcome: capture qualified emails and start nurture.

30. [ ] Set up email nurture/drip for captured leads.  
    details: 3–5-email sequence: intro, value proof, offer, call booking.  
    outcome: move leads from TOF to BOF.

31. [ ] Add scheduler integration (Calendly or similar).  
    details: embed booking widget on CTAs; include timezones.  
    outcome: reduce friction to book intro calls.

32. [ ] Launch simple retargeting pixels (privacy-safe).  
    details: add consented pixels for major channels; respect privacy/opt-out.  
    outcome: ability to re-engage visitors who bounced.

33. [ ] CRO audit for key pages.  
    details: review above-the-fold messaging, CTA placement, form length; A/B test if needed; prepare the documtation and manuals. Create public pages with insights info.    
    outcome: higher conversion rate on traffic acquired.

34. [ ] Content calendar for blog/resources.  
    details: plan topics (MCP, AI-native ops, delivery playbooks), keywords, publishing cadence, setup firebase function with Gemini SDK backend for automations; prepare the documtation and manuals.  
    outcome: sustained organic acquisition.

35. [ ] UTM/tagging governance.  
   details: standardize UTM params for campaigns; document naming, prepare the documtation and manuals.   
   outcome: clean attribution data.

36. [ ] Define KPIs and reporting cadence.  
   details: set targets for traffic, conversion, lead quality, time-to-call; weekly/monthly review, prepare the documtation and manuals.  
   outcome: measurable progress and faster iteration.

37. [x] UI/UX redesign inspired by reactheme Invena business-partner theme.  
    details: refresh layout, typography, hero, services, CTA blocks, and portfolio to match the referenced design direction; ensure responsive/mobile fidelity and keep existing brand colors/assets.  
    outcome: modern, spacious marketing site ready for future content growth.
    Copy color, fonts, layouts, sections, other styles and animations from design-example folder next to this TODO file

38. [ ] Build out page stubs from navigation.  
    details: create real pages/sections for nav items (About, Services detail, Projects/Case Studies, Team, Gallery) consistent with copy and MCP payloads.  
    outcome: navigation points to real content instead of placeholders.

39. [ ] Add legal pages.  
    details: add Privacy Policy, Terms of Service, and Cookie Notice pages; link from footer and include in sitemap/robots.  
    outcome: compliance basics covered and discoverable.

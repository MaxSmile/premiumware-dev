import Layout from "@/_components/Layout";
import PageHero from "@/_components/PageHero";

const services = [
  {
    title: "Product Delivery",
    desc: "Cross-functional squads shipping web and mobile products with design, frontend, backend, QA, and DevOps included.",
    bullets: ["Sprint-based releases", "Reliability and performance focus", "Production-ready handover"],
  },
  {
    title: "AI & MCP Enablement",
    desc: "Make your company AI-readable with MCP-ready schemas, payloads, and UI surfaces that mirror structured truth.",
    bullets: ["Schema and payload design", "Pilot sprints for MCP", "Agent-first experience audits"],
  },
  {
    title: "Embedded Engineering",
    desc: "Senior engineers and leads augmenting your team to accelerate delivery without extra overhead.",
    bullets: ["Technical leadership", "Hands-on build and review", "Documentation and knowledge transfer"],
  },
];

export default function ServicesPage() {
  return (
    <Layout
      title="Services | Premiumware"
      description="Premiumware services: product delivery, AI/MCP enablement, and embedded engineering teams."
    >
      <PageHero
        eyebrow="Services"
        title="How we partner with you"
        description="From pilot sprints to long-term squads, we design, build, and document products so humans and agents share the same source of truth."
      />

      <section className="bg-white py-16 px-6 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-animate
              data-animate-delay={index * 120}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 shadow-lg shadow-slate-100/70 p-8 flex flex-col gap-4"
            >
              <div className="text-lg font-semibold text-slate-900">{service.title}</div>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              <ul className="text-slate-700 text-sm space-y-2 mt-2">
                {service.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 px-6 lg:px-16 xl:px-24" data-animate>
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Engagement models</h2>
          <p className="text-slate-600 leading-relaxed">
            Pilot sprints for validation, dedicated squads for ongoing delivery, or embedded leads to uplevel your team.
          </p>
        </div>
      </section>
    </Layout>
  );
}

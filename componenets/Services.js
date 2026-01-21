export default function Services() {
  const services = [
    {
      title: "Product Delivery",
      desc: "Cross-functional squads shipping web and mobile releases with design, frontend, backend, and QA baked in.",
      items: ["Sprint-based delivery", "Reliability & performance focus", "Production-readiness every increment"],
    },
    {
      title: "AI & MCP Enablement",
      desc: "Expose your company to agents with MCP-ready payloads and UI surfaces that mirror structured truth.",
      items: ["Schema + payload design", "Pilot sprints for MCP", "Agent-first experience audits"],
    },
    {
      title: "Embedded Engineering",
      desc: "Senior engineers and leads augmenting your team to accelerate delivery without overhead.",
      items: ["Technical leadership", "Hands-on build & review", "Knowledge transfer and docs"],
    },
  ];

  return (
    <section className="bg-white py-20 px-6 lg:px-16 xl:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 mb-12" data-animate>
          <p className="text-primary uppercase tracking-[0.2em] text-sm">What we do</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Senior teams delivering AI-native products and MCP transparency.
          </h2>
          <p className="text-slate-600 max-w-3xl">
            We blend product thinking with robust engineering to ship reliably. From pilots to long-term squads,
            every engagement leaves behind clear documentation and agent-readable artifacts.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              data-animate
              data-animate-delay={index * 100}
              className="h-full rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 shadow-lg shadow-slate-100/70 p-8 flex flex-col gap-4 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
            >
              <div className="text-lg font-semibold text-slate-900">{service.title}</div>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              <ul className="text-slate-700 text-sm space-y-2 mt-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-primary"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

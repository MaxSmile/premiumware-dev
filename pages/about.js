import Layout from "@/_components/Layout";
import PageHero from "@/_components/PageHero";

export default function About() {
  return (
    <Layout
      title="About Premiumware"
      description="Learn about Premiumware Ltd and our AI-native, MCP-transparent delivery approach."
    >
      <PageHero
        eyebrow="About"
        title="Premiumware Ltd"
        description="Premiumware delivers AI-native products with MCP transparency. We combine design, engineering, and clear documentation so humans and agents see the same truth about what we build and how we operate."
      />

      <section className="bg-white py-16 px-6 lg:px-16 xl:px-24">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
          <div className="space-y-4" data-animate>
            <h2 className="text-2xl font-semibold text-slate-900">What we value</h2>
            <p className="text-slate-600 leading-relaxed">
              Delivery speed with reliability, transparent artifacts, and collaborative teams. Every engagement aims to leave behind
              maintainable systems and documented knowledge.
            </p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2"><span className="mt-[6px] h-2 w-2 bg-primary rounded-full" /> Agent-readable documentation and MCP payloads.</li>
              <li className="flex items-start gap-2"><span className="mt-[6px] h-2 w-2 bg-primary rounded-full" /> Cross-functional squads with design + engineering.</li>
              <li className="flex items-start gap-2"><span className="mt-[6px] h-2 w-2 bg-primary rounded-full" /> Production readiness and handover playbooks.</li>
            </ul>
          </div>
          <div className="space-y-4" data-animate data-animate-delay={120}>
            <h2 className="text-2xl font-semibold text-slate-900">Where we are</h2>
            <ul className="space-y-3 text-slate-700">
              <li><strong>UK:</strong> 20-22 Wenlock Road, London, England, N1 7GU</li>
              <li><strong>Cyprus:</strong> Glaston os 12, 2nd Floor, Paphos 8046</li>
              <li><strong>Registration:</strong> Premiumware Ltd (Reg. #12887880)</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

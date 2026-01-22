import Layout from "@/_components/Layout";
import PageHero from "@/_components/PageHero";

const team = [
  { name: "Lead Frontend Engineer", role: "Frontend Lead", blurb: "8+ years building production web apps with React/Next.js and leading squads." },
  { name: "Product Designer", role: "UX/UI", blurb: "Design systems, accessibility, and delivery-ready handoff." },
  { name: "Backend Lead", role: "Backend/Cloud", blurb: "APIs, data, and cloud with performance and reliability focus." },
];

export default function TeamPage() {
  return (
    <Layout
      title="Team | Premiumware"
      description="Meet Premiumware’s cross-functional delivery team and leads."
    >
      <PageHero
        eyebrow="Team"
        title="People who ship with you"
        description="Designers, engineers, and leads who work as one squad — focused on outcomes, reliability, and transparent documentation."
      />

      <section className="bg-white py-16 px-6 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={member.name}
              data-animate
              data-animate-delay={index * 100}
              className="rounded-2xl border border-slate-200 bg-white shadow-md shadow-slate-100 p-6 flex flex-col gap-2"
            >
              <div className="text-lg font-semibold text-slate-900">{member.name}</div>
              <div className="text-primary text-sm uppercase tracking-[0.15em]">{member.role}</div>
              <p className="text-slate-600 text-sm leading-relaxed">{member.blurb}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

import Head from "next/head";

const team = [
  { name: "Lead Frontend Engineer", role: "Frontend Lead", blurb: "8+ years building production web apps with React/Next.js and leading squads." },
  { name: "Product Designer", role: "UX/UI", blurb: "Design systems, accessibility, and delivery-ready handoff." },
  { name: "Backend Lead", role: "Backend/Cloud", blurb: "APIs, data, and cloud with performance and reliability focus." },
];

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Team | Premiumware</title>
        <meta name="description" content="Meet Premiumware’s cross-functional delivery team and leads." />
      </Head>

      <section className="bg-slate-900 text-white pt-36 pb-16 px-6 lg:px-16 xl:px-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-4" data-animate>
          <p className="text-primary uppercase tracking-[0.2em] text-sm">Team</p>
          <h1 className="text-3xl lg:text-4xl font-bold">People who ship with you</h1>
          <p className="text-slate-200 leading-relaxed">
            Designers, engineers, and leads who work as one squad — focused on outcomes, reliability, and transparent documentation.
          </p>
        </div>
      </section>

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
    </>
  );
}

import Layout from "@/_components/Layout";
import PageHero from "@/_components/PageHero";

const projects = [
  {
    title: "Garantex",
    subtitle: "Crypto wallet with portfolio management",
    description:
      "Delivered a secure wallet with exchange flows, audited integrations, and a streamlined KYC onboarding experience.",
    tags: ["Fintech", "Crypto", "Next.js", "Node.js"],
  },
  {
    title: "Assistant Dashboard",
    subtitle: "Everyday assistant dashboard",
    description:
      "Built a daily-assistant dashboard with gamified bonuses, notifications, and responsive UI across devices.",
    tags: ["SaaS", "Dashboards", "Responsive UI"],
  },
  {
    title: "Meditation App",
    subtitle: "Guided meditation playlists",
    description:
      "Designed and built a mobile-first meditation experience with playlists, courses, and progress tracking.",
    tags: ["Mobile-first", "Content", "Engagement"],
  },
  {
    title: "Hydration Tracker",
    subtitle: "Health tracking concept",
    description:
      "Concepted and prototyped a hydration and heart-rate tracker with friendly UX and clear health insights.",
    tags: ["Health", "Mobile", "Prototype"],
  },
];

export default function ProjectsPage() {
  return (
    <Layout
      title="Projects | Premiumware"
      description="Premiumware projects and case studies across web, mobile, and AI-native products."
    >
      <PageHero
        eyebrow="Projects"
        title="Selected work"
        description="Web and mobile delivery with production-ready engineering, clear UX, and MCP-friendly documentation."
      />

      <section className="bg-white py-16 px-6 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-animate
              data-animate-delay={index * 120}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200/60 border border-slate-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={`/img${(index % 4) + 1}.jpeg`}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="text-sm text-primary uppercase tracking-[0.2em]">{project.title}</div>
                <div className="text-xl font-semibold text-slate-900">{project.subtitle}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

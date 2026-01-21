const projects = [
  {
    img: "/img1.jpeg",
    title: "Garantex",
    subtitle: "Crypto wallet with portfolio management",
    description:
      "Shipped a secure wallet with exchange flows, audited integrations, and a streamlined KYC onboarding experience.",
    tags: ["Fintech", "Crypto", "Next.js", "Node.js"],
  },
  {
    img: "/img2.jpeg",
    title: "Assistant Dashboard",
    subtitle: "Everyday assistant dashboard",
    description:
      "Built a daily-assistant dashboard with gamified bonuses, notifications, and responsive UI across devices.",
    tags: ["SaaS", "Dashboards", "Responsive UI"],
  },
  {
    img: "/img3.jpeg",
    title: "Meditation App",
    subtitle: "Guided meditation playlists",
    description:
      "Designed and built a mobile-first meditation experience with playlists, courses, and progress tracking.",
    tags: ["Mobile-first", "Content", "Engagement"],
  },
  {
    img: "/img4.jpeg",
    title: "Hydration Tracker",
    subtitle: "Health tracking concept",
    description:
      "Concepted and prototyped a hydration and heart-rate tracker with friendly UX and clear health insights.",
    tags: ["Health", "Mobile", "Prototype"],
  },
];

export default function Portfolio() {
  return (
    <section className="bg-slate-50 py-20 px-6 lg:px-16 xl:px-24" id="portfolio">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 mb-12" data-animate>
        <p className="text-primary uppercase tracking-[0.2em] text-sm">Selected work</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Recent projects and prototypes.</h2>
        <p className="text-slate-600 max-w-3xl">
          Product delivery across web and mobile — pairing thoughtful UX with solid engineering so releases are
          production-ready and easy to hand over.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            data-animate
            data-animate-delay={index * 120}
            className="group relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200/60 border border-slate-100"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.img}
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
  );
}

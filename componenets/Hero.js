import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(253,144,38,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_50%_60%,rgba(255,255,255,0.08),transparent_45%)]" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-16 xl:px-24 py-24 lg:py-28 relative">
        <div className="flex flex-col gap-6" data-animate>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-primary" />
            AI-native squads • MCP transparency
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Build products with teams that ship fast and keep your company open to AI agents.
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl leading-relaxed">
            Premiumware blends product thinking, senior engineering, and MCP-ready documentation so humans and agents
            see the same truth across your brand, services, and delivery.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book an intro call
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              View services
            </a>
          </div>
          <div className="flex flex-wrap gap-6 pt-4 text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Pilot in 2 weeks
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Design + build + handover
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              MCP-ready artifacts
            </div>
          </div>
        </div>

        <div className="relative" data-animate data-animate-delay={150}>
          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur p-6 shadow-2xl shadow-black/30">
            <Image
              src="/hero.jpg"
              alt="Premiumware work"
              width={1200}
              height={800}
              className="rounded-2xl object-cover w-full h-full"
              priority
            />
          </div>
          <div className="absolute -left-6 -bottom-6 bg-primary text-slate-900 rounded-2xl px-5 py-4 shadow-lg shadow-primary/40">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-800">Snapshot</div>
            <div className="text-lg font-semibold">Product squads • MCP pilots</div>
            <div className="text-sm text-slate-800">Design, engineering, and agent-ready docs.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

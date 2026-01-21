export default function Contacts() {
  return (
    <section className="bg-slate-900 text-white py-20 px-6 lg:px-16 xl:px-24" id="contact">
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 items-center">
        <div className="space-y-4" data-animate>
          <p className="text-primary uppercase tracking-[0.2em] text-sm">Let’s talk</p>
          <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
            Ready for a pilot or need a squad to ship your roadmap?
          </h3>
          <p className="text-slate-200 leading-relaxed">
            We’ll align on outcomes, team shape, and timelines — and keep everything agent-readable for transparency.
          </p>
          <div className="grid gap-3 text-slate-100">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span>Phone: +357 99169229</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span>Email: sp@premiumware.dev</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span>Response within one business day.</span>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/30" data-animate data-animate-delay={120}>
          <div className="text-lg font-semibold mb-3">Start a conversation</div>
          <p className="text-slate-200 text-sm mb-6">
            Share a few lines about your product or pilot needs. We’ll propose a squad or a 2-week MCP pilot.
          </p>
          <a
            href="mailto:sp@premiumware.dev?subject=Premiumware%20Project%20Inquiry"
            className="inline-flex items-center justify-center w-full rounded-full bg-primary text-slate-900 font-semibold px-5 py-3 shadow-lg shadow-primary/40 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Email Premiumware
          </a>
          <p className="text-xs text-slate-300 mt-4">
            Prefer a call? Reach us at +357 99169229 or request a calendar link via email.
          </p>
        </div>
      </div>
    </section>
  );
}

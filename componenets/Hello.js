import Image from "next/image";

export default function Hello() {
  return (
    <section className="bg-white py-20 px-6 lg:px-16 xl:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4" data-animate>
          <p className="text-primary uppercase tracking-[0.2em] text-sm">Design leadership</p>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">Hello! I’m Natalia, leading UX at Premiumware.</h3>
          <p className="text-slate-600 leading-relaxed">
            UI/UX Designer, Illustrator, and Graphic Designer working directly with engineering to ensure feasibility and
            correct implementation. I keep designs modern, intentional, and ready for production without surprises.
          </p>
          <div className="grid gap-3 text-slate-700">
            <div className="flex items-start gap-2">
              <span className="mt-[6px] h-2 w-2 rounded-full bg-primary" />
              <span>Hands-on with squads from discovery to delivery.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-[6px] h-2 w-2 rounded-full bg-primary" />
              <span>Design systems, accessibility, and micro-interactions baked in.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-[6px] h-2 w-2 rounded-full bg-primary" />
              <span>Close collaboration with frontend to keep fidelity high.</span>
            </div>
          </div>
        </div>
        <div className="relative" data-animate data-animate-delay={150}>
          <div className="rounded-3xl bg-slate-50 border border-slate-100 shadow-lg shadow-slate-200 overflow-hidden">
            <Image src="/natalia.jpg" alt="Natalia Lebedeva" width={600} height={600} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -left-4 -bottom-4 rounded-2xl bg-primary text-slate-900 px-5 py-4 shadow-lg shadow-primary/40">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-800">Design + Delivery</div>
            <div className="text-sm font-semibold">UX that ships with engineering</div>
          </div>
        </div>
      </div>
    </section>
  );
}

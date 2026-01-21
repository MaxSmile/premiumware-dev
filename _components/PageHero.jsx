export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="bg-slate-900 text-white pt-36 pb-16 px-6 lg:px-16 xl:px-24">
      <div className="max-w-5xl mx-auto flex flex-col gap-4" data-animate>
        {eyebrow && <p className="text-primary uppercase tracking-[0.2em] text-sm">{eyebrow}</p>}
        {title && <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>}
        {description && <p className="text-slate-200 leading-relaxed">{description}</p>}
      </div>
    </section>
  );
}

import Head from "next/head";

const images = ["/img1.jpeg", "/img2.jpeg", "/img3.jpeg", "/img4.jpeg"];

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Gallery | Premiumware</title>
        <meta name="description" content="Gallery of Premiumware design and product snapshots." />
      </Head>

      <section className="bg-slate-900 text-white pt-36 pb-16 px-6 lg:px-16 xl:px-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-4" data-animate>
          <p className="text-primary uppercase tracking-[0.2em] text-sm">Gallery</p>
          <h1 className="text-3xl lg:text-4xl font-bold">Snapshots of our work</h1>
          <p className="text-slate-200 leading-relaxed">Design and product visuals from recent projects and concepts.</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, index) => (
            <div
              key={src}
              data-animate
              data-animate-delay={index * 90}
              className="overflow-hidden rounded-2xl shadow-md shadow-slate-100 border border-slate-100"
            >
              <img src={src} alt={`Gallery item ${index + 1}`} className="w-full h-full object-cover transition duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

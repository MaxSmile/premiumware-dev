import Layout from "@/_components/Layout";
import PageHero from "@/_components/PageHero";

const images = ["/img1.jpeg", "/img2.jpeg", "/img3.jpeg", "/img4.jpeg"];

export default function GalleryPage() {
  return (
    <Layout
      title="Gallery | Premiumware"
      description="Gallery of Premiumware design and product snapshots."
    >
      <PageHero
        eyebrow="Gallery"
        title="Snapshots of our work"
        description="Design and product visuals from recent projects and concepts."
      />

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
    </Layout>
  );
}

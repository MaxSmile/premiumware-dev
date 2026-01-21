import Image from "next/image";

export default function Header() {
    return (
        <header className="absolute inset-x-0 top-0 z-40">
            <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 lg:px-16 xl:px-24 py-6" aria-label="Global">
                <div className="flex items-center gap-8">
                    <a href="/" className="p-1.5">
                        <span className="sr-only">Premiumware</span>
                        <Image src="/premiumware_logo.png" alt="Premiumware" width={200} height={38} />
                    </a>
                    <div className="hidden lg:flex items-center gap-6 text-white text-sm font-semibold">
                        <a href="/about" className="hover:text-primary transition">About</a>
                        <a href="/services" className="hover:text-primary transition">Services</a>
                        <a href="/projects" className="hover:text-primary transition">Projects</a>
                        <a href="/team" className="hover:text-primary transition">Team</a>
                        <a href="/gallery" className="hover:text-primary transition">Gallery</a>
                    </div>
                </div>
                <div className="hidden lg:flex items-center gap-3">
                    <a href="#contact" className="text-white text-sm font-semibold hover:text-primary transition">Contact</a>
                    <a
                        href="/services"
                        className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-slate-900 shadow-md shadow-primary/30 hover:-translate-y-0.5 transition"
                    >
                        View services
                    </a>
                </div>
            </nav>
        </header>
    );
}

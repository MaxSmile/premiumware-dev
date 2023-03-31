import Image from "next/image";

export default function Header() {
    return (
        <header className="absolute">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="ml-20 my-10 p-1.5">
                        <span className="sr-only">Premiumware</span>
                        <Image src="/premiumware_logo.png" alt="Premiumware" width={240} height={45} />
                    </a>
                </div>
            </nav>
        </header>
    );
}
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-14 bg-black  text-white">
            <div className="grid gap-y-10 gap-x-8 grid-cols-2">
                <div>
                    <p className="py-4">
                        <strong>Premiumware Ltd (Reg.#12887880)</strong> is a top-tier company that specializes in delivering high-quality software development services. Their team of experienced professionals is dedicated to crafting exceptional digital solutions tailored to clients' needs, ensuring that each project meets the highest standards. For those seeking premium software development, Premiumware is an excellent choice.
                    </p>

                </div>


                <div>
                    <ul className="flex flex-col">
                        <li className="text-lg font-bold">UK</li>
                        <li className="mb-3">20-22 Wenlock Road, London, England, N1 7GU</li>
                        <li className="text-lg font-bold">Cyprus</li>
                        <li>Glastonos 12, 2nd Floor, Paphos 8046</li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}
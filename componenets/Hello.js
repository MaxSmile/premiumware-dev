import Image from "next/image";
import Hover from 'react-3d-hover';

export default function Hello() {
    return (
        <div className="bg-gray-100 text-sky p-3 px-10 lg:px-40">
            <div className="grid gap-y-10 gap-x-8 grid-cols-1 lg:grid-cols-2">
                <div className="py-10">
                    <div className="text-semibold text-3xl lg:text-5xl my-10">Hello! 👋</div>

                    <div className="text-gray-500 text-lg font-thin">
                        <p>
                            My name is Natalia Lebedeva 🙂
                        </p>
                        <p className="mb-10">
                            I am a UI/UX Designer, Illustrator and Graphic Designer. I am always working closely with the web or mobile development team to ensure technical feasibility and correct design implementations .
                        </p>
                        <p>
                            Producing at the sweet spot between modernism and sustainability to create not just a design, but a feeling.
                        </p>
                    </div>
                </div>


                <div>
                    <Hover>
                        <Image src="/natalia.jpg" alt="Natalia Lebedieva" width={505} height={505} />
                    </Hover>
                </div>

            </div>
        </div>
    );
}
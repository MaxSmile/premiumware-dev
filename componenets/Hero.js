import Image from "next/image";


export default function Hero() {


  return (
    <>
      <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] items-center justify-center font-bold ">
        
          <div class="text-center my-40 text-5xl font-semibold px-8 lg:px-20 leading-relaxed">
            Our professional team will help you to create
            <div class="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden text-primary">
              <span class="animate-word col-span-full row-span-full">Websites</span>
              <span class="animate-word-delay-1 col-span-full row-span-full">Mobile Apps</span>
              <span class="animate-word-delay-2 col-span-full row-span-full">Branding</span>
            </div>
          </div>
          <div className="h-full bg-hero invisible lg:visible"></div>
      </div>
      <div className="bg-black text-white py-20 text-center flex items-center justify-center">
        <div className="lg:max-w-[50%] leading-relaxed text-2xl">
        “What really turned me over was the ability to understand
        how everything works without any prior knowledge.”
        </div>
        
      </div>
    </>

  )
}
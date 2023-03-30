import Image from "next/image";


export default function Hero() {


  return (
    <>
      <div class="grid grid-cols-2 min-h-screen items-center justify-center font-bold ">
        
          <div class="text-center text-5xl font-semibold px-20">
            Our professional team will help you to create
            <div class="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
              <span class="animate-word col-span-full row-span-full">Websites</span>
              <span class="animate-word-delay-1 col-span-full row-span-full">Mobile Apps</span>
              <span class="animate-word-delay-2 col-span-full row-span-full">Branding</span>
            </div>
          </div>
          <div class="h-full bg-hero"></div>

        
      </div>
      <div className="bg-black text-white py-20 text-center font-semibold">
        “What really turned me over was the ability to understand
        how everything works without any prior knowledge.”
      </div>
    </>

  )
}
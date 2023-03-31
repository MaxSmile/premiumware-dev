import { useEffect, useRef, useState } from "react";
import ReactWavePath from "./ReactWavePath";


const projects = [
    {
        img: "/img1.jpeg",
        title: "Garantex",
        subtitle: "Garantex is a crypto wallet that allows you to manage your crypto portfolio.",
        description: "The easiest & secure way to send, receive & exchange cryptocurrency. Control & manage your digital assets while you're on the move. Take full control of your tokens everywhere.",
    },
    {
        img: "/img2.jpeg",
        title: "Assistant",
        subtitle: "Dashboard, assistant for every day, help you accomplish common tasks quickly.",
        description: "A tone of bonuses are waiting for you! Earn bonuses with your friends, improve your gaming experience, and get exclusive items!",
    },
    {
        img: "/img3.jpeg",
        title: "Meditation app",
        subtitle: "Meditation app that helps you to reach your goals.",
        description: "You have many options - you can choose your favourite individual meditations, create a playlist, or even take a course consisting of meditations on the same topic. Whichever option you choose - with our meditations you will always be in a good mood, healthy, cheerful, and full of energy.",
    },
    {
        img: "/img4.jpeg",
        title: "Hydration app",
        subtitle: "Hydration tracker and heart rate measurement mobile concept.",
        description: "Connect with your body! You can check your heart rate during sports, physical activity and rest. Schedule a time to take your heart rate to be sure of your health.",
    }

]

export default function Portfolio() {
    const firstColumnRef = useRef(null);
  
    const handleScroll = () => {
      const firstColumnRect = firstColumnRef.current.getBoundingClientRect();
      const firstColumnTop = firstColumnRect.top + window.scrollY;
      const firstColumnBottom = firstColumnTop + firstColumnRect.height;
  
      if (scrollY >= firstColumnTop && scrollY <= firstColumnBottom) {
        const parallaxContainer = document.querySelector('.parallax-container');
        parallaxContainer.style.transform = `translateY(${(firstColumnTop - scrollY) * 0.3}px)`;
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className="bg-white text-sky p-10 lg:p-40">
        <div className="grid gap-y-10 gap-x-8 grid-cols-1 lg:grid-cols-2">
          <div
            ref={firstColumnRef}
            className="w-full lg:w-1/2 lg:relative lg:h-screen lg:overflow-hidden"
          >
            <div className="parallax-container sticky-images">
              <div
                className="parallax-image"
                style={{
                  width: '300px',
                  height: '285px',
                  clipPath: 'url(#ReactWavePath)',
                  backgroundImage: `url(${projects[0].img})`,
                }}
              ></div>
            </div>
          </div>
  
          <div className="lg:ml-1/2 lg:pl-1/2">
            {projects.map((project, index) => (
              <div key={index} className="py-8 m-10">
                <div className="text-gray-500">{project.title}</div>
                <div className="text-4xl my-10">{project.subtitle}</div>
                <p className="leading-relax">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
        <ReactWavePath />
      </div>
    );
  }
  


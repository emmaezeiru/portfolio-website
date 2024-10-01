import Image from "next/image";
import Link from "next/link";
import { contactLinks } from "./constants";
import cloud from "../public/cloudBg.png"
import webd from "../public/webdev.svg"
import About from "./about/page";
import Services from "./services/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div>
    <div
      style={{
      backgroundImage: `url(${cloud.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw',
      }}
    >
      <main class="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
        id="/"
      >
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
              Hi, I am Emma
            <div class="overflow-hidden relative w-[300px]">
              <span class="block text-blue-500 z-0 lg:inlineabsolute animate-loop-text">Backend Developer </span>
            </div>
          </h1>
          <p class="mt-3 text-base text-black sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">I am a Backend / Full-Stack Developer</p>
          <div class="flex md:justify-start">
            {contactLinks.map((el, index) => (
              <Link 
                key={index} 
                href={el.link} 
                className="mr-5 cursor-pointer mt-8 hover:scale-125"
              >
                <Image 
                  alt={el.name || "Contact Link"} 
                  src={el.url}
                  width={40} 
                  height={40}
                />
              </Link>
            ))}
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <button class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 md:py-4 md:text-lg md:px-10">
                  Resume
                </button>
              </div>
            </div>
        </div>
        <div
          style={{
          backgroundImage: `url(${webd.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'cover',
          height: '95vh',
          width: '60vw',
          position: 'relative'
          }}
          class="hidden lg:block"
        ></div>
      </main>
    </div>
    <About />
    <Services />
    <Projects />
    <Contact />
    </div>
  );
}

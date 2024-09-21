import Image from "next/image";
import Link from "next/link";
import { contactLinks } from "./constants";


export default function Home() {
  return (
    <div>
      <main class="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
        id="/"
      >
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-black sm:text-5xl md:text-6xl">
              Hi, I am Emma
            <div class="overflow-hidden relative w-[200px]">
              <span class="block text-blue-500 z-0 lg:inlineabsolute animate-loop-text">Backend Developer</span>
            </div>
          </h1>
          <p>I am a Backend / Full-Stack Developer</p>
          <div class="flex md:justify-start">
          {contactLinks.map((el, index) => (
            <Link 
              key={index} 
              href={el.link} 
              className="mr-5 cursor-pointer mt-8 hover:scale-125"
            >
              <Image 
                alt={el.name || "Contact Link"} // Provide a meaningful alt or fallback
                src={el.url} // Assuming `el.url` contains the image path
                width={50} // Adjust width
                height={50} // Adjust height
              />
            </Link>
          ))}

            <button>Resume</button>
          </div>
        </div>
      </main>
    </div>
  );
}
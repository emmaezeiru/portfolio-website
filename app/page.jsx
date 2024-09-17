import Image from "next/image";
import Link from "next/link";

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
          <div>
            <Link href="#">
            </Link>
            <Link href="#">
            </Link>
            <Link href="#">
            </Link>
            <Link href="#">
            </Link>
            <button>Resume</button>
          </div>
        </div>
      </main>
    </div>
  );
}
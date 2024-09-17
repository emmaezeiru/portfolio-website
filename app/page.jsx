import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion ';

export default function Home() {
  return (
    <div>
      <main class="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
        id="/"
      >
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-black sm:text-5xl md:text-6xl">
            Hi, I am Emma
          </h1>
          <p>I am a backend / Full-Stack Developer</p>
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
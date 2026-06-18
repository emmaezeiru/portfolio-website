import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Architecture from "./components/sections/Architecture";
import Skills from "./components/sections/Skills";
import Trust from "./components/sections/Trust";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Architecture />
      <Skills />
      {/* <Trust /> */}
      <Contact />
    </main>
  );
}

import Homepage from "./home/page";
import About from "./about/page";
import Services from "./services/page";
import Projects from "./projects/page";
import Contact from "./contact/page";


export default function Home() {
  return (
      <main class="overflow-x-hidden">
        <Homepage />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
  );
}

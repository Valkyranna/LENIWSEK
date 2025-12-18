import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Music from "@/components/Music";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-white selection:text-black font-sans">
      <Navigation />
      <main>
        <Hero />
        <Music />
        <About />
        <Contact />
      </main>
    </div>
  );
}

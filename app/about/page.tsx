import Navigation from "@/components/Navigation";
import About from "@/components/About";

export default function AboutPage() {
    return (
        <div className="bg-[#050505] min-h-screen text-white selection:bg-white selection:text-black font-sans">
            <Navigation />
            <main className="pt-24">
                <About />
            </main>
        </div>
    );
}

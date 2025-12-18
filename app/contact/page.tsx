import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";

export default function ContactPage() {
    return (
        <div className="bg-[#050505] min-h-screen text-white selection:bg-white selection:text-black font-sans">
            <Navigation />
            <main className="pt-24">
                <Contact />
            </main>
        </div>
    );
}

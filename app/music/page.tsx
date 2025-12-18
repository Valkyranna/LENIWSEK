import Navigation from "@/components/Navigation";
import Music from "@/components/Music";

export default function MusicPage() {
    return (
        <div className="bg-[#050505] min-h-screen text-white selection:bg-white selection:text-black font-sans">
            <Navigation />
            <main className="pt-24">
                <Music />
            </main>
        </div>
    );
}

import HeroText from "../../components/HeroText";

const SCROLL_TEXT = "昔々、ずっと昔に灰燼に帰した土地に、王国を愛する若い王女が住んでいました";
const CHARS = SCROLL_TEXT.split("");
const REPEAT_COUNT = 3;

export default function Home() {
    return (
        <section className="bg-[#0D0B0A] min-h-dvh p-4 lg:p-8 relative" id="home-div">
            <aside className="fixed top-0 left-5 h-screen overflow-hidden hidden lg:flex items-center z-50 text-6xl pointer-events-none">
                <div className="vertical-scroll flex flex-col items-center text-[#f0c6a6f1]">
                    {Array.from({ length: REPEAT_COUNT }).map((_, loopIndex) => (
                        CHARS.map((char, charIndex) => (
                            <span key={`${loopIndex}-${charIndex}`}>{char}</span>
                        ))
                    ))}
                </div>
            </aside>

            <main className="h-[90vh] flex items-center justify-center lg:ml-20">
                <HeroText />
            </main>
        </section>
    );
}
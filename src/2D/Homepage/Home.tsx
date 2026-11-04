import HeroText from "../../components/HeroText";

const SCROLL_TEXT = "昔々、ずっと昔に灰燼に帰した土地に、王国を愛する若い王女が住んでいました";
const CHARS = SCROLL_TEXT.split("");
const REPEAT_COUNT = 3;

export default function Home() {
  return (
    <section className="min-h-dvh relative" id="home-div">
      <aside className="fixed top-0 left-3 h-screen overflow-hidden hidden lg:flex items-center z-40 pointer-events-none">
        <div className="vertical-scroll flex flex-col items-center text-ink text-lg leading-none">
          {Array.from({ length: REPEAT_COUNT }).map((_, loopIndex) =>
            CHARS.map((char, charIndex) => (
              <span key={`${loopIndex}-${charIndex}`}>{char}</span>
            )),
          )}
        </div>
      </aside>

      <div className="min-h-dvh flex items-center px-6 sm:px-10 lg:pl-24 lg:pr-16 pt-28 pb-16">
        <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] gap-6 items-center">
          <HeroText />
          <img
            src="/images/chloe_mat.png"
            alt="Illustration of Chloe at a laptop, with a DJ deck, a dog, and bamboo"
            className="ink-print w-full max-w-lg mx-auto lg:max-w-none select-none"
          />
        </div>
      </div>
    </section>
  );
}

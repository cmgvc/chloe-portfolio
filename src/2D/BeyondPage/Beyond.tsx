import StatusBadge from "../../components/StatusBadge";
import { books } from "../../data/books";
import { useState, useEffect } from "react";

export default function Beyond({ onBack }: { onBack: () => void }) {
  const [showButton, setShowButton] = useState(false);
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => setShowButton(window.scrollY > 300);

    const handleMouseMove = () => {
      setIsIdle(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsIdle(true), 3000);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    timeout = setTimeout(() => setIsIdle(true), 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const showNav = showButton && !isIdle;

  return (
    <div className="min-h-screen text-ink pt-28 pb-16 px-6 sm:px-10 flex flex-col items-center">
      <div className="w-full max-w-4xl flex justify-start mb-10">
        <button
          onClick={onBack}
          className="text-[11px] tracking-[0.22em] uppercase text-clay hover:text-ink transition-colors"
        >
          ← Back
        </button>
      </div>

      <div className="w-full max-w-4xl mb-14 text-left">
        <h1 className="font-display text-5xl md:text-7xl font-medium mb-6 leading-[0.95] text-ink">
          Beyond the terminal.
        </h1>
        <p className="text-lg text-mist max-w-2xl leading-relaxed">
          The work lives on the main page. This is the rest of what I take
          seriously — books, travel, and the hobbies that don’t fit in a job
          description.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div
          onClick={() =>
            document
              .getElementById("my-library-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="md:col-span-2 bg-sand/60 p-8 border border-line hover:border-clay transition-colors group cursor-pointer flex flex-col justify-between"
        >
          <div>
            <h2 className="font-display text-3xl mb-2">My Library</h2>
            <p className="text-mist mb-6">
              Books that have shifted my perspective.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex -space-x-3">
              {books.slice(0, 5).map((book) => (
                <div
                  key={book.id}
                  className="w-10 h-14 bg-paper border border-line overflow-hidden"
                >
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-10 h-14 bg-paper border border-line flex items-center justify-center text-[10px] text-clay">
                +{books.length - 5}
              </div>
            </div>

            <span className="text-clay text-[11px] tracking-[0.16em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
              Collection
            </span>
          </div>
        </div>

        <div
          onClick={() =>
            document
              .getElementById("curiosities-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-sand/60 p-8 border border-line hover:border-clay transition-colors group cursor-pointer flex flex-col justify-between"
        >
          <div>
            <h2 className="font-display text-3xl mb-2">Curiosities</h2>
            <p className="text-mist text-sm mb-4">
              Niche hobbies and things I've tried.
            </p>
          </div>
          <span className="text-clay text-[11px] tracking-[0.16em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            Explore
          </span>
        </div>
        <div
          onClick={() =>
            document
              .getElementById("travel-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="md:col-span-3 bg-transparent p-8 border border-line hover:border-clay transition-colors cursor-pointer flex flex-col justify-between"
        >
          <div>
            <h2 className="font-display text-3xl mb-2">Coordinates</h2>
            <p className="text-mist mb-6 text-sm sm:text-base">
              I love traveling (honestly, who doesn't?). I've always found that
              the coolest parts of my own life are really a collection of things
              I’ve borrowed from other people and places. This is basically just
              a visual log of where I’ve been and the little cultural fragments
              I’ve brought back home with me.
            </p>
          </div>

          <div className="flex justify-end">
            <StatusBadge />
          </div>
        </div>
      </div>
      <div
        className={`fixed bottom-8 w-full px-8 flex justify-between z-50 pointer-events-none transition-all duration-500 ease-in-out ${
          showNav ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <button
          onClick={() => {
            scrollToTop();
            setTimeout(() => onBack(), 300);
          }}
          className="pointer-events-auto py-3 px-4 bg-ink text-paper text-sm hover:bg-clay transition-colors"
        >
          ←
        </button>

        <button
          onClick={scrollToTop}
          className="pointer-events-auto py-3 px-4 bg-ink text-paper text-sm hover:bg-clay transition-colors"
        >
          ↑
        </button>
      </div>
    </div>
  );
}

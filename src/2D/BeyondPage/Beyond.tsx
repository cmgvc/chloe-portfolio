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
    <div className="min-h-screen bg-[#0D0B0A] text-[#F5E6CA] p-8 md:p-16 flex flex-col items-center">
      <div className="w-full max-w-4xl flex justify-start mb-8">
        <button
          onClick={onBack}
          className="px-6 py-3 bg-[#3D342F] hover:bg-[#e0b080] text-[#e0b080] hover:text-[#0D0B0A] font-bold rounded-[30px] transition shadow-lg hover:shadow-xl"
        >
          Back to Portfolio
        </button>
      </div>

      <div className="w-full max-w-4xl mb-12 text-left">
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight text-[#F5E6CA]">
          Beyond the Code.
        </h1>
        <p className="text-xl text-[#A09990] max-w-2xl leading-relaxed">
          This is my digital garden. A space for the things that move me, the
          projects that capture my curiosity, and the output of my creative
          side. Always growing and never finished.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div
          onClick={() =>
            document
              .getElementById("my-library-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="md:col-span-2 bg-[#262A26] p-8 rounded-3xl border border-[#3A4038] hover:border-[#A65D46] transition-all group cursor-pointer flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">My Library</h2>
            <p className="text-[#A09990] mb-6">
              Books that have shifted my perspective.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex -space-x-3">
              {books.slice(0, 5).map((book) => (
                <div
                  key={book.id}
                  className="w-10 h-14 rounded-md bg-[#3D342F] border-2 border-[#262A26] overflow-hidden shadow-sm"
                >
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-10 h-14 rounded-md bg-[#3D342F] border-2 border-[#262A26] flex items-center justify-center text-[10px] text-[#A65D46] font-bold">
                +{books.length - 5}
              </div>
            </div>

            <span className="text-[#A65D46] font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Scroll to Collection →
            </span>
          </div>
        </div>

        <div
          onClick={() =>
            document
              .getElementById("mixes-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-[#262A26] p-8 rounded-3xl border border-[#3A4038] hover:border-[#A65D46] transition-all group cursor-pointer flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">Mixes</h2>
            <p className="text-[#A09990] text-sm mb-4">
              Selected mixes and live recordings.
            </p>
          </div>

          <a
            href="https://soundcloud.com/discover"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 group/link"
          >
            <div className="w-8 h-8 rounded-full bg-[#3D342F] flex items-center justify-center text-[#A65D46] group-hover/link:bg-[#A65D46] group-hover/link:text-[#0D0B0A] transition">
              <span className="text-xs">▶</span>
            </div>
            <span className="text-[#A09990] text-xs font-mono group-hover/link:text-[#F5E6CA] underline underline-offset-4">
              Listen on SoundCloud →
            </span>
          </a>
        </div>

        <div
          onClick={() =>
            document
              .getElementById("travel-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="md:col-span-3 bg-[#3D342F]/40 p-8 rounded-3xl border border-[#221d1a] hover:border-[#A65D46] transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">Coordinates</h2>
            <p className="text-[#A09990] mb-6 text-sm sm:text-base">
              I love traveling (honestly, who doesn't?). I've always found that
              the coolest parts of my own life are really a collection of
              things I’ve borrowed from other people and places. This is
              basically just a visual log of where I’ve been and the little
              cultural fragments I’ve brought back home with me.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
            <a
              href="https://www.google.com/maps/d/u/0/edit?mid=1_o7GMBrMHkchGayM-CM_xMiUP7n0II4&usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 group/link"
            >
              <div className="w-8 h-8 rounded-full bg-[#262A26] flex items-center justify-center text-[#A65D46] group-hover/link:bg-[#A65D46] group-hover/link:text-[#0D0B0A] transition">
                <span className="text-xs">📍</span>
              </div>
              <span className="text-[#A09990] text-xs font-mono group-hover/link:text-[#F5E6CA] underline underline-offset-4">
                View Map →
              </span>
            </a>
            <div className="w-full sm:w-auto flex justify-start sm:justify-end sm:mt-0 mt-4">
              <StatusBadge />
            </div>
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
          className="pointer-events-auto py-3 px-5 bg-[#A65D46] text-[#0D0B0A] rounded-full shadow-2xl hover:bg-[#e0b080] transition-all hover:scale-110"
        >
          ←
        </button>

        <button
          onClick={scrollToTop}
          className="pointer-events-auto py-3 px-5 bg-[#A65D46] text-[#0D0B0A] rounded-full shadow-2xl hover:bg-[#e0b080] transition-all hover:scale-110"
        >
          ↑
        </button>
      </div>
    </div>
  );
}

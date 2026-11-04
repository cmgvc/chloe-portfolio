import { useEffect, useState } from "react";
import scrollTo from "../utils/scrollTo";

interface NavProps {
  setView: (view: string) => void;
}

const LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "journey", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ setView }: NavProps) {
  const [activeDiv, setActiveDiv] = useState("home-div");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace("-header", "");
            setActiveDiv(id);
          }
        });
      },
      { threshold: 0.4 },
    );

    const ids = [
      "home-div",
      "about-div-header",
      "projects-div-header",
      "journey-div-header",
      "contact-div-header",
    ];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const isScrolled = scrollY > 8;

  const openBeyond = () => {
    setView("beyond");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkClass = (active: boolean) =>
    `text-[11px] tracking-[0.22em] uppercase transition-colors ${
      active ? "text-clay" : "text-mist hover:text-ink"
    }`;

  return (
    <header
      id="navbar-container"
      className={`fixed top-0 inset-x-0 z-30 transition-colors duration-300 ${
        isScrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="h-16 px-6 sm:px-10 lg:px-16 flex items-center justify-between gap-6">
        <button
          type="button"
          className="font-display text-[1.65rem] leading-none text-ink shrink-0"
          onClick={() => scrollTo("home-div")}
        >
          Chloe
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => {
            const active =
              activeDiv === `${link.id}-div` ||
              activeDiv === `${link.id}-div-header`;
            return (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(`${link.id}-div`)}
                  className={linkClass(active)}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={openBeyond}
          className="text-[11px] tracking-[0.22em] uppercase text-clay hover:text-ink transition-colors shrink-0"
        >
          Beyond
        </button>
      </div>

      <ul className="md:hidden flex justify-between px-6 pb-3">
        {LINKS.map((link) => {
          const active =
            activeDiv === `${link.id}-div` ||
            activeDiv === `${link.id}-div-header`;
          return (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollTo(`${link.id}-div`)}
                className={linkClass(active)}
              >
                {link.label}
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

import { ReactNode, useEffect, useState } from "react";
import scrollTo from "../utils/scrollTo";

interface NavLinkProps {
  divId: string;
  name: string;
  active: boolean;
  icon?: ReactNode;
}

function NavLink({ divId, name, active, icon }: NavLinkProps) {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <li
      className={`duration-300 font-bold cursor-pointer
      text-xs sm:text-sm lg:text-base
      ${
        active
          ? "text-[#ae690f] hover:text-[#6c3512]"
          : "hover:text-[#cc9c7e]"
      }`}
      onClick={() => scrollTo(divId)}
    >
      <span className="flex items-center gap-1">
        {icon}
        {formattedName}
      </span>
    </li>
  );
}

export default function Nav() {
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
      { threshold: 0.5 }
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

  const isScrolled = scrollY > 0;

  return (
    <header
      id="navbar-container"
      className={`fixed z-20 flex items-center justify-between
      h-[60px] py-3 px-5 sm:px-8
      duration-300 shadow-lg left-[50%] -translate-x-1/2
      ${
        isScrolled
          ? "bg-[#3D342F] rounded-full w-[90%] lg:w-[50%]"
          : "bg-transparent w-[92%] lg:w-[70%]"
      }`}
      style={{ top: "0.75cm" }}
    >
      <span
        className="font-bold cursor-pointer relative text-lg sm:text-xl lg:text-3xl"
        onClick={() => scrollTo("home-div")}
      >
        <span className="lg:hidden text-[#b95c23]">CG</span>

        <span
          className="hidden lg:inline-block transition-opacity duration-300"
          style={{ opacity: isScrolled ? 1 : 0 }}
        >
          CG
        </span>

        <span
          className="hidden lg:inline-block absolute whitespace-nowrap transition-opacity duration-300 text-[#b95c23]"
          style={{ opacity: isScrolled ? 0 : 1, left: "-4rem" }}
        >
          <span className="xl:hidden">C</span>
          <span className="hidden xl:inline text-[#b47249]">
            chloe gav
          </span>
        </span>
      </span>

      <ul
        className={`flex items-center justify-center flex-1
        ${
          isScrolled
            ? "gap-5 sm:gap-7 lg:gap-10"
            : "gap-6 sm:gap-8 lg:gap-14"
        }`}
      >
        {["about", "projects", "journey", "contact"].map((name) => (
          <NavLink
            key={name}
            divId={`${name}-div`}
            name={name}
            active={
              activeDiv === `${name}-div` ||
              activeDiv === `${name}-div-header`
            }
          />
        ))}
      </ul>
    </header>
  );
}
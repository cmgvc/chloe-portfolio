import { ReactNode, useEffect, useState } from "react";
import scrollTo from "../utils/scrollTo";
// import HailIcon from "@mui/icons-material/Hail";

interface NavLinkProps {
  divId: string;
  name: string;
  active: boolean;
  icon?: ReactNode;
}

interface NavProps {
  setView: (view: string) => void;
}

function NavLink({ divId, name, active, icon }: NavLinkProps) {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <li
      className={`duration-300 font-bold cursor-pointer
      text-xs sm:text-sm lg:text-base hover:scale-[1.1] tracking-wide
      ${
        active ? "text-[#ae690f] hover:text-[#6c3512]" : "hover:text-[#cc9c7e]"
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

export default function Nav({}: NavProps) {
// export default function Nav({ setView }: NavProps) {
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
      { threshold: 0.5 },
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
    <div>
      <header
        id="navbar-container"
        className={`fixed z-20 items-center justify-between
      h-[60px] px-5 sm:px-8 mt-[5vh]
      duration-300 shadow-lg left-[50%] -translate-x-1/2 hidden md:flex 
      ${
        isScrolled
          ? "bg-[#3D342F] rounded-full w-[90%] lg:w-[50%]"
          : "bg-transparent w-[92%] lg:w-[70%]"
      }`}
      >
        <span
          className="font-bold cursor-pointer relative text-lg sm:text-xl lg:text-3xl"
          onClick={() => scrollTo("home-div")}
        >
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
            <span className="hidden xl:inline text-[#b47249]">chloe gav</span>
          </span>
        </span>

        <ul
          className={` items-center justify-center flex-1 hidden md:flex 
        ${
          isScrolled ? "gap-5 sm:gap-7 lg:gap-10" : "gap-6 sm:gap-8 lg:gap-14"
        }`}
        >
          {["about", "projects", "journey", "contact"].map((name) => (
            <NavLink
              key={name}
              divId={`${name}-div`}
              name={"/" + name}
              active={
                activeDiv === `${name}-div` ||
                activeDiv === `${name}-div-header`
              }
            />
          ))}
        </ul>
      </header>
      {/* <ul
        className={`fixed z-20 flex items-center duration-300 
  ${
    isScrolled
      ? "bottom-5 right-5 sm:right-8 lg:right-12"
      : "top-[5.8vh] right-5 sm:right-8 lg:right-[4%]"
  }`}
      >
        <li
          className={`duration-300 font-bold cursor-pointer text-xs sm:text-sm lg:text-base 
    flex items-center justify-center
    ${
      isScrolled
        ? "text-[#f0c6a6f1] rounded-full p-3 sm:py-3 sm:px-4 bg-[#3D342F] shadow-xl hover:bg-[#f0c6a6f1] hover:text-[#3D342F]"
        : "text-[#f0c6a6f1] rounded-[30px] py-3 px-4 hover:bg-[#f0c6a6f1] hover:text-[#6c3512]"
    }`}
          onClick={() => {
            setView("beyond");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="">
            {isScrolled ? <HailIcon /> : "beyond the terminal"}
          </span>
        </li>
      </ul> */}
    </div>
  );
}

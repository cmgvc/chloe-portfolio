import { ReactNode, useEffect, useState } from "react";
import scrollTo from "../utils/scrollTo";

interface NavLinkProps {
    divId: string;
    name: string;
    active: boolean;
    icon: ReactNode;
}

function NavLink({ divId, name, active, icon }: NavLinkProps) {
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <li
            className={`text-center duration-300 text-xs lg:text-base ${
                active
                    ? "text-[#ae690f] font-bold hover:text-[#6c3512] hover:font-bold"
                    : "hover:text-[#cc9c7e] font-bold"
            }`}
        >
            <span onClick={() => scrollTo(divId)} className="cursor-pointer">
                {icon}
                <div className="hidden lg:inline mx-1" />
                <span className="hidden lg:inline">{formattedName}</span>
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
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id.replace("-header", "");
                    setActiveDiv(id);
                }
            });
        }, { threshold: 0.5 });

        const ids = ["home-div", "about-div-header", "projects-div-header", "journey-div-header", "contact-div-header"];
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
            className={`flex items-center justify-center fixed py-4 duration-300 shadow-lg z-10 h-[60px] left-1/2 -translate-x-1/2 ${
                isScrolled ? "rounded-full bg-[#3D342F] w-[50%] lg:px-8" : "bg-transparent w-[75%] lg:px-8"
            }`}
            style={{ top: "0.75cm" }}
        >
            <span
                className="hidden lg:block font-bold text-2xl text-center lg:text-4xl cursor-pointer relative"
                onClick={() => scrollTo("home-div")}
            >
                <span className="inline-block transition-opacity duration-300" style={{ opacity: isScrolled ? 1 : 0 }}>
                    CG
                </span>
                <span 
                    className="text-[#b95c23] inline-block absolute whitespace-nowrap transition-opacity duration-300"
                    style={{ opacity: isScrolled ? 0 : 1, left: "-4rem" }}
                >
                    <span className="text-[#b95c23] xl:hidden">C</span>
                    <span className="text-[#b47249] hidden xl:inline">chloe gav</span>{" "}
                </span>
            </span>

            <div className="hidden lg:block lg:mx-8" />

            <ul 
                className="grid grid-cols-4 w-full transition-all duration-300"
                style={{
                    gap: isScrolled ? "1rem" : "2rem",
                    maxWidth: isScrolled ? "48rem" : "64rem",
                }}
            >
                {["about", "projects", "journey", "contact"].map((name) => (
                    <NavLink
                        key={name}
                        divId={`${name}-div`}
                        name={name}
                        active={activeDiv === `${name}-div` || activeDiv === `${name}-div-header`}
                        icon={null}
                    />
                ))}
            </ul>
        </header>
    );
}
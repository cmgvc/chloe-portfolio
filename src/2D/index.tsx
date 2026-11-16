import { Canvas } from "@react-three/fiber";
import { Preload, View } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import Intro from "../components/Intro";
import Home from "./Homepage/Home";
import About from "./Homepage/About";
import Projects from "./Homepage/Projects";
import Journey from "./Homepage/Journey";
import Contact from "./Homepage/Contact";
import Beyond from "./BeyondPage/Beyond";
import Books from "./BeyondPage/Books";
import Travel from "./BeyondPage/Travel";
import Curiosities from "./BeyondPage/Curiosities";

export default function Website2D() {
  const [view, setView] = useState("home");
  const [intro, setIntro] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = mainRef.current;
    if (!node) return;
    if (intro) node.setAttribute("inert", "");
    else node.removeAttribute("inert");
  }, [intro, view]);

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    const toTop = () =>
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    toTop();
    window.addEventListener("pageshow", toTop);
    return () => window.removeEventListener("pageshow", toTop);
  }, []);

  return (
    <div className="relative">
      <Canvas
        className="fixed inset-0 !pointer-events-none"
        gl={{ alpha: true }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: -1,
          background: "transparent",
        }}
      >
        <View.Port />
        <Preload all />
      </Canvas>

      {intro && view === "home" ? (
        <Intro onDone={() => setIntro(false)} />
      ) : null}

      {view === "home" ? (
        <main ref={mainRef} aria-hidden={intro || undefined}>
          <Nav setView={setView} />
          <Home />
          <About
            onOpenBeyond={() => {
              setView("beyond");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
          <Projects />
          <Journey />
          <Contact />
        </main>
      ) : (
        <main className="flex flex-col items-center">
          <Beyond onBack={() => setView("home")} />
          <Books />
          <Curiosities />
          <Travel />
        </main>
      )}
    </div>
  );
}

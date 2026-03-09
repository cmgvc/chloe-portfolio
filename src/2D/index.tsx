import { Canvas } from "@react-three/fiber";
import { Preload, View } from "@react-three/drei";
import { useState } from "react";
import Nav from "../components/Nav";
import Home from "./Homepage/Home";
import About from "./Homepage/About";
import Projects from "./Homepage/Projects";
import Journey from "./Homepage/Journey";
import Contact from "./Homepage/Contact";
import Beyond from "./BeyondPage/Beyond";
import Books from "./BeyondPage/Books";
import Mixes from "./BeyondPage/Mixes";
import Travel from "./BeyondPage/Travel";

export default function Website2D() {
  const [view, setView] = useState("home");

  return (
    <div className="relative">
      <Canvas
        className="fixed inset-0 !pointer-events-none"
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        <View.Port />
        <Preload all />
      </Canvas>

      {view === "home" ? (
        <main>
          <Nav setView={setView} />
          <Home />
          <About />
          <Projects />
          <Journey />
          <Contact />
        </main>
      ) : (
        <main>
          <Beyond onBack={() => setView("home")} />
          <Books />
          <Mixes />
          <Travel />
        </main>
      )}
    </div>
  );
}

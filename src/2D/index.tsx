import { Canvas } from "@react-three/fiber";
import { Preload, View } from "@react-three/drei";
import Nav from "../components/Nav";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Journey from "./Journey";
import Contact from "./Contact";

export default function Website2D() {
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

            <Nav />

            <main>
                <Home />
                <About />
                <Projects />
                <Journey />
                <Contact />
            </main>
        </div>
    );
}
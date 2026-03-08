import { Canvas } from "@react-three/fiber";

export default function App3D() {
    return (
        <Canvas
            camera={{
                position: [0, 0, 5],
                fov: 75,
            }}
        >
            {/* Start building your scene here */}
            <ambientLight intensity={0.5} />
        </Canvas>
    );
}
import { Suspense, lazy } from "react";

const App3D = lazy(() => import("./App"));

export default function Website3D() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <App3D />
        </Suspense>
    );
}
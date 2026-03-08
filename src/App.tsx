import Website2D from "./2D";
import Website3D from "./3D";
import useDimensionStore from "./hooks/useDimensionStore";
import SelectionScreen from "./SelectionScreen";

function App() {
    const dimension = useDimensionStore((state) => state.dimension);

    return (
        <>
            {dimension === "3D" && <Website3D />}
            {dimension === "2D" && <Website2D />}
            {dimension === "None" && <SelectionScreen />}
        </>
    );
}

export default App;

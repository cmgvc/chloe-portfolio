import { useEffect, useState } from "react";
import useDimensionStore from "./hooks/useDimensionStore";

interface SelectionCardProps {
  title: string;
  img: string;
  type: string;
  onClick: (type: string) => void;
  colorClass: string;
}

const SelectionCard = ({
  title,
  img,
  type,
  onClick,
  colorClass,
}: SelectionCardProps) => (
  <section className="border-2 border-white rounded-lg p-4 border-opacity-20 col-span-1">
    <b
      className={`block mb-2 ${colorClass} hover:brightness-125 duration-300 cursor-pointer`}
      onClick={() => onClick(type)}
    >
      {title}
    </b>
    <img
      src={img}
      alt={`${type} experience`}
      className="mt-2 opacity-50 hover:opacity-100 duration-300 cursor-pointer"
      onClick={() => onClick(type)}
    />
  </section>
);

function SelectionScreen() {
  const [timeLeft, setTimeLeft] = useState(8);
  const setDimension = useDimensionStore((state) => state.setDimension);

  useEffect(() => {
    if (timeLeft <= 0) {
      setDimension("2D");
      return;
    }

    const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, setDimension]);

  return (
    <div className="w-full h-full bg-black flex items-center justify-center text-center">
      <div className="w-full">
        <h1 className="text-2xl font-bold">Please select your experience</h1>
        <p className="mt-6 opacity-75">
          Redirecting to 2D site in <b>{timeLeft}</b>s
        </p>

        <div className="gap-4 justify-center mt-8 grid grid-cols-2 px-4">
          <SelectionCard
            title="2D website"
            img="/images/2d_image.png"
            type="2D"
            onClick={() => setDimension("2D")} 
            colorClass="text-[#f0c6a6f1]"
          />
          <SelectionCard
            title="3D website"
            img="/images/3d_image.png"
            type="3D"
            onClick={() => setDimension("3D")} 
            colorClass="text-[#f0c6a6f1]"
          />
        </div>
      </div>
    </div>
  );
}

export default SelectionScreen;

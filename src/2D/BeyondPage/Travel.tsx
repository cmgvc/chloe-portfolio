import { motion } from "framer-motion";
import StatusBadge from "../../components/StatusBadge";
import { photos } from "../../data/travel";

export default function Travel() {
  return (
    <div
      id="travel-section"
      className="min-h-screen p-8 max-w-7xl mx-auto flex flex-col gap-12"
    >
      <header className="text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-[#f0c6a6f1]">
          World Traveller
        </h1>
        <p className="text-[#e4cebe] max-w-xl mx-auto leading-relaxed">
          My life is a collection of everything I’ve picked up along the way. I
          head out, find a new vibe or a better way of living, and bring it
          home. I'm a chronic observer and reimaginer.
        </p>
      </header>
      <StatusBadge />
      <TravelStats />
      <FragmentGallery />
    </div>
  );
}

function TravelStats() {
  const stats = [
    { label: "Countries", value: "17" },
    { label: "Flights", value: "70+" },
    { label: "Coffee Spots", value: "87" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-[#3D342F]/40 p-6 rounded-2xl border border-[#221d1a]"
        >
          <div className="text-3xl font-bold text-[#F0C6A6]">{stat.value}</div>
          <div className="text-xs uppercase tracking-widest text-[#8C7B75] mt-2">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroVideo({ src }: { src: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="w-full h-96 rounded-3xl overflow-hidden border border-[#221d1a] shadow-2xl"
    >
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}

function FragmentGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
      {photos.map((photo, i) => (
        <div
          key={i}
          className={`relative group overflow-hidden rounded-2xl 
            ${photo.size === "large" ? "col-span-2 row-span-2" : ""}
            ${photo.size === "portrait" ? "col-span-1 row-span-2" : ""}
            ${photo.size === "small" ? "col-span-1 row-span-1" : ""}
          `}
        >
          <img
            src={photo.src}
            alt={photo.caption}
            className={`w-full h-full object-cover ${photo.pos || "object-center"} transition-transform duration-700 group-hover:scale-105`}
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <p className="text-[#F0C6A6] text-xs font-mono">{photo.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

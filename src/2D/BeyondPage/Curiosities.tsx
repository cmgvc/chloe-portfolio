import { curiosities } from "../../data/curiosities";

export default function Curiosities() {
  return (
    <div id="curiosities-section" className="w-full max-w-4xl mt-24 mb-24">
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold tracking-tight text-[#F5E6CA] mb-3">
          Curiosities.
        </h2>
        <p className="text-[#A09990] max-w-xl leading-relaxed">
          Things I've thrown myself into. Some competitive, some chaotic, all
          worth it.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 gap-6 space-y-6">
        {curiosities.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid bg-[#262A26] rounded-3xl border border-[#3A4038] overflow-hidden group"
          >
            {item.photo ? (
              <div className={`w-full overflow-hidden aspect-[8/5]`}>
                <img
                  src={item.photo}
                  alt={item.title}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${item.pos || "object-center"}`}
                />
              </div>
            ) : (
              <div className="w-full h-48 bg-[#3D342F]/60 flex items-center justify-center text-5xl">
                {item.emoji}
              </div>
            )}
            <div className="p-6">
              <span className="text-xs font-mono text-[#A65D46] uppercase tracking-widest">
                {item.tag}
              </span>
              <h3 className="text-lg font-bold text-[#F5E6CA] mb-1 mt-1">
                {item.title}
              </h3>
              <p className="text-sm text-[#A09990] leading-relaxed">
                {item.caption}
              </p>
            </div>
          </div>
        ))}

        <div className="break-inside-avoid bg-[#3D342F]/30 rounded-3xl border border-dashed border-[#3A4038] p-8 flex flex-col items-center justify-center text-center min-h-[200px]">
          <span className="text-3xl mb-3">＋</span>
          <p className="text-[#A09990] text-sm">More to come...</p>
        </div>
      </div>
    </div>
  );
}

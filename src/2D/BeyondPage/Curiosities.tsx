import { curiosities } from "../../data/curiosities";

export default function Curiosities() {
  return (
    <div id="curiosities-section" className="w-full max-w-4xl mt-24 mb-24">
      <div className="mb-10">
        <h2 className="font-display text-5xl font-medium tracking-tight text-ink mb-3">
          Curiosities.
        </h2>
        <p className="text-mist max-w-xl leading-relaxed">
          Things I've thrown myself into. Some competitive, some chaotic, all
          worth it.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 gap-6 space-y-6">
        {curiosities.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid bg-sand/40 border border-line overflow-hidden group"
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
              <div className="w-full h-48 bg-sand flex items-center justify-center text-5xl">
                {item.emoji}
              </div>
            )}
            <div className="p-6">
              <span className="text-[11px] tracking-[0.18em] text-clay uppercase">
                {item.tag}
              </span>
              <h3 className="font-display text-2xl text-ink mb-1 mt-1">
                {item.title}
              </h3>
              <p className="text-sm text-mist leading-relaxed">
                {item.caption}
              </p>
            </div>
          </div>
        ))}

        <div className="break-inside-avoid border border-dashed border-line p-8 flex flex-col items-center justify-center text-center min-h-[200px]">
          <span className="font-display text-3xl mb-3 text-mist">＋</span>
          <p className="text-mist text-sm">More to come</p>
        </div>
      </div>
    </div>
  );
}

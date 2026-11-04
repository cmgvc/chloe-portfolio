export default function Mixes() {
  return (
    <div
      id="mixes-section"
      className="flex flex-col items-center justify-center h-screen gap-8"
    >
      <h1 className="font-display text-5xl font-medium tracking-tight text-ink">My Mixes</h1>
      <p className="text-center max-w-xl text-mist">
        My DJ archives. A collection of sets built on groove, texture, and
        rhythm. My tastes are always shifting, so I keep these updated with the
        new music I'm currently into and the trends I'm tracking.{" "}
      </p>
      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="w-12 h-12 border border-line flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition">
          <span className="text-sm text-clay group-hover:text-paper">▶</span>
        </div>
        <span className="text-mist text-sm group-hover:text-ink">
          Listen on Soundcloud → (TBD)
        </span>
      </div>
    </div>
  );
}

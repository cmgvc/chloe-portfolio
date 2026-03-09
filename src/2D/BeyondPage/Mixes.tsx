export default function Mixes() {
  return (
    <div
      id="mixes-section"
      className="flex flex-col items-center justify-center h-screen gap-8"
    >
      <h1 className="text-4xl font-bold">My Mixes</h1>
      <p className="text-center max-w-xl">
        My DJ archives. A collection of sets built on groove, texture, and
        rhythm. My tastes are always shifting, so I keep these updated with the
        new music I'm currently into and the trends I'm tracking.{" "}
      </p>
      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="w-12 h-12 rounded-full bg-[#3D342F] flex items-center justify-center group-hover:bg-[#5A4E47] transition">
          <span className="text-sm text-[#A65D46] font-bold">▶</span>
        </div>
        <span className="text-[#A09990] text-sm font-mono group-hover:text-[#F5E6CA]">
          Listen on Soundcloud → (TBD)
        </span>
      </div>
    </div>
  );
}

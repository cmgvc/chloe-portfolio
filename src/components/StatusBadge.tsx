export default function StatusBadge() {
    return (
    <div className="flex items-center justify-center w-fit mx-auto gap-3 bg-[#221d1a]/50 px-5 py-2 rounded-full border border-[#3D342F] backdrop-blur-sm">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E07A5F] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D65F3D]"></span>
      </span>
      <span className="text-[10px] font-bold text-[#F0C6A6] tracking-widest uppercase">
        Currently: Ottawa, Canada
      </span>
    </div>
  );
}
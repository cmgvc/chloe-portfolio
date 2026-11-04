export default function StatusBadge() {
  return (
    <div className="flex items-center w-fit gap-3 border border-line px-4 py-2">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-70" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-sage" />
      </span>
      <span className="text-[10px] tracking-[0.22em] uppercase text-ink">
        Currently Ottawa
      </span>
    </div>
  );
}

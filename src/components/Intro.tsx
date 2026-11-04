import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HOLD_MS = 3100;
const INK = "#241F1B";

function wavePath(y: number, amp: number, step: number) {
  const start = -step * 10;
  const end = 1000 + step * 10;
  let d = `M ${start} ${y}`;
  d += ` Q ${start + step / 2} ${y - amp}, ${start + step} ${y}`;
  for (let x = start + step * 2; x <= end; x += step) {
    d += ` T ${x.toFixed(1)} ${y}`;
  }
  return d;
}

const LINES = [
  { y: 200, amp: 14, step: 78, width: 1.15, dur: 8.5, delay: 0.1, back: false },
  { y: 242, amp: 28, step: 120, width: 1.7, dur: 11, delay: 0.28, back: true },
  { y: 278, amp: 18, step: 64, width: 1.15, dur: 6.2, delay: 0.46, back: false },
  { y: 318, amp: 34, step: 140, width: 1.55, dur: 13, delay: 0.64, back: true },
  { y: 356, amp: 12, step: 70, width: 1.05, dur: 7.4, delay: 0.82, back: false },
];

export default function Intro({ onDone }: { onDone: () => void }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      setLeaving(true);
    };

    const rest = window.setTimeout(finish, HOLD_MS);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Enter") finish();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.clearTimeout(rest);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[80] overflow-hidden bg-paper text-ink"
      variants={{ idle: { y: "0%" }, leave: { y: "-100%" } }}
      initial="idle"
      animate={leaving ? "leave" : "idle"}
      transition={{
        duration: leaving ? 0.95 : 0,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={(definition) => {
        if (definition === "leave") onDone();
      }}
      role="dialog"
      aria-label="Introduction"
    >
      <div className="h-full grid place-items-center">
        <svg viewBox="0 0 1000 560" className="w-full h-auto" aria-hidden="true">
          {LINES.map((line) => {
            const period = line.step * 2;
            const from = line.back ? -period : 0;
            const to = line.back ? 0 : -period;
            return (
              <g key={`${line.y}-${line.step}`}>
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values={`${from} 0; ${to} 0`}
                  dur={`${line.dur}s`}
                  repeatCount="indefinite"
                />
                <path
                  d={wavePath(line.y, line.amp, line.step)}
                  pathLength={1}
                  stroke={INK}
                  strokeWidth={line.width}
                  className="intro-stroke"
                  style={{
                    animationDelay: `${line.delay}s`,
                    animationDuration: "2.2s",
                  }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      <button
        type="button"
        className="absolute bottom-8 right-6 sm:right-10 text-[11px] uppercase tracking-[0.22em] text-mist hover:text-ink"
        onClick={() => setLeaving(true)}
      >
        Skip
      </button>
    </motion.div>
  );
}

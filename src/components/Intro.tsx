import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WORDS_AT_MS = 2700;
const HOLD_MS = 5600;
const INK = "#241F1B";
const GREETING = "welcome to my studio";

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
  const [phase, setPhase] = useState<"waves" | "words">("waves");

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      setLeaving(true);
    };

    const toWords = window.setTimeout(() => setPhase("words"), WORDS_AT_MS);
    const rest = window.setTimeout(finish, HOLD_MS);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Enter") finish();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.clearTimeout(toWords);
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
      <div className="relative h-full grid place-items-center">
        <motion.svg
          viewBox="0 0 1000 560"
          className="w-full h-auto"
          aria-hidden="true"
          initial={false}
          animate={
            phase === "words"
              ? { opacity: 0, scaleY: 0.08 }
              : { opacity: 1, scaleY: 1 }
          }
          transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
          style={{ transformOrigin: "center center" }}
        >
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
        </motion.svg>

        <p
          className="pointer-events-none absolute inset-x-0 flex justify-center px-6 font-display italic text-[0.5rem] leading-none text-ink sm:text-2xl md:text-3xl"
          aria-hidden={phase !== "words"}
        >
          {GREETING.split("").map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              className="inline-block"
              initial={{ opacity: 0, y: 10 }}
              animate={
                phase === "words" ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
              }
              transition={{
                duration: 0.55,
                delay: phase === "words" ? 0.28 + index * 0.028 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </p>
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

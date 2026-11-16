import { useEffect, useRef, useState } from "react";
import StatusBadge from "../../components/StatusBadge";
import { photos, type TravelPhoto } from "../../data/travel";

export default function Travel() {
  return (
    <div
      id="travel-section"
      className="w-full px-6 sm:px-10 py-16"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
      <header className="text-center">
        <h1 className="font-display text-5xl font-medium tracking-tight mb-4 text-ink">
          World Traveller
        </h1>
        <p className="text-mist max-w-xl mx-auto leading-relaxed">
          I’ve always been a chronic observer. Whenever I’m out, I’m looking for
          the little things, a certain vibe, a better way of doing something, or
          just a detail that sticks. I try to leave a bit of my own perspective
          behind - a conversation, a different way of looking at a problem, or
          just some genuine energy - while I bring a fragment of that place back
          home to build into my own life. Consider this the archive.
        </p>
      </header>
      <StatusBadge />
      <TravelStats />
      <FragmentGallery />
      </div>
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
          className="border border-line p-6"
        >
          <div className="font-display text-4xl text-ink">{stat.value}</div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-mist mt-2">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// function HeroVideo({ src }: { src: string }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       className="w-full h-96 rounded-3xl overflow-hidden border border-[#221d1a] shadow-2xl"
//     >
//       <video
//         src={src}
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="w-full h-full object-cover"
//       />
//     </motion.div>
//   );
// }

function FragmentGallery() {
  const [index, setIndex] = useState(0);
  const photo = photos[index];
  const count = String(photos.length).padStart(2, "0");
  const frame = String(index + 1).padStart(2, "0");

  function go(direction: 1 | -1) {
    setIndex((current) => (current + direction + photos.length) % photos.length);
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
  }

  const buttonClass =
    "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-[#5a524a] to-[#2c2824] text-lg text-paper shadow-[0_3px_0_#100e0c,inset_0_1px_0_rgba(255,255,255,0.28)] transition-transform active:translate-y-0.5 active:shadow-[0_1px_0_#100e0c]";

  return (
    <div className="mx-auto w-full max-w-2xl" onKeyDown={onKeyDown}>
      <div className="rounded-[1.75rem] bg-[#1c1917] px-4 pb-5 pt-4 text-paper shadow-[0_24px_40px_-28px_rgba(36,31,27,0.75)] sm:px-5">
        <div className="mb-3 flex items-center gap-3 px-1">
          <div className="flex h-7 w-16 items-center rounded-md bg-[#0c0b0a] px-1.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
            <span className="h-4 w-7 rounded-sm bg-[#24343c]" />
          </div>
          <span className="h-2 w-2 rounded-full bg-sage" />
          <span className="ml-auto flex gap-1" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-paper/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-paper/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-paper/30" />
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <CameraScreen photo={photo} frame={frame} count={count} />

          <div className="flex w-[4.25rem] shrink-0 flex-col items-center justify-center gap-5 self-stretch rounded-2xl bg-[#141210] py-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] sm:w-20">
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => go(-1)}
              className={buttonClass}
            >
              <span aria-hidden="true">◀</span>
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => go(1)}
              className={buttonClass}
            >
              <span aria-hidden="true">▶</span>
            </button>
          </div>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {photo.caption}, photo {frame} of {count}
      </p>
    </div>
  );
}

function focalPoint(pos?: string) {
  const raw = pos?.match(/object-\[(.+)\]/)?.[1] ?? "";
  const [xToken, yToken] = raw.split("_");
  const read = (token: string | undefined) => {
    if (!token || token === "center") return 0.5;
    const value = Number.parseFloat(token);
    return Number.isFinite(value) ? value / 100 : 0.5;
  };
  return { x: read(xToken), y: read(yToken) };
}

function clampShift(value: number, overflow: number) {
  if (overflow <= 1) return 0;
  return Math.min(0, Math.max(-overflow, value));
}

function CameraScreen({
  photo,
  frame,
  count,
}: {
  photo: TravelPhoto;
  frame: string;
  count: string;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    originX: number;
    originY: number;
  } | null>(null);
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
    overflowX: 0,
    overflowY: 0,
  });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const canPan = layout.overflowX > 1 || layout.overflowY > 1;

  function place(image: HTMLImageElement) {
    const box = frameRef.current;
    if (!box || !image.naturalWidth || !image.naturalHeight) return;
    const frameW = box.clientWidth;
    const frameH = box.clientHeight;
    const scale = Math.max(frameW / image.naturalWidth, frameH / image.naturalHeight);
    const width = image.naturalWidth * scale;
    const height = image.naturalHeight * scale;
    const overflowX = width - frameW;
    const overflowY = height - frameH;
    const focal = focalPoint(photo.pos);
    setLayout({ width, height, overflowX, overflowY });
    setOffset({
      x: focal.x * (frameW - width),
      y: focal.y * (frameH - height),
    });
  }

  useEffect(() => {
    const box = frameRef.current;
    if (!box) return;
    const image = box.querySelector("img");
    if (image?.complete && image.naturalWidth) {
      place(image);
    }
    const observer = new ResizeObserver(() => {
      const current = box.querySelector("img");
      if (current?.naturalWidth) place(current);
    });
    observer.observe(box);
    return () => observer.disconnect();
  }, [photo.src, photo.pos]);

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (!canPan) return;
    drag.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: offset.x,
      originY: offset.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const active = drag.current;
    if (!active || active.pointerId !== event.pointerId) return;
    setOffset({
      x: clampShift(active.originX + event.clientX - active.startX, layout.overflowX),
      y: clampShift(active.originY + event.clientY - active.startY, layout.overflowY),
    });
  }

  function endDrag(event: React.PointerEvent<HTMLDivElement>) {
    if (drag.current?.pointerId === event.pointerId) drag.current = null;
  }

  return (
    <div className="relative min-w-0 flex-1 overflow-hidden rounded-[4px] bg-black shadow-[inset_0_0_0_7px_#0a0908]">
      <div
        ref={frameRef}
        role="group"
        aria-label={
          canPan
            ? `${photo.caption}. Drag to see the rest of the photo.`
            : photo.caption
        }
        className={`relative aspect-[4/3] overflow-hidden ${canPan ? "cursor-grab touch-none active:cursor-grabbing" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.caption}
          draggable={false}
          onLoad={(event) => place(event.currentTarget)}
          className={
            layout.width
              ? "absolute left-0 top-0 max-w-none select-none"
              : `h-full w-full select-none object-cover ${photo.pos || "object-center"}`
          }
          style={
            layout.width
              ? {
                  width: layout.width,
                  height: layout.height,
                  transform: `translate(${offset.x}px, ${offset.y}px)`,
                }
              : undefined
          }
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-3 py-2 text-[11px] tracking-[0.16em] text-paper">
          <span aria-hidden="true">▶</span>
          <span>
            {frame} / {count}
          </span>
        </div>
        <p className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pb-2 pt-8 text-xs text-paper">
          {photo.caption}
        </p>
        {canPan && (
          <span className="sr-only">Drag the photo to see the parts outside the frame.</span>
        )}
      </div>
    </div>
  );
}

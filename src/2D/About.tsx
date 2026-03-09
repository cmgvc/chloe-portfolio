import { ReactNode } from "react";
import { create } from "zustand";
import { LanguageIcon, MapPinIcon } from "@heroicons/react/24/outline";

import PageLayout from "./PageLayout";
import FadeInText from "../components/FadeIn";
import SectionSubtitle from "../components/SectionSubtitle";

interface AboutStore {
  hoveredCard: string | null;
  setHoveredCard: (card: string | null) => void;
}

const useAboutStore = create<AboutStore>((set) => ({
  hoveredCard: null,
  setHoveredCard: (card) => set({ hoveredCard: card }),
}));

// Hover logic hook
const useCardHover = (key: string) => {
  const { hoveredCard, setHoveredCard } = useAboutStore();
  const isHovered = hoveredCard === key;
  const isDimmed = hoveredCard !== null && !isHovered;

  const bgStyles = isDimmed
    ? "bg-[#121210]/40 border-transparent opacity-40 grayscale-[50%]"
    : isHovered
      ? "bg-[#82917A]/80 scale-[1.02] shadow-lg shadow-[#82917A]/10"
      : "bg-[#1C1C1A]/70 backdrop-blur-md";

  return {
    bgStyles,
    onMouseEnter: () => setHoveredCard(key),
    onMouseLeave: () => setHoveredCard(null),
  };
};

const IconCard = ({
  children,
  hoverKey,
  className,
}: {
  children: ReactNode;
  hoverKey: string;
  className?: string;
}) => {
  const { bgStyles, ...handlers } = useCardHover(hoverKey);
  return (
    <div
      className={`duration-300 ${bgStyles} cursor-pointer shadow-lg rounded-lg p-6 ${className}`}
      {...handlers}
    >
      {children}
    </div>
  );
};

export default function About() {
  return (
    <PageLayout label="About" title="About Me" divId="about-div" icon={null}>
      <SectionSubtitle>
        I create things: complex systems in the terminal and my life outside of
        it. I spend my time deep in software architecture and low-level logic. I
        spend the rest of it building rhythm - whether it's through the music I
        mix, the laps I swim, the yoga I practice or through the pages of a new
        book.
      </SectionSubtitle>

      <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-4xl">
        {[
          {
            icon: <MapPinIcon className="h-24 w-24" />,
            title: "Location",
            body: "Based in Ottawa & Toronto, Canada",
          },
          {
            icon: <LanguageIcon className="h-24 w-24" />,
            title: "Languages",
            body: "English & French. Can show up in a Spanish-speaking country and not get lost. Aspiring Korean & Japanese speaker.",
          },
        ].map((card, i) => (
          <FadeInText
            key={card.title}
            delay={i * 0.25}
            className="col-span-2 lg:col-span-1"
          >
            <IconCard
              hoverKey={`${card.title}-${card.body}`}
              className="flex gap-4 w-full"
            >
              {card.icon}
              <div>
                <h1 className="text-2xl font-semibold">{card.title}</h1>
                <p>{card.body}</p>
              </div>
            </IconCard>
          </FadeInText>
        ))}
      </div>

      <FadeInText delay={0.5} className="my-4">
        <span className="font-bold text-2xl">Specializing In</span>
      </FadeInText>

      <div className="grid grid-cols-3 gap-4 w-full">
        {[
          { id: "full_stack", title: "Full-Stack", title2: "Development" },
          { id: "embedded", title: "Embedded", title2: "Engineering" },
          { id: "backend", title: "Backend", title2: "Engineering" },
        ].map((specialty, i) => (
          <FadeInText
            key={specialty.id}
            delay={0.5 + i * 0.25}
            className="col-span-3 lg:col-span-1"
          >
            <IconCard hoverKey={specialty.id} className="text-left w-full">
              <div className="text-2xl font-semibold">
                <span className="block">{specialty.title}</span>
                <span className="block">{specialty.title2}</span>
              </div>
            </IconCard>
          </FadeInText>
        ))}
      </div>
      <p className="mt-[3vh] scale-[0.8]">With a deep-seated interest in the kernel.</p>
      <div className="headshot mt-15">
        <img src="/images/chloe_outline.png" alt="Headshot" />
      </div>
    </PageLayout>
  );
}

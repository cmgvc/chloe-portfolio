import { useState } from "react";
import { create } from "zustand";
import { View } from "@react-three/drei";
import PageLayout from "./PageLayout";
import FadeInText from "../components/FadeIn";
import SectionSubtitle from "../components/SectionSubtitle";
import journeyData from "../data/journey";

// Store definition
interface JourneyStore {
  hoveredCard: string | null;
  setHoveredCard: (card: string | null) => void;
}

const useJourneyStore = create<JourneyStore>((set) => ({
  hoveredCard: null,
  setHoveredCard: (card) => set({ hoveredCard: card }),
}));

// Helper function
const getTimelineState = (index: number, items: any[]) => {
  const item = items[index];
  const sameGroup = items.filter((j) => j.educationId === item.educationId);

  return {
    isStart: sameGroup[0] === item,
    isEnd: sameGroup[sameGroup.length - 1] === item,
    isMiddle:
      sameGroup.length > 1 &&
      sameGroup[0] !== item &&
      sameGroup[sameGroup.length - 1] !== item,
    groupColor: sameGroup[sameGroup.length - 1].color ?? "bg-[#1C1C1A]",
  };
};

// Sub-component
function JobCard({
  item,
  reverse,
  alwaysSmall,
}: {
  item: any;
  reverse: boolean;
  alwaysSmall: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { hoveredCard, setHoveredCard } = useJourneyStore();

  const isSelected = hoveredCard === item.id;
  const isDimmed = hoveredCard !== null && hoveredCard !== item.id;
  const isLineDimmed = hoveredCard !== null && hoveredCard !== item.educationId;

  const { isStart, isEnd, isMiddle, groupColor } = getTimelineState(
    journeyData.indexOf(item),
    journeyData,
  );

  return (
    <div className={`w-full flex gap-2 ${reverse && "xl:flex-row-reverse"}`}>
      <div
        className={`${item.color ?? "bg-[#1C1C1A]"} p-4 rounded-lg flex-grow w-full my-2 duration-300 ${isDimmed ? "opacity-20" : ""} ${isSelected ? "-translate-y-2" : ""}`}
        onPointerEnter={() => setHoveredCard(item.id)}
        onPointerLeave={() => setHoveredCard(null)}
      >
        <div className="flex justify-between mb-2">
          <h1>
            <span className="text-xs lg:text-base font-semibold block">
              {item.title}
            </span>
            <span className="text-xs lg:text-sm block">{item.subtitle}</span>
          </h1>
          <h1 className="text-right">
            <span className="text-xs lg:text-base font-semibold block">
              {item.date}
            </span>
            <span className="text-xs lg:text-sm block">{item.location}</span>
          </h1>
        </div>

        <div className="mt-2 pt-2 border-t border-white/10">
          {isExpanded && (
            <ul className="text-xs lg:text-sm pl-4 space-y-1 mb-3 text-[#F0C6A6]">
              {item.description.map((d: string, i: number) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: d }} />
              ))}
            </ul>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[10px] lg:text-xs text-[#82917A] uppercase tracking-wider hover:text-[#F0C6A6] transition-colors"
          >
            {isExpanded ? "Show Less" : "Show More Details..."}
          </button>
        </div>
      </div>

      <div
        className={`w-3 flex items-center justify-center duration-300 ${isMiddle || isStart || isEnd ? groupColor : ""} ${isEnd ? "rounded-b-lg mb-2" : ""} ${isStart ? "rounded-t-lg mt-2" : ""} ${isLineDimmed ? "opacity-20" : ""}`}
      >
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>

      {!alwaysSmall && (
        <View className="hidden xl:block flex-grow w-full my-2 p-4" />
      )}
    </div>
  );
}

export default function Journey() {
  return (
    <PageLayout label="Journey" title="My Journey" divId="journey-div" icon={null}>
      <SectionSubtitle>
        I've done a few things in my life, and I'm proud of all of them. Here
        are some tech-related highlights of my journey so far. More to come!
      </SectionSubtitle>
      <div className="w-full text-left mt-8">
        {journeyData.map((item, i) => (
          <FadeInText
            key={item.id}
            delay={0}
            fromX={i % 2 === 1 ? 20 : -20}
          >
            <JobCard item={item} reverse={i % 2 === 1} alwaysSmall={false} />
          </FadeInText>
        ))}
      </div>
    </PageLayout>
  );
}
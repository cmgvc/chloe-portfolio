import { useState } from "react";
import PageLayout from "../PageLayout";
import FadeInText from "../../components/FadeIn";
import SectionSubtitle from "../../components/SectionSubtitle";
import journeyData from "../../data/journey";

export default function Journey() {
  const [active, setActive] = useState(0);

  return (
    <PageLayout
      label="Experience"
      title="Professional experience"
      divId="journey-div"
      icon={null}
    >
      <SectionSubtitle>
        Roles and the work inside them, from radio software at Dell to an
        internship on Amazon’s Ordering Accounting team.
      </SectionSubtitle>
      <ul className="mt-12 w-full border-t border-line">
        {journeyData.map((item, i) => {
          const on = active === i;
          const current = item.date.includes("Present");
          return (
            <FadeInText
              key={item.id}
              delay={i * 0.04}
              className="border-b border-line"
            >
              <li>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`w-full text-left py-6 pl-5 pr-2 border-l-2 transition-colors duration-300 ${
                    on
                      ? "border-clay bg-sand/50"
                      : "border-transparent hover:bg-sand/30"
                  }`}
                >
                  <span className="flex justify-between gap-6 items-start">
                    <span>
                      {current && (
                        <span className="mb-1 block text-[10px] uppercase tracking-[0.22em] text-sage">
                          Current
                        </span>
                      )}
                      <span
                        className={`font-display text-2xl leading-tight block transition-colors ${
                          on ? "text-ink" : "text-mist"
                        }`}
                      >
                        {item.title}
                      </span>
                      <span className="text-sm text-clay block mt-1">
                        {item.subtitle}
                      </span>
                    </span>
                    <span className="text-right shrink-0">
                      <span className="text-[11px] tracking-[0.14em] uppercase text-ink block">
                        {item.date}
                      </span>
                      <span className="text-xs text-mist block mt-1">
                        {item.location}
                      </span>
                    </span>
                  </span>
                  <span
                    className={`grid transition-all duration-300 ${
                      on
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <span className="overflow-hidden">
                      <span className="block pt-4 max-w-2xl text-sm leading-relaxed text-mist space-y-2">
                        {item.description.map((line) => (
                          <span
                            key={line}
                            className="block"
                            dangerouslySetInnerHTML={{ __html: line }}
                          />
                        ))}
                      </span>
                    </span>
                  </span>
                </button>
              </li>
            </FadeInText>
          );
        })}
      </ul>
    </PageLayout>
  );
}

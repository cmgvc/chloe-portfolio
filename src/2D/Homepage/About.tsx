import { useState } from "react";
import PageLayout from "../PageLayout";
import FadeInText from "../../components/FadeIn";
import SectionSubtitle from "../../components/SectionSubtitle";

const FOCUSES = [
  {
    title: "Backend engineering",
    body: "APIs, data, and the parts of a system that have to stay correct once people depend on them.",
  },
  {
    title: "AI engineering",
    body: "Models inside a product: the software around them, and a check on what they return.",
  },
  {
    title: "Embedded engineering",
    body: "Software close to hardware: drivers, services, and radio systems that have to stay reliable.",
  },
  {
    title: "Cybersecurity",
    body: "Who can reach a system, what they can touch, and how to tell when something is wrong.",
  },
];

export default function About() {
  const [active, setActive] = useState(0);

  return (
    <PageLayout label="About" title="What I do" divId="about-div" icon={null}>
      <SectionSubtitle>
        Software for products that ship, with a standing interest in the layer
        underneath — including the kernel.
      </SectionSubtitle>

      <div className="mt-12 grid lg:grid-cols-[minmax(0,1.3fr)_minmax(220px,0.7fr)] gap-12 lg:gap-20 items-start w-full text-left">
        <div>
          <FadeInText>
            <p className="text-ink/90 leading-relaxed">
              I’m a software developer based between Ottawa and Toronto. At Dell
              I produce and maintain software for radio products used in
              wireless communication systems. Before that I interned at Amazon,
              where I built a platform the Ordering Accounting team uses to
              redrive workflows, and I studied software engineering alongside
              anatomy and cell biology at McGill.
            </p>
          </FadeInText>

          <FadeInText delay={0.1}>
            <p className="mt-4 text-mist leading-relaxed">
              Outside of that I mix music, swim, practice yoga, and read more
              than is reasonable.
            </p>
          </FadeInText>

          <ul className="mt-10 border-t border-line">
            {FOCUSES.map((focus, i) => {
              const on = active === i;
              return (
                <FadeInText
                  key={focus.title}
                  delay={0.15 + i * 0.06}
                  className="border-b border-line"
                >
                  <li>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={`w-full text-left py-5 pl-4 border-l-2 transition-colors duration-300 ${
                        on
                          ? "border-clay bg-sand/50"
                          : "border-transparent hover:bg-sand/30"
                      }`}
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="text-[11px] tracking-[0.18em] text-clay">
                          0{i + 1}
                        </span>
                        <span
                          className={`font-display text-2xl transition-colors ${
                            on ? "text-ink" : "text-mist"
                          }`}
                        >
                          {focus.title}
                        </span>
                      </span>
                      <span
                        className={`grid transition-all duration-300 ${
                          on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <span className="overflow-hidden">
                          <span className="block pt-2 pl-9 text-sm leading-relaxed text-mist max-w-xl">
                            {focus.body}
                          </span>
                        </span>
                      </span>
                    </button>
                  </li>
                </FadeInText>
              );
            })}
          </ul>

          <FadeInText delay={0.35}>
            <dl className="mt-10 grid sm:grid-cols-2 gap-8 text-sm">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-clay">
                  Based
                </dt>
                <dd className="mt-2 text-ink">Ottawa & Toronto, Canada</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-clay">
                  Languages
                </dt>
                <dd className="mt-2 text-ink leading-relaxed">
                  English and French. Comfortable getting around in Spanish.
                  Studying Korean and Japanese.
                </dd>
              </div>
            </dl>
          </FadeInText>
        </div>

        <FadeInText delay={0.15} className="lg:sticky lg:top-24 w-full">
          <figure className="bg-sand p-3 mx-auto w-full max-w-[13.5rem] sm:max-w-[16rem] md:max-w-[18rem] lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/images/headshot.png"
                alt="Chloe Gavrilovic"
                className="absolute max-w-none"
                style={{
                  width: "200%",
                  height: "100%",
                  left: "-64.87%",
                  top: "0%",
                }}
              />
            </div>
          </figure>
        </FadeInText>
      </div>
    </PageLayout>
  );
}

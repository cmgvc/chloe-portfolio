import PageLayout from "../PageLayout";
import FadeInText from "../../components/FadeIn";
import SectionSubtitle from "../../components/SectionSubtitle";

const FOCUSES = [
  {
    title: "Full-stack development",
    body: "Interfaces and the services behind them, taken from a first sketch through deployment.",
  },
  {
    title: "Embedded engineering",
    body: "Software close to hardware: drivers, services, and radio systems that have to stay reliable.",
  },
  {
    title: "Backend engineering",
    body: "APIs, data, and the parts of a system that have to stay correct once people depend on them.",
  },
];

export default function About({ onOpenBeyond }: { onOpenBeyond: () => void }) {
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
              than is reasonable. That side of the desk is in{" "}
              <button
                type="button"
                onClick={onOpenBeyond}
                className="text-clay hover:underline underline-offset-4"
              >
                Beyond the terminal
              </button>
              .
            </p>
          </FadeInText>

          <ul className="mt-10 border-t border-line">
            {FOCUSES.map((focus, i) => (
              <FadeInText
                key={focus.title}
                delay={0.15 + i * 0.06}
                className="border-b border-line"
              >
                <li className="py-5 grid sm:grid-cols-[13rem_1fr] gap-1 sm:gap-8">
                  <span className="font-display text-xl text-ink">
                    {focus.title}
                  </span>
                  <span className="text-sm leading-relaxed text-mist self-center">
                    {focus.body}
                  </span>
                </li>
              </FadeInText>
            ))}
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

        <FadeInText delay={0.15} className="lg:sticky lg:top-24">
          <figure>
            <div className="bg-sand p-3">
              <img
                src="/images/headshot.png"
                alt="Chloe Gavrilovic"
                className="w-full aspect-[3/4] object-cover object-[center_18%]"
              />
            </div>
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.22em] text-mist">
              Montreal
            </figcaption>
          </figure>
        </FadeInText>
      </div>
    </PageLayout>
  );
}

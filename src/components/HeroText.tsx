import FadeInText from "./FadeIn";
import TypingLabel from "./TypingLabel";
import { TYPING_TEXTS } from "../data/home";
import scrollTo from "../utils/scrollTo";

interface HeroTextProps {
  className?: string;
}

const LINKEDIN = "https://www.linkedin.com/in/chloe-gavrilovic-b911551b4/";
const GITHUB = "https://github.com/cmgvc";

export default function HeroText({ className = "" }: HeroTextProps) {
  return (
    <section className={`text-left text-ink max-w-xl ${className}`}>
      <FadeInText delay={0}>
        <p className="text-[11px] uppercase tracking-[0.32em] text-clay">
          Software Developer II · Dell
        </p>
      </FadeInText>

      <FadeInText delay={0.12}>
        <h1 className="font-display font-medium text-6xl sm:text-7xl lg:text-[5.5rem] leading-[0.9] mt-5">
          Chloe
          <br />
          Gavrilovic
        </h1>
      </FadeInText>

      <FadeInText delay={0.24}>
        <p className="mt-8 text-base sm:text-lg leading-relaxed text-mist max-w-md">
          I build software for systems that have to keep working. Radio
          products at Dell, and before that an internal platform for Amazon’s
          Ordering Accounting team.
        </p>
      </FadeInText>

      <FadeInText delay={0.36}>
        <p className="mt-6 font-display italic text-2xl text-ink min-h-[2rem]">
          I am a<TypingLabel className="text-clay not-italic" words={TYPING_TEXTS} />
        </p>
      </FadeInText>

      <FadeInText delay={0.48}>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => scrollTo("projects-div")}
            className="px-5 py-3 bg-ink text-paper text-[11px] tracking-[0.2em] uppercase hover:bg-clay transition-colors"
          >
            Selected work
          </button>
          <button
            type="button"
            onClick={() => scrollTo("contact-div")}
            className="px-5 py-3 border border-ink/20 text-[11px] tracking-[0.2em] uppercase text-ink hover:border-ink transition-colors"
          >
            Get in touch
          </button>
        </div>
        <div className="mt-6 flex gap-6 text-[11px] tracking-[0.2em] uppercase">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mist hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mist hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </FadeInText>

      <FadeInText delay={0.6}>
        <p className="mt-12 text-[11px] tracking-[0.22em] uppercase text-mist/80">
          McGill B.Sc. · Ottawa & Toronto · English & French
        </p>
      </FadeInText>
    </section>
  );
}

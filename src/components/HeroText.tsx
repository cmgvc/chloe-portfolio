import FadeInText from "./FadeIn";
import TypingLabel from "./TypingLabel";
import { TYPING_TEXTS } from "../data/home";
import GitHubButton from "./GitHubButton";
import LinkedInButton from "./LinkedInButton";

interface HeroTextProps {
    className?: string;
}

export default function HeroText({ className = "" }: HeroTextProps) {
    return (
        <section className={`flex items-center justify-center ${className}`}>
            <div className="text-[#F5E6CA] max-w-5xl mt-[10vh]">
                <FadeInText delay={0}>
                    <h2 className="text-xl uppercase tracking-widest">Hey there</h2>
                </FadeInText>

                <FadeInText delay={0.3}>
                    <h1 className="text-6xl font-bold mt-2">
                        My name is <span className="text-[#b47249]">Chloe</span>
                    </h1>
                </FadeInText>

                <FadeInText delay={0.6}>
                    <h2 className="text-xl mt-4">
                        A{" "}
                        <TypingLabel
                            className="text-[#b47249] font-semibold"
                            words={TYPING_TEXTS}
                        />
                    </h2>
                    
                    <div className="h-1 w-24 bg-[#b95c23] mx-auto my-6" />
                    
                    <p className="text-lg leading-relaxed">
                        Welcome to my digital desk. I build at the intersection of logic and aesthetic. Here, you’ll find my code, my curiosities, and the things I’m currently obsessing over. Step in.
                    </p>
                </FadeInText>

                <FadeInText delay={1.0}>
                    <div className="grid grid-cols-2 px-10 gap-4 mt-8">
                        <GitHubButton url="https://github.com/cmgvc" />
                        <LinkedInButton url="https://www.linkedin.com/in/chloe-gavrilovic-b911551b4/" />
                    </div>
                </FadeInText>
            </div>
        </section>
    );
}
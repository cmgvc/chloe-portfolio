import { useEffect, useRef } from "react";
import sleep from "../utils/sleep";
import { TYPING_DELAY, TYPING_SPEED } from "../data/home";

interface TypingLabelProps {
    className?: string;
    words: string[];
}

export default function TypingLabel({ className, words }: TypingLabelProps) {
    const labelRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let isMounted = true;
        
        async function runTypingAnimation() {
            if (!labelRef.current) return;

            let wordIndex = 0;

            while (isMounted) {
                const currentWord = words[wordIndex];

                // Type the word
                for (let i = 0; i <= currentWord.length; i++) {
                    if (!isMounted) return;
                    labelRef.current.textContent = currentWord.slice(0, i);
                    await sleep(TYPING_SPEED);
                }
                await sleep(TYPING_DELAY);

                // Backspace the word
                for (let i = currentWord.length; i >= 0; i--) {
                    if (!isMounted) return;
                    labelRef.current.textContent = currentWord.slice(0, i);
                    await sleep(TYPING_SPEED);
                }

                // Cycle to next word
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        runTypingAnimation();
        return () => { isMounted = false; };
    }, [words]);

    return <span className={className} ref={labelRef} />;
}
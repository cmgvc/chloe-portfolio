import { useEffect, useRef } from "react";
import sleep from "../utils/sleep";
import { TYPING_DELAY, TYPING_SPEED } from "../data/home";

interface TypingWord {
  article: string;
  text: string;
}

interface TypingLabelProps {
  wordClassName?: string;
  words: TypingWord[];
}

export default function TypingLabel({ wordClassName, words }: TypingLabelProps) {
  const articleRef = useRef<HTMLSpanElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let isMounted = true;

    async function runTypingAnimation() {
      let wordIndex = 0;

      while (isMounted) {
        const current = words[wordIndex];
        if (articleRef.current) {
          articleRef.current.textContent = `${current.article} `;
        }

        for (let i = 0; i <= current.text.length; i++) {
          if (!isMounted || !wordRef.current) return;
          wordRef.current.textContent = current.text.slice(0, i);
          await sleep(TYPING_SPEED);
        }
        await sleep(TYPING_DELAY);

        for (let i = current.text.length; i >= 0; i--) {
          if (!isMounted || !wordRef.current) return;
          wordRef.current.textContent = current.text.slice(0, i);
          await sleep(TYPING_SPEED);
        }

        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    runTypingAnimation();
    return () => {
      isMounted = false;
    };
  }, [words]);

  return (
    <>
      <span ref={articleRef} />
      <span className={wordClassName} ref={wordRef} />
    </>
  );
}

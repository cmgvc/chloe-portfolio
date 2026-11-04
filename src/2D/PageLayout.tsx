import { PropsWithChildren, ReactNode } from "react";

interface PageLayoutProps {
  icon: ReactNode;
  label: string;
  title: string;
  divId: string;
  maxW?: string;
  i?: number;
}

export default function PageLayout({
  label,
  title,
  divId,
  children,
  maxW = "max-w-none",
}: PropsWithChildren<PageLayoutProps>) {
  return (
    <section id={divId} className="border-t border-line">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:pl-24 lg:pr-16 py-20 lg:py-28">
        <header id={`${divId}-header`} className="text-left">
          <span className="text-[11px] tracking-[0.32em] uppercase text-clay">
            {label}
          </span>
          <h1 className="font-display font-medium text-5xl lg:text-6xl mt-3 text-ink leading-[0.95]">
            {title}
          </h1>
        </header>

        <article className={`mt-10 flex flex-col items-start w-full ${maxW}`}>
          {children}
        </article>
      </div>
    </section>
  );
}

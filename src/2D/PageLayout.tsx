import { PropsWithChildren, ReactNode } from "react";
import scrollTo from "../utils/scrollTo";

interface PageLayoutProps {
    icon?: ReactNode;
    label: string;
    title: string;
    divId: string;
    maxW?: string;
    i?: number;
}

export default function PageLayout({
    icon,
    label,
    title,
    divId,
    children,
    maxW = "max-w-7xl",
    i = 0,
}: PropsWithChildren<PageLayoutProps>) {
    const bgColor = i % 2 === 0 ? "bg-[#0D0B0A]/50" : "bg-[#0D0B0A]/70";

    return (
        <section
            id={divId}
            className={`${bgColor} p-4 lg:p-8 flex flex-col items-center ml-[5%] mb-[7%]`}
        >
            <header
                id={`${divId}-header`}
                className="text-center cursor-pointer duration-300 hover:opacity-70"
                onClick={() => scrollTo(divId)}
            >
                <div className="flex gap-4 w-full justify-center items-center">
                    {icon}
                    <span className="font-bold text-[#F5E6CA] tracking-widest">
                        {label.toUpperCase()}
                    </span>
                    {icon}
                </div>
                <h1 className="font-bold text-4xl mt-2">{title}</h1>
                <div className="h-1 w-24 bg-[#F5E6CA] mx-auto my-4" />
            </header>

            <article className={`mt-4 flex flex-col items-center w-full ${maxW}`}>
                {children}
            </article>
        </section>
    );
}
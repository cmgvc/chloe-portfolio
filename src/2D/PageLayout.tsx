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
            className={`${bgColor} p-4 lg:p-12 flex flex-col items-center lg:ml-[5%] mb-[7%]`}
        >
            <header
                id={`${divId}-header`}
                className="text-center cursor-pointer duration-300 hover:opacity-70"
                onClick={() => scrollTo(divId)}
            >
                <div className="flex gap-2 lg:gap-4 w-full justify-center items-center">
                    {icon}
                    <span className="font-bold text-[#F5E6CA] tracking-[0.2em] text-sm lg:text-base">
                        {label.toUpperCase()}
                    </span>
                    {icon}
                </div>
                <h1 className="font-bold text-3xl lg:text-5xl mt-2">{title}</h1>
                <div className="h-1 w-16 lg:w-24 bg-[#F5E6CA] mx-auto my-4" />
            </header>

            <article className={`mt-4 flex flex-col items-center w-full ${maxW}`}>
                {children}
            </article>
        </section>
    );
}
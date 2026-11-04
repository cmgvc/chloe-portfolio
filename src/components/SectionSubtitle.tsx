import { PropsWithChildren } from "react";

export default function SectionSubtitle({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <p className={`max-w-xl text-left leading-relaxed text-mist ${className}`}>
      {children}
    </p>
  );
}

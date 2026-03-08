import { PropsWithChildren, ComponentPropsWithoutRef } from "react";

type ButtonProps = 
    | ({ href?: string } & ComponentPropsWithoutRef<"a">)
    | ({ href?: never } & ComponentPropsWithoutRef<"button">);

export default function Button({
    children,
    className = "",
    ...props
}: PropsWithChildren<ButtonProps>) {
    const Component = props.href ? "a" : "button";

    return (
        <Component
            className={`w-full duration-300 rounded-lg py-2 shadow-md hover:-translate-y-0.5 pointer-events-auto ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
}
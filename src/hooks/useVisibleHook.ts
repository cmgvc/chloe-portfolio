import { useEffect, useState } from "react";

const useVisibleHook = (elementId: string, threshold = 0.5) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = document.getElementById(elementId);
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [elementId, threshold]);

    return isVisible;
};

export default useVisibleHook;
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
    delay?: number;
    fromX?: number;
    fromY?: number;
    className?: string;
    once?: boolean;
    flag?: boolean; 
}

const FadeInText = ({
    delay = 0,
    fromX = 0,
    fromY = 20,
    children,
    className = "",
    once = true,
}: PropsWithChildren<FadeInProps>) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: fromX, y: fromY }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once }}
            transition={{ duration: 1, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeInText;
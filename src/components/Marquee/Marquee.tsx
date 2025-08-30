"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Marquee = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, -300]);

    return (
        <div
            ref={ref}
            className="relative w-full mx-auto overflow-x-clip bg-primary-light py-6"
            dir="ltr"
        >
            <motion.div
                style={{ x }}
                className="w-fit mx-auto flex items-center gap-12"
            >
                <span className="hidden lg:block text-3xl font-medium text-right">
                    <span className="block">Crafted for Kings</span>
                    <span className="block">MEN'S CLOTHING WEAR</span>
                </span>
                <span className="block text-4xl lg:text-5xl font-medium">#MACHERIE</span>
                <span className="hidden lg:block text-3xl font-medium">
                    <span className="block">Crafted for Kings</span>
                    <span className="block">MEN'S CLOTHING WEAR</span>
                </span>
            </motion.div>
        </div>
    );
};

export default Marquee;

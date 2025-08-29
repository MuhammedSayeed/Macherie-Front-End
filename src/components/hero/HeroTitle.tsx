import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

interface IProps { title: string }


const containerVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.25 }
}
const LVariant = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 },
};

const RVariant = {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 },
};

const HeroTitle = ({ title }: IProps) => {
    const words = ["MA-", ...title.split(" ")];

    const renderWords = words.map((t, idx) => {
        const isEven = idx % 2 === 0;
        const variant = isEven ? RVariant : LVariant;
        return (
            <motion.h1 key={`${t}-${idx}`} {...variant} transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.5 }} className={clsx("md:font-medium", isEven ? "" : "md:ml-20")}>
                {t}
            </motion.h1>
        );
    })

    return (
        <AnimatePresence mode="wait">
            <motion.div key={title} {...containerVariants} className="leading-[1.1] space-y-0 text-xl md:text-5xl lg:text-7xl xl:text-8xl tracking-tight font-normal text-primary-light">
                {renderWords}
            </motion.div>
        </AnimatePresence>
    );
};

export default HeroTitle;

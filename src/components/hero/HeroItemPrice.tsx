import { AnimatePresence, motion } from "framer-motion"


interface IProps {
    price: number
    animationKey: number
}

const varirants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: .5 }
}
const HeroItemPrice = ({ price, animationKey }: IProps) => {

    return (
        <AnimatePresence mode="wait">
            <motion.span key={animationKey} {...varirants} className="font-semibold  text-primary-light md:text-2xl lg:text-3xl xl:text-4xl md:text-center block">{price} EGP</motion.span>
        </AnimatePresence>
    )
}

export default HeroItemPrice
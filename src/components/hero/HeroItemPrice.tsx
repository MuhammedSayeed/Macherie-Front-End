import { AnimatePresence, motion } from "framer-motion"


interface IProps {
    price: number
    key: number
}

const varirants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: .5 }
}
const HeroItemPrice = ({ price, key }: IProps) => {

    return (
        <AnimatePresence mode="wait">
            <motion.span key={key} {...varirants} className="font-semibold  text-primary-light md:text-2xl lg:text-3xl xl:text-4xl md:text-center block">{price} EGP</motion.span>
        </AnimatePresence>
    )
}

export default HeroItemPrice
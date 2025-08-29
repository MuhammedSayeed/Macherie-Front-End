import { IProducts } from "@/interfaces/products"
import Image from "next/image"



interface IProps {
    items: IProducts[],
    currentIndex: number
}
const CarouselImages = ({ currentIndex, items }: IProps) => {
    return (
        <div className="absolute inset-0 z-[1] overflow-hidden">
            <div style={{ transform: `translateX(-${currentIndex * 100}%)` }} className="flex h-full transition-transform duration-500 ease-in-out">
                {
                    items.map((i, index) => (
                        <div key={index} className="relative w-full h-full flex-shrink-0">
                            <Image src={i.src} alt={`Hero Image ${index + 1}`} fill className="object-cover" sizes="100vw" quality={100} priority={index === 0} unoptimized />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CarouselImages
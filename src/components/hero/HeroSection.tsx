"use client"
import { Button } from "../ui/button"
import { ArrowUpRight } from "lucide-react"
import Rings from "./Rings"
import HeroTitle from "./HeroTitle"
import MobileScreenNavigation from "../Navigations/MobileScreenNavigation"
import CarouselImages from "./CarouselImages"
import useHeroImageCarousel from "@/hooks/useHeroImageCarousel"
import LargeScreenNavigation from "../Navigations/LargeScreenNavigation"
import { IProducts } from "@/interfaces/products"
import HeroItemPrice from "./HeroItemPrice"

interface IProps {
    items: IProducts[],
}

const HeroSection = ({ items }: IProps) => {
    const { currentIndex, nextItem, previousItem } = useHeroImageCarousel(items.length);

    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            <CarouselImages items={items} currentIndex={currentIndex} />
            <Rings />
            <div className="absolute inset-0 z-[3] w-full h-full grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
                <div className="flex flex-col h-fit gap-4 lg:gap-6 w-fit lg:w-full lg:h-full pl-4 md:pl-6 lg:pl-30 pt-25 md:pt-48 text-primary text-lg">
                    <HeroTitle title={items[currentIndex].title} />
                    <HeroItemPrice price={items[currentIndex].price} key={currentIndex} />
                    <div className="w-full md:flex md:justify-center">
                        <Button variant={"primaryLight"} className="rounded-full size-15 md:size-20 lg:size-25 ">
                            <ArrowUpRight className="size-8 md:size-10 lg:size-12 " />
                        </Button>
                    </div>
                </div>
                <div className="lg:hidden flex items-end px-4 md:px-6 pb-4 md:pb-6 ">
                    <MobileScreenNavigation currentIndex={currentIndex} length={items.length} onNext={nextItem} onPrev={previousItem} />
                </div>
                <div className="hidden lg:block w-fit h-fit ml-auto mt-auto m-36">
                    <LargeScreenNavigation currentIndex={currentIndex} length={items.length} onNext={nextItem} onPrev={previousItem} />
                </div>
            </div>
        </section>
    )
}

export default HeroSection


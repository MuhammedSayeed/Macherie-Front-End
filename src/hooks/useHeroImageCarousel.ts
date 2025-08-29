"use client"
import { useEffect, useState } from "react"

const useHeroImageCarousel = (totalImages: number) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextItem = () => setCurrentIndex((prev) => (prev + 1) % totalImages)
  const previousItem = () => setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages)
  const goToItem = (index: number) => setCurrentIndex(index)




  return {
    currentIndex,
    nextItem,
    previousItem,
    goToItem
  }
}

export default useHeroImageCarousel
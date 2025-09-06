"use client"

import useScroll from "@/hooks/useScroll"
import clsx from "clsx";

const MenuButton = () => {
  const isScrolled = useScroll();
  return (
    <span className='flex flex-col items-center justify-center space-y-1 group relative w-7 h-6 cursor-pointer'>
      <div className={clsx("w-5.5 h-[.25rem] group-hover:ml-2 transition-all ease-in-out", isScrolled ? "bg-secondary" : "bg-primary-light")}></div>
      <div className={clsx("w-5.5 h-[.25rem] group-hover:mr-2 transition-all ease-in-out", isScrolled ? "bg-secondary" : "bg-primary-light")}></div>
    </span>
  )
}

export default MenuButton
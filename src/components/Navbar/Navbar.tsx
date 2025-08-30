"use client"
import Link from "next/link"
import CartButton from "@/components/Navbar/CartButton"
import MenuButton from "@/components/menu/MenuButton"
import CatalogButton from "@/components/catalog/CatalogButton"
import useScroll from "@/hooks/useScroll"
import clsx from "clsx"

const Navbar = () => {
    const isScrolled = useScroll()

    return (
        <nav className={clsx("fixed top-0 left-0 right-0 w-full z-50 grid grid-cols-3 items-center px-4 md:px-6 lg:px-12 transition-all duration-200 ease-in-out", isScrolled ? "py-4 text-secondary bg-primary/80 backdrop-blur-md" : "py-8 text-primary-light")}>
            <div className="flex items-center md:gap-15 lg:gap-30">
                <MenuButton />
                <CatalogButton />
            </div>
            <Link href="/" className="flex justify-center text-xl font-bold tracking-widest">
                MACHERIE
            </Link>
            <div className="flex items-center justify-end md:gap-15 lg:gap-30">
                <div className="hidden md:flex md:items-center md:gap-2">
                    <Link href={"/login"} className="hidden cursor-pointer text-sm font-medium tracking-widest md:block hover:underline">
                        LOGIN
                    </Link>
                    <span>/</span>
                    <Link
                        href={"/register"}
                        className="hidden cursor-pointer text-sm font-medium tracking-widest md:block hover:underline"
                    >
                        REGISTER
                    </Link>
                </div>
                <CartButton />
            </div>
        </nav>
    )
}

export default Navbar

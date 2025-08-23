"use client"

import { useEffect, useState } from "react";

const useScroll = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // check on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return isScrolled;
}

export default useScroll
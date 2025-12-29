"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

const ScrollUp = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector(".scrollup");
            if (window.scrollY >= 560) scrollUp.classList.add("bottom-12");
            else scrollUp.classList.remove("bottom-12");
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        const element = document.querySelector("#home");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <a
            href="#home"
            onClick={scrollToTop}
            className="scrollup fixed right-6 md:right-10 -bottom-[20%] bg-title opacity-80 p-2 rounded-md z-[10] transition-all duration-400 hover:bg-title-dark mx-auto"
        >
            <ArrowUp className="scrollup__icon text-white w-5 h-5 md:w-6 md:h-6" />
        </a>
    );
};

export default ScrollUp;

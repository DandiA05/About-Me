"use client";
import React, { useState, useEffect } from "react";
import { User, FileText, Briefcase, Image, Send, X, Grid } from "lucide-react";

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setActiveNav(id);
        showMenu(false);
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className={`header w-full fixed top-0 left-0 z-[100] transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`}>
            <nav className="nav container h-[var(--header-height)] flex justify-between items-center">
                <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, "#home")}
                    className={`nav__logo text-2xl font-black tracking-tighter uppercase transition-all duration-500 ${isScrolled ? "text-title" : "text-white"}`}
                >
                    DANDI ANTO.
                </a>

                <div className={`nav__menu fixed top-0 ${Toggle ? "right-0" : "-right-full"} w-full h-screen bg-white md:bg-transparent md:h-auto md:w-auto md:static p-20 md:p-0 transition-all duration-700 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16`}>
                    <ul className="nav__list flex flex-col md:flex-row items-center gap-10 md:gap-14">
                        {[
                            { id: "#home", label: "Home" },
                            { id: "#about", label: "About" },
                            { id: "#skills", label: "Skills" },
                            { id: "#services", label: "Services" },
                            { id: "#qualification", label: "Qualification" },
                            { id: "#portfolio", label: "Portfolio" },
                            { id: "#contact", label: "Contact" },
                        ].map((item) => (
                            <li className="nav__item" key={item.id}>
                                <a
                                    href={item.id}
                                    onClick={(e) => handleNavClick(e, item.id)}
                                    className={`nav__link text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 ${activeNav === item.id
                                        ? (isScrolled ? "text-title translate-x-1" : "text-white translate-x-1")
                                        : (isScrolled ? "text-text-light hover:text-title hover:-translate-y-0.5" : "text-white/60 hover:text-white hover:-translate-y-0.5")
                                        }`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <X
                        className="nav__close absolute right-10 top-10 cursor-pointer text-title md:hidden w-8 h-8 opacity-50 hover:opacity-100 transition-opacity"
                        onClick={() => showMenu(false)}
                    />
                </div>

                <div className="nav__toggle cursor-pointer md:hidden opacity-70 hover:opacity-100 transition-opacity" onClick={() => showMenu(true)}>
                    <Grid className={`w-8 h-8 transition-colors duration-500 ${isScrolled ? "text-title" : "text-white"}`} />
                </div>
            </nav>
        </header>
    );
};

export default Header;

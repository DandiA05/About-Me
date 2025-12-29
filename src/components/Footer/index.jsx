"use client";
import React from "react";
import Link from "next/link";
import { Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
    return (
        <footer className="footer bg-white border-t border-border pt-40 pb-20">
            <div className="footer__container container flex flex-col items-center">
                <a
                    href="#home"
                    onClick={(e) => {
                        e.preventDefault();
                        document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="footer__title text-4xl font-black text-title mb-16 tracking-tighter uppercase"
                >
                    DANDI ANTO.
                </a>

                <ul className="footer__list flex justify-center gap-12 md:gap-20 mb-20">
                    {["About", "Skills", "Services", "Portfolio", "Contact"].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="footer__link text-[10px] font-black uppercase tracking-[0.3em] text-text-light hover:text-title transition-all duration-500"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="footer__social flex justify-center gap-10 mb-20">
                    {[
                        { icon: Instagram, link: "https://www.instagram.com/dandi_05/" },
                        { icon: Linkedin, link: "https://www.linkedin.com/in/dandi-anto/" },
                        { icon: Github, link: "https://github.com/DandiA05" },
                    ].map((social, idx) => (
                        <a
                            key={idx}
                            href={social.link}
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-title hover:bg-title hover:text-white transition-all duration-700 transform hover:-translate-y-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-4">
                    <span className="footer__copy text-[10px] font-black text-text-light/30 uppercase tracking-[0.4em]">
                        Handcrafted by Dandi
                    </span>
                    <span className="text-[10px] font-bold text-text-light/20 uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} &bull; Digital Experience Studio
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

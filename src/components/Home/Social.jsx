import React from "react";
import Link from "next/link";
import { Instagram, Linkedin, Github } from "lucide-react";

const Social = () => {
    return (
        <div className="home__social flex flex-col items-center gap-8 md:gap-10">
            <div className="w-[1px] h-20 bg-white/10 hidden md:block"></div>
            {[
                { icon: Instagram, link: "https://www.instagram.com/dandi_05/" },
                { icon: Linkedin, link: "https://www.linkedin.com/in/dandi-anto/" },
                { icon: Github, link: "https://github.com/DandiA05" },
            ].map((social, idx) => (
                <Link
                    key={idx}
                    href={social.link}
                    className="home__social-icon text-text-light/60 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                    target="_blank"
                    rel="noreferrer"
                >
                    <social.icon className="w-5 h-5" />
                </Link>
            ))}
            <div className="w-[1px] h-20 bg-gradient-to-b from-white/10 to-transparent hidden md:block"></div>
        </div>
    );
};

export default Social;

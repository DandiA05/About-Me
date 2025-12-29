import React from "react";
import Image from "next/image";
import Info from "./Info";
import { FileText } from "lucide-react";

const About = () => {
    const careerStartYear = 2021;
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - careerStartYear;
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="relative group" data-aos="fade-right">
                    <div className="absolute top-10 -left-6 w-full h-full border-[1.5rem] border-accent rounded-[3rem] -z-10 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                    <Image
                        src="/assets/wafoto.jpeg"
                        alt="About Image"
                        width={600}
                        height={600}
                        className="about__img rounded-[3rem] shadow-2xl shadow-gray-200 transition-all duration-1000 grayscale hover:grayscale-0 w-full aspect-[4/5] object-cover"
                    />
                </div>

                <div className="about__data" data-aos="fade-left">
                    <h3 className="text-xs font-black text-text-light uppercase tracking-[0.3em] mb-12">Who I am</h3>
                    <Info />
                    <p className="about__description text-xl text-text-light leading-[1.8] mb-12 font-medium">
                        A Frontend Developer with {yearsOfExperience} years of experience, passionate about creating user-friendly and functional web applications. Experienced with HTML, CSS, JavaScript, and various frameworks like <span className="text-title font-black">React(Next.js)</span> and <span className="text-title font-black">Vue</span>.
                    </p>

                    <a href="/assets/CV_DANDIANTO.pdf" download="" className="button group">
                        Download CV
                        <FileText className="ml-4 w-4 h-4 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;

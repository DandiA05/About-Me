"use client";
import React from "react";
import { Send } from "lucide-react";

const Data = () => {
    const careerStartYear = 2021;
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - careerStartYear;

    return (
        <div className="home__data col-span-2 md:col-auto">
            <h1
                className="home__title text-4xl md:text-8xl lg:text-9xl font-black tracking-[-0.05em] text-white mb-8 leading-[0.85] text-center md:text-left"
                data-aos="fade-up"
            >
                DANDI ANTO. <br /> STUDIO
            </h1>

            <div
                className="flex flex-col md:flex-row items-center gap-10 mb-12"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <span className="w-20 h-[2px] bg-white hidden md:block"></span>
                <p className="home__description max-w-[540px] text-xl text-text-light/80 font-medium leading-[1.8] text-center md:text-left">
                    A Dedicated Frontend Developer with {yearsOfExperience} years of
                    experience, passionate about creating user-friendly and functional
                    digital products.
                </p>
            </div>

            <div
                className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-12"
                data-aos="fade-up"
                data-aos-delay="400"
            >
                <a
                    href="#contact"
                    onClick={(e) => {
                        e.preventDefault();
                        document
                            .querySelector("#contact")
                            ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="button !bg-white !text-title-dark hover:!bg-accent group flex items-center justify-center w-full md:w-fit"
                >
                    Start a Project
                    <Send className="ml-4 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
            </div>
        </div>
    );
};

export default Data;

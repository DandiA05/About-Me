import React from "react";
import { Award, Briefcase, Headphones } from "lucide-react";

const Info = () => {

    const careerStartYear = 2021;
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - careerStartYear;
    return (
        <div className="about__info grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-12">
            {[
                { icon: Award, title: "Experience", desc: `${yearsOfExperience} Years` },
                { icon: Briefcase, title: "Completed", desc: "40+ Projects" },
                { icon: Headphones, title: "Support", desc: "24/7 Online" },
            ].map((item, idx) => (
                <div key={idx} className="about__box bg-white border border-border/50 rounded-[2rem] p-6 md:p-8 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2">
                    <item.icon className="about__icon w-5 h-5 md:w-6 md:h-6 text-title mb-4 mx-auto opacity-50" />
                    <h3 className="about__title text-[10px] md:text-sm font-black text-title uppercase tracking-wider md:tracking-widest mb-2">{item.title}</h3>
                    <span className="about__subtitle text-[9px] md:text-[10px] text-text-light font-bold uppercase tracking-widest">{item.desc}</span>
                </div>
            ))}
        </div>
    );
};

export default Info;

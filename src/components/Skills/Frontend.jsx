import React from "react";
import { BadgeCheck } from "lucide-react";

const Frontend = () => {
    return (
        <div className="skills__content bg-white/5 border border-white/10 p-12 rounded-[2.5rem] relative overflow-hidden group transition-all duration-500 hover:bg-white/10" data-aos="fade-up">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110"></div>
            <h3 className="skills__title text-xs font-black text-text-light/40 uppercase tracking-[0.3em] mb-12 text-center md:text-left">Frontend</h3>
            <div className="skills__box grid grid-cols-2 gap-y-10 gap-x-6 relative z-10">
                {[
                    { name: "Next.js", level: "Advanced" },
                    { name: "React.js", level: "Advanced" },
                    { name: "Vue.js", level: "Advanced" },
                    { name: "TypeScript", level: "Advanced" },
                    { name: "HTML / CSS", level: "Advanced" },
                    { name: "Tailwind", level: "Advanced" },
                ].map((skill, idx) => (
                    <div className="skills__data flex flex-col gap-2 group/item" key={idx}>
                        <div className="flex items-center gap-3">
                            <BadgeCheck className="w-4 h-4 text-white opacity-20 group-hover/item:opacity-100 transition-opacity" />
                            <h3 className="skills__name text-lg font-bold text-white tracking-tight">{skill.name}</h3>
                        </div>
                        <span className="skills__level text-[10px] text-text-light/40 font-bold uppercase tracking-widest ml-7">{skill.level}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Frontend;

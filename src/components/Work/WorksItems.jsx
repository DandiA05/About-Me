import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const WorksItems = ({ item }) => {
    return (
        <div className="work__card group bg-white rounded-[2.5rem] overflow-hidden transition-all duration-700 shadow-sm hover:shadow-2xl hover:shadow-gray-200/80 transform hover:-translate-y-3" key={item.id}>
            <div className="relative w-full h-[280px] overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.title}
                    className="work__img object-cover transition-transform duration-1000 group-hover:scale-110"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md text-title text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-sm">{item.category}</span>
                </div>
            </div>
            <div className="p-10">
                <h3 className="work__title text-2xl font-black text-title tracking-tighter mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="work__description text-sm text-text-light leading-relaxed mb-8 line-clamp-2 font-medium">{item.desc}</p>
                <div className="flex justify-between items-center pt-6 border-t border-border">
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-black text-text-light uppercase tracking-widest opacity-50">Stack</span>
                        <span className="text-xs font-bold text-title">{item.tools}</span>
                    </div>
                    {item.link && (
                        <a
                            href={item.link}
                            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-title hover:bg-title hover:text-white transition-all duration-500 group/btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:rotate-[-45deg]" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorksItems;

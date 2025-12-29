"use client";
import React, { useState } from "react";
import { LayoutGrid, ArrowRight, X, CheckCircle, Smartphone, PenTool } from "lucide-react";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid md:grid-cols-3 gap-12 md:gap-16">
                {[
                    { icon: LayoutGrid, title: "Web", subtitle: "Development", delay: "0" },
                    { icon: Smartphone, title: "Mobile", subtitle: "Development", delay: "200" },
                    { icon: PenTool, title: "UI/UX", subtitle: "Designer", delay: "400" },
                ].map((service, idx) => (
                    <div
                        key={idx}
                        className="services__content relative bg-white rounded-[3rem] p-16 transition-all duration-1000 shadow-sm hover:shadow-2xl hover:shadow-gray-200/80 group overflow-hidden transform hover:-translate-y-4"
                        data-aos="fade-up"
                        data-aos-delay={service.delay}
                    >
                        <div className="absolute top-8 right-8 p-4 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45">
                            <ArrowRight className="w-5 h-5 text-title" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center mb-12 transition-all duration-700 group-hover:bg-title group-hover:text-white group-hover:rounded-full">
                                <service.icon className="w-10 h-10" />
                            </div>
                            <h3 className="services__title text-3xl font-black text-title leading-[1.1] mb-8 tracking-tighter">
                                {service.title} <br /> {service.subtitle}
                            </h3>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-[2px] bg-title rounded-full group-hover:w-24 group-hover:bg-blue-600 transition-all duration-700"></div>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-700">Explore</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;

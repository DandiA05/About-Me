"use client";
import React, { useState } from "react";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section bg-title-dark py-40" id="qualification">
            <h2 className="section__title !text-white">Qualification</h2>
            <span className="section__subtitle text-text-light/60">My Personal Journey</span>

            <div className="qualification__container container max-w-[768px]">
                <div className="qualification__tabs flex justify-center mb-8 gap-12">
                    <div
                        className={`qualification__button flex items-center text-h3 font-medium cursor-pointer p-2 transition-colors ${toggleState === 1 ? "text-white" : "text-text-light/40 hover:text-white/60"}`}
                        onClick={() => toggleTab(1)}
                    >
                        <Briefcase className="qualification__icon text-2xl mr-2" />
                        Experience
                    </div>
                    <div
                        className={`qualification__button flex items-center text-h3 font-medium cursor-pointer p-2 transition-colors ${toggleState === 2 ? "text-white" : "text-text-light/40 hover:text-white/60"}`}
                        onClick={() => toggleTab(2)}
                    >
                        <GraduationCap className="qualification__icon text-2xl mr-2" />
                        Education
                    </div>
                </div>

                <div className="qualification__sections md:grid md:justify-center">
                    <div className={toggleState === 1 ? "block" : "hidden"}>
                        {/* 1 - SMF (Left) */}
                        <div className="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-[1.5rem]" data-aos="fade-up">
                            <div className="text-right">
                                <h3 className="qualification__title text-normal font-medium text-white">Frontend Developer</h3>
                                <span className="qualification__subtitle inline-block text-sm mb-1 text-text-light/80">PT. Sarana Multigriya Finansial (Persero)</span>
                                <div className="qualification__calendar text-sm text-text-light/40 flex items-center justify-end gap-1">
                                    <Calendar className="w-3 h-3" /> Aug 2024 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder inline-block w-[13px] h-[13px] bg-white rounded-full"></span>
                                <span className="qualification__line block w-[1px] h-full bg-white/20 translate-x-[6px] -translate-y-[7px]"></span>
                            </div>
                        </div>

                        {/* 2 - ACC Cell Lead (Right) */}
                        <div className="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-[1.5rem]" data-aos="fade-up">
                            <div></div>
                            <div>
                                <span className="qualification__rounder inline-block w-[13px] h-[13px] bg-white rounded-full"></span>
                                <span className="qualification__line block w-[1px] h-full bg-white/20 translate-x-[6px] -translate-y-[7px]"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title text-normal font-medium text-white">Cell Lead Frontend</h3>
                                <span className="qualification__subtitle inline-block text-sm mb-1 text-text-light/80">Berijalan Techno Center ACC</span>
                                <div className="qualification__calendar text-sm text-text-light/40 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" /> Mar 2024 - Aug 2024
                                </div>
                            </div>
                        </div>

                        {/* 3 - ACC React (Left) */}
                        <div className="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-[1.5rem]" data-aos="fade-up">
                            <div className="text-right">
                                <h3 className="qualification__title text-normal font-medium text-white">React Developer</h3>
                                <span className="qualification__subtitle inline-block text-sm mb-1 text-text-light/80">Berijalan Techno Center ACC</span>
                                <div className="qualification__calendar text-sm text-text-light/40 flex items-center justify-end gap-1">
                                    <Calendar className="w-3 h-3" /> Jan 2023 - Feb 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder inline-block w-[13px] h-[13px] bg-white rounded-full"></span>
                                <span className="qualification__line block w-[1px] h-full bg-white/20 translate-x-[6px] -translate-y-[7px]"></span>
                            </div>
                        </div>

                        {/* 4 - ACC OutSystems (Right) */}
                        <div className="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-[1.5rem]" data-aos="fade-up">
                            <div></div>
                            <div>
                                <span className="qualification__rounder inline-block w-[13px] h-[13px] bg-white rounded-full"></span>
                                <span className="qualification__line block w-[1px] h-full bg-white/20 translate-x-[6px] -translate-y-[7px]"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title text-normal font-medium text-white">OutSystems Developer</h3>
                                <span className="qualification__subtitle inline-block text-sm mb-1 text-text-light/80">Berijalan Techno Center ACC</span>
                                <div className="qualification__calendar text-sm text-text-light/40 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" /> Jul 2021 – Aug 2023
                                </div>
                            </div>
                        </div>

                        {/* 5 - XSIS (Left) */}
                        <div className="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-[1.5rem]" data-aos="fade-up">
                            <div className="text-right">
                                <h3 className="qualification__title text-normal font-medium text-white">PHP Hybrid</h3>
                                <span className="qualification__subtitle inline-block text-sm mb-1 text-text-light/80">XSIS BOOTCAMP</span>
                                <div className="qualification__calendar text-sm text-text-light/40 flex items-center justify-end gap-1">
                                    <Calendar className="w-3 h-3" /> May 2021 – Jul 2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder inline-block w-[13px] h-[13px] bg-white rounded-full"></span>
                                <span className="qualification__line block w-[1px] h-full bg-white/20 translate-x-[6px] -translate-y-[7px]"></span>
                            </div>
                        </div>

                        {/* 6 - Freelance (Right) */}
                        <div className="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-[1.5rem]" data-aos="fade-up">
                            <div></div>
                            <div>
                                <span className="qualification__rounder inline-block w-[13px] h-[13px] bg-white rounded-full"></span>
                                <span className="qualification__line block w-[1px] h-full bg-white/20 translate-x-[6px] -translate-y-[7px]"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title text-normal font-medium text-white">Mobile Apps Developer</h3>
                                <span className="qualification__subtitle inline-block text-sm mb-1 text-text-light/80">FREELANCE</span>
                                <div className="qualification__calendar text-sm text-text-light/40 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" /> 2018 - 2019
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "block" : "hidden"}>
                        {/* 1 - UAD (Left) */}
                        <div className="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-[1.5rem]" data-aos="fade-up">
                            <div className="text-right">
                                <h3 className="qualification__title text-normal font-medium text-white">Informatics Engineering</h3>
                                <span className="qualification__subtitle inline-block text-sm mb-1 text-text-light/80">Ahmad Dahlan University</span>
                                <div className="qualification__calendar text-sm text-text-light/40 flex items-center justify-end gap-1">
                                    <Calendar className="w-3 h-3" /> 2016 - 2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder inline-block w-[13px] h-[13px] bg-white rounded-full"></span>
                                <span className="qualification__line block w-[1px] h-full bg-white/20 translate-x-[6px] -translate-y-[7px]"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;

import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
    return (
        <section className="skills section bg-title-dark text-white" id="skills">
            <h2 className="section__title !text-white">Skills</h2>
            <span className="section__subtitle text-text-light/60">My Technical Level</span>

            <div className="skills__container container grid md:grid-cols-2 gap-8 md:gap-12 justify-center">
                <Frontend />
                <Backend />
            </div>
        </section>
    );
};

export default Skills;

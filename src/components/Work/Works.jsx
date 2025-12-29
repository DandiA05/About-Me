"use client";
import React, { useEffect, useState } from "react";
import { projectsData, projectNav } from "./Data";
import WorksItems from "./WorksItems";

const Works = () => {
    const [item, setItem] = useState({ name: "all" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    };

    return (
        <div>
            <div className="work__filters flex justify-center items-center gap-4 mb-12">
                {projectNav.map((item, index) => {
                    return (
                        <span
                            onClick={(e) => handleClick(e, index)}
                            className={`${active === index ? "bg-title text-white" : "text-text-light hover:text-title hover:bg-accent"
                                } work__item text-xs font-bold uppercase tracking-widest py-2 px-6 rounded-full cursor-pointer transition-all duration-300`}
                            key={index}
                        >
                            {item.name}
                        </span>
                    );
                })}
            </div>

            <div className="work__container container grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-center max-w-[1024px]">
                {projects.map((item) => {
                    return <WorksItems item={item} key={item.id} />;
                })}
            </div>
        </div>
    );
};

export default Works;

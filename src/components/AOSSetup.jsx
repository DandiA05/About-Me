"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSSetup = () => {
    useEffect(() => {
        AOS.init({
            duration: 900, // values from 0 to 3000, with step 50ms
            once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);

    return null;
};

export default AOSSetup;

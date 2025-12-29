import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
    return (
        <section className="home section min-h-screen flex items-center justify-center p-0 bg-title-dark text-white" id="home">
            <div className="home__container container mt-20">
                <div className="home__content grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-12 md:gap-24 items-center mb-16">
                    <Social />

                    <Data />

                    {/* <div className="home__img animate-profile bg-[url('/assets/about1.jpg')] bg-center bg-cover border-[12px] border-white shadow-2xl shadow-gray-200/50 w-[280px] h-[280px] md:w-[450px] md:h-[450px] justify-self-center"></div> */}
                </div>
                <ScrollDown />
            </div>
        </section>
    );
};

export default Home;

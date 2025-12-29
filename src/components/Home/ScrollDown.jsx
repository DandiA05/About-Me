import React from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

const ScrollDown = () => {
    return (
        <div className="home__scroll ml-[9.25rem] md:ml-[7.5rem] hidden md:block">
            <Link href="#about" className="home__scroll-button flex items-center transition-transform hover:translate-y-1">
                <svg
                    width="32px"
                    height="32px"
                    className="home__scroll-mouse"
                    viewBox="0 0 247 390"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "1.5",
                    }}
                >
                    <path
                        className="animate-scroll"
                        d="M123.359,79.775l0,72.843"
                        style={{
                            fill: "none",
                            stroke: "#fff",
                            strokeWidth: "20px",
                        }}
                    ></path>
                    <path
                        id="mouse"
                        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                        style={{
                            fill: "none",
                            stroke: "#fff",
                            strokeWidth: "20px",
                        }}
                    ></path>
                </svg>
                <span className="home__scroll-name text-white font-medium mr-1 ml-2 text-sm">Scroll Down</span>
                <ArrowDown className="home__scroll-arrow text-white text-xl animate-bounce" />
            </Link>
        </div>
    );
};

export default ScrollDown;

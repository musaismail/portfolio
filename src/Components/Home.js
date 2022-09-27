import React from "react";
import { Resume } from "../Assets/Resume.pdf";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-2xl">Hi, my name is </p>
        <h1 className="text-4xl font-bold sm:text-7xl text-[#ccd6f6]">
          Ismail Musa
        </h1>
        <h2 className="text-4xl font-bold sm:text-7xl text-[#8892b0]">
          I'm a Frontend Developer.{" "}
        </h2>
        <p className="text-[#8892b0] py-3 max-w-[700px]">
          I'm a frontend developer specializing in building (and occassionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive frontend web applications{" "}
        </p>
        <div>
          <a href={Resume}>
            {" "}
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Resume
              <span className="group-hover:rotate-90 duration-300 ">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

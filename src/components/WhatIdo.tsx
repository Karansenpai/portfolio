import React from "react";
import { TechStack } from "./ui/TechStack";
import { TypewriterEffectSmooth } from "./ui/TypeWriterEffect";
import { whatido } from "@/lib";
import DisplayLottie from "./DisplayLottie";
import codingPerson from "../assets/lottie/codingPerson.json";
import { FadeText } from "./ui/FadeText";
const WhatIdo = () => {
  return (
    <div id="about" className="flex flex-col lg:flex-row justify-center items-center relative overflow-hidden">
      <div className="flex flex-col flex-1 relative justify-center items-center">
        <div className="h-[600px] w-[600px] relative down-[4rem]">
          <DisplayLottie animationData={codingPerson} />
        </div>

        <div className="flex flex-col text-left p-4 ml-8 gap-5 relative top-[-5rem]">
          <FadeText
            className="text-md sm:text-xl font-bold text-black dark:text-white p-3"
            direction="up"
            framerProps={{
              show: { transition: { delay: 1 } },
            }}
            text="⚡Experience in creating responsive, user-friendly interfaces. "
          />
          <FadeText
            className="text-md sm:text-xl font-bold text-black dark:text-white p-3"
            direction="left"
            framerProps={{
              show: { transition: { delay:1  } },
            }}
            text="⚡Experience with databases such as MySQL, PostgreSQL, MongoDB."
          />
          <FadeText
            className="text-md sm:text-xl font-bold text-black dark:text-white p-3"
            direction="right"
            framerProps={{
              show: { transition: { delay: 1 } },
            }}
            text="⚡Capable of handling both front-end and back-end development."
          />
          <FadeText
            className="text-md sm:text-xl font-bold text-black dark:text-white p-3"
            direction="down"
            framerProps={{
              show: { transition: { delay: 1 } },
            }}
            text="⚡Solving algorithmic challenges to enhance skills





"
          />
        </div>
      </div>
      <div className="flex-col my-[5rem] flex-1">
        <div className="flex flex-2 text-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center mt-10">
            What I Do
          </h1>
        </div>
        <div className="flex justify-center text-center ">
          <TypewriterEffectSmooth  words={whatido} />
        </div>
        <div className="flex  justify-center my-5">
          <TechStack />
        </div>
      </div>
    </div>
  );
};

export default WhatIdo;

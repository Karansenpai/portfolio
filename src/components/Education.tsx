"use client";
import React from "react";


import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import SparkelText from "./ui/SparkleText";
import { Card } from "./ui/Card";

export function Education() {
  return (
    <div className="flex flex-col justify-center">
      <div>
        <SparkelText
          text="Education"
          className="text-6xl font-bold text-center capitalize "
        />
      </div>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center  w-full gap-4 mx-auto px-8">
        <Card title="IIIT Allahabad' 2026" icon={<AceternityIcon />} course="Course B.Tech" Branch="Information Technology" cgpa="CGPA: 8.61/10 (Till 3rd Sem)" logo ={"/IIITA.png"}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Inspiration Sr. Sec. School"
        course="Secondary Education" Branch="P.C.M CBSE (2021) " marks = "12th : 97.6 %" year = "CBSE 2021" icon={<AceternityIcon />} logo={"/IPS.jpg"}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="K.V. Bageshwar" marks = "10th : 95.4 %" icon={<AceternityIcon />} logo={"/KVS.jpg"}
        course="High School Education" Branch="CBSE (2019)
          
        ">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </div>
  );
}




export const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};


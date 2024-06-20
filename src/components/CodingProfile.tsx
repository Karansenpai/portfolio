import React from "react";
import WavyText from "./ui/WavyText";
import SparklesText from "./ui/SparkleText";
import { CodingProfileCard } from "./CodingProfileCard";

const CodingProfile = () => {
  return (
    <div className="flex flex-col justify-center items-center p-3 gap-5 m-3">
      <div>
        <SparklesText
          text="Coding Profile"
          className="text-6xl font-bold text-center capitalize "
        />
      </div>
      <div className="flex flex-col md:flex-row gap-[5rem] p-2">
        <CodingProfileCard
          CodingLink="https://codeforces.com/profile/KDSenpai"
          maxRating="1421"
          title="Codeforces"
          rank="Specialist"
          photo="/codeforces.jpg"
        />

        <CodingProfileCard
          CodingLink="https://www.codechef.com/users/kdsenpai"
          maxRating="1787"
          title="CodeChef"
          rank="3* Codechef"
          photo="/codechef.png"
        />

        <CodingProfileCard
          CodingLink="https://leetcode.com/u/KDSenpai/"
          maxRating="1723"
          title="Leetcode"
          rank="Knight Soon"
          photo="/leetcode.png"
        />

        <CodingProfileCard
          CodingLink="https://atcoder.jp/users/KaranSenpai"
          maxRating="700"
          title="Atcoder"
          rank="7 kyu"
          photo="/Atcoder.png"
        />

        {/* <CodingProfileCard/>
        <CodingProfileCard/> */}
      </div>
    </div>
  );
};

export default CodingProfile;

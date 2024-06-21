import React from "react";
import WavyText from "./ui/WavyText";
import SparklesText from "./ui/SparkleText";
import { CodingProfileCard } from "./CodingProfileCard";

const CodingProfile = () => {
  return (
    <div id="coding-profile" className="flex flex-col justify-center items-center p-3 gap-5 m-3">
      <div>
        <SparklesText
          text="Coding Profile"
          className="text-6xl font-bold text-center capitalize "
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-[5rem] p-2 flex-wrap justify-center">
        <CodingProfileCard
          CodingLink="https://codeforces.com/profile/KDSenpai"
          maxRating="1421"
          title="Codeforces"
          rank="Specialist"
          photo="/Codeforces.jpg"
        />

        <CodingProfileCard
          CodingLink="https://www.codechef.com/users/kdsenpai"
          maxRating="1787"
          title="CodeChef"
          rank="3* Codechef"
          photo="/Codechef.png"
        />

        <CodingProfileCard
          CodingLink="https://leetcode.com/u/KDSenpai/"
          maxRating="1723"
          title="Leetcode"
          rank="Knight Soon"
          photo="/Leetcode.png"
        />

        <CodingProfileCard
          CodingLink="https://atcoder.jp/users/KaranSenpai"
          maxRating="700"
          title="Atcoder"
          rank="7 kyu"
          photo="/Atcoder.jpeg"
        />

        {/* <CodingProfileCard/>
        <CodingProfileCard/> */}
      </div>
    </div>
  );
};

export default CodingProfile;

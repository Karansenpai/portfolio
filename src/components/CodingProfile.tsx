"use client";

import React, { useEffect } from "react";
import SparklesText from "./ui/SparkleText";
import { CodingProfileCard } from "./CodingProfileCard";

const CodingProfile = () => {

  const [codeforcesData, setCodeforcesData] = React.useState<any>([{}]);
  const [leetcodeData, setLeetcodeData] = React.useState<string>("0");
  const [codechefData, setCodechefData] = React.useState<string>("0");

  const [loading, setLoading] = React.useState(false);


  useEffect(() => {
    try {
      setLoading(true);
      const getCodeforcesRating = async () => {
        const response = await fetch(
          "https://codeforces.com/api/user.info?handles=KDSenpai"
        );
        const data = await response.json();

        setCodeforcesData(data);
      };

      getCodeforcesRating();
    } catch (err) {
      console.log(err);
    } finally{
      setLoading(false);
    }

    try {
      const leetcodeRating = async () => {
        
        const response = await fetch(
          "https://alfa-leetcode-api.onrender.com/userContestRankingInfo/KDSenpai"
        );
        const data = await response.json();

        const rating = data.data.userContestRanking.rating;
        const rating1 = Math.floor(rating);
        setLeetcodeData(rating1.toString());
      };

      leetcodeRating();
    } catch (err) {
      console.log(err);
    }

    try {
      const codechefRating = async () => {
        const response = await fetch(
          "https://codechef-api.vercel.app/kdsenpai"
        );
        const data = await response.json();
        setCodechefData(data.highestRating);
      };
      codechefRating();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getRank = (rating: string) => {
    if (rating >= "1600" && rating < "1800") return "3 star";
    if (rating >= "1800" && rating < "2000") return "4 star";
    if (rating >= "2000" && rating < "2200") return "5 star";
  };

  return (
    <div
      id="coding-profile"
      className="flex flex-col justify-center items-center p-3 gap-5 m-3"
    >
      <div>
        <SparklesText
          text="Coding Profile"
          className="text-4xl md:text-5xl font-bold text-center capitalize "
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-[5rem] p-2 flex-wrap justify-center">
        {codeforcesData.result && (
          <CodingProfileCard
            CodingLink="https://codeforces.com/profile/KDSenpai"
            maxRating={codeforcesData.result[0].maxRating}
            title="Codeforces"
            rank={codeforcesData.result[0].maxRank}
            photo="/Codeforces.jpg"
          />
        )}

        {!codeforcesData.result && (
          <CodingProfileCard
            CodingLink="https://codeforces.com/profile/KDSenpai"
            maxRating={"1443"}
            title="Codeforces"
            rank={"Specialist"}
            photo="/Codeforces.jpg"
          />
        )}

        <CodingProfileCard
          CodingLink="https://www.codechef.com/users/kdsenpai"
          maxRating={codechefData}
          title="CodeChef"
          rank={getRank(codechefData)}
          photo="/Codechef.png"
        />

        <CodingProfileCard
          CodingLink="https://leetcode.com/u/KDSenpai/"
          maxRating={leetcodeData}
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
      </div>
    </div>
  );
};

export default CodingProfile;

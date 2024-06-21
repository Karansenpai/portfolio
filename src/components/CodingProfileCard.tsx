import React from "react";
import { Meteors } from "@/components/ui/Meteors";
import Link from "next/link";
import Image from "next/image";

interface CodingProfileCardProps {
  title: string;
  maxRating: string;
  CodingLink: string;
  rank?: string;
  photo: string;
}
export function CodingProfileCard({
  title,
  maxRating,
  CodingLink,
  rank,
  photo,
}: CodingProfileCardProps) {
  return (
    <div className=" w-full relative max-w-xs text-center">
      <div className="absolute inset-0 h-full w-full transform scale-[0.80] rounded-full blur-3xl text-center" />
      <div className="relative shadow-xl  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center text-center items-center">
        <div className="w-[300px] h-[300px]">
          <Image
            src={photo}
            className="rounded-xl"
            width={300}
            height={300}
            alt=" "
          />
        </div>

        <div className="flex flex-col justify-center text-center">
          <h1 className="font-bold text-xl mb-4 relative z-50 flex justify-center">
            {title}
          </h1>

          <h1 className="font-bold text-xl mb-4 relative z-50">
            Max Rating: {maxRating}
          </h1>

          {rank && (
            <h1 className="font-bold text-xl mb-4 relative z-50">{rank}</h1>
          )}

          <Link
            href={CodingLink}
            className="border px-4 py-1 rounded-lg  border-gray-500 "
          >
            Visit
          </Link>
        </div>

        <Meteors number={20} />
      </div>
    </div>
  );
}

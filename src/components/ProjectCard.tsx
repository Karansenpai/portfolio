"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3DCard";
import Link from "next/link";
import { project1Icons } from "@/lib";


interface ProjectCardProps {
  Title: string;
  Description: string;
  Photo: string;
  LiveLink?: string;
  GithubLink: string;
  projectIcons: {
    iconLists: string[];
  }
}
export function ProjectCard({
  Title,
  Description,
  Photo,
  LiveLink,
  GithubLink,
  projectIcons,
}: ProjectCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[22rem] sm:w-[35rem] h-auto rounded-xl p-6 border   ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {Title}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={Photo}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-md mt-2 dark:text-neutral-300 text-bold p-2"
        >
          {Description}
        </CardItem>
        <CardItem className="flex flex-row gap-3 ">
          {projectIcons.iconLists.map((icon:string, index:number) => (
            <div
              key={index}
              className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
              style={{
                transform: `translateX(-${5 * index + 2}px)`,
              }}
            >
              <Image src={icon} alt="icon5" className="p-2" width={100} height={100}/>
            </div>
          ))}
        </CardItem>

        <div className="flex justify-between items-center mt-10">
        {LiveLink && (
          <CardItem
            translateZ={20}
            as={Link}
            href={LiveLink}
            target="__blank"
            className="px-4 py-2 rounded-xl text-md font-bold dark:text-white"
          >
            Check Live
          </CardItem>
          )}
          <CardItem
            translateZ={20}
            as={Link}
            href={GithubLink}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Github
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

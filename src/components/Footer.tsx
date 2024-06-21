import React from "react";
import WordPullUp from "./ui/WordPullUp";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";
const Footer = () => {
  return (
    <div id="contact" className="flex flex-col">
      <div className="flex flex-col justify-center text-center items-center p-5 m-5 gap-y-[2rem]">
        <div>
          <a href="mailto:contact@jsmastery.pro">
            <WordPullUp
              className="text-4xl  font-bold tracking-[-0.02em] md:text-5xl md:leading-[5rem] text-blue-500 dark:text-blue-500 capitalize p-2"
              words="Reach Out to Me"
            />
          </a>
        </div>

        <div>
          <Link
            href="mailto:karandeoli444.gmail.com"
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 flex-col"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Lets Get in touch
              <div className="p-2">
                <AceternityIcon />
              </div>
            </span>
          </Link>
        </div>
      </div>

      <div>
        <div className="flex  w-full justify-between p-5 space-x-4">
          <div>
            <p className="md:text-base text-sm md:font-normal font-light">
              Copyright © 2024 Karan Deoli
            </p>
          </div>
          <div className="flex items-center md:gap-3 gap-7 p-2 space-x-5">
            <Link href="https://github.com/Karansenpai">
              <VscGithubInverted className="size-7" />
            </Link>
            <Link href="https://www.linkedin.com/in/karan-deoli-36a3ab212/i">
              <FaLinkedin className="size-7" />
            </Link>
            <Link href="mailto:karandeoli444.gmail.gmail">
              <BiLogoGmail className="size-7" />
            </Link>
          </div>
        </div>
        <div className="flex text-center justify-center">
          Code is like humor. When you have to explain it, it&apos;s bad&quot; —
          Cory House
        </div>
      </div>
    </div>
  );
};

export default Footer;

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 bg-inherit  group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};

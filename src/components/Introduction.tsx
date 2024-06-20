"use client";

import { Highlight } from "@/components/ui/HeroHighlight";
import { Dock, DockIcon } from "./ui/Dock";
import Link from "next/link";
import { Icons } from "@/lib/Icons";
import IconCloud from "./ui/IconCloud";
import { slugs } from "@/lib";
import { buttonVariants } from "./ui/button";
import WordPullUp from "./ui/WordPullUp";
import WordFadeIn from "./ui/WordFallIn";

export function Introduction() {
  return (
    <div className=" text-center w-full">
      <div className="flex flex-col md:flex-row h-full sm:items-center justify-center ">
        <div className="my-6 p-5 ">
          <div className="text-4xl md:text-5xl font-bold py-1">
            <WordPullUp
              className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-5xl md:leading-[5rem]"
              words=" Hi all, I'm Karan 👋"
            />
          </div>
          <div className="text-3xl md:text-5xl font-semibold my-3 ">
            <WordFadeIn className="text-4xl md:text-5xl capitalize " words="A passionate" />
          </div>

          <div className="flex flex-row items-center justify-center">
            <div className="text-2xl md:text-4xl font-semibold my-3 p-5">
              <Highlight className="text-black dark:text-white p-4 md:p-3 font-bold">
                Full Stack
              </Highlight>
            </div>
            <div className="text-3xl md:text-5xl font-semibold my-1 md:my-3 ">
              Developer
            </div>
          </div>
          <div className="py-2">
            <WordFadeIn
              className="text-2xl md:text-4xl p-2"
              words="who loves to build things that live on the internet"
            />
          </div>

          <div className="space-y-2">
            <Dock>
              <DockIcon>
                <Link href="/github.com">
                  <Icons.gitHub className="h-6 w-6" />
                </Link>
              </DockIcon>
              <DockIcon>
                <Icons.googleDrive className="h-6 w-6" />
              </DockIcon>
              <DockIcon>
                <Icons.notion className="h-6 w-6" />
              </DockIcon>
              <DockIcon>
                <Icons.openai className="h-6 w-6" />
              </DockIcon>
              <DockIcon>
                <Icons.whatsapp className="h-6 w-6" />
              </DockIcon>
            </Dock>

            <div className="space-x-4 space-y-4">
              <Link href="#contact" className={buttonVariants()}>
                <div className="text-xl sm:text-2xl font-semibold ">
                  Contact Me
                </div>
              </Link>

              <Link href="#contact" className={buttonVariants()}>
                <div className="text-xl sm:text-2xl font-semibold">
                  My Resume
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:ml-[10rem]">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
}

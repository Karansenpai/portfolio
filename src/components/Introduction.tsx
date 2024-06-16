"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/HeroHighlight";
import { Dock, DockIcon } from "./ui/Dock";
import Link from "next/link";
import { Icons } from "@/lib/Icons";
import IconCloud from "./ui/IconCloud";
import { slugs } from "@/lib";

export function Introduction() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="px-4  text-neutral-700 dark:text-white  leading-relaxed lg:leading-snug text-center w-full  "
      >
        <div className="sm:flex">
          <div className="flex-1 my-5 p-5">
            <div className="text-5xl font-bold p-5">
              Hi all, I&apos;m Karan
            </div>
            <div className="text-3xl font-semibold my-3 p-5">A passionate</div>

            <div className="text-3xl font-semibold my-3 p-5">
              <Highlight className="text-black dark:text-white my-3 p-3">
                Full Stack Developer
              </Highlight>
            </div>
            <div className ="text-xl font-semibold my-3 p-5">who loves to build things that live on the internet.</div>

            <div>
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
            </div>
          </div>

          <div className="flex-1 lg:ml-[20rem]">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </motion.h1>
    </HeroHighlight>
  );
}

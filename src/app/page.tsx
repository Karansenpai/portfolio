import { Introduction } from "@/components/Introduction";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import WhatIdo from "@/components/WhatIdo";
import Image from "next/image";

export default function Home() {
  return (
    <HeroHighlight>
      <main className=" ">
        <Introduction />
        <WhatIdo/>
      </main>
    </HeroHighlight>
  );
}

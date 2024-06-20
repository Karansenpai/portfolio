import CodingProfile from "@/components/CodingProfile";
import { Education } from "@/components/Education";
import { Introduction } from "@/components/Introduction";
import Projects from "@/components/Projects";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import WhatIdo from "@/components/WhatIdo";

export default function Home() {
  return (
    <HeroHighlight>
      <main>
        <Introduction />
        <WhatIdo/>
        <Education/>
        <Projects/>
        <CodingProfile/>
      </main>
    </HeroHighlight>
  );
}

import { Introduction } from "@/components/Introduction";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import WhatIdo from "@/components/WhatIdo";

export default function Home() {
  return (
    <HeroHighlight>
      <main>
        <Introduction />
        <WhatIdo/>
      </main>
    </HeroHighlight>
  );
}

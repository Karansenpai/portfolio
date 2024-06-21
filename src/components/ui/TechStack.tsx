import OrbitingCircles from "@/components/ui/OrbitingCircle";
import { Icons } from "@/lib/Icons";
import Image from "next/image";

export function TechStack() {
  return (
    <div className="relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border  md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Stack
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[40px] w-[40px] border-none bg-transparent"
        duration={20}
        delay={5}
        radius={80}
      >
        <Image src="/tail.svg" height={50} width={50} alt="" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[40px] w-[40px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Image src="/dock.svg" height={50} width={50} alt="" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[40px] w-[40px] border-none bg-transparent"
        duration={20}
        delay={15}
        radius={80}
      >
        <Image src="/javascript.svg" height={50} width={50} alt="" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[40px] w-[40px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Image src="/NextAuth.svg" height={50} width={50} alt="" />
      </OrbitingCircles>
      

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
        delay={5}
      >
        <Icons.TypeScript />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={10}
        reverse
      >
        <Image src="/re.svg" height={50} width={50} alt="" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={15}
        reverse
      >
        <Image src="/mongodb.svg" height={50} width={50} alt="" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.NextJs />
      </OrbitingCircles>
    </div>
  );
}

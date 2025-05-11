import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import LeetCode from "@/components/LeetCode";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full px-4">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-4">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1">
              Hello I&apos;m <br/> <span className="text-accent">Gaille Amolong</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            I develop intelligent systems and innovative applications, specializing in artificial intelligence, finance technology, and full-stack development. I&apos;m passionate about advancing AI applications in finance and sharing knowledge through speaking engagements.
            </p>
            {/* btns and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-4">
              <div className="flex gap-3">
                <Link href="/assets/resume/Amolong_Gaille_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </Link>
              </div>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center
                items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
    <div className="mt-[55px]">
        <Stats />
      </div>
    <div className="mt-[80px]">
        <LeetCode />
      </div>
    </section>
  );
}
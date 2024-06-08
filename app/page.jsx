import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-4">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1">
              Hello I'm <br/> <span className="text-accent">Gaille Amolong</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at developing Artificial Intelligence systems and I am proficient in various programming languages and technologies. I am a tech visionary.
            </p>
            {/* btns and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="/assets/resume/Amolong Gaille - Resume.pdf" passHref >
                    <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                      <span>Download CV</span>
                      <FiDownload className="text-xl" />
                    </Button>
              </Link>
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
    </section>
  );
}
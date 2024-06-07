import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-4">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1">
              Hello I'm <br/> <span className="text-accent">Gaille Amolong</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at developing Artificial Intelligence systems and I am proficient in various programming languages and technologies. I am a tech visionary.
            </p>
            {/* btns and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials />
              </div>
            </div>
          </div>
          <div>image</div>
        </div>
      </div>
    </section>
  );
}
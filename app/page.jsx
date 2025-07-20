'use client';

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { BsArrowUpRight, BsGithub, BsArrowDownRight, BsMic, BsCalendar } from "react-icons/bs";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CountUp from 'react-countup';

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import TerminalLoader from "@/components/TerminalLoader";
import MatrixRain from "@/components/MatrixRain";
import TypewriterText from "@/components/TypewriterText";
import GlitchText from "@/components/GlitchText";
import HackerCard from "@/components/HackerCard";
import TerminalStatusBar from "@/components/TerminalStatusBar";
import TerminalCertCarousel from "@/components/TerminalCertCarousel";

// Data imports
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";

import { about, experience, education, skills } from "../data/resume";
import { stats } from "../data/stats";
import { speakingEvents, advocacyActivities } from "../data/speaking";
import { contactInfo } from "../data/contact";

export default function Home() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [showLoader, setShowLoader] = useState(true);
  const [loaderComplete, setLoaderComplete] = useState(false);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setActiveProject(projects[currentIndex]);
  };

  if (showLoader) {
    return <TerminalLoader onComplete={() => {
      setShowLoader(false);
      setTimeout(() => setLoaderComplete(true), 100); // Reduced from 500ms to 100ms
    }} />;
  }

  return (
    <div className="min-h-screen relative">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center py-8 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loaderComplete ? 1 : 0, y: loaderComplete ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.1 }} // Reduced delay from 0.5 to 0.1
              className="text-center xl:text-left order-2 xl:order-none flex-1"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }} // Reduced from 1s to 0.2s
                className="text-lg sm:text-xl text-green-400 font-mono"
              >
                $ whoami
              </motion.span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <TypewriterText 
                  text="Hello I'm" 
                  delay={300} // Reduced from 1500ms
                  speed={80} // Slightly faster
                  className="text-white"
                />
                <br/>
                <GlitchText className="text-accent">
                  <TypewriterText 
                    text="Gaille Amolong" 
                    delay={800} // Reduced from 2500ms
                    speed={100}
                    className="text-accent"
                  />
                </GlitchText>
            </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }} // Reduced from 4s
                className="max-w-[500px] mb-9 text-white/80 font-mono text-sm sm:text-base leading-relaxed mx-auto xl:mx-0"
              >
                <span className="text-green-400">{'>'}</span> I develop intelligent systems and innovative applications, specializing in artificial intelligence, finance technology, and full-stack development. I&apos;m passionate about advancing AI applications in finance and sharing knowledge through speaking engagements.
              </motion.p>
            <div className="flex flex-col sm:flex-row xl:flex-row items-center gap-4 w-full xl:w-auto">
              <div className="flex gap-3 w-full sm:w-auto">
                <Link href="/assets/resume/Amolong_Gaille_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                  <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 w-full sm:w-auto">
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </Link>
              </div>
              <div className="mb-4 sm:mb-0 xl:mb-0">
                  <Socials containerStyles="flex gap-4 sm:gap-6 justify-center" iconStyles="w-8 h-8 sm:w-9 sm:h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 xl:order-none mb-8 xl:mb-0 flex-shrink-0"
            >
              <Photo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-12 sm:py-20 bg-black/50 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-mono text-center">
              <span className="text-green-400">$</span> cat /proc/stats
            </h2>
            <div className="h-1 w-24 sm:w-32 bg-green-400 rounded-full"></div>
          </motion.div>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
            {stats.map((item, index) => (
              <HackerCard key={index} delay={index * 0.1}>
                <div className="flex flex-col items-center justify-center gap-3 group p-4">
                  <CountUp 
                    end={item.num} 
                    duration={3.5} 
                    delay={0.5} 
                    className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-green-400 group-hover:text-green-300 transition-colors duration-300 font-mono" 
                  />
                  <p className="text-center text-white/70 text-xs sm:text-sm font-mono leading-relaxed">
                    <span className="text-green-400 mr-1">{'>'}</span>
                    {item.text}
                  </p>
                </div>
              </HackerCard>
            ))}
          </div>
        </div>
      </section>



      {/* Resume/Experience Section */}
      <section id="resume" className="py-12 sm:py-20 bg-black/60 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-mono">
              <span className="text-green-400">$</span> cat /var/log/journey.log
            </h2>
            <div className="h-1 w-24 sm:w-32 bg-green-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg font-mono px-4">
              <span className="text-green-400">{'>'}</span> Experience, education, and skills that define my expertise
            </p>
          </motion.div>

          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-[400px] mx-auto mb-8">
              <TabsTrigger value="experience" className="text-xs sm:text-sm">Experience</TabsTrigger>
              <TabsTrigger value="education" className="text-xs sm:text-sm">Education</TabsTrigger>
              <TabsTrigger value="skills" className="text-xs sm:text-sm">Skills</TabsTrigger>
              <TabsTrigger value="about" className="text-xs sm:text-sm">About</TabsTrigger>
            </TabsList>
            
            <div className="min-h-[50vh] sm:min-h-[70vh] w-full mt-8">
              <TabsContent value="experience" className="w-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-8"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-center text-white font-mono">
                    <span className="text-green-400">{'>'}</span> {experience.title}
                  </h3>
                  <p className="text-white/80 text-center max-w-2xl mx-auto font-mono text-sm sm:text-base px-4">
                    <span className="text-green-400">{'///'}</span> {experience.description}
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {experience.items.map((item, index) => (
                      <HackerCard key={index} delay={index * 0.1}>
                        <div className="p-4 sm:p-6">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                            <span className="text-green-400 font-mono text-sm bg-green-400/10 px-2 py-1 rounded border border-green-400/30 w-fit">
                              {item.duration}
                            </span>
                            <span className="text-white/60 text-sm font-mono">
                              {item.company}
                            </span>
                          </div>
                          <h4 className="text-lg sm:text-xl font-bold text-white mb-3 font-mono">
                            {item.position}
                          </h4>
                          <p className="text-white/70 text-sm leading-relaxed font-mono">
                            <span className="text-green-400 mr-2">{'>'}</span>
                            {item.description}
                          </p>
                        </div>
                      </HackerCard>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="education" className="w-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-8"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-center text-white font-mono">
                    <span className="text-green-400">{'>'}</span> {education.title}
                  </h3>
                  <p className="text-white/80 text-center max-w-2xl mx-auto font-mono text-sm sm:text-base px-4">
                    <span className="text-green-400">{'///'}</span> {education.description}
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {education.items.map((item, index) => (
                      <HackerCard key={index} delay={index * 0.1}>
                        <div className="p-4 sm:p-6">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                            <span className="text-green-400 font-mono text-sm bg-green-400/10 px-2 py-1 rounded border border-green-400/30 w-fit">
                              {item.duration}
                            </span>
                            <span className="text-white/60 text-sm font-mono">
                              {item.institution}
                            </span>
                          </div>
                          <h4 className="text-lg sm:text-xl font-bold text-white mb-3 font-mono">
                            {item.degree}
                          </h4>
                          <p className="text-white/70 text-sm leading-relaxed font-mono">
                            <span className="text-green-400 mr-2">{'>'}</span>
                            {item.description}
                          </p>
                        </div>
                      </HackerCard>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="skills" className="w-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-8"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-center">{skills.title}</h3>
                  <p className="text-white/60 text-center max-w-2xl mx-auto text-sm sm:text-base px-4">{skills.description}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                    {skills.skillList.map((skill, index) => (
                      <div key={index} className="bg-[#1e1e2a] rounded-xl p-4 sm:p-6 shadow-lg flex flex-col items-center gap-3 group hover:bg-accent/10 transition-colors">
                        <div className="text-3xl sm:text-4xl text-accent group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </div>
                        <p className="text-white/80 text-center text-xs sm:text-sm">{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="about" className="w-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-8"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-center">{about.title}</h3>
                  <p className="text-white/60 text-center max-w-2xl mx-auto text-sm sm:text-base px-4">{about.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {about.info.map((item, index) => (
                      <div key={index} className="bg-[#1e1e2a] rounded-xl p-4 sm:p-6 shadow-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                          <span className="text-white/60 text-sm sm:text-base">{item.fieldName}:</span>
                          <span className="text-white text-sm sm:text-base">{item.fieldValue}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-20 relative z-10 bg-black/40">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-mono">
              <span className="text-green-400">$</span> ls -la /projects/
            </h2>
            <div className="h-1 w-24 sm:w-32 bg-green-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg font-mono px-4">
              <span className="text-green-400">{'>'}</span> Innovative solutions across AI, full-stack development, and financial technology
            </p>
          </motion.div>

          <div className="flex flex-col xl:flex-row xl:gap-[30px] gap-8">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-6 sm:gap-8 h-full">
                <div className="text-6xl sm:text-8xl leading-none font-extrabold text-transparent text-outline">
                  {activeProject.num}
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold leading-none text-green-400 transition-all duration-500 font-mono uppercase tracking-wider">
                  {activeProject.category}
                </h2>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">
                  {activeProject.title}
                </h3>
                <div className="text-white/80 font-mono text-sm leading-relaxed">
                  {activeProject.description.split('\n').map((line, index) => (
                    <p key={index} className={line.startsWith('>>>') ? 'text-green-400 mb-2' : 
                      line.startsWith('[') ? 'text-cyan-400 text-xs mt-4' : 'mb-2'}>
                      {line}
                    </p>
                  ))}
                </div>
                <div className="mb-4">
                  <p className="text-green-400 font-mono text-sm mb-2">
                    <span className="text-green-400">$</span> tech_stack --list
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {activeProject.stack.map((item, index) => (
                      <li key={index} className="text-green-400 bg-green-400/10 px-2 sm:px-3 py-1 rounded border border-green-400/30 text-xs sm:text-sm font-mono hover:bg-green-400/20 transition-colors">
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                  <Link href={activeProject.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-2xl sm:text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={activeProject.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-2xl sm:text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%] order-1 xl:order-none">
              <Swiper 
                spaceBetween={30} 
                slidesPerView={1} 
                className="h-[300px] sm:h-[400px] xl:h-[520px] mb-8 sm:mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-full relative group flex justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt={project.title} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <WorkSliderBtns 
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[20px] sm:text-[22px] w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-12 sm:py-20 bg-black/60 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-mono">
              <span className="text-green-400">$</span> ls -la /credentials/certificates/
            </h2>
            <div className="h-1 w-24 sm:w-32 bg-green-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg font-mono px-4">
              <span className="text-green-400">{'>'}</span> Continuous learning and professional development across cloud, AI, and full-stack technologies.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TerminalCertCarousel certifications={certifications} />
          </motion.div>
        </div>
      </section>

      {/* Speaking Section */}
      <section id="speaking" className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Speaking & Advocacy</h2>
            <div className="h-1 w-24 sm:w-32 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg px-4">
              Sharing knowledge and advocating for the responsible application of artificial intelligence in finance and beyond.
            </p>
          </motion.div>
          
          {/* Speaking Events */}
          <div className="mb-12 sm:mb-16">
            <h3 className='text-2xl sm:text-3xl font-bold leading-none text-white mb-6 sm:mb-8 flex items-center gap-3 justify-center sm:justify-start'>
              <BsMic className="text-accent" /> Speaking Engagements
            </h3>
            
            {speakingEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-gradient-to-br from-[#1e1e2a] to-[#2d2d3a] rounded-2xl overflow-hidden shadow-lg mb-6 sm:mb-8"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-1/2 h-[250px] sm:h-[300px] lg:h-[400px] relative">
                    <Image 
                      src={event.imageUrl} 
                      alt={event.title}
                      fill
                      className="object-cover" 
                    />
                    <div className="absolute bottom-4 left-4 bg-accent/90 text-white py-2 px-3 sm:px-4 rounded-full flex items-center gap-2 text-sm">
                      <BsCalendar />
                      <span>{event.date}</span>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-8">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{event.title}</h4>
                      <p className="text-white/70 mb-4 text-sm">{event.venue}</p>
                      <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base">{event.description}</p>
                    </div>
                    <Link href={event.link} className="w-full sm:w-auto">
                      <Button className="bg-accent hover:bg-accent/80 text-white rounded-full px-6 py-3 flex items-center gap-2 w-full sm:w-auto justify-center">
                        View Presentation <BsArrowUpRight />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Advocacy */}
          <div>
            <h3 className='text-2xl sm:text-3xl font-bold leading-none text-white mb-6 sm:mb-8 flex items-center gap-3 justify-center sm:justify-start'>
              <span className="text-accent">#</span> AI Advocacy
            </h3>
            
            {advocacyActivities.map((activity, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 sm:mb-12"
              >
                <div className="bg-gradient-to-br from-[#1e1e2a] to-[#2d2d3a] rounded-2xl p-6 sm:p-8 shadow-lg mb-6">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">{activity.title}</h4>
                  <p className="text-white/70 mb-6 text-sm sm:text-base">{activity.description}</p>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6">
                    <FaQuoteLeft className="text-accent text-xl sm:text-2xl mb-3 opacity-50" />
                    <p className="text-white/90 italic text-sm sm:text-base">{activity.quote}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {activity.imageUrls.map((url, imgIndex) => (
                    <div 
                      key={imgIndex}
                      className="h-[150px] sm:h-[200px] relative rounded-xl overflow-hidden shadow-lg"
                    >
                      <Image 
                        src={url} 
                        alt={`AI advocacy image ${imgIndex + 1}`}
                        fill
                        className="object-cover" 
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 bg-black/60 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-mono">
              <span className="text-green-400">$</span> contact --init-session
            </h2>
            <div className="h-1 w-24 sm:w-32 bg-green-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg font-mono px-4">
              <span className="text-green-400">{'>'}</span> Ready to bring your ideas to life? Let&apos;s collaborate on something amazing.
            </p>
          </motion.div>

          <div className="flex flex-col xl:flex-row gap-8 sm:gap-[30px]">
            <div className="xl:w-[54%] order-2 xl:order-none">
              <HackerCard>
                <form className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6">
                  <h3 className="text-2xl sm:text-3xl text-green-400 font-mono">
                    <span className="text-green-400">{'>'}</span> initialize_collaboration()
                  </h3>
                  <p className="text-white/60 font-mono text-sm">
                    <span className="text-green-400 mr-2">{'///'}</span>
                    I am passionate about collaborating on innovative projects that drive success. Let&apos;s combine our skills and create something exceptional together.
                  </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <Input type="text" placeholder="Firstname" />
                  <Input type="text" placeholder="Lastname" />
                  <Input type="email" placeholder="Email Address" />
                  <Input type="tel" placeholder="Phone Number" />  
                </div>
                
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="ai">AI Development</SelectItem>
                      <SelectItem value="devops">DevOps</SelectItem>
                      <SelectItem value="seo">SEO</SelectItem>
                      <SelectItem value="design">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                
                  <Textarea className="h-[150px] sm:h-[200px]" placeholder="Type your message here..." />
                  <Button size='md' className='w-full sm:max-w-40 bg-green-500 hover:bg-green-600 text-black font-mono'>
                    Send message
                  </Button>
                </form>
              </HackerCard>
            </div>
            
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <HackerCard>
                <ul className="flex flex-col gap-6 sm:gap-10 p-4 sm:p-6">
                    {contactInfo.map((item, index) => (
                      <li key={index} className="flex items-center gap-4 sm:gap-6">
                        <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] xl:w-[72px] xl:h-[72px] bg-gray-800 text-green-400 rounded-md flex items-center justify-center border border-green-500/30 flex-shrink-0">
                          <div className="text-[24px] sm:text-[28px]">{item.icon}</div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white/60 font-mono text-xs sm:text-sm">{item.title}</p>
                          <h3 className="text-base sm:text-xl text-white font-mono break-words">{item.description}</h3>
                        </div>
                      </li>
                    ))}
                  </ul>
                </HackerCard>
        </div>
      </div>
      </div>
        </section>
        
        {/* Terminal Status Bar */}
        <TerminalStatusBar />
      </div>
  );
}
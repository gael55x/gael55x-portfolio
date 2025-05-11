"use client";

import {
    FaHtml5,
    FaCss3, 
    FaJs, 
    FaReact, 
    FaFigma, 
    FaNodeJs,
    FaAws,
    FaDocker,
    FaGitSquare,
    FaGithub 

} from 'react-icons/fa';

import { FaSquareGitlab } from "react-icons/fa6";
import { DiDjango } from "react-icons/di";
import { SiNextdotjs, SiDjango, SiFastapi, SiFlask, SiPandas, SiTensorflow, SiNumpy, SiScikitlearn, SiPytest, SiPytorch, SiMongodb, SiWebpack, SiPostgresql, SiKeras, SiExpress } from 'react-icons/si';
import { TbBrandCSharp, TbBrandCpp } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";


// about data 
const about = {
    title: 'About Me', 
    description: 'Gaille Amolong is a passionate, persevering, ambitious, and experienced full-stack developer and AI advocate with over 4 years in the tech industry. Proficient in a wide range of technologies, Gaille is dedicated to building innovative solutions, particularly in AI and finance technology, and sharing knowledge through speaking engagements.',
    info: [
        {
            fieldName: "Name", 
            fieldValue: "Gaille Amolong"
        },
        {
            fieldName: "Phone", 
            fieldValue: "(+63) 960 357 4478"
        },
        {
            fieldName: "Experience", 
            fieldValue: "4+ Years"
        },
        {
            fieldName: "Email", 
            fieldValue: "gaille.amolong1@gmail.com"
        },
        {
            fieldName: "Nationality", 
            fieldValue: "Filipino"
        },
        {
            fieldName: "Languages", 
            fieldValue: "English, Filipino, Cebuano, French (basic), Japanese (intermediate)"
        },
        {
            fieldName: "Freelance", 
            fieldValue: "Available"
        }
    ]
};

// experience data
const experience = {
    icon: 'public/assets/resume/bitwork_solutions_logo.jpg',
    title: 'My experience',
    description: "This is Gaille's Journey as a software engineer and AI advocate",
    items: [
        {
            company: "AI Pilipinas",
            position: "AI in Finance Advocate", 
            duration: "January 2025 - present"
        },
        {
            company: "Bitwork solutions",
            position: "Software Engineer & DevOps Engineer", 
            duration: "September 2023 - present"
        },
        {
            company: "LSTM Trading Systems",
            position: "AI Research & Development", 
            duration: "June 2024 - December 2024"
        },
        {
            company: "TidalStack",
            position: "Freelancer Full Stack Developer", 
            duration: "January 2024 - March 2024"
        },
        {
            company: "Minglanilla Science High School",
            position: "Head Developer - Volunteer Work", 
            duration: "March 2023 - March 2024"
        },
    ]
}

// education data
const education = {
    icon: 'public/assets/resume/mshs_logo.jpg',
    title: 'My education',
    description: "This is Gaille's Educational Journey as a software engineer and as a tech visionary. Gaille is always hungry in learning.",
    items: [
        {
            institution: "AWS",
            degree: "AWS Specialization Certificate", 
            duration: "2025"
        },
        {
            institution: "Cebu Institute of Technology",
            degree: "Bachelor of Science in Computer Science", 
            duration: "2024-2028"
        },
        {
            institution: "Harvard University",
            degree: "CS50X", 
            duration: "2021"
        },
        {
            institution: "Harvard University",
            degree: "CS50P", 
            duration: "2022"
        },
        {
            institution: "Harvard University",
            degree: "CS50Web", 
            duration: "2023"
        },
        {
            institution: "Harvard University",
            degree: "CS50AI", 
            duration: "2023"
        },
        {
            institution: "Harvard University",
            degree: "CS109x", 
            duration: "2023"
        },
        {
            institution: "DeepLearning.AI & Stanford",
            degree: "Neural Networks and Deep Learning", 
            duration: "2023-2024"
        },
        {
            institution: "DeepLearning.AI & Stanford",
            degree: "Improving Neural Networks: Hyperparameter Tuning", 
            duration: "2023-2024"
        },
        {
            institution: "DeepLearning.AI & Stanford",
            degree: "Structuring Machine Learning Projects", 
            duration: "2023-2024"
        },
        {
            institution: "DeepLearning.AI & Stanford",
            degree: "Convolutional Neural Networks", 
            duration: "2023-2024"
        },
        {
            institution: "DeepLearning.AI & Stanford",
            degree: "Sequence Models", 
            duration: "2023-2024"
        },
        {
            institution: "Yale University",
            degree: "Financial Markets Course", 
            duration: "2024"
        },
        {
            institution: "Udemy",
            degree: "NextJS 14 & React Course", 
            duration: "2024"
        },
        {
            institution: "AWS",
            degree: "AWS Cloud Solutions Architect", 
            duration: "2024"
        }
    ]
}

// skills data
const skills = {
    title: 'My skills',
    description: 'Gaille is a highly skilled full-stack developer and AI specialist, adept at leveraging a diverse array of technologies to build innovative and efficient solutions in both software development and financial technology.',
    skillList: [
        {
            icon: <FaAws />, 
            name: 'AWS'
        },
        {
            icon: <FaDocker />, 
            name: 'Docker'
        },
        {
            icon: <FaHtml5 />, 
            name: 'HTML 5'
        },
        {
            icon: <FaReact />,
            name: 'ReactJS'
        },
        {
            icon: <SiNextdotjs />,
            name: 'NextJS'
        },
        {
            icon: <SiDjango />,
            name: 'Django'
        },
        {
            icon: <SiFastapi />,
            name: 'FastAPI'
        },
        {
            icon: <SiFlask />,
            name: 'Flask'
        },
        {
            icon: <SiPandas />,
            name: 'Pandas'
        },
        {
            icon: <SiTensorflow />,
            name: 'TensorFlow'
        },
        {
            icon: <FaNodeJs />,
            name: 'NodeJS'
        },
        {
            icon: <SiNumpy />,
            name: 'NumPy'
        },
        {
            icon: <SiScikitlearn />,
            name: 'Scikit-Learn'
        },
        {
            icon: <SiPytest />,
            name: 'Pytest'
        },
        {
            icon: <SiPytorch />,
            name: 'PyTorch'
        },
        {
            icon: <SiMongodb />,
            name: 'MongoDB (node-mongodb-native)'
        },
        {
            icon: <SiPostgresql />,
            name: 'PostgreSQL (Psycopg)'
        },
        {
            icon: <SiExpress />,
            name: 'ExpressJS'
        },
        {
            icon: <SiDjango />,
            name: 'Django REST Framework'
        },
        {
            icon: <SiKeras />,
            name: 'Keras'
        },
        {
            icon: <SiWebpack />,
            name: 'Webpack'
        },
        {
            icon: <FaGitSquare />,
            name: 'Git'
        },
        {
            icon: <FaSquareGitlab />,
            name: 'GitLab'
        },
        {
            icon: <TbBrandCSharp />,
            name: 'C#'
        },
        {
            icon: <TbBrandCpp />,
            name: 'C++'
        }
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import { Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

const Resume = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1, 
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-6">
                    <a href="/assets/resume/Amolong_Gaille_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-accent hover:bg-accent/80 text-white px-6 py-3 rounded-full shadow-lg shadow-accent/20 flex items-center gap-2">
                            <FiDownload className="text-white" />
                            <span>Download Full Resume</span>
                        </Button>
                    </a>
                </div>

                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[30px] md:gap-[60px]'>
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-3 md:gap-6">
                        <TabsTrigger value="experience" >Experience</TabsTrigger>
                        <TabsTrigger value="education" >Education</TabsTrigger>
                        <TabsTrigger value="skills" >Skills</TabsTrigger>
                        <TabsTrigger value="about" >About Me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-3xl md:text-4xl font-bold">{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[350px] md:h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return <li key={index} className='bg-[#232329] h-auto min-h-[184px] py-4 px-6 md:py-6 md:px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-lg md:text-xl max-w-[260px] min-h-[60px] 
                                                text-center lg:text-left'>{item.position}</h3>
                                                <div className='flex items-center gap-3'>
                                                    {/* dot */}
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.company}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-3xl md:text-4xl font-bold">{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[350px] md:h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return <li key={index} className='bg-[#232329] h-auto min-h-[184px] py-4 px-6 md:py-6 md:px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-lg md:text-xl max-w-[260px] min-h-[60px] 
                                                text-center lg:text-left'>{item.degree}</h3>
                                                <div className='flex items-center gap-3'>
                                                    {/* dot */}
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.institution}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-3xl md:text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ScrollArea className="h-[350px] md:h-[400px]">
                                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 xl:gap-[30px]'>
                                        {skills.skillList.map((skill, index) => {
                                            return <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className='w-full h-[100px] md:h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                            <div className='text-4xl md:text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className='capitalize'>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>;
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-3xl md:text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ScrollArea className="h-[350px] md:h-[400px]">
                                    <ul className='grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                        {about.info.map((item, index) => {
                                            return (
                                            <li key={index} className='flex flex-col md:flex-row items-center justify-center xl:justify-start gap-2 md:gap-4'> 
                                                <span className='text-white/60'>{item.fieldName}</span>
                                                <span className='text-lg md:text-xl'>{item.fieldValue}</span>
                                            </li>);
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                    </div>    
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
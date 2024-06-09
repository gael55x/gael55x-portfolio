'use client';

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: '01', 
        category: 'Fullstack', 
        title: 'The Official MSHS Website', 
        description: 'I volunteered to create the school website to make an impact on my school. It features three apps: a homepage, a news website, and another news platform.',
        stack: [
            {name: 'Django'}, {name: 'Docker'}, {name: 'Railway'}, {name: 'JavaScript'}, {name: 'NGINX'}, {name: 'HTML'}, {name: 'CSS'}, {name: 'Python'}
        ], 
        image: '/assets/projects/MSHS_Website (1).png',
        live: 'https://www.officialmingsci.com/',
        github: 'https://github.com/gael55x/MSHS-Website-For-Production-Heroku',
    },
    {
        num: '02', 
        category: 'AI', 
        title: 'PhEASYCS', 
        description: 'PhEASYCS is an AI Chatbot designed to teach students about basic Physics. Made from scratch using Deep Neural Networks and Natural Language Processing. PhEASYCS - Physics Excogitation Utilizing Artificial Intelligence System (Deep Neural Network) To Yield Comprehension for students.',
        stack: [
            {name: 'Python'}, {name: 'TensorFlow'}, {name: 'JSON'}, {name: 'NER'}, {name: 'TF-IDF'}, {name: 'Deep Neural Network'}
        ], 
        image: '/assets/projects/PhEASYCS.png',
        live: 'https://github.com/gael55x/PhEASYCS',
        github: 'https://github.com/gael55x/PhEASYCS',
    },
    {
        num: '03', 
        category: 'AI Project', 
        title: 'ARTIST AI', 
        description: "A.R.T.I.S.T. is an AI model that creates captivating images by blending the style of one image with the content of another in real-time. Using Neural Style Transfer (NST), it combines elements like a photo of the Basilica del Santo Niño in Cebu with the style of Van Gogh's 'The Starry Night.' Powered by a pre-trained VGG-19 model, A.R.T.I.S.T. leverages a neural network inspired by the human brain, trained on the ImageNet database to recognize various image features.",
        stack: [
            {name: 'Python'}, {name: 'TensorFlow'}, {name: 'Neural Style Transfer'}, {name: 'Convolutional Neural Network'}
        ], 
        image: '/assets/projects/ARTIST.jpg',
        live: 'https://github.com/gael55x/ARTIST',
        github: 'https://github.com/gael55x/ARTIST',
    },
    {
        num: '03', 
        category: 'AI Project', 
        title: 'Car Detection AI Model', 
        description: 'An AI model designed to detect cars using convnet, Yolo algorithm, Non-max suppression, and IOU.',
        stack: [
            {name: 'Python'}, {name: 'TensorFlow'}, {name: 'Yolo algorithm'}, {name: 'Non-max suppression'}, {name: 'IOU'}
        ], 
        image: '/assets/projects/Car-Detection-AI-Model.png',
        live: 'https://github.com/gael55x/Car-Detection-AI-model-',
        github: 'https://github.com/gael55x/Car-Detection-AI-model-',
    },
    {
        num: '04', 
        category: 'AI Project', 
        title: 'MUSICAI', 
        description: "MUSIC-AI is an Artificial Intelligence model designed to generate music. It's currently in its very early stages, under experimentation. This model employs an LSTM network (RNN) to generate music based on its training data. Initial tests show promise, with the AI model successfully generating 90 unique values (notes - which comprise pitch and duration) from the training data.  ",
        stack: [
            {name: 'Python'}, {name: 'TensorFlow'}, {name: 'Convolutional Neural Network'}, {name: 'LSTM'}, {name: 'RNN'}
        ], 
        image: '/assets/projects/MUSICAI.png',
        live: 'https://github.com/gael55x/MusicAI',
        github: 'https://github.com/gael55x/MusicAI',
    },
    {
        num: '05', 
        category: 'Fullstack', 
        title: 'Daddy Mikes Kitchenette', 
        description: "I created a full-stack website for Daddy Mike's Kitchenette as a voluntary project. This website helps promote the business and enhance its online presence.",
        stack: [
            {name: 'NextJS'}, {name: 'TailwindCSS'}, {name: 'SQLite'},
        ], 
        image: '/assets/projects/Daddy_mikes.png',
        live: 'https://daddy-mike-s-kitchenette.vercel.app/community',
        github: 'https://github.com/gael55x/Daddy-Mike-s-Kitchenette',
    },
    {
        num: '06', 
        category: 'Fullstack', 
        title: 'Gaille Blog Website', 
        description: "A website introducing Gaille's journey as a software engineer. A blog website.",
        stack: [
            {name: 'NextJS'}, {name: 'TailwindCSS'}, {name: 'Framer Motion'}, {name: 'MongoDB'}
        ], 
        image: '/assets/projects/gaille_blog.png',
        live: 'https://gael55x-blog.vercel.app/',
        github: 'https://gael55x-blog.vercel.app/',
    },
    {
        num: '07', 
        category: 'Fullstack', 
        title: 'GoLearnHub', 
        description: 'I contributed to a full-stack application designed for users to learn and post courses.',
        stack: [
            {name: 'Django'}, {name: 'HTML'}, {name: 'CSS'}, {name: 'PostgreSQL'}, {name: 'JavaScript'}
        ], 
        image: '/assets/projects/Golearnhub.jpg',
        live: 'https://github.com/gael55x/golearn-hub',
        github: 'https://github.com/gael55x/golearn-hub',
    },
    {
        num: '08', 
        category: 'Fullstack', 
        title: 'MessageMe', 
        description: 'A full-stack application designed for users to message each other. And make posts.',
        stack: [
            {name: 'NextJS'}, {name: 'TailwindCSS'}, {name: 'ExpressJS'}, {name: 'SQLite'}
        ], 
        image: '/assets/projects/messageme.png',
        live: 'https://github.com/gael55x/MessageMe',
        github: 'https://github.com/gael55x/MessageMe',
    },
    {
        num: "09",
        category: "Fullstack",
        title: "MyGym",
        description: "A full-stack web application that personalizes routines for gym users, helping them track and optimize their workouts.",
        stack: [
            {name: "NextJS"},
            {name: "TailwindCSS"},
            {name: "ExpressJS"},
            {name: "SQLite"}
        ],
        image: "/assets/projects/mygym.png",
        live: "https://github.com/gael55x/MyGym",
        github: "https://github.com/gael55x/MyGym"
    },
    {
        num: "10",
        category: "Fullstack",
        title: "News Web Application",
        description: "A full-stack application designed to deliver the latest news and updates to users in real-time.",
        stack: [
            {name: "NextJS"},
            {name: "TailwindCSS"},
            {name: "ExpressJS"},
            {name: "SQLite"}
        ],
        image: "/assets/projects/newswebapp.png",
        live: "https://github.com/gael55x/News-Web-app",
        github: "https://github.com/gael55x/News-Web-app"
    },
    {
        num: "11",
        category: "Fullstack",
        title: "Social Media App",
        description: "A full-stack web application for social media interactions, allowing users to connect and share content.",
        stack: [
            {name: "NextJS"},
            {name: "CSS"}
        ],
        image: "/assets/projects/social-media-app.png",
        live: "https://github.com/gael55x/Social-media-app",
        github: "https://github.com/gael55x/Social-media-app"
    },
    {
        num: "12",
        category: "Fullstack",
        title: "Freedom Board",
        description: "A freedom board where users can post and share their thoughts freely.",
        stack: [
            {name: "ReactJS"},
            {name: "CSS"},
            {name: "ExpressJS"}
        ],
        image: "/assets/projects/freedomboard.png",
        live: "https://github.com/gael55x/Freedom-Board",
        github: "https://github.com/gael55x/Freedom-Board"
    }
    
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex])
    }

    return (
        <motion.div initial={{opacity: 0}} 
        animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all 
                            duration-500 capitalize">{project.title} </h2>
                            <h4 className="font-bold leading-none text-white group-hover:text-accent transition-all 
                            duration-500 capitalize">{project.category} project</h4>
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex flex-wrap gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent flex ">
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                             {/* buttons */}
                             <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repo</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                             </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => {
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/* overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>
                                        {/* image */}
                                        <div className="relative w-full h-full">
                                            <Image src={project.image} fill className="object-cover" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            {/* buttons */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 
                            w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary
                            text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Work;
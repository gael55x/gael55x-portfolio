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
        title: 'DSA Visualizer', 
        description: 'An interactive web application that visualizes various data structures and algorithms to help students and developers understand complex concepts through animations and real-time demonstrations. Features sorting algorithms, graph traversals, tree operations, and more.',
        stack: [
            {name: 'NextJS'}, {name: 'React'}, {name: 'JavaScript'}, {name: 'TailwindCSS'}, {name: 'Framer Motion'}, {name: 'Data Structures'}, {name: 'Algorithms'}
        ], 
        image: '/assets/projects/DSAVisualizer.png',
        live: 'https://dsa-visualizer-nine.vercel.app/',
        github: 'https://github.com/gael55x/DSA-Visualizer',
    },
    {
        num: '02', 
        category: 'Mobile App', 
        title: 'Ren - AI Emotional Support', 
        description: 'Ren is a mobile application designed to deliver personalized motivational quotes, affirmations, and advice tailored to a user\'s emotional state. By utilizing artificial intelligence, Ren generates custom motivational content that adapts to how the user feels at any given moment. Whether someone is feeling burdened, excited, or unsure, Ren provides encouragement suited to their situation.',
        stack: [
            {name: 'React Native'}, {name: 'AI'}, {name: 'Natural Language Processing'}, {name: 'Mobile Development'}
        ], 
        image: '/assets/projects/Ren.png',
        live: 'https://drive.google.com/file/d/1WChA1UukGw8Ig5Xur3pGTuU1myfCAwdi/view?usp=sharing',
        github: 'https://github.com/gael55x/Ren',
    },
    {
        num: '03', 
        category: 'AI & Finance', 
        title: 'LSTM Mean Reversion Trading Strategy', 
        description: 'An LSTM model for mean reversion trading, exposed via a FastAPI application and containerized using Docker. This project demonstrates the application of deep learning techniques to financial markets, specifically for mean reversion trading strategies.',
        stack: [
            {name: 'Python'}, {name: 'TensorFlow'}, {name: 'LSTM'}, {name: 'FastAPI'}, {name: 'Docker'}, {name: 'AWS ECS'}, {name: 'Docker Hub'}
        ], 
        image: '/assets/speaker/gailleLecturing.png',
        live: 'https://github.com/gael55x/LSTM-Mean-Rev-Trading-Strat',
        github: 'https://github.com/gael55x/LSTM-Mean-Rev-Trading-Strat',
    },
    {
        num: '04', 
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
        num: '05', 
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
        num: '06', 
        category: 'AI', 
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
        num: '07', 
        category: 'AI', 
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
        num: '08', 
        category: 'AI', 
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
        num: '09', 
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
        num: '10', 
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
        num: '11', 
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
        num: '12', 
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
        num: "13",
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
        num: "14",
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
        num: "15",
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
        num: "16",
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
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <div className="text-center mb-10 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h1>
                    <div className="h-1 w-32 bg-accent mx-auto mb-6 rounded-full"></div>
                    <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg">
                        Browse through my collection of projects spanning mobile apps, AI models, and full-stack applications.
                    </p>
                </div>
                
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-1/2 order-2 xl:order-none mb-8 xl:mb-0">
                        <div className="flex flex-col gap-6 bg-gradient-to-br from-[#1e1e2a]/80 to-[#2d2d3a]/80 backdrop-blur-sm p-4 md:p-8 rounded-2xl shadow-lg border border-white/5 h-full">
                            {/* outline num */}
                            <div className="flex items-center gap-4">
                                <div className="text-5xl md:text-7xl leading-none font-extrabold text-accent opacity-30">
                                    {project.num}
                                </div>
                                <div className="h-[3px] w-8 md:w-12 bg-accent rounded-full"></div>
                                <span className="text-white/50 uppercase tracking-wider text-xs md:text-sm">{project.category} project</span>
                            </div>
                            
                            {/* project title */}
                            <h2 className="text-2xl md:text-[42px] font-bold leading-tight text-white group-hover:text-accent transition-all 
                            duration-500 capitalize">{project.title}</h2>
                            
                            {/* project description */}
                            <p className="text-white/70 text-sm md:text-lg">{project.description}</p>
                            
                            {/* stack */}
                            <div className="mb-4">
                                <h4 className="text-white/50 uppercase tracking-wider text-xs md:text-sm mb-2 md:mb-3">Technologies Used</h4>
                                <ul className="flex flex-wrap gap-2">
                                    {project.stack.map((item, index) => {
                                        return (
                                            <li key={index} className="bg-white/5 text-accent px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm">
                                                {item.name}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            
                            {/* buttons */}
                            <div className="flex items-center gap-3 md:gap-4 mt-auto">
                                {/* live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="bg-accent hover:bg-accent/80 text-white px-3 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-2 shadow-lg shadow-accent/20 transform hover:-translate-y-1 transition-all text-xs md:text-base">
                                                <span>Live Demo</span> <BsArrowUpRight className="text-white text-sm md:text-xl"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>View live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="bg-white/5 hover:bg-white/10 text-white px-3 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-2 border border-white/10 transform hover:-translate-y-1 transition-all text-xs md:text-base">
                                                <span>Source Code</span> <BsGithub className="text-white text-sm md:text-xl"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>View GitHub repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2 mb-8 xl:mb-0">
                        <Swiper spaceBetween={30} slidesPerView={1} className="rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] md:h-[450px] xl:h-[520px]" onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => {
                                return <SwiperSlide key={index} className="w-full h-full">
                                    <div className="relative group w-full h-full flex justify-center items-center overflow-hidden">
                                        {/* overlay */}
                                        <div className="absolute inset-0 bg-black/20 z-10"></div>
                                        {/* image */}
                                        <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-1000">
                                            <Image src={project.image} fill className="object-cover" alt={project.title} />
                                        </div>
                                        {/* project number indicator */}
                                        <div className="absolute top-4 right-4 bg-accent/90 text-white px-3 py-1 md:px-4 md:py-2 rounded-full z-20 shadow-lg text-xs md:text-sm">
                                            Project {project.num}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            {/* buttons */}
                            <WorkSliderBtns containerStyles="flex gap-3 absolute right-4 bottom-4 z-20" 
                            btnStyles="bg-accent hover:bg-accent/80 text-white text-[16px] md:text-[20px] w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full
                            flex justify-center items-center shadow-lg shadow-black/30 transition-all" />
                        </Swiper>
                    </div>
                </div>
                
                {/* Project categories section */}
                <div className="mt-12 md:mt-20">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
                        <span className="h-1 w-6 md:w-8 bg-accent rounded-full"></span>
                        Browse by Category
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                        {['AI', 'Mobile App', 'Fullstack', 'AI & Finance'].map((category, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gradient-to-br from-[#1e1e2a] to-[#2d2d3a] p-4 md:p-6 rounded-xl shadow-lg border border-white/5 hover:border-accent/30 transition-all cursor-pointer group"
                                onClick={() => {
                                    const projectWithCategory = projects.find(p => p.category === category);
                                    if (projectWithCategory) {
                                        setProject(projectWithCategory);
                                    }
                                }}
                            >
                                <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2 group-hover:text-accent transition-colors">{category}</h3>
                                <p className="text-white/60 text-xs md:text-sm">
                                    {
                                        category === 'AI' ? 'Machine learning and neural network projects' :
                                        category === 'Mobile App' ? 'Native and cross-platform mobile applications' :
                                        category === 'Fullstack' ? 'Complete web applications with frontend and backend' :
                                        'Financial technology applications using AI'
                                    }
                                </p>
                                <div className="mt-3 md:mt-4 flex justify-end">
                                    <div className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                        <BsArrowUpRight className="text-accent text-sm md:text-base" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Work;
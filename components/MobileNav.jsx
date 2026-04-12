'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { SiLeetcode } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import { Button } from "./ui/button";


const links = [
    { name: 'home', path: '#home' },
    { name: 'work', path: '#work' },
    { name: 'projects', path: '#projects' },
    { name: 'about', path: '#about' },
    { name: 'resume', path: '#resume' },
    { name: 'certifications', path: '#certifications' },
    { name: 'speaking', path: '#speaking' },
    { name: 'contact', path: '#contact' },
];


const MobileNav = () => {
    const year = new Date().getFullYear();

    const handleClick = (e, path) => {
        e.preventDefault();
        const targetElement = document.querySelector(path);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        // Close the sheet after clicking
        const closeButton = document.querySelector('[data-sheet-close]');
        if (closeButton) {
            closeButton.click();
        }
    };

    return (
    <Sheet>
        <SheetTrigger className='flex lg:hidden justify-center items-center p-2'>
            <CiMenuFries className='text-3xl text-accent' />
        </SheetTrigger>
        <SheetContent className="flex flex-col bg-[#1e1e2a]/95 backdrop-blur-md border-l border-accent/20">
            {/* logo */}
            <div className="mt-12 mb-16 text-center">
                <Link href='/' className='text-3xl font-semibold'>
                    <h1>Gaille<span className='text-accent'>.</span></h1>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index)=> {
                    return (
                        <a 
                            href={link.path} 
                            key={index} 
                            onClick={(e) => handleClick(e, link.path)}
                            className="text-white text-xl py-2 px-4 capitalize hover:text-accent border-b-2 border-transparent hover:border-accent/40 transition-all active:scale-95"
                        >
                            {link.name}
                        </a>
                    );
                })}
            </nav>
            
            <div className="mt-auto mb-4 flex flex-col gap-4 items-center">
                <div className="flex gap-3 justify-center mt-6">
                    <Link href="/assets/resume/Amolong_Gaille_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="uppercase flex items-center gap-2">
                            <span>CV</span>
                            <FiDownload className="text-sm" />
                        </Button>
                    </Link>
                    <Link href="https://leetcode.com/gael55x/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="uppercase flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-white">
                            <span>LeetCode</span>
                            <SiLeetcode className="text-sm" />
                        </Button>
                    </Link>
                </div>
                <div className="text-center text-white/50 text-sm mt-4">
                    <p>© {year} Gaille Amolong</p>
                    <p>Lead Software Engineer</p>
                </div>
            </div>
        </SheetContent>
    </Sheet>
    );
  }

export default MobileNav;
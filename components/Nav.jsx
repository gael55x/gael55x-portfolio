'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'home', 
        path: '#home'
    },

    {
        name: 'resume', 
        path: '#resume'
    },
    {
        name: 'projects', 
        path: '#projects'
    },
    {
        name: 'certifications', 
        path: '#certifications'
    },
    {
        name: 'speaking', 
        path: '#speaking'
    },
    {
        name: 'contact', 
        path: '#contact'
    }
]

// navbar
const Nav = () => {
    const pathname = usePathname();

    const handleClick = (e, path) => {
        e.preventDefault();
        const targetElement = document.querySelector(path);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <nav className="hidden lg:flex gap-6 xl:gap-8">
            {links.map((link, index) => {
                return (
                    <a 
                        href={link.path}
                        key={index} 
                        onClick={(e) => handleClick(e, link.path)}
                        className={`capitalize font-medium hover:text-accent transition-all text-base xl:text-lg cursor-pointer`}
                    >
                        {link.name}
                    </a>
                );
            })}
        </nav>
    );
}

export default Nav;
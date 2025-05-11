'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'services', 
        path: '/services'
    },
    {
        name: 'resume', 
        path: '/resume'
    },
    {
        name: 'projects', 
        path: '/projects'
    },
    {
        name: 'certifications', 
        path: '/certifications'
    },
    {
        name: 'speaker', 
        path: '/speaking'
    },
    {
        name: 'contact', 
        path: '/contact'
    }
]

// navbar
const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="hidden lg:flex gap-6 xl:gap-8">
            {links.map((link, index) => {
                return (
                    <Link 
                        href={link.path} 
                        key={index} 
                        className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : ""} 
                        capitalize font-medium hover:text-accent transition-all text-base xl:text-lg`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}

export default Nav;
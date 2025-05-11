import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaYoutube, FaFacebook, FaBlog } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/gael55x'},
    {icon: <SiLeetcode />, path: 'https://leetcode.com/u/gael55x34/'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/gaille-amolong-687746312/'},
    {icon: <FaBlog />, path: 'https://gael55x-blog.vercel.app/'},
    {icon: <FaFacebook />, path: 'https://www.facebook.com/profile.php?id=100009310392517'},
]

const Socials = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>
                    {item.icon}
                </Link>
            })}
        </div>
    );
};

export default Socials;
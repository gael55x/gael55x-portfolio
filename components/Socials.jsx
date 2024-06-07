import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaYoutube, FaFacebook } from 'react-icons/fa';

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/gael55x'},
    {icon: <FaLinkedinIn />, path: ''},
    {icon: <FaYoutube />, path: 'https://www.youtube.com/channel/UCbmY2nyWgH1jddrvL4stY-Q'},
    {icon: <FaFacebook />, path: 'https://www.facebook.com/profile.php?id=100009310392517'},
]

const Socials = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            })}
        </div>
    );
};

export default Socials;
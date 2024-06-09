'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Description } from "@radix-ui/react-dialog";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone", 
        description: "(+63) 960 357 4478"
    }, 
    {
        icon: <FaEnvelope />,
        title: "Email", 
        description: "gaille.amolong1@gmail.com"
    },
    {
        icon: <FaEnvelope />,
        title: "Address", 
        description: "Minglanilla, Cebu, Philippines"
    }
]

import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section initial={{opacity: 0}} 
        animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
        className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form  */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                            {/* input */}
                            <div className="">
                                <Input type="firstname" placeholder="Firstname" />
                                <Input type="lastname" placeholder="Lastname" />
                                <Input type="email" placeholder="Email Address" />
                                <Input type="phone" placeholder="Phone Number" />  
                            </div>

                        </form>
                    </div>
                </div>
                {/* info */}
                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">info</div>
            </div>
        </motion.section>
    );
};

export default Contact;
import React from 'react'
import content from '../../data/content.json';
import profile from '../../assets/images/profile.jpg';
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import CVpdf from '../../assets/documents/cv.pdf';


const About = () => {
    return (
        <div className='px-8 md:px-24 my-24'>
            <h1 
                className='text-4xl md:text-6xl font-bold my-12 text-primary text-center'
            >{content.about.title}</h1>
            <div className='flex flex-col md:flex-row items-start justify-between gap-8'>
                <motion.div 
                    initial={{ scale: 0.5 }} 
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className='col-span-2 md:col-span-1 w-full max-w-[400px] md:max-w-[500px] h-auto'
                >
                    <img src={profile} alt="Profile" />
                </motion.div>
                <div 
                    className='col-span-2 md:col-span-1 w-full'
                >
                    <h2 className='font-bold text-2xl'>{content.about.roles}</h2>
                    <p className='text-xl'>{content.about.description}</p>
                    <div className="w-full flex flex-col md:flex-row items-center md:justify-between mt-8">
                        <a
                            href={CVpdf}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button 
                                className={'bg-primary text-white hover:bg-secondary hover:text-primary'}
                            >Telecharger mon CV</Button>
                        </a>
                        <div className='flex gap-4 mt-4 md:mt-0 ml-0 md:ml-8'>
                            <a href={content.about.linkedin} target="_blank" rel="noopener noreferrer">
                                <img className="w-8 h-8" src={linkedin} alt="LinkedIn" />
                            </a>
                            <a href={content.about.github} target="_blank" rel="noopener noreferrer">
                                <img className="w-8 h-8" src={github} alt="Github" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

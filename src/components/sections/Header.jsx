import React from 'react';
import Banner from './Banner';
import profileImage from '../../assets/images/profileBlackWhite.png' ;
import { motion } from "framer-motion";
import content from '../../data/content.json';

const Header = () => {
    return (
        <>
        <div className='bg-secondaryLight overflow-x-hidden w-full min-h-screen  flex flex-col align-center justify-end'>
            {/* <Navbar /> */}
            <div 
                className='mt-40 px-8'
            >
                <motion.div 
                    className='w-full h-full'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                >
                    <h1 className='text-3xl sm:text-4xl md:text-6xl text-primary uppercase font-bold text-center'>{content.header.name} </h1>
                    <p className='mx-auto text-4xl md:max-w-[835px] sm:text-6xl md:text-8xl text-secondary text-center font-bold'>{content.header.description} </p>
                </motion.div>
                
            </div>
            <div className=' flex justify-center items-center'>
                <motion.img 
                    className='max-w-[400px] md:max-w-full w-full md:w-auto' 
                    src={profileImage} 
                    alt="Profile" 
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                />
            </div>
        </div>
        <Banner />
        </>
    )
}

export default Header

'use client';
import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from 'react-icons/fa';
import { MdOutgoingMail } from 'react-icons/md';
import { motion } from 'framer-motion';

const Banner = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.3 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    return (
        <motion.section
            className='flex flex-col md:flex-row bg-transparent sm:p-4 md:p-8 w-full justify-center items-center gap-8 max-w-6xl mx-auto mt-6 min-h-[50vh]' // Exact background and layout
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key="section-key" // Adding key to force reanimation on every render
        >
            {/* Animated Text Block */}
            <motion.div
                className='w-full md:w-1/2 flex justify-center items-start flex-col p-4 md:p-0 gap-6'
                variants={itemVariants}
                key="text-block-key"
            >
                <div className="w-full text-center md:text-left mb-6">
                    <motion.h1 className='text-5xl md:text-7xl font-sans tracking-wide text-slate-100 mb-8' variants={itemVariants} key="h1-key">Developer</motion.h1>
                </div>
                <div className="flex flex-col items-start px-2 md:px-8 border-l border-cyan-400/50">
                    <motion.h4 className='text-md md:text-lg font-mono text-slate-400' variants={itemVariants} key="h4-key">
                        <span className="text-cyan-400 mr-2">{"</>"}</span>Hey
                    </motion.h4>
                    <motion.h2 className='text-3xl md:text-4xl font-normal text-slate-200 mt-2 leading-tight' variants={itemVariants} key="h2-key">
                        I'm <span className="text-cyan-400 font-bold">Nabi Shafin,</span><br/>Full-Stack Developer
                    </motion.h2>
                    <motion.p className="text-slate-400 mt-6 max-w-md font-sans text-sm leading-relaxed" variants={itemVariants} key="p-key">
                        I build flawless digital apps by crafting websites with user-centric approach. If you're looking for a developer that loves to get stuff done.
                    </motion.p>
                    
                    <motion.a 
                        href="#contact"
                        className="text-cyan-400 mt-8 font-bold font-mono hover:text-cyan-300 flex items-center gap-2 cursor-pointer transition-colors"
                        variants={itemVariants}
                    >
                        Let's Talk <span className="text-slate-500">{"->"}</span>
                    </motion.a>
                </div>
            </motion.div>

            {/* Animated Image Block (Custom Card) */}
            <motion.div
                className='w-full md:w-1/2 flex justify-center items-center'
                variants={itemVariants}
                key="image-key"
            >
                <div className="relative group perspective-1000">
                    <div className="relative z-10 flex flex-col items-center">
                        <motion.img
                            className='w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-[0_0_20px_rgba(0,242,254,0.15)] mb-6'
                            src="https://i.ibb.co.com/KcxB5Qj0/Adobe-Express-file.png"
                            alt="Nabi Shafin"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                        <div className="text-center w-full">
                            <h3 className="text-2xl font-bold text-white tracking-wide">Nabi Shafin</h3>
                            <p className="text-slate-400 text-md font-mono mt-1 mb-2">Full-Stack Developer</p>
                            <a href="mailto:shafin21215@gmail.com" className="text-cyan-400 text-sm font-mono hover:text-cyan-300 transition-colors">shafin21215@gmail.com</a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Banner;

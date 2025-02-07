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
            className='flex flex-col md:flex-row bg-gradient-to-r from-black via-purple-950 to-black sm:p-8 md:p-10' // Gradient background
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key="section-key" // Adding key to force reanimation on every render
        >
            {/* Animated Text Block */}
            <motion.div
                className='w-full md:w-6/12 flex justify-center items-start flex-col p-4 md:p-10 gap-2 text-white' // White text for contrast
                variants={itemVariants}
                key="text-block-key" // Adding key to force reanimation
            >
                <motion.h4 className='text-2xl font-bold' variants={itemVariants} key="h4-key">Hello, I am</motion.h4>
                <motion.h1 className='text-4xl font-bold' variants={itemVariants} key="h1-key">Mahamodon Nabi Shafin</motion.h1>
                <motion.p className='text-xl font-bold' variants={itemVariants} key="p1-key">Frontend Developer</motion.p>
                <motion.p variants={itemVariants} key="p2-key">Passionate about crafting seamless user interfaces with modern web technologies like React, HTML, CSS, and JavaScript.</motion.p>
                <motion.div className='flex gap-5' variants={itemVariants} key="icons-key"> {/* Motion for icons */}
                    <a href="https://www.linkedin.com/in/nabi-shafin/" target="_blank" rel="noopener noreferrer">
                        <CiLinkedin size={40} className="cursor-pointer hover:scale-110 transition-all duration-200" />
                    </a> {/* LinkedIn icon */}

                    <a href="https://github.com/nabishafin" target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare size={40} className="cursor-pointer hover:scale-110 transition-all duration-200" />
                    </a> {/* GitHub icon */}

                    <a href="mailto:shafin21215@gmail.com">
                        <MdOutgoingMail size={40} className="cursor-pointer hover:scale-110 transition-all duration-200" />
                    </a> {/* Mail icon */}

                </motion.div>
                {/* Resume Button with download functionality */}
                <motion.a
                    href="/public/Nabi Shafin Professional CV Resume.pdf" // Path to your resume in the public folder
                    download="Mahamodon_Nabi_Shafin_Resume.pdf" // Optional: Name the file when downloading
                    className='btn bg-white text-indigo-500 px-6 py-2 rounded-md font-bold hover:bg-indigo-100 transition-colors duration-300 mt-2'
                    variants={itemVariants}
                    key="button-key"
                >
                    Download Resume
                </motion.a> {/* Styled button */}

            </motion.div>

            {/* Animated Image Block */}
            <motion.div
                className='flex justify-end items-end'
                variants={itemVariants}
                key="image-key" // Adding key to force reanimation
            >
                <motion.img
                    className='w-full md:w-4/6 rounded-lg shadow-lg' // Added rounded corners and shadow
                    src="https://i.ibb.co.com/KcxB5Qj0/Adobe-Express-file.png"
                    alt="Shafin"  // Added alt text for accessibility
                    whileHover={{ scale: 1.05 }} // Scale on hover
                    transition={{ duration: 0.3 }} // Smooth transition
                />
            </motion.div>
        </motion.section>
    );
};

export default Banner;

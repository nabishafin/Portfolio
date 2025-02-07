import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    return (
        <motion.section
            id="about-me"
            className='flex flex-col md:flex-row bg-gradient-to-r from-black via-purple-950 to-black p-6 sm:p-8 md:p-10 text-white gap-3'
            initial="hidden"
            animate="visible"
            variants={textVariants}
        >
            {/* Image container with motion */}
            <motion.div
                className="w-full md:w-10/12 lg:w-8/12 flex justify-start items-center pl-8"
                variants={textVariants}
            >
                <motion.img
                    className="w-full sm:w-full md:w-3/4 lg:w-2/3 rounded-2xl shadow-lg hidden md:block"
                    src="https://i.ibb.co.com/B2GhjfYy/cooing-page.jpg" // Corrected image URL
                    alt="Portrait of Mahamodon Nabi Shafin"
                    variants={textVariants}
                />

            </motion.div>

            {/* Text container with motion */}
            <motion.div
                className="w-full md:w-6/12 flex flex-col justify-center items-start gap-4"
                variants={textVariants}
            >
                <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    About Me
                </motion.h2>
                <motion.p className="text-lg sm:text-xl">
                    Hello! I’m <strong>Mahamodon Nabi Shafin</strong>, a passionate <strong>Frontend Developer</strong> with a love for creating seamless and visually appealing user interfaces.
                    I specialize in modern web technologies such as <strong>React</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>JavaScript</strong>.
                </motion.p>
                <motion.p className="text-lg sm:text-xl">
                    I have a keen eye for detail, and my goal is to enhance the user experience by building responsive and accessible websites. When I'm not coding, you can find me exploring new tech, reading books, or playing video games.
                </motion.p>
                <motion.p className="text-lg sm:text-xl">
                    I’m always looking for new challenges and opportunities to collaborate on exciting projects. Feel free to reach out to me!
                </motion.p>
            </motion.div>
        </motion.section>
    );
};

export default AboutMe;

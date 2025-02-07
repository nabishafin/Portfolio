import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    const skills = [
        { name: 'HTML', imgSrc: 'https://i.ibb.co.com/XxdDr8Hd/html.png', alt: 'HTML Icon' },
        { name: 'CSS', imgSrc: 'https://i.ibb.co.com/W49VJMJ9/css.png', alt: 'CSS Icon' },
        { name: 'TailWind css', imgSrc: 'https://i.ibb.co.com/0yBHDcVy/tailwind-css.png', alt: 'React Icon' },
        { name: 'JavaScript', imgSrc: 'https://i.ibb.co.com/LX1Tjs9W/js.png', alt: 'JavaScript Icon' },
        { name: 'React', imgSrc: 'https://i.ibb.co.com/N2KT8Vwp/react-js.png', alt: 'React Icon' },
        { name: 'Next js', imgSrc: 'https://i.ibb.co.com/23DLp979/next-js.webp', alt: 'React Icon' },
        { name: 'Node js', imgSrc: 'https://i.ibb.co.com/5Xpfq8Dn/node-js.jpg', alt: 'React Icon' },
        { name: 'Express js', imgSrc: 'https://i.ibb.co.com/27b74GN4/1686391647921.png', alt: 'React Icon' },
        { name: 'Mongo Db', imgSrc: 'https://i.ibb.co.com/nsw7kgdX/mongo.png', alt: 'React Icon' },
        { name: 'Firebase', imgSrc: 'https://i.ibb.co.com/pvMLTxnv/firebase.png', alt: 'React Icon' },
        // Add more skills and icons as needed
    ];

    return (
        <motion.section
            id='Skills'
            className="flex flex-col items-center bg-gradient-to-r from-black via-purple-950 to-black p-6 sm:p-8 md:p-10 text-white gap-6"
            initial="hidden"
            animate="visible"
            variants={skillVariants}
        >
            <motion.h2 className="text-3xl font-bold">My Skills</motion.h2>
            <div className="flex flex-wrap justify-center gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col justify-center items-center"
                        variants={skillVariants}
                    >
                        <img
                            src={skill.imgSrc}
                            alt={skill.alt}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-full shadow-lg object-cover"
                        />
                        <p className="mt-2 text-lg">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Skills;


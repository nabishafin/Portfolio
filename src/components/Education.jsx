import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const educationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
    };

    const education = [
        {
            degree: 'Diploma in Electrical Engineering',
            institution: 'Comilla Polytechnic Institute',
            year: '2018-2021',
            location: 'Comilla, Bangladesh',
            result: '3.34 out of (4.00)',
            imgSrc: 'https://i.ibb.co/zVqVWZyv/diploma.jpg',
            alt: 'Diploma Icon'
        },
        {
            degree: 'Secondary School Certificate (SSC)',
            institution: 'Comilla Modern High School',
            year: '2016-2018',
            location: 'Comilla, Bangladesh',
            result: '4.955 out of (5.00)',
            imgSrc: 'https://i.ibb.co/d4v4bBct/ssc.png',
            alt: 'SSC Icon'
        },
    ];

    return (
        <motion.section
            id='Educations'
            className="flex flex-col items-center bg-gradient-to-r from-black via-purple-950 to-black p-6 sm:p-8 md:p-10 text-white gap-6"
            initial="hidden"
            animate="visible"
            variants={educationVariants}
        >
            <motion.h2 className="text-4xl font-extrabold text-center mb-6">My Education</motion.h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 justify-center">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        className="max-w-lg w-full bg-black text-white rounded-3xl shadow-lg p-8 transform transition duration-500 ease-in-out hover:scale-105"
                        variants={educationVariants}
                        whileHover={{ scale: 1.1, rotate: -2 }} // Enhanced hover effect
                    >
                        <div className="flex justify-center mb-6">
                            <motion.div
                                className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-2 flex items-center justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3 }} // Fade-in animation for image container
                            >
                                <motion.img
                                    src={edu.imgSrc}
                                    alt={edu.alt}
                                    className="w-full h-full rounded-full object-cover shadow-lg"
                                />
                            </motion.div>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-semibold">{edu.degree}</p>
                            <p className="text-lg mt-2">{edu.institution}</p>
                            <p className="text-sm text-gray-400 mt-2">{edu.year}</p>
                            <p className="text-sm text-gray-400 mt-2">{edu.location}</p>
                            <p className="text-sm text-gray-400 mt-2">Result: {edu.result}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Education;

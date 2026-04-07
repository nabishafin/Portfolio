'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const Education = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const education = [
        {
            degree: 'B.Sc. in Electrical and Electronic Engineering (EEE)',
            institution: 'University of Scholars',
            year: '2021-2025',
            location: 'Dhaka, Bangladesh',
            result: '3.20 out of (4.00)',
            imgSrc: 'https://i.ibb.co/6P8Hn4m/scholars.png', // Assuming a logical placeholder or generic logo URL
            alt: 'University Logo'
        },
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
        <section ref={containerRef} id="Educations" className="py-20 px-6 sm:px-12 w-full max-w-6xl mx-auto relative overflow-hidden">
            <div className="flex flex-col items-center mb-16">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Academic <span className="text-cyan-400">Journey</span>
                </motion.h2>
                <div className="w-20 h-1 bg-cyan-400 rounded-full"></div>
            </div>

            <div className="relative">
                {/* Vertical Timeline Track (The Background Lane) */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800/30 transform md:-translate-x-1/2 z-0 hidden sm:block"></div>
                
                {/* Growing Timeline Line (The Animation) */}
                <motion.div 
                    style={{ scaleY }}
                    className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-cyan-400/50 to-transparent origin-top transform md:-translate-x-1/2 z-10 hidden sm:block"
                ></motion.div>

                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-8 relative z-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            {/* Card Content */}
                            <div className={`w-full md:w-[45%] group`}>
                                <div className="bg-[#1c1c1c]/60 backdrop-blur-xl border border-slate-700/50 p-6 sm:p-8 rounded-[2rem] hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,242,254,0.1)] group relative overflow-hidden">
                                    {/* Year Badge */}
                                    <div className="absolute top-2 right-2 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono px-3 py-1 rounded-full">
                                        {edu.year}
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-lg text-slate-300 font-medium mb-4">
                                        {edu.institution}
                                    </p>

                                    <div className="flex flex-col gap-2 text-sm text-slate-400 font-mono">
                                        <div className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="text-cyan-400" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg>
                                            {edu.location}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="text-cyan-400" viewBox="0 0 16 16"><path d="M11 15a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v13zM2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7z" /></svg>
                                            Result: <span className="text-white font-bold">{edu.result}</span>
                                        </div>
                                    </div>

                                    {/* Decorative Gradient Shine */}
                                    <div className="absolute -inset-full h-full w-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000 ease-in-out"></div>
                                </div>
                            </div>

                            {/* Milestone Marker (Centered on line) */}
                            <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 top-0 w-12 h-12 rounded-full bg-[#1c1c1c] border-4 border-cyan-400 z-20 shadow-[0_0_15px_rgba(0,242,254,0.5)] flex items-center justify-center">
                                <img src={edu.imgSrc} alt="" className="w-8 h-8 rounded-full object-cover" />
                            </div>

                            {/* Center Space Holder */}
                            <div className="hidden md:block w-12 h-12 flex-none translate-x-0"></div>

                            {/* Spacer for mobile parity / Desktop Alignment */}
                            <div className="hidden md:block w-[45%]"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

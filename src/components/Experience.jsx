'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Experience = () => {
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
    const experiences = [
        {
            company: 'Spark Tech Agency',
            role: 'Full-Stack Developer',
            duration: 'March 2025 - Present',
            location: 'Dhaka, Bangladesh',
            description: 'Architecting responsive pet care platforms and integrating complex backend systems.',
            projects: [
                {
                    name: 'Wuffoos',
                    link: 'https://wuffoos.com',
                    details: [
                        'Architected a responsive pet care platform using Next.js and React.js.',
                        'Integrated Node.js/Express REST APIs with SSR & Static Generation for optimized performance.',
                        'Implemented state management with Redux Toolkit and real-time chat with Socket.io.',
                        'Built secure client-side authentication flows using JWT.'
                    ]
                }
            ],
            color: 'from-cyan-500 to-blue-500'
        },
        {
            company: 'Legier Beteiligungs',
            role: 'Frontend Developer (Remote)',
            duration: 'May 2025 - Feb 2026',
            location: 'Germany (Remote)',
            description: 'Developed high-performance frontends for digital newspaper and crypto platforms.',
            projects: [
                {
                    name: 'Newspaper Platform',
                    link: 'https://legiergroup.com',
                    details: [
                        'Developed high-performance responsive frontend focusing on content delivery.',
                        'Optimized web performance and SEO, resulting in faster load times.'
                    ]
                },
                {
                    name: 'Scandic Coin',
                    link: 'https://scandiccoin.dev',
                    details: [
                        'Built modern UI for a cryptocurrency platform.',
                        'Integrated Web3.js for secure wallet connectivity.'
                    ]
                },
                {
                    name: 'SNC-DOMAIN',
                    details: [
                        'Led frontend development for a premium web portal.',
                        'Ensured seamless navigation across all devices.'
                    ]
                }
            ],
            color: 'from-cyan-500 to-blue-500'
        }
    ];

    return (
        <section ref={containerRef} id="Experience" className="py-20 px-6 sm:px-12 w-full max-w-6xl mx-auto relative">
            <div className="flex flex-col items-center mb-16">
                <motion.h2 
                    className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Professional <span className="text-cyan-400">Experience</span>
                </motion.h2>
                <div className="w-20 h-1 bg-cyan-400 rounded-full"></div>
            </div>

            <div className="relative">
                {/* Vertical Timeline Track (The Background Lane) */}
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-slate-800/30 z-0"></div>
                
                {/* Growing Timeline Line (The Animation) */}
                <motion.div 
                    style={{ scaleY }}
                    className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-cyan-400/50 to-transparent origin-top z-10"
                ></motion.div>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="relative pl-12 md:pl-20"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {/* Dot (Centered on line) */}
                            <div className="absolute left-[-4px] md:left-[12px] top-0 w-10 h-10 rounded-full bg-[#1c1c1c] border-4 border-cyan-400 z-10 shadow-[0_0_15px_rgba(0,242,254,0.5)] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-cyan-400" viewBox="0 0 16 16"><path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/></svg>
                            </div>

                            {/* Content Card */}
                            <div className="bg-[#1c1c1c]/60 backdrop-blur-xl border border-slate-700/50 p-6 sm:p-8 rounded-[2rem] hover:border-cyan-400/50 transition-all duration-300 group">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                            {exp.role}
                                        </h3>
                                        <p className="text-lg text-cyan-400 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="bg-cyan-900/30 text-cyan-300 text-xs font-mono px-3 py-1 rounded-full border border-cyan-500/30">
                                            {exp.duration}
                                        </span>
                                        <p className="text-xs text-slate-500 mt-2 font-mono uppercase tracking-widest">{exp.location}</p>
                                    </div>
                                </div>

                                <p className="text-slate-400 mb-8 max-w-2xl leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {exp.projects.map((project, pIdx) => (
                                        <div key={pIdx} className="bg-[#171717] border border-slate-800/50 p-5 rounded-2xl">
                                            <div className="flex items-center justify-between mb-4">
                                                <h4 className="text-md font-bold text-slate-200">{project.name}</h4>
                                                {project.link && (
                                                    <a href={project.link} target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 text-xs font-mono flex items-center gap-1">
                                                        Visit <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/><path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/></svg>
                                                    </a>
                                                )}
                                            </div>
                                            <ul className="space-y-2">
                                                {project.details.map((detail, dIdx) => (
                                                    <li key={dIdx} className="text-xs text-slate-400 flex items-start gap-2">
                                                        <span className="text-cyan-500 mt-1">•</span>
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

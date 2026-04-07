'use client';
import React from 'react';
import { motion } from 'framer-motion';

const BentoCard = ({ children, className }) => (
    <motion.div
        className={`bg-[#1c1c1c] border border-[#2d3748] hover:border-cyan-400/80 rounded-2xl p-6 sm:p-8 hover:shadow-[0_0_30px_rgba(0,242,254,0.25)] hover:-translate-y-1 transition-all duration-300 group ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
    >
        {children}
    </motion.div>
);

const AboutMe = () => {
    return (
        <section id="about-me" className='w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 my-16 text-slate-300'>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Row 1 */}
                <BentoCard className="flex flex-col md:col-span-1">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">Teamwork</h3>
                    <div className="text-cyan-400 font-bold mb-4 font-mono">{"</>"}</div>
                    <p className="text-slate-400 text-sm leading-relaxed mt-auto">
                        I am always eager to collaborate on innovative projects. I believe strong teamwork is the foundation of great products, and I enjoy working with others to create smooth workflows and deliver high-quality results.
                    </p>
                </BentoCard>

                <BentoCard className="flex flex-col md:col-span-1">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">Learner</h3>
                    <div className="text-cyan-400 font-bold mb-4 font-mono">{"</>"}</div>
                    <p className="text-slate-400 text-sm leading-relaxed mt-auto">
                        I'm always eager to learn and stay updated with the latest technologies. I enjoy exploring new tools, frameworks, and architectures to improve my development skills and build smarter solutions.
                    </p>
                </BentoCard>

                {/* Tall "About Me" box on the right */}
                <BentoCard className="md:col-span-1 md:row-span-2 flex flex-col">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-8">About Me</h3>
                    
                    <h4 className="text-lg text-white font-medium mb-3">Profile Summary</h4>
                    <p className="text-slate-400 text-[14px] leading-relaxed mb-4">
                        Software Developer with 1+ year of experience in building responsive and user-friendly web applications using HTML, CSS, JavaScript, React, and Next.js. I specialize in writing clean, scalable, and maintainable code with a strong focus on solving real-world problems.
                    </p>
                    <p className="text-slate-400 text-[14px] leading-relaxed">
                        Experienced in modern web architectures, REST APIs, and state management. With background in both frontend (Next.js/React) and backend (Node.js/Express/MongoDB), I deliver robust digital solutions that provide seamless user experiences across global development environments.
                    </p>
                </BentoCard>

                {/* Row 2 (Spans 2 columns under Teamwork and Learner) */}
                <BentoCard className="md:col-span-2 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-2">Full-Stack Developer</h3>
                    <div className="flex gap-4 text-white font-mono text-xs sm:text-sm mb-6">
                        <a href="mailto:shafin21215@gmail.com" className="hover:text-cyan-400 transition-colors">shafin21215@gmail.com</a>
                        <span className="text-cyan-400">|</span>
                        <span>+8801616539735</span>
                    </div>
                    
                    <p className="text-slate-400 text-[14px] leading-relaxed mb-4">
                        Proficient in a versatile modern stack including <span className="text-cyan-400 font-mono">TypeScript</span>, JavaScript, and advanced Front-End frameworks like <span className="text-cyan-400 font-mono">React JS</span> and <span className="text-cyan-400 font-mono">Next JS</span>. I leverage <span className="text-cyan-400 font-mono">Node.js</span> and <span className="text-cyan-400 font-mono">Express.js</span> for building scalable backend architectures and RESTful APIs.
                    </p>
                    <p className="text-slate-400 text-[14px] leading-relaxed">
                        My expertise includes Problem Solving, Debugging, RTK Query, and integrating secure JWT Authentication flows. I am passionate about performance optimization, SEO, and using modern UI libraries like @shadcn/ui and Ant Design to create premium user experiences.
                    </p>
                </BentoCard>

                {/* Row 3 */}
                <BentoCard className="md:col-span-2 flex flex-col">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">Expertise</h3>
                    <div className="text-cyan-400 font-bold mb-4 font-mono">{"</>"}</div>
                    <p className="text-slate-400 text-sm leading-relaxed mt-auto">
                        My focus lies in building flawlessly responsive user interfaces and integrating robust functionality. I consistently adapt to new technologies, ensuring that the applications I build are future-ready, secure, and highly optimized.
                    </p>
                </BentoCard>

                <BentoCard className="md:col-span-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">Communication</h3>
                    <div className="text-cyan-400 font-bold mb-4 font-mono">{"</>"}</div>
                    <p className="text-slate-400 text-sm leading-relaxed mt-auto">
                        I believe clear and effective communication is key to successful teamwork. I ensure ideas, progress, and feedback are shared openly to keep projects on track and goals aligned.
                    </p>
                </BentoCard>

            </div>
        </section>
    );
};

export default AboutMe;

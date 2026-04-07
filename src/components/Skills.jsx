'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, 
    SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiPostgresql, SiGraphql, SiDocker, SiGit,
    SiAmazonwebservices, SiVercel, SiPostman, SiSwagger, SiAntdesign, SiChakraui, SiRadixui, SiReactquery
} from "react-icons/si";
import { TbCircleLetterZ } from "react-icons/tb";

const Skills = () => {
    const [activeTab, setActiveTab] = useState('frontend');

    const skillVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const frontendSkills = [
        { name: 'React.js', role: 'UI Library', Icon: SiReact, hoverColor: 'group-hover:text-[#61DAFB]' },
        { name: 'Next.js', role: 'React Framework', Icon: SiNextdotjs, hoverColor: 'group-hover:text-white' },
        { name: 'JavaScript', role: 'Core Logic', Icon: SiJavascript, hoverColor: 'group-hover:text-[#F7DF1E]' },
        { name: 'TypeScript', role: 'Type Safety', Icon: SiTypescript, hoverColor: 'group-hover:text-[#3178C6]' },
        { name: 'Tailwind CSS', role: 'Styling', Icon: SiTailwindcss, hoverColor: 'group-hover:text-[#06B6D4]' },
        { name: 'Redux / RTK', role: 'State Management', Icon: SiRedux, hoverColor: 'group-hover:text-[#764ABC]' },
        { name: 'TanStack Query', role: 'Data Fetching', Icon: SiReactquery, hoverColor: 'group-hover:text-[#FF4154]' },
        { name: 'shadcn/ui', role: 'Components', Icon: SiRadixui, hoverColor: 'group-hover:text-white' },
        { name: 'Ant Design', role: 'UI Kit', Icon: SiAntdesign, hoverColor: 'group-hover:text-[#0170FE]' },
        { name: 'Chakra UI', role: 'UI Library', Icon: SiChakraui, hoverColor: 'group-hover:text-[#319795]' },
    ];

    const backendSkills = [
        { name: 'Node.js', role: 'Runtime', Icon: SiNodedotjs, hoverColor: 'group-hover:text-[#339933]' },
        { name: 'Express.js', role: 'Framework', Icon: SiExpress, hoverColor: 'group-hover:text-white' },
        { name: 'MongoDB', role: 'NoSQL Database', Icon: SiMongodb, hoverColor: 'group-hover:text-[#47A248]' },
        { name: 'JWT', role: 'Auth Service', Icon: SiJavascript, hoverColor: 'group-hover:text-[#d63aff]' },
        { name: 'PostgreSQL', role: 'Relational DB', Icon: SiPostgresql, hoverColor: 'group-hover:text-[#4169E1]' },
        { name: 'RESTful APIs', role: 'Integration', Icon: SiJavascript, hoverColor: 'group-hover:text-[#00ff88]' },
        { name: 'Zod', role: 'Validation', Icon: TbCircleLetterZ, hoverColor: 'group-hover:text-[#3E67B1]' },
        { name: 'Docker', role: 'Containers', Icon: SiDocker, hoverColor: 'group-hover:text-[#2496ED]' },
    ];

    const toolsSkills = [
        { name: 'AWS', role: 'Cloud Hosting', Icon: SiAmazonwebservices, hoverColor: 'group-hover:text-[#FF9900]' },
        { name: 'Vercel', role: 'Deployment', Icon: SiVercel, hoverColor: 'group-hover:text-white' },
        { name: 'Firebase', role: 'BaaS Platform', Icon: SiFirebase, hoverColor: 'group-hover:text-[#FFCA28]' },
        { name: 'Postman', role: 'API Testing', Icon: SiPostman, hoverColor: 'group-hover:text-[#FF6C37]' },
        { name: 'Swagger', role: 'API Documentation', Icon: SiSwagger, hoverColor: 'group-hover:text-[#85EA2D]' },
        { name: 'Git', role: 'Version Control', Icon: SiGit, hoverColor: 'group-hover:text-[#F05032]' },
        { name: 'GitHub', role: 'Collaboration', Icon: SiGit, hoverColor: 'group-hover:text-white' },
    ];

    const getSkills = () => {
        if (activeTab === 'frontend') return frontendSkills;
        if (activeTab === 'backend') return backendSkills;
        return toolsSkills;
    };

    return (
        <motion.section
            id='Skills'
            className="flex flex-col bg-transparent p-6 sm:p-8 md:p-16 w-full max-w-6xl mx-auto gap-8 text-slate-300 min-h-[60vh] justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={skillVariants}
        >
            <div className="flex flex-col items-center mb-6">
                <motion.div className="text-cyan-400 font-mono text-5xl md:text-6xl font-bold tracking-tighter mb-4" variants={skillVariants}>
                    {"</>"}
                </motion.div>
                <motion.h2 className="text-3xl md:text-4xl font-normal text-cyan-400 tracking-wide" variants={skillVariants}>Skills & Technologies</motion.h2>
                <motion.p className="text-slate-400 mt-3 font-mono text-xs md:text-sm uppercase tracking-widest opacity-80 text-center" variants={skillVariants}>
                    Building Scalable Solutions With Modern Tech Stacks
                </motion.p>
            </div>

            {/* Tabs for Category */}
            <motion.div className="flex flex-wrap justify-center gap-4 mb-4" variants={skillVariants}>
                {[
                    { id: 'frontend', label: 'Frontend Architecture', icon: (active) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`mb-1 ${active ? 'text-cyan-400' : 'text-slate-500'}`} viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Z"/></svg> },
                    { id: 'backend', label: 'Backend & APIs', icon: (active) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`mb-1 ${active ? 'text-cyan-400' : 'text-slate-500'}`} viewBox="0 0 16 16"><path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/></svg> },
                    { id: 'tools', label: 'Cloud & Tools', icon: (active) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`mb-1 ${active ? 'text-cyan-400' : 'text-slate-500'}`} viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/></svg> }
                ].map((tab) => (
                    <div 
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex flex-col items-center cursor-pointer px-6 py-3 rounded-xl border-2 transition-all duration-300 min-w-[200px] ${
                            activeTab === tab.id 
                            ? 'border-cyan-400 bg-cyan-400/10 shadow-[0_0_15px_rgba(0,242,254,0.15)]' 
                            : 'border-[#2d3748] bg-[#1c1c1c] hover:border-cyan-400/50 hover:bg-[#232323]'
                        }`}
                    >
                        {tab.icon(activeTab === tab.id)}
                        <span className={`font-bold font-mono text-xs uppercase tracking-wider ${activeTab === tab.id ? 'text-cyan-400' : 'text-slate-400'}`}>
                            {tab.label}
                        </span>
                    </div>
                ))}
            </motion.div>

            {/* Metric Skill Cards Grid */}
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mt-2"
                variants={{
                    visible: { transition: { staggerChildren: 0.05 } }
                }}
                initial="hidden"
                animate="visible"
                key={activeTab} // Retrigger animation on tab change
            >
                {getSkills().map((skill, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center gap-4 bg-[#1c1c1c] p-5 rounded-xl border border-[#2d3748] hover:border-cyan-400/60 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,242,254,0.05)] cursor-default transition-all duration-300 group"
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <div className={`text-3xl text-slate-500 transition-colors duration-300 ${skill.hoverColor}`}>
                            <skill.Icon />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-slate-200 text-[15px] tracking-wide transition-colors group-hover:text-white">{skill.name}</span>
                            <span className="text-[10px] text-slate-400 font-mono mt-0.5 uppercase tracking-wider">{skill.role}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

        </motion.section>
    );
};

export default Skills;

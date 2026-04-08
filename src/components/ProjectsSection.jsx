'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import disscussHub from '../assets/discuss banner.png';
import system from '../assets/system-banner.png';

// Fallback static projects shown while API loads or if DB is empty
const STATIC_PROJECTS = [
    {
        name: "Nostrix Creative",
        description: "Nostrix Creative is a modern digital agency website developed using the latest front-end technologies. Built with React for dynamic user interfaces and Tailwind CSS combined with DaisyUI for a sleek, responsive design, the site offers a smooth and engaging experience across all devices.",
        liveSite: "https://nostrix-client.vercel.app",
        githubClient: "https://github.com/nabishafin/Nostrix-Client.git",
        technologies: ["React", "HTML", "CSS", "JavaScript", "React Router", "Tailwind CSS"],
        image: "https://i.ibb.co.com/wZdfh25z/nostrix-client-vercel-app-Nest-Hub-Max.png",
    },
    {
        name: "DiscussHub",
        description: "DiscussHub is a dynamic forum platform developed with the MERN stack, aimed at creating engaging user interactions in a community-driven environment. Users can share posts, engage in discussions, upvote or downvote content, and explore posts via tags.",
        liveSite: "https://discuss-hub-client.vercel.app",
        githubClient: "https://github.com/nabishafin/discussHub-client.git",
        githubServer: "https://github.com/nabishafin/discussHub-Server.git",
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS"],
        image: disscussHub
    },
    {
        name: "Service Review System",
        description: "A full-stack platform where users can log in, add services, and post reviews. Users can manage their reviews and explore feedback on their listed services. Built with user authentication, CRUD operations, and secure database interactions.",
        liveSite: "https://service-review-system-client.vercel.app",
        githubClient: "https://github.com/nabishafin/Service-Review-System-Client.git",
        githubServer: "https://github.com/nabishafin/Service-Review-System-Server.git",
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS"],
        image: system
    },
    {
        name: "Movieverse",
        description: "Movieverse is an interactive, user-friendly web application designed to help users explore and manage their movie collections. Users will be able to search for movies, view detailed movie information, add and delete movies, manage their favorite movies, and more.",
        liveSite: "https://movieverse-f8eae.web.app",
        githubClient: "https://github.com/nabishafin/movieverse-client.git",
        githubServer: "https://github.com/nabishafin/movieverse-server.git",
        technologies: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Firebase"],
        image: "https://i.ibb.co.com/fzLtrny3/movieverse-f8eae-web-app-Nest-Hub-Max-2.png",
    },
];

const ProjectsSection = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('/api/projects');
                if (!res.ok) throw new Error('API error');
                const data = await res.json();
                // Use API data if available, otherwise show static fallback
                if (Array.isArray(data) && data.length > 0) {
                    setProjects(data);
                } else {
                    setProjects(STATIC_PROJECTS);
                }
            } catch (err) {
                // Silently fall back to static data on error
                setProjects(STATIC_PROJECTS);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.section
            id='Projects'
            className="p-6 md:p-16 flex flex-col items-center bg-transparent min-h-screen text-slate-300"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="w-full text-center mb-12">
                <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-mono text-cyan-400 font-bold mb-4" variants={itemVariants}>
                    {"<Projects/>"}
                </motion.h2>
                <motion.p className="text-slate-400 font-mono text-sm uppercase tracking-widest" variants={itemVariants}>
                    Some things I've built
                </motion.p>
            </div>

            {isLoading ? (
                <div className="flex flex-col items-center gap-4 py-20">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-cyan-500"></div>
                    <span className="text-slate-600 font-mono text-sm">Loading projects...</span>
                </div>
            ) : (
                <div className="w-full max-w-6xl flex flex-col">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project._id || index}
                            className="flex flex-col md:flex-row gap-8 py-10 border-t border-[#2d3748] items-stretch group"
                            variants={itemVariants}
                        >
                            {/* Image Container */}
                            <div className="w-full md:w-5/12 rounded-xl border border-[#2d3748] shadow-lg overflow-hidden h-[260px] md:h-auto md:self-stretch">
                                <img
                                    src={project.image?.src || project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => e.target.src = "https://dummyimage.com/600x400/2d3748/00F2FE&text=No+Image"}
                                />
                            </div>

                            {/* Content Container — scrollable description */}
                            <div className="w-full md:w-7/12 flex flex-col justify-between">
                                <div className="flex flex-col flex-1 overflow-hidden">
                                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                        {project.name}
                                    </h3>
                                    {/* Scrollable description */}
                                    <div className="overflow-y-auto max-h-[200px] pr-2 mb-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                                        <p className="text-slate-400 leading-relaxed text-base">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {(project.technologies || []).slice(0, 5).map((tech, i) => (
                                        <span key={i} className="text-xs font-mono text-cyan-400 bg-[#1c1c1c] border border-cyan-400/30 px-3 py-1.5 rounded-md shadow-sm">
                                            {tech}
                                        </span>
                                    ))}
                                    {(project.technologies || []).length > 5 && (
                                        <span className="text-xs font-mono text-slate-500 px-3 py-1.5">
                                            +{project.technologies.length - 5} more
                                        </span>
                                    )}
                                </div>

                                {/* Links */}
                                <div className="flex flex-wrap gap-6">
                                    {project.liveSite && (
                                        <a
                                            href={project.liveSite}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-cyan-400 font-mono text-sm hover:text-cyan-300 flex items-center gap-1 transition-colors group/link"
                                        >
                                            Live Site <span className="text-slate-600 transition-colors group-hover/link:text-cyan-400 group-hover/link:translate-x-1 transform duration-300">{"->"}</span>
                                        </a>
                                    )}
                                    {project.githubClient && (
                                        <a
                                            href={project.githubClient}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-slate-400 font-mono text-sm hover:text-cyan-400 flex items-center gap-1 transition-colors group/link"
                                        >
                                            Client Code <span className="text-slate-600 transition-colors group-hover/link:text-cyan-400 group-hover/link:translate-x-1 transform duration-300">{"->"}</span>
                                        </a>
                                    )}
                                    {project.githubServer && (
                                        <a
                                            href={project.githubServer}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-slate-400 font-mono text-sm hover:text-cyan-400 flex items-center gap-1 transition-colors group/link"
                                        >
                                            Server Code <span className="text-slate-600 transition-colors group-hover/link:text-cyan-400 group-hover/link:translate-x-1 transform duration-300">{"->"}</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </motion.section>
    );
};

export default ProjectsSection;

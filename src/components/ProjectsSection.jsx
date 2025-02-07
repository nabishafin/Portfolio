import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    const projects = [
        {
            name: "DiscussHub",
            description: "DiscussHub is a dynamic forum platform developed with the MERN stack, aimed at creating engaging user interactions in a community-driven environment. Users can share posts, engage in discussions, upvote or downvote content, and explore posts via tags. With features like user profiles, real-time notifications, and an interactive commenting system, DiscussHub is designed to facilitate vibrant discussions across various topics and niches.",
            liveSite: "https://discusshub-b96dc.web.app",
            githubClient: "https://github.com/nabishafin/discussHub-client.git",
            githubServer: "https://github.com/nabishafin/discussHub-Server.git",
            technologies: [
                "React",
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Firebase",
                "React Router",
                "React Simple Star Rating",
                "Axios",
                "Nodemon",
                "Tailwind CSS",
                "Git",
                "SweetAlert",
                "MongoDB Atlas",
                "Cors",
                "React Context API",
                "ESLint",
                "Toastify (for notifications)",
                "Axios"
            ],
            image: "https://i.ibb.co.com/1GLtSrPn/Whats-App-Image-2025-02-07-at-2-23-12-PM.jpg",  // Update or ensure this URL is correct
        },
        {
            name: "Movieverse",
            description: "Movieverse is an interactive, user-friendly web application designed to help users explore and manage their movie collections. Users will be able to search for movies, view detailed movie information, add and delete movies, manage their favorite movies, and more. The website will feature an eye-catching design with a dynamic interface, seamless user experience, and responsive layout for all devices.",
            liveSite: "https://movieverse-f8eae.web.app",
            githubClient: "https://github.com/nabishafin/movieverse-client.git",
            githubServer: "https://github.com/nabishafin/movieverse-server.git",
            technologies: [
                "React",
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Firebase",
                "React Router",
                "React Simple Star Rating",
                "Axios",
                "Nodemon",
                "Tailwind CSS",
                "Git",
                "SweetAlert",
                "MongoDB Atlas",
                "Cors",
                "React Context API",
                "ESLint",
                "Toastify (for notifications)",
                "Axios"
            ],
            image: "https://i.ibb.co.com/fzLtrny3/movieverse-f8eae-web-app-Nest-Hub-Max-2.png",
        },
        {
            name: "Expense-Tracker",
            description: "The Expense Tracker is a web-based application designed to help individuals track their income, expenses, and overall budget. It provides an easy-to-use interface to record financial transactions, categorize spending, and visualize financial data through charts and graphs. The app empowers users to manage their personal finances by offering insights into their spending habits and allowing them to set and stick to budgets for various expense categories.",
            liveSite: "https://marvelous-churros-f5daab.netlify.app/",
            githubClient: "https://github.com/nabishafin/expense-tracker.git",
            githubServer: "https://github.com/nabishafin/expense-tracker.git",
            technologies: ["React",
                "HTML",
                "CSS",
                "JavaScript",
                "Tailwind CSS",
                "Git",
                "SweetAlert",
                "MongoDB Atlas",
                "Cors",
                "React Context API",
                "ESLint",
                "Toastify (for notifications)",
                "Axios"],
            image: "https://i.ibb.co.com/JSx3VGm/trcker.png",  // Update or ensure this URL is correct
        },
    ];

    // Detect screen size for mobile responsiveness
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // 768px is the common breakpoint for mobile
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once on mount to set the initial state

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const closeModal = () => setSelectedProject(null);

    return (
        <motion.section
            id='Projects'
            className="flex flex-col md:flex-row gap-8 p-8 bg-gradient-to-r from-black via-purple-950 to-black"
            initial="hidden"
            animate="visible"
        >
            {/* Left Side - Project List */}
            <motion.div className="w-full md:w-6/12 flex flex-col gap-4">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-gradient-to-r from-black via-purple-950 to-black text-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-all duration-200"
                        onClick={() => setSelectedProject(project)}
                    >
                        <motion.img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-48 rounded-lg mb-4 object-cover"
                            onError={(e) => e.target.src = "https://dummyimage.com/300x200/cccccc/ffffff&text=No+Image"}
                        />
                        <motion.h3 className="text-2xl md:text-3xl font-bold">{project.name}</motion.h3>
                        <motion.p className="text-lg md:text-xl">
                            {project.description.length > 100
                                ? `${project.description.slice(0, 100)}...`
                                : project.description}
                        </motion.p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Right Side - Project Details for Desktop */}
            {!isMobile && (
                <motion.div
                    className="w-full md:w-6/12 flex flex-col gap-4 text-white bg-gradient-to-r from-black via-purple-950 to-black p-6 md:p-8 rounded-lg shadow-lg"
                >
                    {selectedProject ? (
                        <>
                            <motion.h3 className="text-3xl font-bold">{selectedProject.name}</motion.h3>
                            <motion.p className="text-lg">{selectedProject.description}</motion.p>

                            {/* Technologies Used List */}
                            <motion.div className="mt-4">
                                <h4 className="text-2xl font-semibold">Technologies Used:</h4>
                                <ul className="list-disc pl-6">
                                    {selectedProject.technologies.map((tech, index) => (
                                        <motion.li key={index} className="text-lg">{tech}</motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                <motion.a href={selectedProject.liveSite} target="_blank" className="btn bg-blue-500 text-white px-6 py-2 rounded-md font-bold hover:bg-blue-400">
                                    Live Site
                                </motion.a>
                                <motion.a href={selectedProject.githubClient} target="_blank" className="btn bg-green-500 text-white px-6 py-2 rounded-md font-bold hover:bg-green-400">
                                    GitHub Client
                                </motion.a>
                                <motion.a href={selectedProject.githubServer} target="_blank" className="btn bg-yellow-500 text-white px-6 py-2 rounded-md font-bold hover:bg-yellow-400">
                                    GitHub Server
                                </motion.a>
                            </div>
                        </>
                    ) : (
                        <p className="text-center text-3xl text-white font-bold">Select a project to view details</p>
                    )}
                </motion.div>
            )}

            {/* Mobile Modal */}
            {isMobile && selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <motion.div
                        className="bg-gradient-to-r from-black via-purple-950 to-black p-6 md:p-8 rounded-lg shadow-lg text-white w-full max-w-md overflow-y-auto" // Add overflow-y-auto here
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ maxHeight: '90vh' }} // Limit the height of the modal to 90% of the viewport height
                    >
                        <motion.h3 className="text-3xl font-bold">{selectedProject.name}</motion.h3>
                        <motion.p className="text-lg">{selectedProject.description}</motion.p>

                        {/* Technologies Used List */}
                        <motion.div className="mt-4">
                            <h4 className="text-2xl font-semibold">Technologies Used:</h4>
                            <ul className="list-disc pl-6">
                                {selectedProject.technologies.map((tech, index) => (
                                    <motion.li key={index} className="text-lg">{tech}</motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <motion.a href={selectedProject.liveSite} target="_blank" className="btn bg-blue-500 text-white px-6 py-2 rounded-md font-bold hover:bg-blue-400">
                                Live Site
                            </motion.a>
                            <motion.a href={selectedProject.githubClient} target="_blank" className="btn bg-green-500 text-white px-6 py-2 rounded-md font-bold hover:bg-green-400">
                                GitHub Client
                            </motion.a>
                            <motion.a href={selectedProject.githubServer} target="_blank" className="btn bg-yellow-500 text-white px-6 py-2 rounded-md font-bold hover:bg-yellow-400">
                                GitHub Server
                            </motion.a>
                        </div>

                        <button onClick={closeModal} className="absolute top-4 right-4 text-white text-2xl">
                            X
                        </button>
                    </motion.div>
                </div>
            )}

        </motion.section>
    );
};

export default ProjectsSection;

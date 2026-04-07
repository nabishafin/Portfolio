'use client';
import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'; // Make sure to import motion

const Navbar = () => {
    const links = (
        <>
            <Link to="/" smooth={true} duration={500} className="mr-4">
                Home
            </Link>
            <Link to="about-me" smooth={true} duration={500} className="mr-4">
                About
            </Link>
            <Link to="Experience" smooth={true} duration={500} className="mr-4">
                Experience
            </Link>
            <Link to="Skills" smooth={true} duration={500} className="mr-4">
                Skills
            </Link>
            <Link to="Educations" smooth={true} duration={500} className="mr-4">
                Educations
            </Link>
            <Link to="Projects" smooth={true} duration={500} className="mr-4">
                Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} className="mr-4">
                Contact
            </Link>
        </>
    );

    return (
        <div className='px-0 md:px-16 sticky top-0 z-50 bg-[#171717]/80 backdrop-blur-md border-b border-[#2d3748]'>
            <div className="navbar text-slate-300 py-4 w-full max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <motion.ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#171717] border border-cyan-400/30 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}>
                            {links}
                        </motion.ul>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-xl font-bold text-slate-200">
                        <span className="text-cyan-400 font-mono tracking-tighter">{"<C/>"}</span>
                        <span>Nabi Shafin</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-8 font-medium text-slate-400">
                        <li><Link to="/" smooth={true} duration={500} className="hover:text-cyan-400 transition-colors cursor-pointer hover:bg-transparent">Home</Link></li>
                        <li><Link to="about-me" smooth={true} duration={500} className="hover:text-cyan-400 transition-colors cursor-pointer hover:bg-transparent">About</Link></li>
                        <li><Link to="Experience" smooth={true} duration={500} className="hover:text-cyan-400 transition-colors cursor-pointer hover:bg-transparent">Experience</Link></li>
                        <li><Link to="Skills" smooth={true} duration={500} className="hover:text-cyan-400 transition-colors cursor-pointer hover:bg-transparent">Skills</Link></li>
                        <li><Link to="Projects" smooth={true} duration={500} className="hover:text-cyan-400 transition-colors cursor-pointer hover:bg-transparent">Projects</Link></li>
                        <li><Link to="contact" smooth={true} duration={500} className="hover:text-cyan-400 transition-colors cursor-pointer hover:bg-transparent">Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-4">
                    {/* Socials / Action */}
                    <a href="https://github.com/nabishafin" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/nabi-shafin/" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
                    </a>
                    <motion.a
                        href="/Mahamodon Nabi Shafin Frontend  Resume.pdf"
                        download="Mahamodon Nabi Shafin Frontend  Resume.pdf"
                        className="px-5 py-1.5 ml-4 rounded-full border border-cyan-400 text-cyan-400 font-medium hover:bg-cyan-400 hover:text-[#171717] transition-all duration-300 text-sm flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>
                        <span>CV</span>
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

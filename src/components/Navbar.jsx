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
        <div className='sticky top-0'>
            <div className="navbar bg-gradient-to-r from-black via-purple-950 to-black text-white">
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
                            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}>
                            {links}
                        </motion.ul>
                    </div>
                    <a className="">
                        <img src="https://i.ibb.co.com/6RV3RRcP/icons8-portfolio-64.png" alt="Portfolio Logo" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <motion.ul
                        className="menu menu-horizontal px-1 space-x-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}>
                        {links}
                    </motion.ul>
                </div>
                <div className="navbar-end">
                    {/* Resume Button with download functionality */}
                    <motion.a
                        href="/public/Mahamodon Nabi Shafin Resume.pdf" // Corrected the path to the resume file
                        download="Mahamodon_Nabi_Shafin_Resume.pdf" // Optional: Name the file when downloading
                        className='btn bg-black text-indigo-500 px-6 py-2 rounded-md font-bold hover:bg-indigo-100 transition-colors duration-300 mt-2'
                        whileHover={{ scale: 1.1 }} // Added simple hover effect
                    >
                        Resume
                    </motion.a> {/* Styled button */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

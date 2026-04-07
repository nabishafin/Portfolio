'use client';
import React from 'react';
import { FaWhatsapp, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const SocialSidebar = () => {
    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-8 bg-[#1c1c1c] py-8 px-4 rounded-r-[1.5rem] border-y border-r border-[#2d3748]/50 shadow-[10px_0_30px_rgba(0,0,0,0.5)]">
            <a 
                href="https://wa.me/8801616539735" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#25D366] hover:translate-x-2 hover:scale-125 transition-all duration-300"
                style={{ 
                    filter: "drop-shadow(0", 
                    transition: "filter 0.3s ease" 
                }}
                onMouseEnter={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 15px #25D366)"}
                onMouseLeave={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 0px transparent)"}
            >
                <FaWhatsapp size={28} />
            </a>
            
            <a 
                href="https://github.com/nabishafin" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#8b5cf6] hover:translate-x-2 hover:scale-125 transition-all duration-300"
                style={{ transition: "filter 0.3s ease" }}
                onMouseEnter={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 15px #8b5cf6)"}
                onMouseLeave={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 0px transparent)"}
            >
                <FaGithub size={28} />
            </a>
            
            <a 
                href="mailto:shafin21215@gmail.com" 
                className="text-[#EA4335] hover:translate-x-2 hover:scale-125 transition-all duration-300"
                style={{ transition: "filter 0.3s ease" }}
                onMouseEnter={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 15px #EA4335)"}
                onMouseLeave={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 0px transparent)"}
            >
                <SiGmail size={28} />
            </a>
            
            <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#E1306C] hover:translate-x-2 hover:scale-125 transition-all duration-300"
                style={{ transition: "filter 0.3s ease" }}
                onMouseEnter={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 15px #E1306C)"}
                onMouseLeave={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 0px transparent)"}
            >
                <FaInstagram size={28} />
            </a>
        </div>
    );
};

export default SocialSidebar;

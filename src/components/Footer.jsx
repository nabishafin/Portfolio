import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="w-full bg-[#171717] pt-20 pb-10 border-t border-slate-800/50">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                
                {/* Brand & Mission Segment */}
                <div className="space-y-6">
                    <div className="inline-block">
                        <h3 className="text-2xl font-bold text-white tracking-widest uppercase">
                            Nabi <span className="text-cyan-400">Shafin</span>
                        </h3>
                        <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-transparent rounded-full mt-1"></div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                        Crafting high-performance digital experiences with a focus on precision, efficiency, and stunning aesthetics. Let's build something extraordinary together.
                    </p>
                    <div className="flex items-center gap-3">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                        </span>
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Available for Hire</span>
                    </div>
                </div>

                {/* Quick Navigation Segment */}
                <div className="space-y-6">
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm">Navigation</h4>
                    <ul className="space-y-3">
                        <FooterLink href="#home" label="Home" />
                        <FooterLink href="#AboutMe" label="Story" />
                        <FooterLink href="#Educations" label="Education" />
                        <FooterLink href="#projects" label="Portfolio" />
                        <FooterLink href="#contact" label="Hire Me" />
                    </ul>
                </div>

                {/* Specializations Segment */}
                <div className="space-y-6">
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm">Expertise</h4>
                    <ul className="space-y-3">
                        <li className="text-slate-500 text-sm hover:text-cyan-400 transition-colors">Frontend Architecture</li>
                        <li className="text-slate-500 text-sm hover:text-cyan-400 transition-colors">Full-Stack Development</li>
                        <li className="text-slate-500 text-sm hover:text-cyan-400 transition-colors">REST API Design</li>
                        <li className="text-slate-500 text-sm hover:text-cyan-400 transition-colors">Performance Optimization</li>
                        <li className="text-slate-500 text-sm hover:text-cyan-400 transition-colors">UI/UX Strategy</li>
                    </ul>
                </div>

                {/* Connect Segment */}
                <div className="space-y-6">
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm">Connect</h4>
                    <div className="space-y-4">
                        <a href="mailto:shafin21215@gmail.com" className="block text-slate-400 hover:text-cyan-400 text-sm transition-colors font-mono">
                            shafin21215@gmail.com
                        </a>
                        <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-widest">
                            Based in Cumilla, Bangladesh<br/>
                            Working Remotely Worldwide
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <SocialIcon href="https://linkedin.com/in/nabi-shafin" icon={<svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>} />
                            <SocialIcon href="https://github.com/nabishafin" icon={<svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright & Tech Stack Information */}
            <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-slate-600 text-xs font-mono tracking-tight text-center md:text-left">
                    © 2025 Nabi Shafin. All rights reserved. <span className="hidden sm:inline">Handcrafted with passion.</span>
                </p>
                <div className="flex items-center gap-6">
                    <span className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-bold">Built With</span>
                    <div className="flex items-center gap-4 text-slate-500">
                        <TechBadge label="Next.js" />
                        <TechBadge label="Tailwind" />
                        <TechBadge label="MongoDB" />
                        <TechBadge label="Framer" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterLink = ({ href, label }) => (
    <li>
        <a 
            href={href} 
            className="text-slate-500 text-sm hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group"
        >
            <span className="h-[1px] w-0 bg-cyan-400 group-hover:w-3 transition-all duration-300"></span>
            {label}
        </a>
    </li>
);

const SocialIcon = ({ href, icon }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-3 bg-slate-800/30 text-slate-400 border border-slate-800 rounded-xl hover:bg-cyan-500 hover:text-[#171717] hover:border-cyan-400 transition-all duration-300"
    >
        {icon}
    </a>
);

const TechBadge = ({ label }) => (
    <span className="text-[10px] font-mono text-slate-500 border border-slate-800/50 px-2 py-1 rounded hover:text-cyan-400 hover:border-cyan-400/50 transition-all cursor-default">
        {label}
    </span>
);

export default Footer;

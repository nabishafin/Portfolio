'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseOutline } from 'react-icons/io5';
import { HiFire } from 'react-icons/hi';

const WelcomeToast = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after 2 seconds, but only once per session
        const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcome');
        
        if (!hasSeenWelcome) {
            const timer = setTimeout(() => {
                setIsVisible(true);
                sessionStorage.setItem('hasSeenWelcome', 'true');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                    className="fixed bottom-8 right-8 z-[100] max-w-sm w-full md:w-[320px]"
                >
                    <div className="relative overflow-hidden bg-[#1c1c1c]/90 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        {/* Background subtle glow */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-400/10 blur-3xl rounded-full"></div>
                        
                        <div className="flex gap-4 items-start relative z-10">
                            <div className="p-3 bg-cyan-400/10 rounded-xl border border-cyan-400/20 text-cyan-400 flex-shrink-0">
                                <HiFire size={24} className="animate-pulse" />
                            </div>
                            
                            <div className="flex-1 pr-6">
                                <h4 className="text-white font-bold text-lg mb-1 leading-tight">Welcome to My World!</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Hi, I'm <span className="text-cyan-400 font-semibold text-xs uppercase tracking-widest">Nabi Shafin</span>. 
                                    I build professional & creative web solutions. Feel free to explore!
                                </p>
                            </div>

                            <button 
                                onClick={() => setIsVisible(false)}
                                className="absolute top-0 right-0 p-1 text-slate-500 hover:text-cyan-400 transition-colors"
                            >
                                <IoCloseOutline size={22} />
                            </button>
                        </div>

                        {/* Interactive bar at bottom */}
                        <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">Live Portfolio v2.0</span>
                            <button 
                                onClick={() => setIsVisible(false)}
                                className="text-[11px] font-bold text-cyan-400/80 hover:text-cyan-400 uppercase tracking-widest transition-all"
                            >
                                Let's go
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WelcomeToast;

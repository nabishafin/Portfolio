'use client';
import React from 'react';
import { motion } from 'framer-motion';

const RoutineCode = () => {
    return (
        <section className="flex justify-center w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 my-10 relative z-10">
            <motion.div 
                className="w-full bg-[#1c1c1c] rounded-2xl border border-[#2d3748] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden font-mono text-base md:text-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Window Header */}
                <div className="flex items-center px-4 py-3 bg-[#232323] border-b border-[#2d3748]">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 -ml-8 text-center text-slate-400 text-xs">
                        routine.js
                    </div>
                </div>
                
                {/* Code Body */}
                <div className="p-6 sm:p-8 overflow-x-auto text-slate-300">
                    <pre className="flex flex-col gap-1.5 leading-relaxed">
                        <code><span className="text-yellow-500">{"// JavaScript"}</span></code>
                        <code><span className="text-sky-400">const</span> <span className="text-green-400">Routine</span> <span className="text-slate-300">= () =&gt; {"{"}</span></code>
                        <code>  <span className="text-purple-400">console</span><span className="text-slate-300">.</span><span className="text-sky-400">log</span><span className="text-slate-300">(</span><span className="text-orange-300">"Eat"</span><span className="text-slate-300">);</span></code>
                        <code>  <span className="text-purple-400">console</span><span className="text-slate-300">.</span><span className="text-sky-400">log</span><span className="text-slate-300">(</span><span className="text-orange-300">"Code"</span><span className="text-slate-300">);</span></code>
                        <code>  <span className="text-purple-400">console</span><span className="text-slate-300">.</span><span className="text-sky-400">log</span><span className="text-slate-300">(</span><span className="text-orange-300">"Sleep"</span><span className="text-slate-300">);</span></code>
                        <code>  <span className="text-purple-400">console</span><span className="text-slate-300">.</span><span className="text-sky-400">log</span><span className="text-slate-300">(</span><span className="text-orange-300">"Repeat()"</span><span className="text-slate-300">);</span></code>
                        <code><span className="text-slate-300">{"}"}</span></code>
                    </pre>
                </div>
            </motion.div>
        </section>
    );
};

export default RoutineCode;

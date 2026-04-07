'use client';
import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="flex flex-col items-center bg-transparent py-16 px-6 sm:px-8 w-full max-w-6xl mx-auto text-white gap-12">
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">Contact <span className="text-cyan-400">Me</span></h2>
                <p className="text-lg text-slate-400 max-w-xl mx-auto">If you have an opportunity or just want to say hello, feel free to reach out. I'll try my best to get back to you!</p>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch justify-center mt-4">
                
                {/* Left Side: Contact Information & Socials */}
                <div className="flex flex-col justify-center gap-8 lg:w-1/2 p-4 lg:p-8">
                    <div className="text-lg text-slate-300 space-y-6">
                        <div className="flex flex-col gap-1">
                            <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">Name</span>
                            <span className="text-xl font-semibold text-slate-100">Nabi Shafin</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">Location</span>
                            <span className="text-xl font-semibold text-slate-100">Comilla, Bangladesh</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">Phone</span>
                            <span className="text-xl font-semibold text-slate-100">+8801616539735</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                        <a href="https://www.linkedin.com/in/nabi-shafin/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1c1c1c] text-slate-300 border border-slate-700/50 rounded-full hover:bg-cyan-400 hover:text-[#171717] hover:border-cyan-400 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
                        </a>
                        <a href="https://github.com/nabishafin" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1c1c1c] text-slate-300 border border-slate-700/50 rounded-full hover:bg-cyan-400 hover:text-[#171717] hover:border-cyan-400 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                        </a>
                        <a href="mailto:shafin21215@gmail.com" className="p-3 bg-[#1c1c1c] text-slate-300 border border-slate-700/50 rounded-full hover:bg-cyan-400 hover:text-[#171717] hover:border-cyan-400 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
                        </a>
                    </div>
                </div>

                {/* Right Side: Professional Form */}
                <div className="w-full lg:w-1/2 bg-[#1c1c1c] p-8 md:p-12 rounded-[2rem] shadow-2xl relative z-10 border border-[#2d3748]/30">
                    <form className="flex flex-col gap-10">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="w-full bg-transparent border-b border-slate-600 focus:border-cyan-400 text-slate-200 placeholder-slate-400 pb-3 outline-none transition-colors"
                        />
                        <input 
                            type="email" 
                            placeholder="E-Mail I.D." 
                            className="w-full bg-transparent border-b border-slate-600 focus:border-cyan-400 text-slate-200 placeholder-slate-400 pb-3 outline-none transition-colors"
                        />
                        <textarea 
                            placeholder="Enter message" 
                            rows="4" 
                            className="w-full bg-transparent border-b border-slate-600 focus:border-cyan-400 text-slate-200 placeholder-slate-400 pb-3 outline-none transition-colors resize-y"
                        ></textarea>
                        
                        <button 
                            type="submit" 
                            className="w-full max-w-[200px] mt-4 self-start bg-[#171717] border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#171717] font-bold tracking-wide py-4 px-10 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,242,254,0.15)] hover:shadow-[0_0_25px_rgba(0,242,254,0.3)] hover:-translate-y-1 transition-all duration-300 group relative"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <span>Submit</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="transition-transform group-hover:translate-x-1" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

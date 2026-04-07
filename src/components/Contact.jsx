'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMsg, setErrorMsg] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMsg(data.error || 'Something went wrong.');
            }
        } catch (err) {
            setStatus('error');
            setErrorMsg('Network error. Please try again.');
        }
    };

    return (
        <section id="contact" className="flex flex-col items-center bg-transparent py-20 px-6 sm:px-8 w-full max-w-6xl mx-auto text-white gap-12">
            <div className="text-center mb-4">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
                >
                    Get In <span className="text-cyan-400">Touch</span>
                </motion.h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    I'm currently looking for new opportunities and my inbox is always open. 
                    Whether you have a question or just want to say hi, I'll do my best to get back to you!
                </p>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch justify-center">
                
                {/* Left Side: Enhanced Contact Info Card */}
                <div className="flex flex-col lg:w-5/12 bg-[#1c1c1c] p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative border border-[#2d3748]/30 justify-between">
                    <div className="space-y-12">
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                            </span>
                            <span className="text-sm font-mono text-cyan-400 uppercase tracking-wider">Available for Opportunities</span>
                        </div>

                        <div className="space-y-8">
                            <ContactItem label="Name" value="Nabi Shafin" />
                            <ContactItem label="Email" value="shafin21215@gmail.com" />
                            <ContactItem label="Location" value="Cumilla, Bangladesh" />
                            <ContactItem label="Phone" value="+880 1616 539735" />
                        </div>
                    </div>

                    <div className="flex items-center gap-5 mt-12">
                        <SocialBtn href="https://linkedin.com/in/nabi-shafin" icon={<svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>} />
                        <SocialBtn href="https://github.com/nabishafin" icon={<svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>} />
                        <SocialBtn href="mailto:shafin21215@gmail.com" icon={<svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>} />
                    </div>
                </div>

                {/* Right Side: Enhanced Form */}
                <div className="w-full lg:w-7/12 bg-[#1c1c1c] p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative border border-[#2d3748]/30">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                        <FormInput 
                            type="text" 
                            name="name"
                            placeholder="Full Name" 
                            value={formData.name}
                            onChange={(v) => setFormData({...formData, name: v})}
                            required
                        />
                        <FormInput 
                            type="email" 
                            name="email"
                            placeholder="E-Mail Address" 
                            value={formData.email}
                            onChange={(v) => setFormData({...formData, email: v})}
                            required
                        />
                        <div className="space-y-2">
                            <span className="text-xs font-mono text-cyan-500/50 uppercase ml-1">Message</span>
                            <textarea 
                                placeholder="Write something here..." 
                                rows="5" 
                                className="w-full bg-[#171717] border border-slate-700/50 rounded-2xl p-5 focus:border-cyan-400 text-slate-100 placeholder-slate-500 outline-none transition-all duration-300 resize-none hover:border-slate-600"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                required
                            ></textarea>
                        </div>
                        
                        <div className="flex flex-col items-start gap-4">
                            <button 
                                type="submit" 
                                disabled={status === 'loading'}
                                className="w-full sm:w-auto min-w-[200px] bg-cyan-500 hover:bg-cyan-400 text-[#171717] disabled:opacity-50 disabled:cursor-not-allowed font-bold tracking-wide py-4 px-10 rounded-2xl shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                {status === 'loading' ? (
                                    <span className="h-5 w-5 border-2 border-[#171717] border-t-transparent rounded-full animate-spin"></span>
                                ) : (
                                    <>
                                        Submit
                                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>
                                    </>
                                )}
                            </button>

                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-cyan-400 font-mono text-sm">
                                        ✨ Message sent successfully! I'll get back to you soon.
                                    </motion.p>
                                )}
                                {status === 'error' && (
                                    <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-red-400 font-mono text-sm">
                                        ❌ {errorMsg}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

const ContactItem = ({ label, value }) => (
    <div className="group">
        <span className="block text-cyan-400 font-mono text-xs tracking-widest uppercase mb-1">{label}</span>
        <span className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">{value}</span>
    </div>
);

const FormInput = ({ label, value, onChange, ...props }) => (
    <div className="space-y-1">
        <span className="text-xs font-mono text-cyan-500/50 uppercase ml-1">{props.placeholder}</span>
        <input 
            {...props}
            className="w-full bg-[#171717] border border-slate-700/50 rounded-2xl p-5 focus:border-cyan-400 text-slate-100 placeholder-slate-600 outline-none transition-all duration-300 hover:border-slate-600"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
);

const SocialBtn = ({ href, icon }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-4 bg-[#171717] text-slate-400 border border-slate-800 rounded-2xl hover:bg-cyan-500 hover:text-[#171717] hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 shadow-lg"
    >
        {icon}
    </a>
);

export default Contact;

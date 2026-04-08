'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';

const Dashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);

    const [form, setForm] = useState({
        name: '',
        description: '',
        liveSite: '',
        githubClient: '',
        githubServer: '',
        technologies: '',
        image: ''
    });

    useEffect(() => {
        const savedKey = localStorage.getItem('admin_secret');
        if (savedKey) {
            setIsLoggedIn(true);
            fetchProjects();
        }
    }, []);

    const fetchProjects = async () => {
        setIsLoading(true);
        setFetchError(null);
        try {
            const res = await fetch('/api/projects');
            const data = await res.json();
            // Guard: API may return an error object if DB is not connected
            if (Array.isArray(data)) {
                setProjects(data);
            } else {
                setProjects([]);
                setFetchError(data.error || 'Failed to load projects');
            }
        } catch (err) {
            setProjects([]);
            setFetchError('Network error — could not reach the API');
            console.error('Failed to fetch:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem('admin_secret', password);
        setIsLoggedIn(true);
        fetchProjects();
    };

    const handleAction = async (method, id = '', body = null) => {
        const key = localStorage.getItem('admin_secret');
        const url = id ? `/api/projects/${id}` : '/api/projects';
        
        try {
            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${key}`
                },
                body: body ? JSON.stringify(body) : null
            });
            
            if (res.status === 401) {
                alert('Invalid Secret Key');
                localStorage.removeItem('admin_secret');
                setIsLoggedIn(false);
                return;
            }

            if (res.ok) {
                fetchProjects();
                setIsFormOpen(false);
                setEditingProject(null);
                setForm({ name: '', description: '', liveSite: '', githubClient: '', githubServer: '', technologies: '', image: '' });
            }
        } catch (err) {
            console.error('Action failed:', err);
        }
    };

    const openEdit = (project) => {
        setEditingProject(project);
        setForm({
            ...project,
            technologies: project.technologies.join(', ')
        });
        setIsFormOpen(true);
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-[#171717] flex items-center justify-center p-6">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#1c1c1c] p-8 rounded-3xl border border-cyan-400/30 w-full max-w-md shadow-2xl"
                >
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 mb-8 transition-colors text-sm font-mono"
                    >
                        <HiArrowLeft size={16} /> Back to Home
                    </Link>
                    <h1 className="text-3xl font-bold text-white mb-6 text-center">Admin Access</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input 
                            type="password" 
                            placeholder="Enter Secret Key" 
                            className="w-full bg-[#111] border border-slate-700 p-4 rounded-xl text-white focus:border-cyan-400 outline-none transition-all"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-[#171717] font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95">
                            Enter Dashboard
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#111] text-slate-300 p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">Project Dashboard</h1>
                        <p className="text-slate-500 font-mono">Manage your dynamic portfolio content</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Link 
                            href="/" 
                            className="bg-transparent border border-slate-700 hover:border-cyan-400/50 hover:text-cyan-400 px-6 py-3 rounded-full font-mono text-sm transition-all flex items-center gap-2"
                        >
                            <HiArrowLeft size={16} /> Home
                        </Link>
                        <button 
                            onClick={() => setIsFormOpen(true)}
                            className="bg-cyan-500 hover:bg-cyan-400 text-[#171717] px-6 py-3 rounded-full font-bold shadow-lg transition-all"
                        >
                            + Add Project
                        </button>
                        <button 
                            onClick={() => { localStorage.removeItem('admin_secret'); setIsLoggedIn(false); }}
                            className="bg-transparent border border-slate-700 hover:border-red-500/50 hover:text-red-500 px-6 py-3 rounded-full font-mono text-sm transition-all"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {fetchError && (
                    <div className="bg-red-900/20 border border-red-500/30 text-red-400 p-6 rounded-2xl mb-6 font-mono text-sm">
                        ❌ DB Error: {fetchError} — Please check your MONGODB_URI in .env.local
                    </div>
                )}

                {isLoading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-cyan-500"></div>
                    </div>
                ) : projects.length === 0 && !fetchError ? (
                    <div className="text-center py-20 text-slate-600 font-mono">
                        No projects yet. Click "+ Add Project" to get started.
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {projects.map(project => (
                            <div key={project._id} className="bg-[#1c1c1c] border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
                                <img src={project.image} alt="" className="w-24 h-24 rounded-xl object-cover border border-slate-700" />
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                                    <p className="text-sm text-slate-500 line-clamp-2 max-w-xl">{project.description}</p>
                                </div>
                                <div className="flex gap-3">
                                    <button 
                                        onClick={() => openEdit(project)}
                                        className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg text-sm font-bold transition-all"
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        onClick={() => { if(confirm('Delete project?')) handleAction('DELETE', project._id) }}
                                        className="bg-red-900/20 text-red-500 hover:bg-red-900/40 px-4 py-2 rounded-lg text-sm font-bold transition-all border border-red-500/20"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal Form */}
            <AnimatePresence>
                {isFormOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-sm bg-black/50">
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className="bg-[#1c1c1c] border border-cyan-500/30 p-8 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
                        >
                            <button 
                                onClick={() => { setIsFormOpen(false); setEditingProject(null); }}
                                className="absolute top-6 right-6 text-slate-500 hover:text-white"
                            >
                                ✕
                            </button>
                            <h2 className="text-2xl font-bold text-white mb-8">{editingProject ? 'Edit Project' : 'Add New Project'}</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput label="Project Name *" value={form.name} onChange={v => setForm({...form, name: v})} />
                                <FormInput label="Image URL" value={form.image} onChange={v => setForm({...form, image: v})} />
                                <FormInput label="Live Site URL" value={form.liveSite} onChange={v => setForm({...form, liveSite: v})} />
                                <FormInput label="GitHub — Client Side" value={form.githubClient} onChange={v => setForm({...form, githubClient: v})} />
                                <FormInput label="GitHub — Server Side" value={form.githubServer} onChange={v => setForm({...form, githubServer: v})} />
                                <FormInput label="Technologies (comma separated)" value={form.technologies} onChange={v => setForm({...form, technologies: v})} />
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-mono uppercase text-slate-500 mb-2 pl-1">Description</label>
                                    <textarea 
                                        className="w-full bg-[#111] border border-slate-700 p-4 rounded-xl text-white focus:border-cyan-400 outline-none h-32"
                                        value={form.description}
                                        onChange={e => setForm({...form, description: e.target.value})}
                                    ></textarea>
                                </div>
                            </div>

                            <button 
                                onClick={() => {
                                    const body = { ...form, technologies: form.technologies.split(',').map(t => t.trim()) };
                                    if(editingProject) handleAction('PUT', editingProject._id, body);
                                    else handleAction('POST', '', body);
                                }}
                                className="w-full bg-cyan-500 hover:bg-cyan-400 text-[#171717] font-bold py-4 rounded-xl mt-8 transition-all shadow-lg shadow-cyan-500/20"
                            >
                                {editingProject ? 'Update Project' : 'Publish Project'}
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FormInput = ({ label, value, onChange, type="text" }) => (
    <div>
        <label className="block text-xs font-mono uppercase text-slate-500 mb-2 pl-1">{label}</label>
        <input 
            type={type} 
            className="w-full bg-[#111] border border-slate-700 p-4 rounded-xl text-white focus:border-cyan-400 outline-none transition-all"
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    </div>
);

export default Dashboard;

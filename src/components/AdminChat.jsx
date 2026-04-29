'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { IoSend } from 'react-icons/io5';

const AdminChat = () => {
    const [sessions, setSessions] = useState([]);
    const [activeSession, setActiveSession] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const messagesEndRef = useRef(null);

    // Fetch active sessions
    const fetchSessions = async () => {
        try {
            const key = localStorage.getItem('admin_secret');
            const res = await fetch('/api/chat/sessions', {
                headers: { 'Authorization': `Bearer ${key}` }
            });
            if (res.ok) {
                const data = await res.json();
                setSessions(data);
            }
        } catch (err) {
            console.error('Failed to fetch sessions:', err);
        }
    };

    // Fetch messages for active session
    const fetchMessages = async () => {
        if (!activeSession) return;
        try {
            const key = localStorage.getItem('admin_secret');
            const res = await fetch(`/api/chat?sessionId=${activeSession}`, {
                headers: { 'Authorization': `Bearer ${key}` }
            });
            if (res.ok) {
                const data = await res.json();
                setMessages(data);
            }
        } catch (err) {
            console.error('Failed to fetch messages:', err);
        }
    };

    // Polling intervals
    useEffect(() => {
        fetchSessions();
        const interval = setInterval(fetchSessions, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!activeSession) return;
        fetchMessages();
        const interval = setInterval(fetchMessages, 3000);
        return () => clearInterval(interval);
    }, [activeSession]);

    // Auto-scroll to bottom
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!inputText.trim() || !activeSession) return;

        const optimisticMsg = {
            _id: Date.now().toString(),
            text: inputText,
            sender: 'admin',
            createdAt: new Date().toISOString()
        };

        setMessages([...messages, optimisticMsg]);
        setInputText('');

        try {
            const key = localStorage.getItem('admin_secret');
            await fetch('/api/chat', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${key}`
                },
                body: JSON.stringify({
                    sessionId: activeSession,
                    text: optimisticMsg.text,
                    sender: 'admin'
                })
            });
            fetchMessages(); // Refresh exact state
            fetchSessions(); // Refresh latest message snippet
        } catch (err) {
            console.error('Failed to send message:', err);
        }
    };

    return (
        <div className="flex h-[600px] bg-[#1c1c1c] border border-slate-800 rounded-2xl overflow-hidden mt-6">
            {/* Sidebar (Sessions) */}
            <div className="w-1/3 border-r border-slate-800 flex flex-col bg-[#171717]">
                <div className="p-4 border-b border-slate-800 bg-[#232323]">
                    <h3 className="text-white font-bold tracking-wide">Active Chats</h3>
                </div>
                <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
                    {sessions.length === 0 ? (
                        <div className="p-6 text-center text-slate-500 text-sm">No active chats</div>
                    ) : (
                        sessions.map((session) => (
                            <div 
                                key={session._id} 
                                onClick={() => setActiveSession(session._id)}
                                className={`p-4 border-b border-slate-800/50 cursor-pointer transition-colors ${
                                    activeSession === session._id ? 'bg-[#2d3748]' : 'hover:bg-[#232323]'
                                }`}
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="text-sm font-bold text-slate-200 truncate">
                                        Visitor {(session._id || "Unknown").substring(0, 6)}...
                                    </h4>
                                    {session.unreadCount > 0 && (
                                        <span className="bg-cyan-500 text-[#171717] text-[10px] font-bold px-2 py-0.5 rounded-full">
                                            {session.unreadCount}
                                        </span>
                                    )}
                                </div>
                                <p className="text-xs text-slate-400 truncate">{session.lastMessage}</p>
                                <span className="text-[10px] text-slate-500 mt-2 block">
                                    {new Date(session.lastMessageAt).toLocaleString()}
                                </span>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="w-2/3 flex flex-col bg-[#1c1c1c]">
                {!activeSession ? (
                    <div className="flex-1 flex items-center justify-center text-slate-500">
                        Select a chat to start messaging
                    </div>
                ) : (
                    <>
                        <div className="p-4 border-b border-slate-800 bg-[#232323]">
                            <h3 className="text-white font-bold">Chatting with Visitor {(activeSession || "Unknown").substring(0, 6)}...</h3>
                        </div>
                        
                        <div className="flex-1 p-6 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
                            {messages.map((msg) => (
                                <div key={msg._id} className={`flex flex-col ${msg.sender === 'admin' ? 'items-end' : 'items-start'}`}>
                                    <div className={`max-w-[70%] p-3 rounded-2xl text-sm ${
                                        msg.sender === 'admin' 
                                            ? 'bg-cyan-500 text-[#171717] rounded-br-none font-medium' 
                                            : 'bg-[#2d3748] text-white rounded-bl-none'
                                    }`}>
                                        {msg.text}
                                    </div>
                                    <span className="text-[10px] text-slate-500 mt-1 mx-1">
                                        {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <form onSubmit={sendMessage} className="p-4 bg-[#232323] border-t border-slate-800 flex gap-3">
                            <input
                                type="text"
                                placeholder="Type your reply..."
                                className="flex-1 bg-[#171717] text-white rounded-xl px-4 py-3 outline-none border border-slate-700 focus:border-cyan-400 transition-colors"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            />
                            <button 
                                type="submit"
                                disabled={!inputText.trim()}
                                className="px-6 rounded-xl bg-cyan-500 text-[#171717] font-bold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-400 transition-colors"
                            >
                                Send <IoSend className="ml-2" />
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default AdminChat;

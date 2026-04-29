'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChatbubblesOutline, IoCloseOutline, IoSend } from 'react-icons/io5';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [sessionId, setSessionId] = useState(null);
    const [unreadCount, setUnreadCount] = useState(0);
    const messagesEndRef = useRef(null);

    // Initialize session ID
    useEffect(() => {
        let storedSession = localStorage.getItem('chat_session_id');
        if (!storedSession) {
            storedSession = 'sess_' + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
            localStorage.setItem('chat_session_id', storedSession);
        }
        setSessionId(storedSession);
    }, []);

    // Fetch messages
    const fetchMessages = async () => {
        if (!sessionId) return;
        try {
            const res = await fetch(`/api/chat?sessionId=${sessionId}`);
            if (res.ok) {
                const data = await res.json();
                setMessages(data);
                
                if (!isOpen) {
                    const unread = data.filter(m => m.sender === 'admin' && !m.isRead).length;
                    setUnreadCount(unread);
                } else {
                    setUnreadCount(0);
                }
            }
        } catch (err) {
            console.error('Failed to fetch messages:', err);
        }
    };

    // Polling
    useEffect(() => {
        if (!sessionId) return;
        fetchMessages();
        const interval = setInterval(fetchMessages, 3000); // Poll every 3 seconds
        return () => clearInterval(interval);
    }, [sessionId, isOpen]);

    // Auto-scroll to bottom
    useEffect(() => {
        if (isOpen && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isOpen]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!inputText.trim() || !sessionId) return;

        const optimisticMsg = {
            _id: Date.now().toString(),
            text: inputText,
            sender: 'user',
            createdAt: new Date().toISOString()
        };

        setMessages([...messages, optimisticMsg]);
        setInputText('');

        try {
            await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sessionId,
                    text: optimisticMsg.text,
                    sender: 'user'
                })
            });
            fetchMessages(); // Refresh to get exact timestamp and ID
        } catch (err) {
            console.error('Failed to send message:', err);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="absolute bottom-16 right-0 w-[320px] sm:w-[350px] bg-[#1c1c1c] border border-cyan-400/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[450px]"
                    >
                        {/* Header */}
                        <div className="bg-[#232323] p-4 border-b border-slate-700 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-cyan-900 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/50">
                                        N
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#232323]"></div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">Nabi Shafin</h4>
                                    <p className="text-slate-400 text-xs flex items-center gap-1">
                                        Replies usually within a day
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                                <IoCloseOutline size={24} />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#171717] scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                            {messages.length === 0 ? (
                                <div className="text-center text-slate-500 text-sm mt-10">
                                    <IoChatbubblesOutline size={40} className="mx-auto mb-2 opacity-50" />
                                    <p>Send a message to start chatting!</p>
                                </div>
                            ) : (
                                messages.map((msg) => (
                                    <div key={msg._id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                                            msg.sender === 'user' 
                                                ? 'bg-cyan-500 text-[#171717] rounded-br-none font-medium' 
                                                : 'bg-[#2d3748] text-white rounded-bl-none'
                                        }`}>
                                            {msg.text}
                                        </div>
                                        <span className="text-[10px] text-slate-500 mt-1 mx-1">
                                            {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                ))
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={sendMessage} className="p-3 bg-[#232323] border-t border-slate-700 flex gap-2">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="flex-1 bg-[#171717] text-white text-sm rounded-full px-4 py-2 outline-none border border-slate-600 focus:border-cyan-400 transition-colors"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            />
                            <button 
                                type="submit"
                                disabled={!inputText.trim()}
                                className="w-10 h-10 rounded-full bg-cyan-500 text-[#171717] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-400 transition-colors"
                            >
                                <IoSend size={16} className="ml-1" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                    setUnreadCount(0);
                }}
                className="w-14 h-14 bg-cyan-500 text-[#171717] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 hover:bg-cyan-400 transition-all relative"
            >
                {isOpen ? <IoCloseOutline size={28} /> : <IoChatbubblesOutline size={28} />}
                
                {!isOpen && unreadCount > 0 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce border-2 border-[#171717]">
                        {unreadCount}
                    </div>
                )}
            </button>
        </div>
    );
};

export default ChatWidget;

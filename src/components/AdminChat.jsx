'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { IoSend, IoTrashOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    background: '#1c1c1c',
    color: '#fff',
    customClass: {
        popup: 'border border-cyan-500/30 rounded-xl shadow-2xl font-sans text-sm'
    }
});

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

    const handleDeleteMessage = async (messageId) => {
        try {
            const key = localStorage.getItem('admin_secret');
            const res = await fetch(`/api/chat?messageId=${messageId}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${key}` }
            });
            if (res.ok) {
                setMessages((prev) => prev.filter((m) => m._id !== messageId));
                fetchSessions();
                Toast.fire({
                    icon: 'success',
                    title: 'Message deleted'
                });
            } else {
                Toast.fire({
                    icon: 'error',
                    title: 'Failed to delete message'
                });
            }
        } catch (err) {
            console.error('Failed to delete message:', err);
            Toast.fire({
                icon: 'error',
                title: 'Error deleting message'
            });
        }
    };

    const handleDeleteSession = async (sessionId, e) => {
        if (e) e.stopPropagation();
        try {
            const key = localStorage.getItem('admin_secret');
            const res = await fetch(`/api/chat?sessionId=${sessionId}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${key}` }
            });
            if (res.ok) {
                if (activeSession === sessionId) {
                    setActiveSession(null);
                    setMessages([]);
                }
                fetchSessions();
                Toast.fire({
                    icon: 'success',
                    title: 'Conversation deleted'
                });
            } else {
                Toast.fire({
                    icon: 'error',
                    title: 'Failed to delete conversation'
                });
            }
        } catch (err) {
            console.error('Failed to delete session:', err);
            Toast.fire({
                icon: 'error',
                title: 'Error deleting conversation'
            });
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
                                className={`p-4 border-b border-slate-800/50 cursor-pointer transition-colors group/session flex justify-between items-start gap-2 ${
                                    activeSession === session._id ? 'bg-[#2d3748]' : 'hover:bg-[#232323]'
                                }`}
                            >
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="text-sm font-bold text-slate-200 truncate">
                                            {session.userName || `Visitor ${(session._id || "Unknown").substring(0, 6)}...`}
                                        </h4>
                                        {session.unreadCount > 0 && (
                                            <span className="bg-cyan-500 text-[#171717] text-[10px] font-bold px-2 py-0.5 rounded-full ml-1 flex-none">
                                                {session.unreadCount}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-xs text-slate-400 truncate">{session.lastMessage}</p>
                                    <span className="text-[10px] text-slate-500 mt-2 block">
                                        {new Date(session.lastMessageAt).toLocaleString()}
                                    </span>
                                </div>
                                <button
                                    onClick={(e) => handleDeleteSession(session._id, e)}
                                    className="opacity-0 group-hover/session:opacity-100 transition-opacity text-slate-500 hover:text-red-400 p-1 rounded hover:bg-slate-800/50"
                                    title="Delete session"
                                >
                                    <IoTrashOutline size={16} />
                                </button>
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
                        <div className="p-4 border-b border-slate-800 bg-[#232323] flex justify-between items-center">
                            <h3 className="text-white font-bold truncate pr-4">
                                Chatting with {sessions.find(s => s._id === activeSession)?.userName || `Visitor ${(activeSession || "Unknown").substring(0, 6)}...`}
                            </h3>
                            <button
                                onClick={() => handleDeleteSession(activeSession)}
                                className="text-red-400 hover:text-red-300 hover:bg-red-900/30 px-3 py-1.5 rounded-lg text-xs font-bold border border-red-500/20 flex items-center gap-1.5 transition-all flex-none"
                                title="Delete conversation"
                            >
                                <IoTrashOutline size={15} /> Delete Chat
                            </button>
                        </div>
                        
                        <div className="flex-1 p-6 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
                            {messages.map((msg) => (
                                <div key={msg._id} className={`flex flex-col group/msg ${msg.sender === 'admin' ? 'items-end' : 'items-start'}`}>
                                    <div className="flex items-center gap-2 max-w-[80%]">
                                        {msg.sender === 'admin' && (
                                            <button
                                                onClick={() => handleDeleteMessage(msg._id)}
                                                className="opacity-0 group-hover/msg:opacity-100 transition-opacity p-1.5 text-slate-500 hover:text-red-400 rounded hover:bg-slate-800/50"
                                                title="Delete message"
                                            >
                                                <IoTrashOutline size={14} />
                                            </button>
                                        )}
                                        <div className={`p-3 rounded-2xl text-sm ${
                                            msg.sender === 'admin' 
                                                ? 'bg-cyan-500 text-[#171717] rounded-br-none font-medium' 
                                                : 'bg-[#2d3748] text-white rounded-bl-none'
                                        }`}>
                                            {msg.text}
                                        </div>
                                        {msg.sender !== 'admin' && (
                                            <button
                                                onClick={() => handleDeleteMessage(msg._id)}
                                                className="opacity-0 group-hover/msg:opacity-100 transition-opacity p-1.5 text-slate-500 hover:text-red-400 rounded hover:bg-slate-800/50"
                                                title="Delete message"
                                            >
                                                <IoTrashOutline size={14} />
                                            </button>
                                        )}
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


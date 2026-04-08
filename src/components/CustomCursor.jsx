'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [clicks, setClicks] = useState([]);
    const [particles, setParticles] = useState([]);

    // Mouse coordinates
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth movement for the trail/ring
    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Ref to track last particle creation position
    const lastPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);

            // Smoke Particle Generation (Maximum Visibility)
            const dist = Math.hypot(e.clientX - lastPos.current.x, e.clientY - lastPos.current.y);
            if (dist > 8) { // Denser trail (every 8px)
                const id = Math.random();
                const newParticle = {
                    id,
                    x: e.clientX,
                    y: e.clientY,
                    size: Math.random() * 25 + 15,
                };
                // Increased particle count for a thick trail
                setParticles((prev) => [...prev.slice(-45), newParticle]); 
                lastPos.current = { x: e.clientX, y: e.clientY };

                // Longer lifetime for better trail persistence
                setTimeout(() => {
                    setParticles((prev) => prev.filter(p => p.id !== id));
                }, 1500);
            }
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = 
                target.tagName.toLowerCase() === 'button' || 
                target.tagName.toLowerCase() === 'a' || 
                target.closest('button') || 
                target.closest('a') ||
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.classList.contains('cursor-pointer');
            
            if (isClickable) setIsHovering(true);
        };

        const handleMouseOut = () => setIsHovering(false);

        const handleMouseDown = (e) => {
            setIsClicked(true);
            const id = Date.now();
            setClicks((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
            setTimeout(() => {
                setClicks((prev) => prev.filter(c => c.id !== id));
            }, 600);
        };

        const handleMouseUp = () => setIsClicked(false);

        const handleMouseLeaveWindow = () => setIsVisible(false);
        const handleMouseEnterWindow = () => setIsVisible(true);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseleave', handleMouseLeaveWindow);
        document.addEventListener('mouseenter', handleMouseEnterWindow);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseleave', handleMouseLeaveWindow);
            document.removeEventListener('mouseenter', handleMouseEnterWindow);
        };
    }, [mouseX, mouseY, isVisible]);

    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
        return null; // Disable on touch devices
    }

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* High-Visibility Smoke Trail */}
            <AnimatePresence>
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 0.8, scale: 0.3, y: 0 }}
                        animate={{ 
                            opacity: 0, 
                            scale: 4, 
                            y: -80, 
                            x: (Math.random() - 0.5) * 60 
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        // Gradient from Cyan to White for maximum "pop"
                        className="fixed top-0 left-0 rounded-full blur-2xl bg-gradient-to-tr from-cyan-400/40 via-cyan-200/20 to-white/10"
                        style={{
                            left: p.x,
                            top: p.y,
                            width: p.size,
                            height: p.size,
                            translateX: '-50%',
                            translateY: '-50%',
                        }}
                    />
                ))}
            </AnimatePresence>

            {/* Click Pulses */}
            <AnimatePresence>
                {clicks.map((click) => (
                    <motion.div
                        key={click.id}
                        initial={{ opacity: 0.8, scale: 0 }}
                        animate={{ opacity: 0, scale: 3 }}
                        exit={{ opacity: 0 }}
                        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                        style={{
                            left: click.x,
                            top: click.y,
                            translateX: '-50%',
                            translateY: '-50%',
                        }}
                    />
                ))}
            </AnimatePresence>

            {/* Core Dot (Primary) */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.9)]"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: isVisible ? 1 : 0,
                    scale: isHovering ? 0.4 : isClicked ? 1.4 : 1
                }}
            />

            {/* Aura Ring (Magnetic) */}
            <motion.div
                className="fixed top-0 left-0 rounded-full border-2"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: isHovering ? 75 : 40,
                    height: isHovering ? 75 : 40,
                    backgroundColor: isHovering ? 'rgba(34, 211, 238, 0.1)' : 'transparent',
                    borderColor: isHovering ? 'rgba(34, 211, 238, 0.95)' : 'rgba(34, 211, 238, 0.4)',
                    boxShadow: isHovering ? '0 0 30px rgba(34, 211, 238, 0.5), inset 0 0 15px rgba(34, 211, 238, 0.3)' : 'none',
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    width: { type: 'spring', stiffness: 250, damping: 18 },
                    height: { type: 'spring', stiffness: 250, damping: 18 },
                    backgroundColor: { duration: 0.2 },
                    borderColor: { duration: 0.2 },
                    boxShadow: { duration: 0.3 }
                }}
            >
                {/* Rotating Indicators */}
                {isHovering && (
                    <motion.div 
                        initial={{ opacity: 0, rotate: 0 }}
                        animate={{ opacity: 1, rotate: 180 }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="w-[2px] h-4 bg-cyan-400 absolute top-[-8px]"></div>
                        <div className="w-[2px] h-4 bg-cyan-400 absolute bottom-[-8px]"></div>
                        <div className="h-[2px] w-4 bg-cyan-400 absolute left-[-8px]"></div>
                        <div className="h-[2px] w-4 bg-cyan-400 absolute right-[-8px]"></div>
                        
                        <motion.div 
                            className="absolute w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_12px_#fff]"
                            style={{ 
                                top: '50%',
                                left: '50%',
                                margin: '-1.25px',
                                x: 38,
                            }}
                        />
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default CustomCursor;

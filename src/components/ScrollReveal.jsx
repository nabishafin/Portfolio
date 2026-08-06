'use client';
import React from 'react';
import { motion } from 'framer-motion';

/**
 * Modern & Overflow-Safe ScrollReveal Component
 * Prevents layout breaks and double-transformations while providing
 * smooth slide-in, scaling, and entrance effects.
 */
const ScrollReveal = ({ 
    children, 
    direction = 'up', // 'up' | 'right' | 'left' | 'scale'
    delay = 0, 
    duration = 0.6, 
    scaleStart = 0.96,
    distance = 30,
    className = "",
    once = true,
    amount = 0.15
}) => {
    const getInitialProps = () => {
        switch (direction) {
            case 'right':
                return { opacity: 0, x: distance, scale: scaleStart };
            case 'left':
                return { opacity: 0, x: -distance, scale: scaleStart };
            case 'up':
                return { opacity: 0, y: distance, scale: scaleStart };
            case 'scale':
                return { opacity: 0, scale: scaleStart };
            default:
                return { opacity: 0, y: distance, scale: scaleStart };
        }
    };

    return (
        <motion.div
            className={`w-full overflow-hidden ${className}`}
            initial={getInitialProps()}
            whileInView={{ 
                opacity: 1, 
                x: 0, 
                y: 0, 
                scale: 1 
            }}
            viewport={{ once, amount }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1.0],
            }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;

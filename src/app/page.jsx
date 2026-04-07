'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../components/Experience';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import SocialSidebar from '../components/SocialSidebar';
import RoutineCode from '../components/RoutineCode';
import WelcomeToast from '../components/WelcomeToast';

const Home = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className='text-slate-300 font-sans selection:bg-cyan-500 selection:text-white min-h-screen relative'>
            {/* Infinite Tech Grid Background */}
            <div className="fixed inset-0 bg-[#171717] bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none -z-10"></div>
            
            <Navbar></Navbar>

            {/* Clean Standard Flow */}
            <div className="relative z-10 flex flex-col gap-2 pb-4 overflow-hidden">
                <Banner></Banner>
                <RoutineCode />
                <AboutMe></AboutMe>
                <Experience />
                <Skills></Skills>
                <Education></Education>
                <ProjectsSection />
                <Contact></Contact>
            </div>
            
            {/* Global Floating Social Sidebar */}
            <SocialSidebar />
            
            {/* Session Welcome Message */}
            <WelcomeToast />
            
            <Footer></Footer>
        </div>
    );
};

export default Home;

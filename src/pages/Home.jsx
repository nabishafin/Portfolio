import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Education from '../components/Education';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-black via-purple-950 to-black'>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <ProjectsSection />
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
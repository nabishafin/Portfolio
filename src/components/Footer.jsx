import React from 'react';

const Footer = () => {
    return (
        <footer className="px-4 md:px-16 bg-gradient-to-r from-black via-purple-950 to-black text-white pt-12 pb-8">
            <div className="px-0 mx-auto lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

                {/* About Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Mahamodon Nabi Shafin</h3>
                    <p className="text-gray-400">
                        I’m a passionate Frontend Developer focused on creating responsive, user-friendly, and visually appealing websites. I enjoy turning ideas into reality using clean code and modern tools.
                    </p>
                </div>

                {/* Services */}
                <div className='ml-0 md:ml-16'>
                    <h4 className="text-lg font-semibold mb-4">Services</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-300">Web Development</a></li>
                        <li><a href="#" className="hover:text-gray-300">UI/UX Design</a></li>
                        <li><a href="#" className="hover:text-gray-300">Responsive Design</a></li>
                        <li><a href="#" className="hover:text-gray-300">Performance Optimization</a></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-300">Home</a></li>
                        <li><a href="#" className="hover:text-gray-300">Portfolio</a></li>
                        <li><a href="#" className="hover:text-gray-300">About</a></li>
                        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact Me</h4>
                    <ul className="space-y-2">
                        <li><a href="mailto:shafin21215@gmail.com" className="hover:text-gray-300">shafin21215@gmail.com</a></li>
                        <li><a href="https://www.linkedin.com/in/nabi-shafin/" target="_blank" rel="noreferrer" className="hover:text-gray-300">LinkedIn</a></li>
                        <li><a href="https://github.com/nabishafin" target="_blank" rel="noreferrer" className="hover:text-gray-300">GitHub</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
                © 2025 Mahamodon Nabi Shafin. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

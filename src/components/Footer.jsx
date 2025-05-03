import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-black via-purple-950 to-black text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

                {/* About Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Nostrix Creative</h3>
                    <p className="text-gray-400">
                        We’re a digital agency focused on web development, UI/UX design, graphics, and marketing. Crafting experiences that engage and convert.
                    </p>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Services</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-300">Web Development</a></li>
                        <li><a href="#" className="hover:text-gray-300">UI/UX Design</a></li>
                        <li><a href="#" className="hover:text-gray-300">Graphic Design</a></li>
                        <li><a href="#" className="hover:text-gray-300">Digital Marketing</a></li>
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
                    <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                    <ul className="space-y-2">
                        <li><a href="mailto:shafin21215@gmail.com" className="hover:text-gray-300">shafin21215@gmail.com</a></li>
                        <li><a href="https://www.linkedin.com/in/nabi-shafin/" target="_blank" className="hover:text-gray-300">LinkedIn</a></li>
                        <li><a href="https://github.com/nabishafin" target="_blank" className="hover:text-gray-300">GitHub</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
                © 2025 Nabi Shafin. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

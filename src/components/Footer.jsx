import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-lg">© 2025 Your Name. All rights reserved.</p>
                <div className="mt-4">
                    <a href="https://www.linkedin.com/in/nabi-shafin/" target="_blank" className="mx-4 hover:text-gray-400">
                        LinkedIn
                    </a>
                    <a href="https://github.com/nabishafin" target="_blank" className="mx-4 hover:text-gray-400">
                        GitHub
                    </a>
                    <a href="mailto:shafin21215@gmail.com" className="mx-4 hover:text-gray-400">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

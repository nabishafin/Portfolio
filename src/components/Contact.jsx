import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="flex flex-col items-center bg-gradient-to-r from-black via-purple-950 to-black p-6 sm:p-8 md:p-10 text-white gap-6">
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <p className="text-lg">If you want to hire me or just say hello, feel free to reach out!</p>

            {/* Personal Information Section */}
            <div className="text-lg">
                <p><strong>Name:</strong> Mahamodon Nabi Shafin</p>
                <p><strong>Location:</strong> Comilla, Bangladesh</p>
                <p><strong>Phone:</strong> +8801616539735</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-8 mt-6">
                {/* Email */}
                <div className="flex items-center gap-2">
                    <a
                        href="mailto:shafin21215@gmail.com"
                        className="flex items-center justify-center bg-purple-600 text-white px-4 py-2 rounded-md shadow-lg hover:bg-purple-500"
                    >
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/email.png" alt="Email" className="w-8 h-8" />
                        <span>Email Me</span>
                    </a>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center gap-4">
                    <a href="https://www.linkedin.com/in/nabi-shafin/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                    </a>
                    <a href="https://github.com/nabishafin" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" className="w-8 h-8" />
                    </a>
                    <a href="https://x.com/nabishafin" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter" className="w-8 h-8" />
                    </a>
                </div>
            </div>

            {/* Optionally, you can also add a contact form */}
            {/* <ContactForm /> */}
        </section>
    );
};

export default Contact;

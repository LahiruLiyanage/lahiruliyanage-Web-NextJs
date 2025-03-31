'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, User, FolderOpen, Mail, Github, Linkedin, Instagram, ChevronRight } from 'lucide-react';

const Footer = () => {
    // Animation variants for navbar
    const navbarVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.5
            }
        }
    };

    // Main navigation links
    const navigationLinks = [
        { name: 'Home', href: '/', icon: <Home size={20} /> },
        { name: 'About', href: '/about', icon: <User size={20} /> },
        { name: 'Projects', href: '/projects', icon: <FolderOpen size={20} /> },
        { name: 'Contact', href: '/contact', icon: <Mail size={20} /> }
    ];

    return (
        <>
            {/* Desktop Footer */}
            <motion.footer
                initial="hidden"
                animate="visible"
                variants={navbarVariants}
                className="bg-white border-t border-gray-200 mt-auto hidden md:block"
            >
                <div className="container mx-auto max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <Link href="/" className="text-xl font-bold text-sky-600 flex items-center">
                                Lahiru Liyanage<span className="text-yellow-500 dot font-bold">.</span>
                            </Link>
                            <p className="text-gray-600 mt-2 text-sm">Full Stack Developer & Former Project Architect</p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                            <div className="flex space-x-4">
                                {navigationLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-gray-600 hover:text-sky-600 text-sm flex items-center gap-1"
                                    >
                                        <ChevronRight size={14} />
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href="/contact"
                                className="bg-sky-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-sky-700 flex items-center gap-2 transition-colors"
                            >
                                <Mail size={16} />
                                Get in Touch
                            </Link>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 Lahiru Liyanage. All rights reserved.</p>

                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/LahiruLiyanage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-sky-600 transition-colors duration-300"
                                aria-label="GitHub Profile"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com/in/lahiruliyanage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-sky-600 transition-colors duration-300"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/lhliyanage/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-sky-600 transition-colors duration-300"
                                aria-label="Instagram Profile"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.footer>

            {/* Mobile Bottom Navigation Bar */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={navbarVariants}
                className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden"
            >
                <div className="flex justify-around items-center h-16">
                    {navigationLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-sky-600 transition-colors"
                        >
                            <div className="mb-1">{link.icon}</div>
                            <span className="text-xs">{link.name}</span>
                        </Link>
                    ))}
                </div>
            </motion.div>
        </>
    );
};

export default Footer;
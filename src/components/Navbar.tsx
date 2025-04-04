'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavigationItem } from '@/types';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Close mobile menu when route changes or on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Detect scroll for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    // Close menu when pathname changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Removed 'Contact' from navigation items since we have a dedicated 'Get in Touch' button
    const navItems: NavigationItem[] = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Me' },
        { href: '/projects', label: 'Projects' }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 shadow-sm py-3'
        }`}>
            <div className="container mx-auto max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className="text-xl sm:text-2xl md:text-3xl font-bold text-sky-600 flex items-center">
                        Lahiru Liyanage<span className="text-yellow-500 dot font-bold">.</span>
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                    {navItems.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                            <motion.div
                                key={item.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    href={item.href}
                                    className={`px-3 py-2 mx-1 rounded-md text-sm lg:text-base font-medium transition-all duration-300 relative group ${
                                        isActive
                                            ? 'text-sky-600'
                                            : 'text-gray-700 hover:text-sky-600'
                                    }`}
                                >
                                    {item.label}
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-sky-600 transform transition-transform duration-300 ${
                                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                    }`}></span>
                                </Link>
                            </motion.div>
                        );
                    })}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Link
                            href="/contact"
                            className="ml-4 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-sm lg:text-base transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            Get in Touch
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        onClick={toggleMenu}
                        className="p-2 rounded-md hover:bg-gray-100 focus:outline-none transition-colors"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation - Animated Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-white z-40 md:hidden flex flex-col pt-20"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Close button inside mobile menu */}
                        <div className="absolute top-4 right-4">
                            <button
                                onClick={closeMenu}
                                className="p-2 rounded-md hover:bg-gray-100 focus:outline-none transition-colors"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="px-4">
                            {navItems.map((item, index) => {
                                const isActive = pathname === item.href;
                                return (
                                    <motion.div
                                        key={item.href}
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className={`flex items-center px-4 py-4 rounded-lg my-2 transition-all duration-300 ${
                                                isActive
                                                    ? 'bg-sky-50 text-sky-600 font-medium border-l-4 border-sky-600'
                                                    : 'text-gray-700 hover:bg-gray-50 hover:border-l-4 hover:border-sky-300'
                                            }`}
                                            onClick={closeMenu}
                                        >
                                            <span className="text-lg">{item.label}</span>
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-4"
                            >
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center w-full bg-sky-600 text-white py-3 rounded-lg my-4"
                                    onClick={closeMenu}
                                >
                                    <span className="text-lg">Get in Touch</span>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Social links or additional content for mobile menu */}
                        <motion.div
                            className="mt-auto p-6 border-t border-gray-100 text-center text-gray-500 text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            © 2025 Lahiru Liyanage
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
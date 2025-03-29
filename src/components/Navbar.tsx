'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavigationItem } from '@/types';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
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

    const navItems: NavigationItem[] = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-10 py-3 flex justify-between items-center max-w-screen-2xl">
                <Link href="/" className="text-xl sm:text-2xl font-bold text-primary text-sky-600">
                    Lahiru Liyanage<span className="text-yellow-500 font-bold">.</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1 lg:space-x-6">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-3 py-2 rounded-md text-sm lg:text-base transition duration-300 ${
                                    isActive
                                        ? 'text-sky-600 font-medium bg-sky-50'
                                        : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50'
                                }`}
                            >
                                {item.label}
                                {isActive && (
                                    <div className="h-0.5 bg-sky-600 mt-1 rounded-full" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-full hover:bg-gray-100 focus:outline-none transition-colors"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
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
                        <div className="px-4">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <motion.div
                                        key={item.href}
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.2, delay: navItems.indexOf(item) * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className={`flex items-center justify-between px-4 py-4 rounded-lg my-2 ${
                                                isActive
                                                    ? 'bg-sky-50 text-sky-600 font-medium'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="text-lg">{item.label}</span>
                                            {isActive && (
                                                <div className="w-2 h-2 rounded-full bg-sky-600" />
                                            )}
                                        </Link>
                                    </motion.div>
                                );
                            })}
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
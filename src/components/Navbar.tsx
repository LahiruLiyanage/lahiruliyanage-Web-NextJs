'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {NavigationItem} from '@/types';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems: NavigationItem[] = [
        {href: '/', label: 'Home'},
        {href: '/about', label: 'About'},
        {href: '/projects', label: 'Projects'},
        {href: '/contact', label: 'Contact'}
    ];

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-10 py-3 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary text-sky-600">
                    Lahiru Liyanage<span className="text-yellow-500 font-bold text-2xl">.</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-gray-700 hover:text-primary transition duration-300"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-500 focus:outline-none"
                    >
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Github,
    Linkedin,
    Instagram,
    LayoutTemplate,
    Server,
    Layers,
    Building2,
    Code,
    PenTool,
    FileCode,
    Terminal,
    Briefcase,
    ChevronRight,
    Mail
} from 'lucide-react';

export default function Home() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const professionalSkills = [
        {
            icon: <Layers className="w-6 h-6 md:w-7 md:h-7 text-sky-600" />,
            title: 'Full Stack Solutions',
            description: 'End-to-end web development, integrating front-end, back-end, and databases for seamless, scalable applications.',
            mobileVisible: true
        },
        {
            icon: <Building2 className="w-6 h-6 md:w-7 md:h-7 text-sky-600" />,
            title: 'Architectural Design',
            description: 'Creating innovative building designs and architectural plans for residential and commercial spaces.',
            mobileVisible: true
        },
        {
            icon: <LayoutTemplate className="w-6 h-6 md:w-7 md:h-7 text-sky-600" />,
            title: 'Frontend Development',
            description: 'Designing dynamic and user-friendly web interfaces using modern frameworks, ensuring responsiveness and seamless user experiences.',
            mobileVisible: false
        },
        {
            icon: <Server className="w-6 h-6 md:w-7 md:h-7 text-sky-600" />,
            title: 'Backend Development',
            description: 'Developing secure, scalable server-side applications and RESTful APIs to handle business logic, data management, and client-server communication.',
            mobileVisible: false
        }
    ];

    const footerLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Me', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="container mx-auto max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 flex-grow"
            >
                {/* Hero Section */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 lg:gap-16 items-center justify-center mb-16"
                >
                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="max-w-xl mx-auto md:mx-0">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700">Hello, I&#39;m</h2>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-1 mb-2 text-gray-800">
                                Lahiru Liyanage
                            </h1>
                            <h2 className="text-xl sm:text-2xl md:text-3xl text-sky-600 font-bold pb-3 md:pb-4">
                                Full Stack Developer
                            </h2>

                            {/* Career transition badge */}
                            <div className="inline-block bg-gradient-to-r from-sky-100 to-blue-100 px-4 py-2 rounded-full text-sky-800 text-sm font-medium mb-4 border border-sky-200">
                                <span className="flex items-center gap-1">
                                    <Briefcase size={14} /> Architect turned Developer
                                </span>
                            </div>

                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg max-w-lg mx-auto md:mx-0">
                                Plot twist: I used to design buildings, but code was my true love all along! Now I&#39;m living my
                                dream as a Full-Stack Software Developer, bringing a blueprint of innovation to every project.
                            </p>

                            {/* Action Links */}
                            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-5 pt-6 md:pt-8">
                                <Link
                                    href="/projects"
                                    className="bg-sky-600 text-white px-5 md:px-7 py-2.5 rounded-lg hover:bg-sky-700 transition duration-300 flex items-center gap-2 text-sm md:text-base shadow-md hover:shadow-lg"
                                >
                                    <FileCode size={18} />
                                    View My Work
                                </Link>
                                <Link
                                    href="/about"
                                    className="border-2 border-sky-600 text-sky-600 px-5 md:px-7 py-2.5 rounded-lg hover:bg-sky-600 hover:text-white transition duration-300 flex items-center gap-2 text-sm md:text-base"
                                >
                                    <Terminal size={18} />
                                    About Me
                                </Link>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex justify-center md:justify-start space-x-5 mt-6 md:mt-8">
                                <a
                                    href="https://github.com/LahiruLiyanage"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-sky-600 transition-colors duration-300"
                                    aria-label="GitHub Profile"
                                >
                                    <Github className="w-6 h-6 md:w-7 md:h-7" />
                                </a>
                                <a
                                    href="https://linkedin.com/in/lahiruliyanage"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-sky-600 transition-colors duration-300"
                                    aria-label="LinkedIn Profile"
                                >
                                    <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
                                </a>
                                <a
                                    href="https://www.instagram.com/lhliyanage/"
                                    className="text-gray-600 hover:text-sky-600 transition-colors duration-300"
                                    aria-label="Instagram Profile"
                                >
                                    <Instagram className="w-6 h-6 md:w-7 md:h-7" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Profile Image with Career Transition Card */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center flex-1 relative"
                    >
                        <div className="relative">
                            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-2 border-gray-100">
                                <Image
                                    src="/images/lahiruliyanage.png"
                                    alt="Lahiru Liyanage"
                                    width={400}
                                    height={500}
                                    className="object-cover w-64 h-80 sm:w-72 sm:h-90 md:w-80 md:h-96 lg:w-96 lg:h-120"
                                    priority
                                />
                            </div>

                            {/* Floating mini career transition card */}
                            <div className="absolute -bottom-10 -right-5 bg-white p-4 rounded-lg shadow-lg max-w-xs transform rotate-3 border-t-4 border-sky-500">
                                <div className="flex items-center gap-2 text-sm">
                                    <Code className="text-sky-600" size={16} />
                                    <div className="font-medium text-gray-800">From Blueprint to Code</div>
                                </div>
                                <div className="mt-1 flex items-center">
                                    <div className="h-1 w-10 bg-gradient-to-r from-gray-400 to-sky-600 rounded"></div>
                                    <div className="mx-1 text-xs font-medium text-gray-500">→</div>
                                    <div className="h-1 w-10 bg-gradient-to-r from-sky-600 to-blue-600 rounded"></div>
                                </div>
                            </div>

                            <div className="absolute -bottom-3 -left-3 bg-white p-3 rounded-full shadow-lg">
                                <PenTool className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Quote Section */}
                <motion.div
                    variants={itemVariants}
                    className="my-16 py-8 px-6 bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg text-center shadow-sm"
                >
                    <blockquote className="text-xl md:text-2xl font-medium text-gray-700 italic">
                        &#34;Building bridges between architecture and code, one commit at a time.&#34;
                    </blockquote>
                </motion.div>

                {/* Professional Skills Section */}
                <motion.div variants={itemVariants} className="mb-16">
                    <div className="text-center mb-10 md:mb-16">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
                            Professional Expertise
                        </h3>
                        <div className="w-20 h-1 bg-sky-600 mx-auto mb-4"></div>
                        <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
                            Transforming complex challenges into elegant, efficient solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto">
                        {professionalSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ y: -5 }}
                                className={`bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 ${
                                    !skill.mobileVisible ? 'hidden sm:block' : ''
                                }`}
                            >
                                <div className="flex justify-center mb-4 md:mb-5 bg-sky-50 w-14 h-14 rounded-lg mx-auto flex items-center justify-center">
                                    {skill.icon}
                                </div>
                                <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-800 text-center">
                                    {skill.title}
                                </h4>
                                <p className="text-gray-600 text-sm md:text-base text-center">
                                    {skill.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Simple Footer */}
            <footer className="bg-white border-t border-gray-200 mt-auto">
                <div className="container mx-auto max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <Link href="/" className="text-xl font-bold text-sky-600 flex items-center">
                                Lahiru Liyanage<span className="text-yellow-500 dot font-bold">.</span>
                            </Link>
                            <p className="text-gray-600 mt-2 text-sm">Full Stack Developer & Former Architect</p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                            <div className="flex space-x-4">
                                {footerLinks.map((link) => (
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
                                className="text-gray-500 hover:text-sky-600 transition-colors duration-300"
                                aria-label="Instagram Profile"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Github,
    Linkedin,
    Mail,
    Code,
    Server,
    Layers,
    PenTool
} from 'lucide-react';

export default function Home() {
    const professionalSkills = [
        {
            icon: <Layers className="w-6 h-6 md:w-7 md:h-7 text-sky-600" />,
            title: 'Full Stack Solutions',
            description: 'End-to-end web application development with integrated architecture.',
            mobileVisible: true
        },
        {
            icon: <Layers className="w-6 h-6 md:w-7 md:h-7 text-sky-600" />,
            title: 'Architectural Design',
            description: 'Creating innovative building designs and architectural plans for residential and commercial spaces.',
            mobileVisible: true
        },
        {
            icon: <Code className="w-6 h-6 md:w-7 md:h-7 text-sky-600" />,
            title: 'Frontend Development',
            description: 'Creating responsive and interactive web interfaces with modern frameworks and tools.',
            mobileVisible: false
        },
        {
            icon: <Server className="w-6 h-6 md:w-7 md:h-7 text-sky-600" />,
            title: 'Backend Development',
            description: 'Building robust, scalable server-side applications and RESTful APIs.',
            mobileVisible: false
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="container mx-auto max-w-5xl 2xl:max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
                <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 lg:gap-16 items-center justify-center">
                    {/* Text Content - Mobile: First, Desktop: Second */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <div className="max-w-xl mx-auto md:mx-0">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700">Hello, I&#39;m</h2>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-1 mb-2 text-gray-800">
                                Lahiru Liyanage
                            </h1>
                            <h2 className="text-xl sm:text-2xl md:text-3xl text-sky-600 font-bold pb-3 md:pb-4">
                                Full Stack Developer
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg max-w-lg mx-auto md:mx-0">
                                Innovative software engineer with a passion for building
                                cutting-edge web applications. Combining technical expertise
                                with creative problem-solving to deliver exceptional digital solutions.
                            </p>

                            {/* Action Links */}
                            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-5 pt-6 md:pt-8">
                                <Link
                                    href="/projects"
                                    className="bg-sky-600 text-white px-5 md:px-7 py-2.5 rounded-lg hover:bg-sky-700 transition duration-300 flex items-center gap-2 text-sm md:text-base shadow-md hover:shadow-lg"
                                >
                                    View My Work
                                </Link>
                                <Link
                                    href="/about"
                                    className="border-2 border-sky-600 text-sky-600 px-5 md:px-7 py-2.5 rounded-lg hover:bg-sky-600 hover:text-white transition duration-300 flex items-center gap-2 text-sm md:text-base"
                                >
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
                                    href="mailto:lhlahiru95@gmail.com"
                                    className="text-gray-600 hover:text-sky-600 transition-colors duration-300"
                                    aria-label="Email Contact"
                                >
                                    <Mail className="w-6 h-6 md:w-7 md:h-7" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Profile Image - Mobile: Second, Desktop: First */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center flex-1"
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
                            <div className="absolute -bottom-3 -right-3 bg-white p-3 rounded-full shadow-lg">
                                <PenTool className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Professional Skills Section */}
            <div className="bg-white py-12 md:py-20 w-full shadow-inner">
                <div className="container mx-auto max-w-5xl 2xl:max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 md:mb-16">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
                            Professional Expertise
                        </h3>
                        <div className="w-20 h-1 bg-sky-600 mx-auto mb-4"></div>
                        <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
                            Transforming complex challenges into elegant, efficient solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl 2xl:max-w-6xl mx-auto">
                        {professionalSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`bg-gray-50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 ${
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
                </div>
            </div>
        </div>
    );
}
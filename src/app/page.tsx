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
    Layers
} from 'lucide-react';

export default function Home() {
    const professionalSkills = [
        {
            icon: <Code className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
            title: 'Frontend Development',
            description: 'Creating responsive and interactive web interfaces'
        },
        {
            icon: <Server className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
            title: 'Backend Development',
            description: 'Building scalable server-side applications'
        },
        {
            icon: <Layers className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
            title: 'Full Stack Solutions',
            description: 'End-to-end web application development'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-16">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                    {/* Profile Image - Second on mobile, Second on desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center flex-1"
                    >
                        <div className="relative">
                            <Image
                                src="/images/lahiruliyanage.png"
                                alt="Lahiru Liyanage"
                                width={400}
                                height={500}
                                className="rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl object-cover w-64 h-80 sm:w-72 sm:h-90 md:w-80 md:h-96 lg:w-96 lg:h-120"
                                priority
                            />
                            {/*<div className="absolute bottom-0 right-0 bg-sky-600 text-white p-2 md:p-3 rounded-full shadow-lg">*/}
                            {/*    <Code className="w-4 h-4 md:w-6 md:h-6" />*/}
                            {/*</div>*/}
                        </div>
                    </motion.div>

                    {/* Text Content - First on mobile, First on desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <div className="max-w-xl mx-auto md:mx-0">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl">Hello, I&#39;m</h2>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                                Lahiru Liyanage
                            </h1>
                            <h2 className="text-2xl md:text-2xl lg:text-3xl text-sky-600 font-bold pb-2 md:pb-4">
                                Full Stack Developer
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
                                Innovative software engineer with a passion for building
                                cutting-edge web applications. Combining technical expertise
                                with creative problem-solving to deliver exceptional digital solutions.
                            </p>

                            {/* Action Links */}
                            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-4 pt-4">
                                <Link
                                    href="/projects"
                                    className="bg-sky-600 text-white px-4 md:px-6 py-2 rounded-full hover:bg-sky-700 transition flex items-center gap-2 text-sm md:text-base"
                                >
                                    View My Work
                                </Link>
                                <Link
                                    href="/about"
                                    className="border border-sky-600 text-sky-600 px-4 md:px-6 py-2 rounded-full hover:bg-sky-700 hover:text-white transition flex items-center gap-2 text-sm md:text-base"
                                >
                                    About Me
                                </Link>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex justify-center md:justify-start space-x-4 mt-4">
                                <a
                                    href="https://github.com/LahiruLiyanage"
                                    target="_blank"
                                    className="text-gray-600 hover:text-sky-600 transition"
                                >
                                    <Github className="w-5 h-5 md:w-6 md:h-6" />
                                </a>
                                <a
                                    href="https://linkedin.com/in/lahiruliyanage"
                                    target="_blank"
                                    className="text-gray-600 hover:text-sky-600 transition"
                                >
                                    <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                                </a>
                                <a
                                    href="mailto:lhlahiru95@gmail.com"
                                    className="text-gray-600 hover:text-sky-600 transition"
                                >
                                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                                </a>
                            </div>
                        </div>
                    </motion.div>


                </div>
            </div>

            {/* Professional Skills Section */}
            <div className="bg-white py-8 md:py-16 w-full">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 md:mb-12">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
                            Professional Expertise
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
                            Transforming complex challenges into elegant, efficient software solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                        {professionalSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-gray-50 p-4 md:p-6 lg:p-8 rounded-lg md:rounded-xl text-center hover:shadow-lg transition"
                            >
                                <div className="flex justify-center mb-3 md:mb-4">
                                    {skill.icon}
                                </div>
                                <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3 text-gray-800">
                                    {skill.title}
                                </h4>
                                <p className="text-gray-600 text-sm md:text-base">
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
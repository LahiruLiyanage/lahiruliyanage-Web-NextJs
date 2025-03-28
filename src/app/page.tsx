'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Github,
    Linkedin,
    Mail,
    Download,
    Code,
    Server,
    Layers
} from 'lucide-react';

export default function Home() {
    const professionalSkills = [
        {
            icon: <Code className="w-8 h-8 text-primary" />,
            title: 'Frontend Development',
            description: 'Creating responsive and interactive web interfaces'
        },
        {
            icon: <Server className="w-8 h-8 text-primary" />,
            title: 'Backend Development',
            description: 'Building scalable server-side applications'
        },
        {
            icon: <Layers className="w-8 h-8 text-primary" />,
            title: 'Full Stack Solutions',
            description: 'End-to-end web application development'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 px-10">
            {/* Hero Section */}
            <div className="container mx-auto  py-16 md:py-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="">
                            <h2 className="text-3xl">Hello, I&#39;m</h2>
                            <h1 className="text-3xl md:text-4xl font-bold ">
                                Lahiru Liyanage
                            </h1>
                            <h2 className="text-3xl md:text-2xl text-primary font-bold text-sky-600 pb-4">
                                Full Stack Developer
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Innovative software engineer with a passion for building
                                cutting-edge web applications. Combining technical expertise
                                with creative problem-solving to deliver exceptional digital solutions.
                            </p>

                            {/* Social and Action Links */}
                            <div className="flex flex-wrap items-center gap-4 pt-4">
                                <Link
                                    href="/projects"
                                    className="bg-primary text-white px-6 py-2 rounded-full bg-sky-600 hover:bg-sky-700 transition flex items-center gap-2"
                                >
                                    View My Work
                                </Link>
                                <Link
                                    href="/about"
                                    className="border border-sky-600 text-sky-600 px-6 py-2 rounded-full hover:bg-sky-700 hover:text-white transition flex items-center gap-2"
                                >
                                    About Me
                                </Link>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex space-x-4 mt-4">
                                <a
                                    href="https://github.com/LahiruLiyanage"
                                    target="_blank"
                                    className="text-gray-600 hover:text-primary transition"
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://linkedin.com/in/lahiruliyanage"
                                    target="_blank"
                                    className="text-gray-600 hover:text-primary transition"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a
                                    href="mailto:lhlahiru95@gmail.com"
                                    className="text-gray-600 hover:text-primary transition"
                                >
                                    <Mail className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            <Image
                                src="/images/lahiruliyanage.png"
                                alt="Lahiru Liyanage"
                                width={800}
                                height={1000}
                                className="rounded-3xl shadow-2xl object-cover w-80 h-100 md:w-80 md:h-100"
                            />
                            <div className="absolute bottom-0 right-0 bg-primary text-white p-3 rounded-full shadow-lg">
                                <Code className="w-6 h-6" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Professional Skills Section */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">
                            Professional Expertise
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Transforming complex challenges into elegant, efficient software solutions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {professionalSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition"
                            >
                                <div className="flex justify-center mb-4">
                                    {skill.icon}
                                </div>
                                <h4 className="text-xl font-semibold mb-3 text-gray-800">
                                    {skill.title}
                                </h4>
                                <p className="text-gray-600">
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
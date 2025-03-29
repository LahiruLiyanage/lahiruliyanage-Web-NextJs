'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, Building, Briefcase, GraduationCap, FileCode, Terminal } from 'lucide-react';

export default function About() {
    const skills = [
        { name: 'React.js', level: 90, category: 'frontend' },
        { name: 'Angular', level: 85, category: 'frontend' },
        { name: 'Node.js', level: 88, category: 'backend' },
        { name: 'Spring Boot', level: 82, category: 'backend' },
        { name: 'TypeScript', level: 85, category: 'language' },
        { name: 'Java', level: 80, category: 'language' },
        { name: 'MongoDB', level: 75, category: 'database' },
        { name: 'PostgreSQL', level: 78, category: 'database' }
    ];

    const experiences = [
        {
            company: 'IJSE',
            position: 'Associate Software Developer',
            duration: '2024 - Present',
            description: 'Developing modern web applications and contributing to enterprise software solutions.'
        },
        {
            company: 'OREL Corporation',
            position: 'Project Architect',
            duration: '2021 - 2024',
            description: 'Led architectural design projects and collaborated with engineering teams to create innovative structural solutions.'
        }
    ];

    const education = [
        {
            degree: 'MSc in Project Management',
            institution: 'Solent University, Southampton, UK',
            duration: '2020 - 2021'
        },
        {
            degree: 'Bachelor\'s Degree',
            institution: 'University of Moratuwa, Sri Lanka',
            duration: '2016 - 2020'
        },
        {
            degree: 'CMJD Professional Certificate',
            institution: 'IJSE',
            duration: '2023'
        }
    ];

    const projects = [
        {
            name: 'ShadowCrypt',
            description: 'File Encryption Tool',
            tags: ['Java', 'JavaFX', 'Cryptography'],
            link: 'https://github.com/LahiruLiyanage/ShadowCrypt'
        },
        {
            name: 'NextCommerce',
            description: 'Modern E-commerce Platform',
            tags: ['Next.js', 'React', 'Tailwind'],
            link: 'https://github.com/LahiruLiyanage/NextCommerce'
        },
        {
            name: 'WeaveBrowse',
            description: 'Custom Web Browser',
            tags: ['JavaFX', 'HTTP Protocol'],
            link: 'https://github.com/LahiruLiyanage/WeaveBrowse'
        }
    ];

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

    return (
        <div className="container mx-auto max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Hero Section */}
                <motion.div
                    variants={itemVariants}
                    className="mb-16 text-center md:text-left"
                >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div className="md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                                About <span className="text-sky-600">Me</span>
                                <span className="text-yellow-500">.</span>
                            </h1>
                            <div className="h-1 w-24 bg-sky-500 mb-8 mx-auto md:mx-0"></div>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Hey there! Plot twist: I used to design buildings, but code was my true love all along! Now I&#39;m living my dream as a Full-Stack Software Developer, bringing a blueprint of innovation to every project. Think of me as an architect who traded concrete for code – same eye for design, just with fewer hard hats!
                            </p>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                My secret sauce? I bring an architect&#39;s problem-solving superpowers to the tech world. Whether I&#39;m crafting sleek UIs or building robust backends, I&#39;m all about creating digital experiences that are both beautiful AND bulletproof. Picture this: The precision of an architect meets the creativity of a developer. That&#39;s me – building digital solutions that stand as tall as my former designs!
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                                <Link href="/projects" className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                                    <FileCode size={18} />
                                    View Projects
                                </Link>
                                <Link href="/contact" className="bg-white hover:bg-gray-100 text-sky-600 border border-sky-600 px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                                    <Terminal size={18} />
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg blur opacity-30"></div>
                                <div className="relative bg-white p-6 rounded-lg shadow-xl">
                                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                        <Code className="text-sky-600" size={20} />
                                        Career Transition
                                    </h3>
                                    <div className="flex items-start gap-2 mb-4">
                                        <Building className="text-gray-600 mt-1" size={18} />
                                        <div>
                                            <h4 className="font-medium">Then: Project Architect</h4>
                                            <p className="text-sm text-gray-600">Designing physical structures</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Briefcase className="text-sky-600 mt-1" size={18} />
                                        <div>
                                            <h4 className="font-medium">Now: Full-Stack Developer</h4>
                                            <p className="text-sm text-gray-600">Building digital experiences</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Experience and Education Section */}
                <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Briefcase className="text-sky-600" size={24} />
                            <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
                        </div>
                        <div className="space-y-6">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white shadow-md rounded-lg p-6 border-l-4 border-sky-500 hover:shadow-lg transition-shadow duration-300"
                                    whileHover={{ y: -5 }}
                                >
                                    <h3 className="text-xl font-bold text-gray-800">{exp.position}</h3>
                                    <p className="text-sky-600 mb-2">{exp.company} | {exp.duration}</p>
                                    <p className="text-gray-600">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <GraduationCap className="text-sky-600" size={24} />
                            <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
                        </div>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white shadow-md rounded-lg p-6 border-l-4 border-yellow-400 hover:shadow-lg transition-shadow duration-300"
                                    whileHover={{ y: -5 }}
                                >
                                    <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                                    <p className="text-sky-600 mb-1">{edu.institution}</p>
                                    <p className="text-gray-600">{edu.duration}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Skills Section */}
                <motion.section variants={itemVariants} className="mb-16">
                    <div className="flex items-center gap-2 mb-6">
                        <Code className="text-sky-600" size={24} />
                        <h2 className="text-2xl font-semibold text-gray-800">Technical Skills</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold flex items-center gap-2">
                                        {skill.name}
                                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                                            {skill.category}
                                        </span>
                                    </span>
                                    <span className="text-sky-600 font-medium">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <motion.div
                                        className="bg-sky-600 h-2.5 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                    ></motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Featured Projects Section */}
                <motion.section variants={itemVariants}>
                    <div className="flex items-center gap-2 mb-6">
                        <FileCode className="text-sky-600" size={24} />
                        <h2 className="text-2xl font-semibold text-gray-800">Featured Projects</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                whileHover={{ y: -8 }}
                            >
                                <div className="h-2 bg-gradient-to-r from-sky-500 to-blue-600"></div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="text-xs px-2 py-1 bg-sky-100 text-sky-800 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sky-600 hover:text-sky-800 font-medium flex items-center gap-1"
                                    >
                                        View Project <span>→</span>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <Link href="/projects" className="text-sky-600 hover:text-sky-800 font-medium flex items-center gap-2 justify-center">
                            View All Projects <span>→</span>
                        </Link>
                    </div>
                </motion.section>

                {/* Architect to Developer Quote */}
                <motion.div
                    variants={itemVariants}
                    className="mt-16 text-center py-8 px-6 bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg"
                >
                    <blockquote className="text-xl md:text-2xl font-medium text-gray-700 italic">
                        &#34;Building bridges between architecture and code, one commit at a time.&#34;
                    </blockquote>
                </motion.div>
            </motion.div>
        </div>
    );
}
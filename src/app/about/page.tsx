'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, CodeXml, Building, Briefcase, GraduationCap, FileCode, Terminal } from 'lucide-react';

export default function About() {
    const skills = [
        { name: 'React.js', category: 'frontend' },
        { name: 'Angular', category: 'frontend' },
        { name: 'Node.js', category: 'backend' },
        { name: 'Spring Boot', category: 'backend' },
        { name: 'TypeScript', category: 'language' },
        { name: 'Java', category: 'language' },
        { name: 'MongoDB', category: 'database' },
        { name: 'PostgreSQL', category: 'database' }
    ];

    const experiences = [
        {
            company: 'IJSE',
            position: 'Associate Software Developer',
            duration: '2024 - Present',
            description: 'Designing, developing, and maintaining modern web applications while contributing to the architecture and scalability of enterprise software solutions. Collaborating with teams to implement innovative features, optimize performance, and ensure seamless user experiences using the latest technologies.'
        },
        {
            company: 'OREL Corporation',
            position: 'Project Architect',
            duration: '2021 - 2024',
            description: 'Designed and managed architectural solutions for mid-to-large-scale projects, overseeing building services and collaborating closely with stakeholders to deliver innovative, efficient, and scalable solutions.'
        },
        {
            company: 'C+ Design',
            position: 'Architectural Designer',
            duration: '2020 - 2021',
            description: 'Designed and led architecture for small to mid-level projects, ensuring scalability, efficiency, and maintainability while collaborating with teams to implement best practices.'
        }
    ];

    const education = [
        {
            degree: 'CMJD Professional Certificate',
            institution: 'IJSE - Institute of Software Engineering',
            duration: '2024'
        },
        {
            degree: 'Certificate in Jira Training',
            institution: 'ICITB - Imperial College Of Information Technology & Business',
            duration: '2024'
        },
        {
            degree: 'MSc in Project Management',
            institution: 'Solent University, Southampton, UK',
            duration: '2022 - 2023'
        },
        {
            degree: 'Bachelor\'s Degree',
            institution: 'University of Moratuwa, Sri Lanka',
            duration: '2015 - 2020'
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
                                        <Briefcase className="text-sky-600 mt-1" size={18} />
                                        <div>
                                            <h4 className="font-medium">Now: Full-Stack Developer</h4>
                                            <p className="text-sm text-gray-600">
                                                Building digital experiences
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2 ">
                                        <Building className="text-gray-600 mt-1" size={18} />
                                        <div>
                                            <h4 className="font-medium">Then: Project Architect</h4>
                                            <p className="text-sm text-gray-600">
                                                Designing physical structures
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Technical Skills Section with Icons */}
                <motion.section variants={itemVariants} className="mb-16">
                    <div className="flex items-center gap-2 mb-6">
                        <CodeXml className="text-sky-600" size={24} />
                        <h2 className="text-2xl font-semibold text-gray-800">Technical Skills</h2>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                        <p className="text-gray-700 mb-8">I work with a wide range of technologies to build robust and scalable applications.</p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="https://aws.amazon.com/amplify/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://docs.amplify.aws/assets/logo-dark.svg" alt="amplify" width="40" height="40"/>
                            </a>
                            <a href="https://babeljs.io/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/>
                            </a>
                            <a href="https://getbootstrap.com" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/>
                            </a>
                            <a href="https://www.chartjs.org" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://www.chartjs.org/media/logo-title.svg" alt="chartjs" width="40" height="40"/>
                            </a>
                            <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
                            </a>
                            <a href="https://www.docker.com/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/>
                            </a>
                            <a href="https://expressjs.com" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/>
                            </a>
                            <a href="https://firebase.google.com/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/>
                            </a>
                            <a href="https://www.framer.com/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg" alt="framer" width="40" height="40"/>
                            </a>
                            <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg" alt="gatsby" width="40" height="40"/>
                            </a>
                            <a href="https://git-scm.com/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>
                            </a>
                            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
                            </a>
                            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/>
                            </a>
                            <a href="https://nextjs.org/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40"/>
                            </a>
                            <a href="https://nodejs.org" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
                            </a>
                            <a href="https://www.postgresql.org" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/>
                            </a>
                            <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
                            </a>
                            <a href="https://redux.js.org" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/>
                            </a>
                            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/>
                            </a>
                            <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>
                            </a>
                        </div>
                    </div>
                </motion.section>

                {/* Experience Section */}
                <motion.div variants={itemVariants} className="mb-16">
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

                    {/* Education Section (nested under Experience) */}
                    <div className="mt-12">
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
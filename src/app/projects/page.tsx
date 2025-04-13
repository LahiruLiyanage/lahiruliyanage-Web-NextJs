'use client';

import React, {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
    Building,
    Building2,
    Calendar,
    ChevronRight,
    Code,
    Compass,
    ExternalLink,
    Github,
    Layers,
    Star
} from 'lucide-react';
import Head from "next/head";

export default function Projects() {
    // State to track which category is selected
    const [activeCategory, setActiveCategory] = useState('all'); // 'all', 'development', 'architecture'

    // Development projects data
    const devProjects = [
        {
            id: 'taskmate',
            title: 'TaskMate',
            description: 'Effortlessly organize your life with this sleek, Firebase-powered to-do app that syncs across all devices while keeping your tasks secure with Google Authentication.',
            image: "/images/projects/task-mate.png",
            tags: ['EcmaScript', 'HTML', 'CSS', 'FireBase WebServices'],
            github: 'https://github.com/LahiruLiyanage/TaskMate',
            demo: 'https://to-do-list-7aea7.web.app/',
            featured: true,
            date: 'Feb 2025'
        },
        {
            id: 'nextcommerce',
            title: 'NextCommerce',
            description: 'Modern e-commerce platform built with Next.js, featuring responsive design, user authentication, shopping cart functionality, and payment integration.',
            image: '/images/projects/shopping-cart.png',
            tags: ['NextJs', 'React', 'Tailwind CSS', 'MongoDB', 'TypeScript', 'Node.js'],
            github: 'https://github.com/LahiruLiyanage/NextCommerce',
            demo: null,
            featured: true,
            date: 'Jan 2025'
        },
        {
            id: 'portfolio',
            title: 'Portfolio Website',
            description: 'Built with Next.js and TypeScript, my personal website leverages server-side rendering for optimal performance and SEO. Designed with modern web technologies, it delivers a seamless user experience while showcasing my portfolio and expertise in full-stack development.',
            image: '/images/projects/portfolio.png',
            tags: ['TypeScript', 'NextJs', 'UI/UX', 'TailwindCSS', 'Vercel'],
            github: 'https://github.com/LahiruLiyanage/lahiruliyanage-Web-NextJs',
            demo: 'https://lahiruliyanage.com/',
            featured: false,
            date: 'Mar 2025'
        },
        {
            id: 'shadowcrypt',
            title: 'ShadowCrypt',
            description: 'A secure file encryption tool with user-friendly interface, allowing users to protect sensitive files with strong encryption algorithms.',
            image: '/images/projects/shadow-crypt.png',
            tags: ['Java', 'JavaFx', 'Password Authentication', 'File Encryption'],
            github: 'https://github.com/LahiruLiyanage/ShadowCrypt',
            demo: null,
            featured: false,
            date: 'Dec 2024'
        }
    ];

    // Architecture projects data
    const archProjects = [
        {
            id: 'azure-heights',
            title: 'Eco Sanctuary House',
            description: 'A cozy, sustainable home designed for comfort and relaxation. The space-efficient layout features natural ventilation, energy-efficient lighting, and eco-friendly materials. Large windows enhance natural light, creating a serene and livable retreat.',
            image: '/images/projects/house-design.jpg',
            tags: ['Residential', 'Sustainable Design', 'Livable Environment'],
            externalLink: null,
            featured: true,
            location: 'Homagama, Sri Lanka',
            date: 'Jun 2023',
            area: '2,100 sq.ft'
        },
        {
            id: 'emerald-office',
            title: 'InQube: Apparel Innovation Renovation Project',
            description: 'I contributed to the InQube Innovation Premises Renovation Project under Chartered Architect Mewan Jayasinghe, specializing in architectural visualization to enhance design presentations and decision-making. My work focused on transforming architectural concepts into detailed, realistic visual representations.',
            image: '/images/projects/inqube.jpg',
            tags: ['Commercial', 'Green Building', 'Workplace Design', 'Interior Visualization'],
            externalLink: null,
            featured: true,
            location: 'Kaduwela, Sri Lanka',
            date: 'Aug 2020',
            area: '5,200 sq.ft'
        },
        {
            id: 'interior',
            title: 'Luxury Hotel Interior',
            description: 'I created a luxurious hotel space that combines elegance with eco-friendly principles. Using sustainable materials and energy-efficient systems, the design offers a sophisticated atmosphere. Natural elements like reclaimed wood and plants add a harmonious touch, ensuring both luxury and environmental responsibility.',
            image: '/images/projects/lobby.jpg',
            tags: ['Commercial', 'Luxury', 'Interior Design'],
            externalLink: null,
            featured: false,
            location: 'Kollupitiya, Sri Lanka',
            date: 'Mar 2022',
            area: '3,400 sq.ft'
        },
        {
            id: 'landscape',
            title: 'Landscape Design',
            description: 'I created both landscape and interior spaces that blend with nature. Native plants and water-efficient systems were incorporated outdoors, while the interior features sustainable materials and energy-efficient solutions, creating a harmonious and eco-friendly environment.',
            image: '/images/projects/landscape.jpg',
            tags: ['Adaptive Reuse', 'Landscape', 'House Interior', 'Foreign Design'],
            externalLink: null,
            featured: false,
            location: 'Swords, Ireland',
            date: 'Nov 2022',
            area: '3,200 sq.ft'
        }
    ];

    // Filter projects based on active category
    const getFilteredProjects = () => {
        switch (activeCategory) {
            case 'development':
                return {dev: devProjects, arch: []};
            case 'architecture':
                return {dev: [], arch: archProjects};
            default: // 'all'
                return {
                    dev: devProjects.filter(p => p.featured),
                    arch: archProjects.filter(p => p.featured)
                };
        }
    };

    const {dev, arch} = getFilteredProjects();
    const hasDevProjects = dev.length > 0;
    const hasArchProjects = arch.length > 0;

    // Animation variants
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {duration: 0.5}
        }
    };

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>Lahiru Liyanage | Full-Stack Software Developer</title>
                <meta name="title" content="Lahiru Liyanage | Full-Stack Software Developer" />
                <meta name="description" content="Hi, I'm Lahiru — a passionate full-stack developer with a background in architecture. Explore my projects, skills, and contact info on my official portfolio." />
                <meta name="keywords" content="Lahiru Liyanage, Full-Stack Developer, Software Engineer, Portfolio, Developer, Designer, Architect, Next.js Developer, Typescript, JavaScript, Java, Backend, Spring, Frontend, React, Express" />
                <meta name="author" content="Lahiru Liyanage" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.lahiruliyanage.com/projects" />
                <meta property="og:title" content="Lahiru Liyanage | Full-Stack Software Developer" />
                <meta property="og:description" content="Explore the portfolio of Lahiru Liyanage — full-stack developer" />
                <meta property="og:image" content="/images/og-image.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://www.lahiruliyanage.com/projects" />
                <meta name="twitter:title" content="Lahiru Liyanage | Full-Stack Software Developer" />
                <meta name="twitter:description" content="Explore the portfolio of Lahiru Liyanage — full-stack developer" />
                <meta name="twitter:image" content="/images/og-image.jpg" />
            </Head>

            <div className="min-h-screen bg-gray-50 pb-8 sm:pb-12 md:pb-16">
                {/* Hero Section */}
                <div className="bg-white shadow-sm">
                    <div
                        className="container mx-auto max-w-5xl lg:max-w-6xl xl:max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 lg:py-20">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-800">
                                My <span className="text-sky-600">Projects</span>
                                <span className="text-yellow-500">.</span>
                            </h1>
                            <div className="h-1 w-16 sm:w-20 md:w-24 bg-sky-500 mb-6 md:mb-8 mx-auto"></div>
                            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 md:mb-10 px-2">
                                Explore my dual journey through code and architecture. From building digital experiences
                                to designing physical spaces, each project tells a story of innovation and creativity.
                            </p>

                            {/* Filter Tabs */}
                            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                                <button
                                    onClick={() => setActiveCategory('all')}
                                    className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 transition-all duration-300 text-sm sm:text-base ${
                                        activeCategory === 'all'
                                            ? 'bg-sky-600 text-white shadow-md'
                                            : 'bg-white text-gray-700 border border-gray-300 hover:border-sky-300'
                                    }`}
                                >
                                    <Compass size={16} className="sm:w-[18px] sm:h-[18px]"/>
                                    Featured Work
                                </button>
                                <button
                                    onClick={() => setActiveCategory('development')}
                                    className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 transition-all duration-300 text-sm sm:text-base ${
                                        activeCategory === 'development'
                                            ? 'bg-sky-600 text-white shadow-md'
                                            : 'bg-white text-gray-700 border border-gray-300 hover:border-sky-300'
                                    }`}
                                >
                                    <Code size={16} className="sm:w-[18px] sm:h-[18px]"/>
                                    Development Experiments
                                </button>
                                <button
                                    onClick={() => setActiveCategory('architecture')}
                                    className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 transition-all duration-300 text-sm sm:text-base ${
                                        activeCategory === 'architecture'
                                            ? 'bg-sky-600 text-white shadow-md'
                                            : 'bg-white text-gray-700 border border-gray-300 hover:border-sky-300'
                                    }`}
                                >
                                    <Building2 size={16} className="sm:w-[18px] sm:h-[18px]"/>
                                    Architecture
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Projects Content */}
                <div
                    className="container mx-auto max-w-5xl lg:max-w-6xl xl:max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            exit={{opacity: 0}}
                            className="space-y-12 sm:space-y-16 md:space-y-20"
                        >
                            {/* Development Projects Section */}
                            {hasDevProjects && (
                                <motion.section variants={itemVariants} className="mb-6 sm:mb-8 md:mb-16">
                                    {activeCategory !== 'all' && (
                                        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                                            <Code className="text-sky-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"/>
                                            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-800">Experimental
                                                Development Projects</h2>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                                        {dev.map((project) => (
                                            <motion.div
                                                key={project.id}
                                                variants={itemVariants}
                                                whileHover={{y: -5}}
                                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                                            >
                                                <div className="h-48 sm:h-52 md:h-56 relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                                                    <div
                                                        className="absolute inset-0 bg-gradient-to-b from-sky-600/60 to-sky-800/80 flex items-center justify-center">
                                                        <Layers
                                                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white/80"/>
                                                    </div>
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover"
                                                    />

                                                    {project.featured && (
                                                        <div
                                                            className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-yellow-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs font-medium flex items-center">
                                                            <Star size={10} className="mr-0.5 sm:mr-1 sm:w-3 sm:h-3"/>
                                                            Featured
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="p-4 sm:p-5 md:p-6">
                                                    <div
                                                        className="flex items-center gap-1.5 sm:gap-2 text-xs text-gray-500 mb-2 sm:mb-3">
                                                        <Calendar size={12}
                                                                  className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"/>
                                                        {project.date}
                                                    </div>
                                                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1.5 sm:mb-2 flex items-center">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-xs sm:text-sm">{project.description}</p>
                                                    <div
                                                        className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
                                                        {project.tags.map((tag) => (
                                                            <span key={tag}
                                                                  className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-sky-100 text-sky-800 rounded-full text-xs">
                                                            {tag}
                                                        </span>
                                                        ))}
                                                    </div>
                                                    <div className="flex gap-2 sm:gap-3">
                                                        <a
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-sky-600 bg-sky-50 hover:bg-sky-100 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm flex items-center gap-1 sm:gap-1.5 transition-colors"
                                                        >
                                                            <Github size={14} className="sm:w-4 sm:h-4"/>
                                                            Code
                                                        </a>
                                                        {project.demo && (
                                                            <a
                                                                href={project.demo}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-sky-600 bg-sky-50 hover:bg-sky-100 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm flex items-center gap-1 sm:gap-1.5 transition-colors"
                                                            >
                                                                <ExternalLink size={14} className="sm:w-4 sm:h-4"/>
                                                                Live Demo
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {activeCategory === 'all' && dev.length > 0 && (
                                        <div className="mt-6 sm:mt-8 md:mt-10 text-center">
                                            <button
                                                onClick={() => setActiveCategory('development')}
                                                className="inline-flex items-center text-sky-600 hover:text-sky-800 font-medium transition-colors text-sm sm:text-base cursor-pointer"
                                            >
                                                View All Development Projects
                                                <ChevronRight size={16} className="ml-1"/>
                                            </button>
                                        </div>
                                    )}
                                </motion.section>
                            )}

                            {/* Architecture Projects Section */}
                            {hasArchProjects && (
                                <motion.section variants={itemVariants}>
                                    {activeCategory !== 'all' && (
                                        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                                            <Building2 className="text-sky-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"/>
                                            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-800">Architecture
                                                Projects</h2>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                                        {arch.map((project) => (
                                            <motion.div
                                                key={project.id}
                                                variants={itemVariants}
                                                whileHover={{y: -5}}
                                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                                            >
                                                <div className="h-48 sm:h-52 md:h-56 relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                                                    <div
                                                        className="absolute inset-0 bg-gradient-to-b from-blue-600/60 to-blue-800/80 flex items-center justify-center">
                                                        <Building
                                                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white/80"/>
                                                    </div>
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                    {project.featured && (
                                                        <div
                                                            className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-yellow-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs font-medium flex items-center">
                                                            <Star size={10} className="mr-0.5 sm:mr-1 sm:w-3 sm:h-3"/>
                                                            Featured
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="p-4 sm:p-5 md:p-6">
                                                    <div
                                                        className="flex justify-between text-xs text-gray-500 mb-2 sm:mb-3">
                                                        <div className="flex items-center gap-1.5 sm:gap-2">
                                                            <Calendar size={12}
                                                                      className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"/>
                                                            {project.date}
                                                        </div>
                                                        <div>{project.location}</div>
                                                    </div>
                                                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1.5 sm:mb-2 flex items-center">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-xs sm:text-sm">{project.description}</p>
                                                    <div
                                                        className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
                                                        {project.tags.map((tag) => (
                                                            <span key={tag}
                                                                  className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                                                            {tag}
                                                        </span>
                                                        ))}
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="text-xs sm:text-sm text-gray-600">
                                                            <span className="font-medium">Area:</span> {project.area}
                                                        </div>
                                                        {project.externalLink && (
                                                            <a
                                                                href={project.externalLink}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-blue-600 bg-blue-50 hover:bg-blue-100 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm flex items-center gap-1 sm:gap-1.5 transition-colors"
                                                            >
                                                                <ExternalLink size={14} className="sm:w-4 sm:h-4"/>
                                                                View Project
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {activeCategory === 'all' && arch.length > 0 && (
                                        <div className="mt-6 sm:mt-8 md:mt-10 text-center">
                                            <button
                                                onClick={() => setActiveCategory('architecture')}
                                                className="inline-flex items-center text-sky-600 hover:text-sky-800 pt-2 font-medium transition-colors cursor-pointer text-sm sm:text-base"
                                            >
                                                View All Architecture Projects
                                                <ChevronRight size={16} className="ml-1"/>
                                            </button>
                                        </div>
                                    )}
                                </motion.section>
                            )}

                            {/* Career Transition Card - Shown only on 'all' filter */}
                            {activeCategory === 'all' && (
                                <motion.div
                                    variants={itemVariants}
                                    className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-5 sm:p-6 md:p-8 my-2"
                                >
                                    <div className="max-w-3xl mx-auto text-center">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">From
                                            Blueprints to Code Blocks</h3>
                                        <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                                            My unique background lets me approach digital problems with an
                                            architect&#39;s perspective,
                                            combining creative vision with technical precision across both physical and
                                            digital realms.
                                        </p>
                                        <Link
                                            href="/about"
                                            className="inline-flex items-center bg-sky-600 hover:bg-sky-700 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
                                        >
                                            Read My Story
                                            <ChevronRight size={14} className="ml-1 sm:w-4 sm:h-4"/>
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Contact CTA Section */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.2}}
                    className="container mx-auto max-w-5xl lg:max-w-6xl xl:max-w-7xl px-4 sm:px-6 lg:px-8 py-2 pb-18 sm:pb-0"
                >
                    <div className="bg-white rounded-xl shadow-md p-5 sm:p-8 md:p-10 text-center">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Have a
                            project in mind?</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-5 sm:mb-6 md:mb-8 text-sm sm:text-base">
                            Whether you need a robust web application or architectural expertise, I&#39;m ready to bring
                            your vision to life.
                        </p>
                        <Link
                            href="/contact"
                            className="bg-sky-600 hover:bg-sky-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center text-sm sm:text-base"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </motion.div>
            </div>
        </>
    );
}
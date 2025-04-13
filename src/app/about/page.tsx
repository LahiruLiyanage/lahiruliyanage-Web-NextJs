'use client';

import React, {useState} from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {Award, Briefcase, Building, Code, CodeXml, FileCode, GraduationCap, Terminal} from 'lucide-react';
import Head from "next/head";

export default function About() {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const experiences = [
        {
            company: 'IJSE',
            position: 'Associate Software Developer',
            duration: '2024 - Present',
            description: 'As an Associate Software Developer, I design, develop, and maintain modern web applications while ensuring scalability and efficiency. I contribute to the architecture and optimization of enterprise software solutions, leveraging the latest technologies.\n' +
                '\n' +
                'My project management skills enable me to work efficiently, prioritize tasks, and collaborate effectively with cross-functional teams. I implement innovative features, enhance user experiences, and maintain clean, maintainable code. Committed to continuous learning, I stay updated with emerging technologies to build high-quality, future-ready solutions.'
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

    // Separated professional certificates from education
    const professionalCertificates = [
        {
            name: 'CMJD Professional Certificate',
            institution: 'IJSE - Institute of Software Engineering',
            year: '2024 - 2025'
        },
        {
            name: 'Certificate in Jira Training',
            institution: 'ICITB - Imperial College Of Information Technology & Business',
            year: '2024'
        }
    ];

    const education = [
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

    // Animation variants
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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

    // Handler for the details toggle that prevents layout shifts
    const handleDetailsToggle = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsDetailsOpen(!isDetailsOpen);
    };

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>Lahiru Liyanage | Full-Stack Software Developer | About Me</title>
                <meta name="title" content="Lahiru Liyanage | Full-Stack Software Developer" />
                <meta name="description" content="Hi, I'm Lahiru — a passionate full-stack developer with a background in architecture. Explore my projects, skills, and contact info on my official portfolio." />
                <meta name="keywords" content="Lahiru Liyanage, Full-Stack Developer, Software Engineer, Portfolio, Developer, Designer, Architect, Next.js Developer, Typescript, JavaScript, Java, Backend, Spring, Frontend, React, Express" />
                <meta name="author" content="Lahiru Liyanage" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.lahiruliyanage.com/" />
                <meta property="og:title" content="Lahiru Liyanage | Full-Stack Software Developer" />
                <meta property="og:description" content="Explore the portfolio of Lahiru Liyanage — full-stack developer" />
                <meta property="og:image" content="/images/og-image.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://www.lahiruliyanage.com/" />
                <meta name="twitter:title" content="Lahiru Liyanage | Full-Stack Software Developer" />
                <meta name="twitter:description" content="Explore the portfolio of Lahiru Liyanage — full-stack developer" />
                <meta name="twitter:image" content="/images/og-image.jpg" />
            </Head>

            <div
                className="container mx-auto max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-16">
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
                                    Hey there! Plot twist: I used to design buildings, but code was my true love all
                                    along! Now I&#39;m living my dream as a Full-Stack Software Developer, bringing a
                                    blueprint of innovation to every project. Think of me as an architect who traded
                                    concrete for code – same eye for design, just with fewer hard hats!
                                </p>
                                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                    My secret sauce? I bring an architect&#39;s problem-solving superpowers to the tech
                                    world. Whether I&#39;m crafting sleek UIs or building robust backends, I&#39;m all
                                    about creating digital experiences that are both beautiful AND bulletproof. Picture
                                    this: The precision of an architect meets the creativity of a developer. That&#39;s
                                    me – building digital solutions that stand as tall as my former designs!
                                </p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                                    <Link href="/projects"
                                          className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                                        <FileCode size={18}/>
                                        View Projects
                                    </Link>
                                    <Link href="/contact"
                                          className="bg-white hover:bg-gray-100 text-sky-600 border border-sky-600 px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                                        <Terminal size={18}/>
                                        Get in Touch
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                {/* Career Transition Card */}
                                <div className="relative mb-8">
                                    <div
                                        className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg blur opacity-30"></div>
                                    <div className="relative bg-white p-6 rounded-lg shadow-xl">
                                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                            <Code className="text-sky-600" size={20}/>
                                            Career Transition
                                        </h3>

                                        {/* Now: Full-Stack Developer */}
                                        <div className="flex items-start gap-2 mb-4">
                                            <Briefcase className="text-sky-600 mt-1" size={18}/>
                                            <div>
                                                <h4 className="font-medium">Now: Full-Stack Developer</h4>
                                                <p className="text-sm text-gray-600">
                                                    Building digital experiences
                                                </p>
                                            </div>
                                        </div>

                                        {/* Journey Timeline */}
                                        <div className="my-4 ml-9 flex items-center">
                                            <div
                                                className="h-1 flex-grow bg-gradient-to-r from-sky-600 to-blue-600 rounded"></div>
                                            <div className="mx-2 text-xs font-medium text-gray-500">2022-2024</div>
                                            <div
                                                className="h-1 flex-grow bg-gradient-to-r from-gray-400 to-sky-600 rounded"></div>
                                        </div>

                                        {/* Visual Bridge Element */}
                                        <div
                                            className="ml-9 my-3 border-l-2 border-dashed border-sky-400 h-6 flex items-center">
                                            <div className="ml-2 text-xs text-sky-600 font-medium">Evolution</div>
                                        </div>

                                        {/* Then: Project Architect */}
                                        <div className="flex items-start gap-2 mb-5">
                                            <Building className="text-gray-600 mt-1" size={18}/>
                                            <div>
                                                <h4 className="font-medium">Then: Project Architect</h4>
                                                <p className="text-sm text-gray-600">
                                                    Designing physical structures
                                                </p>
                                            </div>
                                        </div>

                                        {/* Transferable Skills */}
                                        <div className="mt-5 pt-4 border-t border-gray-200">
                                            <h4 className="font-medium text-sky-700 mb-2">Transferable Skills</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {["Problem Solving", "Project Planning and Management", "Time Management", "Stakeholder Management", "Process Optimization", "Design Thinking", "Detail-Oriented", "User-Focused Design", "Collaboration and Teamwork"].map(skill => (
                                                    <span key={skill}
                                                          className="px-2 py-1 bg-sky-100 text-sky-800 rounded-full text-xs">
                                                    {skill}
                                                </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Quote/Mission Statement */}
                                        <div
                                            className="mt-5 p-3 bg-sky-50 rounded-md border-l-4 border-sky-500 italic text-sm text-gray-700">
                                            &#34;Bringing an architect&#39;s perspective to software development —
                                            creating digital structures with both form and function.&#34;
                                        </div>

                                        {/* Why I Switched - Improved with state management instead of details tag */}
                                        <div className="mt-4 text-sm">
                                            <button
                                                onClick={handleDetailsToggle}
                                                className="w-full text-left font-medium text-sky-700 cursor-pointer hover:text-sky-800 flex items-center"
                                            >
                                                <span>{isDetailsOpen ? '−' : '+'}</span>
                                                <span className="ml-1">Why I Made The Switch</span>
                                            </button>

                                            {/* Fixed height container with transition for smooth expansion */}
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                                    isDetailsOpen ? 'max-h-40 mt-2' : 'max-h-0'
                                                }`}
                                            >
                                                <p className="text-gray-600 pl-2">
                                                    Discovered my passion for coding while working on architectural
                                                    visualization projects.
                                                    The immediate feedback loop and endless possibilities of software
                                                    development captured my imagination.
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
                            <CodeXml className="text-sky-600" size={24}/>
                            <h2 className="text-2xl font-semibold text-gray-800">Technical Skills</h2>
                        </div>
                        <div
                            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                            <p className="text-gray-700 mb-8">I work with a wide range of technologies to build robust
                                and scalable applications.</p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a href="https://git-scm.com/" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git"
                                           width={40} height={40}/>
                                </a>
                                <a href="https://www.java.com" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg"
                                        alt="java" width={40} height={40}/>
                                </a>
                                <a href="https://aws.amazon.com/amplify/" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image src="https://docs.amplify.aws/assets/logo-dark.svg" alt="amplify" width={40}
                                           height={40}/>
                                </a>
                                <a href="https://sass-lang.com" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                                        alt="sass" width={40} height={40}/>
                                </a>
                                <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                                        alt="bootstrap" width={40} height={40}/>
                                </a>
                                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                                        alt="css3" width={40} height={40}/>
                                </a>
                                <a href="https://www.docker.com/" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                                        alt="docker" width={40} height={40}/>
                                </a>
                                <a href="https://expressjs.com" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                                        alt="express" width={40} height={40}/>
                                </a>
                                <a href="https://www.python.org" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg"
                                        alt="python" width={40} height={40}/>
                                </a>
                                <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                                           alt="firebase" width={40} height={40}/>
                                </a>
                                <a href="https://spring.io" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original-wordmark.svg"
                                        alt="spring" width={40} height={40}/>
                                </a>
                                <a href="https://www.figma.com" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma"
                                           width={40} height={40}/>
                                </a>
                                <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                                        alt="mysql" width={40} height={40}/>
                                </a>
                                <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                                        alt="html5" width={40} height={40}/>
                                </a>
                                <a href="https://vitejs.dev/" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image src="https://vitejs.dev/logo.svg" alt="vite" width={40} height={40}/>
                                </a>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"
                                   rel="noreferrer" className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                                        alt="javascript" width={40} height={40}/>
                                </a>
                                <a href="https://mui.com" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg"
                                        alt="material ui" width={40} height={40}/>
                                </a>
                                <a href="https://www.postman.com/" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                                           alt="postman" width={40} height={40}/>
                                </a>
                                <a href="https://webpack.js.org" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-original.svg"
                                        alt="webpack" width={40} height={40}/>
                                </a>
                                <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                                        alt="mongodb" width={40} height={40}/>
                                </a>
                                <a href="https://angular.io" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image src="https://www.vectorlogo.zone/logos/angular/angular-icon.svg"
                                           alt="angular" width={40} height={40}/>
                                </a>
                                <a href="https://nextjs.org/" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs"
                                           width={40} height={40}/>
                                </a>
                                <a href="https://tomcat.apache.org/" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image src="https://www.vectorlogo.zone/logos/apache_tomcat/apache_tomcat-icon.svg"
                                           alt="apache tomcat" width={40} height={40}/>
                                </a>
                                <a href="https://maven.apache.org/" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/maven/maven-original-wordmark.svg"
                                        alt="maven" width={40} height={40}/>
                                </a>
                                <a href="https://nodejs.org" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                                        alt="nodejs" width={40} height={40}/>
                                </a>
                                <a href="https://gradle.org/" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image src="https://www.vectorlogo.zone/logos/gradle/gradle-icon.svg" alt="gradle"
                                           width={40} height={40}/>
                                </a>
                                <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                                        alt="postgresql" width={40} height={40}/>
                                </a>
                                <a href="https://jquery.com/" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original-wordmark.svg"
                                        alt="jquery" width={40} height={40}/>
                                </a>
                                <a href="https://reactjs.org/" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                                        alt="react" width={40} height={40}/>
                                </a>
                                <a href="https://redux.js.org" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                                        alt="redux" width={40} height={40}/>
                                </a>
                                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                                           alt="tailwind" width={40} height={40}/>
                                </a>
                                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"
                                   className="transition-transform hover:scale-110">
                                    <Image
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                                        alt="typescript" width={40} height={40}/>
                                </a>
                            </div>
                        </div>
                    </motion.section>

                    {/* Experience Section */}
                    <motion.div variants={itemVariants} className="mb-16">
                        <div className="flex items-center gap-2 mb-6">
                            <Briefcase className="text-sky-600" size={24}/>
                            <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
                        </div>
                        <div className="space-y-6">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white shadow-md rounded-lg p-6 border-l-4 border-sky-500 hover:shadow-lg transition-shadow duration-300"
                                    whileHover={{y: -5}}
                                >
                                    <h3 className="text-xl font-bold text-gray-800">{exp.position}</h3>
                                    <p className="text-sky-600 mb-2">{exp.company} | {exp.duration}</p>
                                    <p className="text-gray-600">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Professional Certificates and Education in responsive grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {/* Professional Certificates Section */}
                        <motion.div variants={itemVariants}>
                            <div className="flex items-center gap-2 mb-6">
                                <Award className="text-sky-600" size={24}/>
                                <h2 className="text-2xl font-semibold text-gray-800">Professional Certificates</h2>
                            </div>
                            <div className="space-y-6">
                                {professionalCertificates.map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white shadow-md rounded-lg p-6 border-l-4 border-yellow-400 h-full hover:shadow-lg transition-shadow duration-300"
                                        whileHover={{y: -5}}
                                    >
                                        <h3 className="text-xl font-bold text-gray-800">{cert.name}</h3>
                                        <p className="text-sky-600 mb-1">{cert.institution}</p>
                                        <p className="text-gray-600">{cert.year}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Education Section */}
                        <motion.div variants={itemVariants}>
                            <div className="flex items-center gap-2 mb-6">
                                <GraduationCap className="text-sky-600" size={24}/>
                                <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
                            </div>
                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white shadow-md rounded-lg p-6 border-l-4 border-sky-500 h-full hover:shadow-lg transition-shadow duration-300"
                                        whileHover={{y: -5}}
                                    >
                                        <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                                        <p className="text-sky-600 mb-1">{edu.institution}</p>
                                        <p className="text-gray-600">{edu.duration}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Architect to Developer Quote */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 text-center py-8 px-6 bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg"
                    >
                        <blockquote className="text-xl md:text-2xl font-medium text-gray-700 italic">
                            &#34;Building bridges between architecture and code, one commit at a time.&#34;
                        </blockquote>
                    </motion.div>

                    {/* Projects Link - MODIFIED: Added more space below on mobile */}
                    <motion.section variants={itemVariants}>
                        <div className="mt-6 mb-4 sm:mb-2 text-center">
                            <Link href="/projects"
                                  className="text-sky-600 hover:text-sky-800 font-medium flex items-center gap-2 justify-center">
                                View All Projects <span>→</span>
                            </Link>
                        </div>
                    </motion.section>
                </motion.div>
            </div>
        </>
    );
}

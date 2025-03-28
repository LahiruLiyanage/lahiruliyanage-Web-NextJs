'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Projects() {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with payment integration',
            technologies: ['React', 'Node.js', 'MongoDB'],
            image: '/projects/ecommerce.jpg',
            githubLink: 'https://github.com/yourusername/ecommerce',
            liveLink: 'https://your-ecommerce-site.com'
        },
        {
            title: 'Task Management App',
            description: 'Collaborative task management application',
            technologies: ['Next.js', 'TypeScript', 'Firebase'],
            image: '/projects/taskapp.jpg',
            githubLink: 'https://github.com/yourusername/taskapp',
            liveLink: 'https://your-task-app.com'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="mb-4">
                                    <strong>Technologies:</strong>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
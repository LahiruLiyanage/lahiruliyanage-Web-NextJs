'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    const skills = [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Next.js', level: 75 }
    ];

    const experiences = [
        {
            company: 'Tech Solutions Inc.',
            position: 'Senior Software Engineer',
            duration: '2021 - Present',
            description: 'Leading web application development and infrastructure improvements.'
        },
        {
            company: 'Digital Innovations',
            position: 'Software Engineer',
            duration: '2019 - 2021',
            description: 'Developed scalable web applications and microservices.'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

                {/* Skills Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Skills</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-white shadow-md rounded-lg p-6">
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-primary h-2.5 rounded-full"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience Section */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-6 mb-6"
                        >
                            <h3 className="text-xl font-bold">{exp.position}</h3>
                            <p className="text-gray-600 mb-2">{exp.company} | {exp.duration}</p>
                            <p>{exp.description}</p>
                        </div>
                    ))}
                </section>
            </motion.div>
        </div>
    );
}
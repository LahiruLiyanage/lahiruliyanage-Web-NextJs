'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold mb-4 text-gray-800">
                        Lahiru Liyanage
                    </h1>
                    <h2 className="text-2xl text-primary mb-4">
                        Software Engineer | Full Stack Developer
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Passionate software engineer with expertise in web development,
                        creating robust and innovative digital solutions.
                    </p>
                    <div className="flex space-x-4">
                        <Link
                            href="/contact"
                            className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Contact Me
                        </Link>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="border border-primary text-primary px-6 py-2 rounded hover:bg-blue-50 transition"
                        >
                            Download CV
                        </a>
                    </div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center"
                >
                    <Image
                        src="/profile.jpg"
                        alt="Lahiru Liyanage"
                        width={400}
                        height={400}
                        className="rounded-full shadow-lg object-cover"
                    />
                </motion.div>
            </div>
        </div>
    );
}
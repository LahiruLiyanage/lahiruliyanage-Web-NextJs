'use client';

import React, {useRef, useState} from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import {CheckCircle, Github, Linkedin, Mail, MapPin, MessageCircle, MessageSquare, Phone, Send} from 'lucide-react';
import Head from "next/head";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submissionError, setSubmissionError] = useState<string | null>(null);

    // EmailJS configuration
    const emailjsServiceId = 'service_a10b09t';
    const emailjsTemplateId = 'template_5l8kzj8';
    const emailjsPublicKey = 'R8WkDz1fpff6_hFzH';
    // const emailjsPrivateKey = 'MIs3fQ9MTje8wZ2sPYT-X';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionError(null);

        try {
            // Send email using EmailJS with directly included API key
            const result = await emailjs.sendForm(
                emailjsServiceId,
                emailjsTemplateId,
                formRef.current!,
                emailjsPublicKey // Only the public key is used for sendForm
            );

            if (result.text === 'OK') {
                setIsSubmitted(true);
                // Reset form after showing success message
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    });
                }, 5000);
            } else {
                setSubmissionError('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmissionError('An unexpected error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Scroll to contact form function
    const scrollToContactForm = () => {
        document.getElementById('contact-form')?.scrollIntoView({behavior: 'smooth'});
    };

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

    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "description": "Contact information for Lahiru Liyanage",
        "mainEntity": {
            "@type": "Person",
            "name": "Lahiru Liyanage",
            "email": "lahiruUJ59@gmail.com",
            "telephone": "+94719667296",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Colombo",
                "addressCountry": "Sri Lanka"
            },
            "sameAs": [
                "https://github.com/LahiruLiyanage",
                "https://linkedin.com/in/lahiruliyanage"
            ]
        }
    };

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
                />

                {/* Primary Meta Tags */}
                <title>Lahiru Liyanage | Full-Stack Software Developer</title>
                <meta name="title" content="Lahiru Liyanage | Full-Stack Software Developer" />
                <meta name="description" content="Hi, I'm Lahiru — a passionate full-stack developer with a background in architecture. Explore my projects, skills, and contact info on my official portfolio." />
                <meta name="keywords" content="Lahiru Liyanage, Full-Stack Developer, Software Engineer, Portfolio, Developer, Designer, Architect, Next.js Developer, Typescript, JavaScript, Java, Backend, Spring, Frontend, React, Express" />
                <meta name="author" content="Lahiru Liyanage" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.lahiruliyanage.com/contact" />
                <meta property="og:title" content="Lahiru Liyanage | Full-Stack Software Developer" />
                <meta property="og:description" content="Explore the portfolio of Lahiru Liyanage — full-stack developer" />
                <meta property="og:image" content="/images/og-image.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://www.lahiruliyanage.com/contact" />
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
                        className="mb-12 text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                            Get In <span className="text-sky-600">Touch</span>
                            <span className="text-yellow-500">.</span>
                        </h1>
                        <div className="h-1 w-24 bg-sky-500 mb-8 mx-auto"></div>
                        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                            Have a project in mind or want to discuss potential opportunities? I&#39;m always open to
                            new ideas and collaborations.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {/* Contact Information */}
                        <motion.div variants={itemVariants} className="md:col-span-1 order-2 md:order-1">
                            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                <div className="bg-gradient-to-r from-sky-600 to-blue-700 p-6 text-white">
                                    <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                                    <p className="opacity-80">Feel free to reach out through any of these channels</p>
                                </div>

                                <div className="p-6 space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-sky-100 p-3 rounded-full">
                                            <Mail className="text-sky-600" size={20}/>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-800">Email</h3>
                                            <a href="mailto:lhlahiru95@gmail.com"
                                               className="text-sky-600 hover:text-sky-700 transition-colors">
                                                lhlahiru95@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-sky-100 p-3 rounded-full">
                                            <Phone className="text-sky-600" size={20}/>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-800">Phone</h3>
                                            <a href="tel:+94719607296"
                                               className="text-sky-600 hover:text-sky-700 transition-colors">
                                                +94 71 960 7296
                                            </a>
                                        </div>
                                    </div>

                                    {/* WhatsApp Contact */}
                                    <div className="flex items-start gap-4">
                                        <div className="bg-green-100 p-3 rounded-full">
                                            <MessageCircle className="text-green-600" size={20}/>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-800">WhatsApp</h3>
                                            <a href="https://wa.me/94719607296" target="_blank" rel="noreferrer"
                                               className="text-green-600 hover:text-green-700 transition-colors">
                                                +94 71 960 7296
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-sky-100 p-3 rounded-full">
                                            <MapPin className="text-sky-600" size={20}/>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-800">Location</h3>
                                            <p className="text-gray-600">Colombo, Sri Lanka</p>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-gray-200">
                                        <h3 className="font-medium text-gray-800 mb-4">Connect with me</h3>
                                        <div className="flex gap-4">
                                            <a href="https://github.com/LahiruLiyanage" target="_blank" rel="noreferrer"
                                               className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                                                <Github className="text-gray-700" size={20}/>
                                            </a>
                                            <a href="https://linkedin.com/in/lahiruliyanage" target="_blank"
                                               rel="noreferrer"
                                               className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full transition-colors">
                                                <Linkedin className="text-blue-700" size={20}/>
                                            </a>
                                            <a href="https://wa.me/94719607296" target="_blank" rel="noreferrer"
                                               className="bg-green-100 hover:bg-green-200 p-3 rounded-full transition-colors">
                                                <MessageCircle className="text-green-600" size={20}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Availability Card */}
                            <motion.div
                                variants={itemVariants}
                                className="mt-6 bg-white shadow-md rounded-lg p-6 border-l-4 border-green-500"
                            >
                                <h3 className="font-semibold text-gray-800 mb-2">Current Availability</h3>
                                <p className="text-gray-600 mb-4">
                                    I&#39;m currently open to freelance projects and full-time opportunities.
                                </p>
                                <div className="flex items-center text-green-600">
                                    <div className="h-3 w-3 bg-green-500 rounded-full mr-2 relative">
                                        <span
                                            className="absolute inset-0 h-full w-full bg-green-500 rounded-full animate-ping opacity-75"></span>
                                    </div>
                                    <span className="font-medium">Available for work</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants} className="md:col-span-2 order-1 md:order-2">
                            <div id="contact-form" className="bg-white shadow-md rounded-lg p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send Me a Message</h2>

                                {isSubmitted ? (
                                    <motion.div
                                        initial={{opacity: 0, y: 10}}
                                        animate={{opacity: 1, y: 0}}
                                        className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-center gap-4"
                                    >
                                        <CheckCircle className="text-green-500" size={24}/>
                                        <div>
                                            <h3 className="font-medium text-green-700">Message Sent Successfully!</h3>
                                            <p className="text-green-600">Thank you for reaching out. I&#39;ll get back
                                                to you soon.</p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <form ref={formRef} onSubmit={handleSubmit}>
                                        {submissionError && (
                                            <div
                                                className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                                                {submissionError}
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <label htmlFor="name"
                                                       className="block text-gray-700 mb-2 font-medium">Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                                                    placeholder="Your name"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email"
                                                       className="block text-gray-700 mb-2 font-medium">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                                                    placeholder="your.email@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <label htmlFor="subject"
                                                   className="block text-gray-700 mb-2 font-medium">Subject</label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                                                placeholder="What is this regarding?"
                                            />
                                        </div>

                                        <div className="mb-6">
                                            <label htmlFor="message"
                                                   className="block text-gray-700 mb-2 font-medium">Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                                                placeholder="Tell me about your project, questions, or any inquiries you have..."
                                            ></textarea>
                                        </div>

                                        {/* Hidden inputs for EmailJS template */}
                                        <input type="hidden" name="to_email" value="lhlahiru95@gmail.com"/>
                                        <input type="hidden" name="from_name" value={formData.name}/>
                                        <input type="hidden" name="from_email" value={formData.email}/>
                                        <input type="hidden" name="subject" value={formData.subject}/>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-white font-medium transition-all ${
                                                isSubmitting ? 'bg-sky-400 cursor-not-allowed' : 'bg-sky-600 hover:bg-sky-700 hover:shadow-lg'
                                            }`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin h-5 w-5 text-white"
                                                         xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10"
                                                                stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor"
                                                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={18}/>
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 text-center p-8 bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg"
                    >
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ready to Work Together?</h2>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            Let&#39;s create something amazing together. Whether you need a custom web application, a
                            dynamic website, or technical consultation, I&#39;m here to help bring your vision to life.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/projects"
                                  className="bg-white hover:bg-gray-50 text-sky-600 border border-sky-600 px-6 py-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2">
                                View My Projects
                            </Link>
                            <button
                                onClick={scrollToContactForm}
                                className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
                            >
                                <MessageSquare size={18}/>
                                Message Me Directly
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}
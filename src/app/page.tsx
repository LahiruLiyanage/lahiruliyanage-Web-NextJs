"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Briefcase,
  Building2,
  Code,
  FileCode,
  Github,
  Instagram,
  Layers,
  LayoutTemplate,
  Linkedin,
  PenTool,
  Server,
  Terminal,
  ArrowRight,
  MapPin,
  Calendar,
  Award,
  Star,
} from "lucide-react";

export default function Home() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -100]);
  const [isTyping, setIsTyping] = useState(true);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth animation
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Mouse tracking for interactive effects
  useEffect(() => {
    // Typing animation effect
    const timer = setTimeout(() => setIsTyping(false), 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Enhanced professional skills with metrics and technologies
  const professionalSkills = [
    {
      icon: <Layers className="w-7 h-7 text-sky-600" />,
      title: "Full Stack Solutions",
      description:
        "End-to-end web development with modern architecture patterns.",
      technologies: ["FullStack Development", "DataBase Management"],
      projects: "15+ Projects",
      mobileVisible: true,
    },
    {
      icon: <Building2 className="w-7 h-7 text-sky-600" />,
      title: "Architectural (Construction) Skills",
      description:
        "Skilled in building design, construction drawings, and project coordination.",
      technologies: ["Architectural Designing", "Project Management"],
      projects: "10+ Construction Projects",
      mobileVisible: true,
    },
    {
      icon: <LayoutTemplate className="w-7 h-7 text-sky-600" />,
      title: "Frontend Excellence",
      description:
        "Responsive, accessible interfaces with modern design systems.",
      technologies: ["React", "NextJS", "Angular", "React Native"],
      projects: "20+ Interfaces",
      mobileVisible: false,
    },
    {
      icon: <Server className="w-7 h-7 text-sky-600" />,
      title: "Backend Engineering",
      description:
        "Robust APIs and database optimization for enterprise scale.",
      technologies: ["NestJS", "Java Spring", "REST APIs", "Database Design"],
      projects: "12+ APIs",
      mobileVisible: false,
    },
  ];

  // Quick stats for credibility
  const quickStats = [
    {
      label: "Years Experience",
      value: "2+",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      label: "Projects Completed",
      value: "25+",
      icon: <Code className="w-5 h-5" />,
    },
    {
      label: "Technologies",
      value: "15+",
      icon: <Award className="w-5 h-5" />,
    },
    {
      label: "Based in",
      value: "Sri Lanka",
      icon: <MapPin className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-sky-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto max-w-7xl 2xl:max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-8 relative z-10"
      >
        {/* Enhanced Hero Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center justify-center mb-16 mt-6"
        >
          {/* Enhanced Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <motion.h2
                variants={itemVariants}
                className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 mb-2"
              >
                Hello, I&apos;m
              </motion.h2>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-8 bg-gradient-to-r from-gray-900 via-sky-900 to-sky-700 bg-clip-text text-transparent"
              >
                Lahiru Liyanage
              </motion.h1>

              <motion.div variants={itemVariants} className="relative mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-sky-600 font-bold relative">
                  <span className="relative z-10">
                    {isTyping ? (
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="inline-block overflow-hidden whitespace-nowrap"
                      >
                        Full Stack Developer
                      </motion.span>
                    ) : (
                      "Full Stack Developer"
                    )}
                  </span>
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-sky-600 to-blue-600 rounded-full"
                  >
                    <motion.div
                      animate={{ scaleX: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 2.3 }}
                      className="w-full h-full bg-gradient-to-r from-sky-600 to-blue-600 rounded-full"
                    />
                  </motion.div>
                </h2>
              </motion.div>

              {/* Enhanced career transition badge */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-gradient-to-r from-sky-100 via-blue-50 to-indigo-100 px-6 py-3 rounded-2xl text-sky-800 text-sm font-medium mb-6 border border-sky-200/50 shadow-sm backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  <Briefcase size={16} className="text-sky-600" />
                  Architect &rarr; Software Engineer
                  <ArrowRight size={14} className="text-sky-500" />
                </span>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-gray-600 leading-relaxed text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8"
              >
                Currently working as a{" "}
                <span className="font-semibold text-gray-800">
                  Software Engineer
                </span>{" "}
                after transitioning from my background as a{" "}
                <span className="font-semibold text-gray-800">
                  Project Architect
                </span>{" "}
                in construction projects. I bring my architectural design
                thinking and project management expertise to software
                development, creating scalable web solutions that transform
                complex business requirements into elegant, efficient
                applications.
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
              >
                {quickStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -5 }}
                    className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm"
                  >
                    <div className="flex justify-center mb-1 text-sky-600">
                      {stat.icon}
                    </div>
                    <div className="font-bold text-gray-900 text-lg">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-6"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/projects"
                    className="group bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-sky-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-3 text-lg font-medium shadow-lg hover:shadow-xl"
                  >
                    <FileCode size={20} />
                    View My Work
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/about"
                    className="group border-2 border-sky-600 text-sky-600 px-8 py-4 rounded-xl hover:bg-sky-600 hover:text-white transition-all duration-300 flex items-center gap-3 text-lg font-medium bg-white/50 backdrop-blur-sm"
                  >
                    <Terminal size={20} />
                    About Me
                  </Link>
                </motion.div>
              </motion.div>

              {/* Enhanced Social Media */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center lg:justify-start space-x-6"
              >
                {[
                  {
                    icon: Github,
                    href: "https://github.com/LahiruLiyanage",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/in/lahiru-liyanage-643a26178/",
                    label: "LinkedIn",
                  },
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/lhliyanage/",
                    label: "Instagram",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-sky-600 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200/50"
                    aria-label={`${label} Profile`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Enhanced Profile Image Section */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center flex-1 relative"
          >
            <motion.div className="relative" style={{ y: yParallax }}>
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-blue-400/20 rounded-3xl blur-2xl scale-110" />

              {/* Main image container */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/50 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-200/10 to-blue-200/10 z-10" />
                <Image
                  src="/images/lahiruliyanage.png"
                  alt="Lahiru Liyanage - Software Engineer and Project Architect"
                  width={450}
                  height={550}
                  className="object-cover w-80 h-96 sm:w-96 sm:h-[28rem] lg:w-[420px] lg:h-[520px] relative z-0"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 p-4 rounded-2xl shadow-lg"
              >
                <Star className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg"
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>

              {/* Enhanced career transition card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 3 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl max-w-xs border border-sky-200/50"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <PenTool className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">
                      Architecture → Code
                    </div>
                    <div className="text-xs text-gray-600">
                      Design thinking meets development
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gradient-to-r from-gray-300 via-sky-400 to-sky-600 rounded-full relative overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.5, duration: 2 }}
                      className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-sky-600">100%</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Quote Section */}
        <motion.div variants={itemVariants} className="my-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-blue-500/5 to-indigo-500/5 rounded-3xl" />
          <div className="relative py-8 px-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <span className="text-2xl text-white font-bold">&quot;</span>
            </motion.div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 italic max-w-4xl mx-auto leading-relaxed">
              Transforming{" "}
              <span className="text-sky-600 font-semibold">
                architectural precision
              </span>{" "}
              into{" "}
              <span className="text-blue-600 font-semibold">
                digital innovation
              </span>{" "}
              — building scalable solutions one commit at a time.
            </blockquote>
            <div className="mt-6 text-gray-600 font-medium">
              — Lahiru Liyanage
            </div>
          </div>
        </motion.div>

        {/* Enhanced Professional Skills Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                Professional Expertise
              </span>
            </motion.div>

            <motion.h3
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              What I Do Best
            </motion.h3>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-1 bg-gradient-to-r from-sky-600 to-blue-600 mx-auto mb-6"
            />

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Crafting digital experiences that merge technical excellence with
              creative innovation
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {professionalSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className={`group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 relative overflow-hidden ${
                  !skill.mobileVisible ? "hidden md:block" : ""
                }`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon container */}
                <div className="relative z-10 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  >
                    {React.cloneElement(skill.icon, {
                      className: "w-8 h-8 text-white",
                    })}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-700 transition-colors duration-300">
                    {skill.title}
                  </h4>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium border border-sky-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project count */}
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Code className="w-4 h-4" />
                    <span className="font-medium">{skill.projects}</span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-sky-200/20 to-blue-200/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8 py-4 rounded-2xl hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg"
              >
                Let&apos;s Work Together
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

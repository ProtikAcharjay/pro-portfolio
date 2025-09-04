'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { portfolioData } from '@/lib/data/portfolio-data';
import { TechBackground } from '@/components/tech-background';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background/50 to-primary/5">
      {/* Tech-Themed Background */}
      <TechBackground />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              {portfolioData.personal.availability}
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
          >
            <span className="block text-foreground">Hi, I&apos;m</span>
            <span className="block bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-muted-foreground mb-2"
          >
            {portfolioData.personal.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {portfolioData.personal.subtitle}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center space-x-2 mb-8"
          >
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{portfolioData.personal.location}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" asChild className="group">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" asChild>
              <Link href={portfolioData.personal.resumeUrl} target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">
                {portfolioData.stats.yearsOfExperience}+
              </div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">
                {portfolioData.stats.projectsCompleted}+
              </div>
              <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">
                {portfolioData.stats.happyClients}+
              </div>
              <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">
                {portfolioData.stats.codeCommits}+
              </div>
              <div className="text-sm text-muted-foreground mt-1">Code Commits</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-muted-foreground rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

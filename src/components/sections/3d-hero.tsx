'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Mail, Code, Zap, Globe, Cpu, Terminal, Database, Cloud } from 'lucide-react';
import Link from 'next/link';
import { portfolioData } from '@/lib/data/portfolio-data';
import { useEffect, useState, useRef } from 'react';

// Developer terms for the ballpit
const devTerms = [
  // Code symbols
  '</', '/>', '{}', '[]', '=>', '!=', '&&', '||', '++', '--', '===', '!==',
  // Dev workflow
  'debug', 'git', 'push', 'pull', 'merge', 'commit', 'branch', 'deploy',
  'const', 'let', 'var', 'async', 'await', 'npm', 'yarn', 'build', 'test',
  // Tech stack
  'react', 'next', 'node', 'php', 'python', 'html', 'css', 'js', 'ts',
  'docker', 'aws', 'api', 'json', 'sql', 'laravel', 'vue', 'express',
  // Process & methodology
  'scrum', 'agile', 'sprint', 'backlog', 'mvp', 'ci/cd', 'devops',
  'bug', 'fix', 'prod', 'dev', 'staging', 'lint', 'refactor'
];

// Tech terms for floating animation
const techTerms = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL',
  'MongoDB', 'PostgreSQL', 'Redis', 'Kubernetes', 'TensorFlow', 'WebGL', 'Three.js',
  'Serverless', 'Microservices', 'CI/CD', 'DevOps', 'Machine Learning', 'Blockchain'
];

// Floating tech terms component
function FloatingTech() {
  const [terms, setTerms] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const createFloatingTerms = () => {
      const newTerms = techTerms.map((term, index) => ({
        id: index,
        text: term,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 15 + Math.random() * 10,
        size: 0.8 + Math.random() * 0.4
      }));
      setTerms(newTerms);
    };

    createFloatingTerms();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {terms.map((term) => (
        <div
          key={term.id}
          className="absolute text-blue-400/20 font-mono font-medium select-none"
          style={{
            left: `${term.x}%`,
            top: `${term.y}%`,
            fontSize: `${term.size}rem`,
            animation: `float-${term.id} ${term.duration}s linear infinite`,
            animationDelay: `${term.delay}s`
          }}
        >
          {term.text}
        </div>
      ))}
      
      <style jsx>{`
        ${terms.map(term => `
          @keyframes float-${term.id} {
            0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100px) translateX(${Math.sin(term.id) * 50}px); opacity: 0; }
          }
        `).join('')}
      `}</style>
    </div>
  );
}
// Matrix rain effect
function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0ff';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillStyle = `rgba(0, 255, 0, ${Math.random() * 0.5 + 0.1})`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

export function Hero3D() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Instant CSS Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(80, 35, 140, 0.14) 0%, transparent 42%),
            radial-gradient(circle at 75% 75%, rgba(70, 32, 130, 0.12) 0%, transparent 42%),
            radial-gradient(circle at 50% 50%, rgba(95, 45, 150, 0.1) 0%, transparent 62%),
            linear-gradient(135deg, hsl(240, 12%, 1.8%) 0%, hsl(240, 10%, 3.2%) 100%)
          `
        }}
      />

      <MatrixRain />

      <FloatingTech />

      <div 
        className="absolute inset-0 z-[1] opacity-6"
        style={{
          backgroundImage: `
            linear-gradient(rgba(65, 32, 120, 0.26) 1px, transparent 1px),
            linear-gradient(90deg, rgba(65, 32, 120, 0.26) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          animation: 'matrix-drift 20s linear infinite'
        }}
      />





      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="inline-block mb-6"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
              {portfolioData.personal.availability}
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-4">
              <span className="block text-white mb-2">Hi, I&apos;m</span>
              <span className="block bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
                {portfolioData.personal.name}
              </span>
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-6 text-lg font-medium text-white/80 mb-4">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-cyan-400" />
                <span>Computer Science Engineer</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span>Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-green-400" />
                <span>Web Development Expert</span>
              </div>
            </div>
            <p className="text-lg text-white/60 mb-4">
              🎓 Computer Science & Engineering | 💻 Software Development | 🌐 Web Technologies
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {portfolioData.personal.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button size="lg" asChild className="group bg-primary hover:bg-primary/90 text-white border-0">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10">
              <Link href={portfolioData.personal.resumeUrl} target="_blank">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Link>
            </Button>
          </motion.div>

          {/* Tech Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            {[
              { label: 'Years Experience', value: `${portfolioData.stats.yearsOfExperience}+`, icon: Cpu },
              { label: 'Projects Built', value: `${portfolioData.stats.projectsCompleted}+`, icon: Code },
              { label: 'Happy Clients', value: `${portfolioData.stats.happyClients}+`, icon: Globe },
              { label: 'Code Commits', value: `${portfolioData.stats.codeCommits}+`, icon: Zap }
            ].map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex p-3 rounded-full bg-primary/20 mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes matrix-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
      `}</style>
    </section>
  );
}

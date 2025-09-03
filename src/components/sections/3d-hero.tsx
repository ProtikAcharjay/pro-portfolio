'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Mail, Code, Zap, Globe, Cpu } from 'lucide-react';
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

interface TechElement {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  size: number;
  color: string;
  opacity: number;
  mass: number;
}

function TechBallpit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [elements, setElements] = useState<TechElement[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Initialize elements
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      const newElements: TechElement[] = [];
      
      for (let i = 0; i < 40; i++) {
        const size = Math.random() * 20 + 12;
        newElements.push({
          id: i,
          x: Math.random() * (dimensions.width - size * 2) + size,
          y: Math.random() * (dimensions.height - size * 2) + size,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          text: devTerms[Math.floor(Math.random() * devTerms.length)],
          size,
          color: `hsl(${240 + i * 8}, 70%, ${50 + (i % 3) * 10}%)`,
          opacity: 0.7,
          mass: size / 10
        });
      }
      
      setElements(newElements);
    }
  }, [dimensions]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      setElements(prevElements => {
        return prevElements.map(element => {
          let { x, y, vx, vy } = element;
          
          // Mouse repulsion (magnetic effect)
          const dx = x - mousePos.x;
          const dy = y - mousePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100 && distance > 0) {
            const force = (100 - distance) / 100;
            const angle = Math.atan2(dy, dx);
            vx += Math.cos(angle) * force * 3;
            vy += Math.sin(angle) * force * 3;
          }
          
          // Update position
          x += vx;
          y += vy;
          
          // Boundary collisions with bounce
          if (x <= element.size || x >= dimensions.width - element.size) {
            vx *= -0.8;
            x = Math.max(element.size, Math.min(dimensions.width - element.size, x));
          }
          if (y <= element.size || y >= dimensions.height - element.size) {
            vy *= -0.8;
            y = Math.max(element.size, Math.min(dimensions.height - element.size, y));
          }
          
          // Friction
          vx *= 0.98;
          vy *= 0.98;
          
          // Gravity (very subtle)
          vy += 0.1;
          
          return { ...element, x, y, vx, vy };
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    if (elements.length > 0) {
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [elements.length, mousePos, dimensions]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-auto overflow-hidden"
      style={{ cursor: 'none' }}
    >
      {elements.map(element => (
        <div
          key={element.id}
          className="absolute font-mono font-semibold select-none pointer-events-none"
          style={{
            left: element.x - element.size / 2,
            top: element.y - element.size / 2,
            fontSize: `${element.size}px`,
            color: element.color,
            opacity: element.opacity,
            textShadow: '0 0 10px rgba(139, 92, 246, 0.3)',
            filter: 'drop-shadow(0 0 5px rgba(139, 92, 246, 0.2))'
          }}
        >
          {element.text}
        </div>
      ))}
      
      {/* Custom cursor */}
      <div
        className="absolute pointer-events-none rounded-full border-2 border-primary/50 bg-primary/10"
        style={{
          left: mousePos.x - 25,
          top: mousePos.y - 25,
          width: 50,
          height: 50,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.1s ease-out'
        }}
      />
    </div>
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
            radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 70%),
            linear-gradient(135deg, hsl(240, 10%, 5%) 0%, hsl(240, 15%, 8%) 100%)
          `
        }}
      />
      
      {/* Instant Matrix Grid */}
      <div 
        className="absolute inset-0 z-[1] opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
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
              <span className="block text-white mb-2">Hi, I'm</span>
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

'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { TechGrid } from './3d/tech-grid';
import { FloatingCubes } from './3d/floating-cubes';
import { CodeRain } from './3d/code-rain';

// Pre-generated tech symbols for instant rendering
const techSymbols = [
  '<>', '</>', '{}', '[]', '=>', '!=', '&&', '||',
  'JS', 'TS', 'API', 'CSS', 'SQL', 'Git', 'npm', 'HTTP',
  '⚛️', '🚀', '💻', '⚙️', '🔧', '📡', '🌐', '⚡',
  '0x', 'FF', '01', '10', 'A1', 'B2', '*', '#', '@', '$'
];

export function TechBackground() {
  return (
    <>
      {/* 3D Canvas Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={null}>
            <TechGrid />
            <FloatingCubes />
            <CodeRain />
          </Suspense>
        </Canvas>
      </div>

      {/* Instant Matrix Rain */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
        {[...Array(30)].map((_, i) => (
          <div
            key={`rain-${i}`}
            className="absolute w-px opacity-20"
            style={{
              left: `${i * 3.33}%`,
              background: `linear-gradient(to bottom, 
                hsl(${240 + i * 2}, 70%, 60%) 0%, 
                transparent 100%)`,
              height: '100vh',
              animation: `matrix-rain ${2 + (i % 3)}s linear infinite`,
              animationDelay: `${(i * 0.1) % 2}s`
            }}
          />
        ))}
      </div>

      {/* Instant Tech Symbols */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
        {techSymbols.map((symbol, i) => {
          const x = (i * 7.14) % 100; // Distribute across width
          const y = ((i * 13) % 80) + 10; // Distribute across height
          return (
            <motion.div
              key={`symbol-${i}`}
              className="absolute font-mono font-bold text-primary/10 select-none"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                fontSize: `${12 + (i % 3) * 4}px`,
                color: `hsl(${240 + (i * 10) % 60}, 70%, ${50 + (i % 3) * 10}%)`
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 8 + (i % 5),
                repeat: Infinity,
                ease: "linear",
                delay: (i * 0.2) % 3
              }}
            >
              {symbol}
            </motion.div>
          );
        })}
      </div>

      {/* Instant Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1] opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 10s linear infinite'
        }}
      />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes matrix-rain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </>
  );
}

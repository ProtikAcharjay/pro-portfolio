'use client';

import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const techSymbols = ['<>', '{}', '=>', 'JS', 'TS', 'API', 'CSS', '⚛️', '🚀', '💻'];

export function FloatingCubes() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {techSymbols.map((symbol, index) => {
        const angle = (index / techSymbols.length) * Math.PI * 2;
        const radius = 3;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <FloatingCube 
            key={symbol} 
            position={[x, 0, z]} 
            symbol={symbol} 
            index={index}
          />
        );
      })}
    </group>
  );
}

function FloatingCube({ position, symbol, index }: { position: [number, number, number], symbol: string, index: number }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5 + index;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + index;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8 + index) * 0.5;
    }
  });

  return (
    <group position={position}>
      {/* Wireframe Cube */}
      <mesh ref={meshRef}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshBasicMaterial 
          color={`hsl(${240 + index * 20}, 70%, 60%)`}
          transparent 
          opacity={0.6} 
          wireframe
        />
      </mesh>
      
      {/* Tech Symbol */}
      <Text
        position={[0, 0, 0.2]}
        fontSize={0.2}
        color={`hsl(${240 + index * 20}, 80%, 70%)`}
        anchorX="center"
        anchorY="middle"
      >
        {symbol}
      </Text>
    </group>
  );
}

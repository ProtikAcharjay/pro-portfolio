'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

export function TechGrid() {
  const gridRef = useRef<Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      gridRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={gridRef} position={[0, 0, -2]}>
      {/* Grid Lines */}
      {[...Array(20)].map((_, i) => (
        <group key={i}>
          {/* Horizontal lines */}
          <mesh position={[0, -5 + i * 0.5, 0]}>
            <planeGeometry args={[10, 0.02]} />
            <meshBasicMaterial 
              color="#8b5cf6" 
              transparent 
              opacity={0.3} 
              wireframe={false}
            />
          </mesh>
          {/* Vertical lines */}
          <mesh position={[-5 + i * 0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <planeGeometry args={[10, 0.02]} />
            <meshBasicMaterial 
              color="#8b5cf6" 
              transparent 
              opacity={0.3} 
              wireframe={false}
            />
          </mesh>
        </group>
      ))}
      
      {/* Pulsing center node */}
      <mesh position={[0, 0, 0.1]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial 
          color="#8b5cf6" 
          transparent 
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}

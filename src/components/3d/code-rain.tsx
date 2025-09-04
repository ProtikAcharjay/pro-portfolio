'use client';

import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useRef, useState } from 'react';
import { Group } from 'three';

const codeChars = ['0', '1', '{', '}', '<', '>', '/', '*', '#', '@', '!', '?', '&', '%'];

export function CodeRain() {
  const groupRef = useRef<Group>(null);

  return (
    <group ref={groupRef}>
      {[...Array(15)].map((_, i) => (
        <CodeColumn key={i} index={i} />
      ))}
    </group>
  );
}

function CodeColumn({ index }: { index: number }) {
  const columnRef = useRef<Group>(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useFrame((state) => {
    if (columnRef.current) {
      columnRef.current.position.y = ((state.clock.elapsedTime * (1 + index * 0.1)) % 10) - 5;
    }
    setElapsedTime(state.clock.elapsedTime);
  });

  const x = -6 + index * 0.8;

  return (
    <group ref={columnRef} position={[x, 0, -1]}>
      {[...Array(8)].map((_, j) => (
        <Text
          key={j}
          position={[0, j * 0.5, 0]}
          fontSize={0.2}
          color={`hsl(${120 + j * 10}, 70%, ${60 + j * 5}%)`}
          anchorX="center"
          anchorY="middle"
        >
          {codeChars[Math.floor((index * j + elapsedTime * 2) % codeChars.length)]}
        </Text>
      ))}
    </group>
  );
}

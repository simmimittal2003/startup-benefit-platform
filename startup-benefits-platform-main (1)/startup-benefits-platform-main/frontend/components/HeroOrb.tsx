"use client";

import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function HeroOrb() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.6} />
      <Sphere args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#6366f1"
          distort={0.35}
          speed={1.2}
        />
      </Sphere>
    </Canvas>
  );
}

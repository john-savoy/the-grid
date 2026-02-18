"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Traveling light particle with trail
function GridParticle({ path, speed, color }: { path: [number, number, number][]; speed: number; color: string }) {
  const particleRef = useRef<THREE.Mesh>(null);
  const trailRef = useRef<THREE.Mesh>(null);
  const progress = useRef(Math.random());
  const trailPoints = useRef<THREE.Vector3[]>([]);
  const maxTrailLength = 20;

  useFrame((state, delta) => {
    if (particleRef.current) {
      progress.current += delta * speed;
      if (progress.current > 1) {
        progress.current = 0;
        trailPoints.current = [];
      }

      const index = Math.floor(progress.current * (path.length - 1));
      const nextIndex = Math.min(index + 1, path.length - 1);
      const localProgress = (progress.current * (path.length - 1)) % 1;

      const current = path[index];
      const next = path[nextIndex];

      const x = THREE.MathUtils.lerp(current[0], next[0], localProgress);
      const y = THREE.MathUtils.lerp(current[1], next[1], localProgress);
      const z = THREE.MathUtils.lerp(current[2], next[2], localProgress);

      particleRef.current.position.set(x, y, z);

      trailPoints.current.push(new THREE.Vector3(x, y, z));
      
      if (trailPoints.current.length > maxTrailLength) {
        trailPoints.current.shift();
      }

      // Update trail as tube
      if (trailRef.current && trailPoints.current.length > 1) {
        const curve = new THREE.CatmullRomCurve3(trailPoints.current);
        const tubeGeometry = new THREE.TubeGeometry(curve, trailPoints.current.length, 0.08, 8, false);
        trailRef.current.geometry.dispose();
        trailRef.current.geometry = tubeGeometry;
      }
    }
  });

  return (
    <group>
      {/* The light particle */}
      <mesh ref={particleRef}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshBasicMaterial color={color} transparent opacity={0.9} />
        <pointLight color={color} intensity={3} distance={4} />
      </mesh>

      {/* The trail as a tube */}
      <mesh ref={trailRef}>
        <tubeGeometry />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={0.50}
        />
      </mesh>
    </group>
  );
}

// The grid with particles
function Grid() {
  const gridRef = useRef<THREE.Group>(null);

  // Animate the grid
  useFrame((state) => {
    if (gridRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      gridRef.current.position.y = -2 + pulse;
    }
  });

  // Create paths for particles to follow along grid lines with turns
  const paths = useMemo(() => {
    const gridSize = 50;
    const particlePaths: [number, number, number][][] = [];

    // Path 1: L-shape turn
    particlePaths.push([
      [-25, 0, -25],
      [0, 0, -25],
      [0, 0, 0],
      [0, 0, 25],
    ]);

    // Path 2: Z-shape
    particlePaths.push([
      [-25, 0, 25],
      [0, 0, 25],
      [0, 0, 0],
      [25, 0, 0],
    ]);

    // Path 3: Square loop
    particlePaths.push([
      [-15, 0, -15],
      [15, 0, -15],
      [15, 0, 15],
      [-15, 0, 15],
      [-15, 0, -15], // Complete the loop
    ]);

    // Path 4: Zigzag
    particlePaths.push([
      [-25, 0, 0],
      [-10, 0, 0],
      [-10, 0, 15],
      [10, 0, 15],
      [10, 0, -15],
      [25, 0, -15],
    ]);

    // Path 5: Straight horizontal (classic)
    particlePaths.push([
      [-25, 0, 10],
      [25, 0, 10],
    ]);

    // Path 6: Straight vertical (classic)
    particlePaths.push([
      [10, 0, -25],
      [10, 0, 25],
    ]);

    return particlePaths;
  }, []);

  return (
    <group ref={gridRef}>
      {/* The grid */}
      <gridHelper args={[50, 10, "#006680", "#006680"]}>
        <lineBasicMaterial attach="material" transparent opacity={0.30} />
      </gridHelper>

      {/* Traveling light particles with trails */}
      {paths.slice(0, 3).map((path, i) => (
        <GridParticle
          key={i}
          path={path}
          speed={0.15 + Math.random() * 0.1}
          color={i % 2 === 0 ? "#00d9ff" : "#ff6b00"}
        />
      ))}
    </group>
  );
}

// Main component
export default function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{
          position: [0, 5, 10],
          fov: 60,
        }}
      >
        <ambientLight intensity={0.5} />
        <Grid />
      </Canvas>
    </div>
  );
}
'use client';

import React, { useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { motion, AnimatePresence } from 'motion/react';
import * as THREE from 'three';

// The moving 3D camera effect for digital network
function CameraRig({ isIgnited }: { isIgnited: boolean }) {
  useFrame((state) => {
    // Smooth camera drift
    state.camera.position.z -= isIgnited ? 0.02 : 0.012;
    state.camera.rotation.z += 0.0002;

    // Gentle floating sway
    state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.4;
    state.camera.position.y = Math.cos(state.clock.elapsedTime * 0.15) * 0.4;
  });
  return null;
}

// 3D Network Core Sphere — Pushed strictly to the LEFT side so text never overlaps
function NetworkCore({ isIgnited }: { isIgnited: boolean }) {
  const coreRef = React.useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * (isIgnited ? 0.3 : 0.12);
      coreRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8} position={[-4.2, 0, isIgnited ? -11.5 : -14.5]}>
      <group ref={coreRef} scale={isIgnited ? 1.15 : 0.85}>
        {/* Central Node Sphere */}
        <mesh>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshBasicMaterial 
            color={isIgnited ? "#FF4A17" : "#444444"} 
            wireframe 
            transparent 
            opacity={isIgnited ? 0.9 : 0.25} 
          />
        </mesh>

        {/* Outer Glowing Shell */}
        <mesh scale={1.2}>
          <icosahedronGeometry args={[1.5, 2]} />
          <meshBasicMaterial
            color={isIgnited ? "#FF4A17" : "#555555"}
            wireframe
            transparent
            opacity={isIgnited ? 0.45 : 0.1}
          />
        </mesh>

        {/* Orbit Rings */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.5, 0.012, 16, 100]} />
          <meshBasicMaterial color={isIgnited ? "#FF4A17" : "#444444"} transparent opacity={isIgnited ? 0.8 : 0.15} />
        </mesh>
        <mesh rotation={[0, Math.PI / 4, 0]}>
          <torusGeometry args={[3.2, 0.008, 16, 100]} />
          <meshBasicMaterial color={isIgnited ? "#FF6A38" : "#666666"} transparent opacity={isIgnited ? 0.6 : 0.1} />
        </mesh>
      </group>
    </Float>
  );
}

// 3D Atmospheric Grid
function DigitalGrid({ isIgnited }: { isIgnited: boolean }) {
  return (
    <group position={[-3, -4, -18]}>
      <gridHelper 
        args={[100, 80, isIgnited ? '#FF4A17' : '#222222', '#111111']} 
        position={[0, 0, 0]} 
      />
    </group>
  );
}

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [showIntro, setShowIntro] = useState(true);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  const stages = [
    { title: "ATTENTION", subtitle: "Capturing Market Focus", isIgnited: false },   // Step 1
    { title: "DATA", subtitle: "Analyzing Audience Signals", isIgnited: false },    // Step 2
    { title: "STRATEGY", subtitle: "Architecting Growth Funnels", isIgnited: false }, // Step 3
    { title: "CONVERSION", subtitle: "Optimizing High-ROI Revenue", isIgnited: true }, // Step 4 (Globe Ignites on Left)
    { title: "GROWTH", subtitle: "Predictable Scaling Engine", isIgnited: true },      // Step 5
    { title: "MyAdSphere·", subtitle: "Digital Marketing Agency", isIgnited: true }   // Step 6
  ];

  // Slightly faster stage interval duration (1600ms per phase for ideal cinematic momentum)
  const stageIntervalTime = 1600;

  const handleSkip = React.useCallback(() => {
    sessionStorage.setItem('introPlayed', 'true');
    setShowIntro(false);
    setTimeout(() => onComplete(), 600);
  }, [onComplete]);

  useEffect(() => {
    const totalDuration = stages.length * stageIntervalTime + 800;

    const interval = setInterval(() => {
      setCurrentStageIndex((prev) => {
        if (prev < stages.length - 1) return prev + 1;
        return prev;
      });
    }, stageIntervalTime);

    const completeTimeout = setTimeout(() => {
      handleSkip();
    }, totalDuration);

    return () => {
      clearInterval(interval);
      clearTimeout(completeTimeout);
    };
  }, [stages.length, onComplete, handleSkip]);

  if (!showIntro) return null;

  const currentStage = stages[currentStageIndex];

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black overflow-hidden flex items-center justify-center select-none"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* 3D Atmosphere (Globe Locked on Left) */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 0], fov: 75 }}>
          <color attach="background" args={['#000000']} />
          <ambientLight intensity={0.5} />
          <pointLight position={[-6, 5, 5]} intensity={currentStage.isIgnited ? 2 : 0.8} color={currentStage.isIgnited ? "#FF4A17" : "#ffffff"} />

          <Stars radius={100} depth={50} count={1500} factor={2} saturation={0} fade speed={0.4} />
          <DigitalGrid isIgnited={currentStage.isIgnited} />
          <NetworkCore isIgnited={currentStage.isIgnited} />
          <CameraRig isIgnited={currentStage.isIgnited} />
        </Canvas>
      </div>

      {/* Floating Text Overlay — Positioned on the RIGHT Side */}
      <div className="absolute inset-0 flex items-center justify-end z-[101] px-8 md:px-16 lg:px-24 max-w-7xl mx-auto pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStageIndex}
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3 text-left max-w-xl ml-auto border-l-2 border-[#FF4A17]/40 pl-8"
          >
            <span className="text-xs font-mono font-bold tracking-[0.4em] uppercase text-[#FF4A17] block">
              PHASE 0{currentStageIndex + 1}
            </span>
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none ${
              currentStage.isIgnited ? "text-[#FF4A17] drop-shadow-[0_0_35px_rgba(255,74,23,0.5)]" : "text-white"
            }`}>
              {currentStage.title}
            </h1>
            <p className="text-zinc-400 text-xs md:text-sm font-light tracking-widest uppercase">
              {currentStage.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Skip Button */}
      <div className="absolute top-6 right-6 z-[102]">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={handleSkip}
          className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all backdrop-blur-sm text-xs font-semibold tracking-wider"
        >
          Skip Intro →
        </motion.button>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)] z-10" />
    </motion.div>
  );
}

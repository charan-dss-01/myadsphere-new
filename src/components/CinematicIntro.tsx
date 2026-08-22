'use client';

import React, { useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion, AnimatePresence } from 'motion/react';

// The moving 3D camera effect (Fast, Smooth Cinematic Glide)
function CameraRig() {
  useFrame((state) => {
    // Move camera forward and rotate with 30% faster speed
    state.camera.position.z -= 0.046;
    state.camera.rotation.z += 0.0005;

    // Gentle camera sway
    state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.16) * 1.5;
    state.camera.position.y = Math.cos(state.clock.elapsedTime * 0.16) * 1.5;
  });
  return null;
}

// Futuristic Assistant Avatar (Liquid Motion)
function AssistantAvatar() {
  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2} position={[0, -2, -15]}>
      <Sphere args={[1, 32, 32]}>
        <MeshDistortMaterial
          color="#ffffff"
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.9}
          roughness={0.1}
          distort={0.3}
          speed={1.5}
        />
      </Sphere>

      {/* Decorative rings around assistant */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.01, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
      </mesh>
      <mesh rotation={[0, Math.PI / 4, 0]}>
        <torusGeometry args={[1.8, 0.005, 16, 100]} />
        <meshBasicMaterial color="#aaaaaa" transparent opacity={0.08} />
      </mesh>
    </Float>
  );
}

// 3D Grid/Tunnel lines
function CyberGrid() {
  return (
    <group position={[0, -5, -20]}>
      <gridHelper args={[100, 100, '#333333', '#111111']} position={[0, 0, 0]} />
      <gridHelper args={[100, 100, '#222222', '#0a0a0a']} position={[0, 10, 0]} rotation={[Math.PI, 0, 0]} />
    </group>
  );
}

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [showIntro, setShowIntro] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    "WE ARE",
    "STRATEGISTS",
    "CREATORS",
    "STORYTELLERS",
    "PERFORMANCE\nTHINKERS",
    "GROWTH PARTNERS"
  ];

  // 30% faster text phrase display interval (1.75s)
  const textIntervalTime = 1750;

  const handleSkip = React.useCallback(() => {
    sessionStorage.setItem('introPlayed', 'true');
    setShowIntro(false);
    setTimeout(() => onComplete(), 850); // Smooth 30% faster exit completion
  }, [onComplete]);

  useEffect(() => {
    document.body.classList.add('intro-active');
    const totalDuration = texts.length * textIntervalTime + 850;

    // Text rotation logic
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => {
        if (prev < texts.length - 1) return prev + 1;
        return prev; // Stay on last text phrase
      });
    }, textIntervalTime);

    // Auto complete after total duration
    const completeTimeout = setTimeout(() => {
      handleSkip();
    }, totalDuration);

    return () => {
      document.body.classList.remove('intro-active');
      clearInterval(textInterval);
      clearTimeout(completeTimeout);
    };
  }, [texts.length, onComplete, handleSkip]);

  if (!showIntro) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black overflow-hidden flex items-center justify-center"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.85, ease: "easeInOut" }}
    >
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 0], fov: 75 }}>
          <color attach="background" args={['#000000']} />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#888888" />

          <Stars radius={100} depth={50} count={2000} factor={3} saturation={0} fade speed={0.5} />
          <CyberGrid />
          <AssistantAvatar />
          <CameraRig />
        </Canvas>
      </div>

      {/* Floating Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[101]">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentTextIndex}
            initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, scale: 1.05, filter: "blur(12px)" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-300 to-zinc-600 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] tracking-widest text-center px-6 whitespace-pre-line leading-tight"
          >
            {texts[currentTextIndex]}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Controls Overlay */}
      <div className="absolute top-0 right-0 p-6 flex gap-4 z-[102]">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={handleSkip}
          className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm text-sm tracking-wide"
        >
          Skip →
        </motion.button>
      </div>

      {/* Subtle vignette for cinematic feel */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10" />
    </motion.div>
  );
}
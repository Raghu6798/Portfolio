'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

export const BackgroundBeams = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [0, 1], [15, -15]);
  const rotateY = useTransform(mouseX, [0, 1], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      mouseX.set((e.clientX - rect.left) / width);
      mouseY.set((e.clientY - rect.top) / height);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Animate beams
  useEffect(() => {
    const beams = document.querySelectorAll('.beam');
    beams.forEach((beam, i) => {
      animate(
        beam,
        {
          opacity: [0, 0.3, 0],
        },
        {
          duration: 2 + Math.random() * 3,
          repeat: Infinity,
          delay: i * 0.5,
          ease: 'easeInOut',
        }
      );
    });
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{
        rotateX,
        rotateY,
        perspective: '1000px',
      }}
    >
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="beam absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
          style={{
            height: '1px',
            width: '100%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            transformOrigin: 'left center',
          }}
        />
      ))}
    </motion.div>
  );
};
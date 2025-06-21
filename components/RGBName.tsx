'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface RGBNameProps {
  name: string;
}

export function RGBName({ name }: RGBNameProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      className="relative p-8 text-6xl sm:text-7xl font-bold tracking-tighter"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="absolute inset-0 blur-[100px] opacity-50"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(239, 68, 68), rgb(59, 130, 246), rgb(16, 185, 129))`,
        }}
      />
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        {name}
      </span>
    </motion.div>
  );
}
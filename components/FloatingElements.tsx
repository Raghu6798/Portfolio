'use client';

import { motion } from 'framer-motion';

export function FloatingElements() {
  return (
    <>
      <motion.div
        className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-purple-600/20 blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-pink-600/20 blur-xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-blue-600/20 blur-xl"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-28 h-28 rounded-full bg-purple-600/10 blur-xl"
        animate={{
          y: [0, 25, 0],
          x: [0, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </>
  );
}
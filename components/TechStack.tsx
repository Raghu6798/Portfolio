'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiPython,
  SiPandas,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiStreamlit,
  SiLangchain,
} from 'react-icons/si';

const techStack = [
  { name: 'Python', icon: SiPython },
  { name: 'LangChain', icon: SiLangchain },
  { name: 'Pandas', icon: SiPandas },
  { name: 'Streamlit', icon: SiStreamlit },
  { name: 'PyTorch', icon: SiPytorch },
  { name: 'TensorFlow', icon: SiTensorflow },
  { name: 'Scikit-Learn', icon: SiScikitlearn },
  { name: 'Keras', icon: SiKeras },
];

export function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <motion.div
      className="w-full max-w-4xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h3 className="text-2xl font-semibold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
        Tech Stack
      </h3>
      <motion.div
        className="relative p-8 rounded-2xl backdrop-blur-lg bg-background/20 border border-border"
        whileHover={{ boxShadow: '0 0 30px rgba(139, 92, 246, 0.1)' }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-50 pointer-events-none" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 relative">
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center gap-2 group"
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
              whileHover={{ y: -5 }}
            >
              <tech.icon
                className={`w-8 h-8 transition-all duration-300 ${
                  hoveredTech === null || hoveredTech === tech.name
                    ? 'text-purple-400 scale-110'
                    : 'text-muted-foreground scale-90 opacity-50'
                }`}
              />
              <span
                className={`text-sm transition-all duration-300 ${
                  hoveredTech === null || hoveredTech === tech.name
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

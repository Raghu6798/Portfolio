'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ProfileImage({ 
  src, 
  alt, 
  size = 'md', 
  className = '' 
}: ProfileImageProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
      className={`relative group ${className}`}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200" />
      <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden border-4 border-white/10 group-hover:border-purple-500/50 transition-all duration-300`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`(max-width: 768px) 100vw, ${size === 'lg' ? '384px' : size === 'md' ? '256px' : '128px'}`}
          className="object-cover"
          priority
        />
      </div>
    </motion.div>
  );
}
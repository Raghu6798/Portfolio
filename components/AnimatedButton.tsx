'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps {
  href: string;
  variant?: 'primary' | 'outline';
  children: ReactNode;
  className?: string;
}
export function AnimatedButton({ 
  href, 
  variant = 'primary', 
  children, 
  className 
}: AnimatedButtonProps) {
  if (!href) {
    console.warn("AnimatedButton is missing `href` prop.");
    return null;
  }

  const baseStyles = "px-8 py-3 rounded-full transition-all duration-300 text-sm font-medium";
  const variantStyles = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/20",
    outline: "border border-purple-600 hover:bg-purple-600/10 text-foreground hover:shadow-purple-500/10 hover:shadow-lg"
  };
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Link 
        href={href} 
        className={cn(baseStyles, variantStyles[variant], className)}
      >
        {children}
      </Link>
    </motion.div>
  );
}

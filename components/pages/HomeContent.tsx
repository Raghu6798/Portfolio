"use client";

import { motion } from "framer-motion";
import { Terminal, Sparkle, Github, Linkedin, Mail } from "lucide-react";
import { ProfileImage } from "@/components/ProfileImage";
import { AnimatedButton } from "@/components/AnimatedButton";
import ParticlesBackground from "@/components/ParticlesBackground";
import { FloatingElements } from "@/components/FloatingElements";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { Cover } from "@/components/ui/cover";

export default function HomeContent() {
  const nameWords = [
    { text: "Hi,", className: "text-white dark:text-white" },
    { text: "I'm", className: "text-white dark:text-white" },
    { text: "Raghu", className: "text-blue-500 dark:text-blue-400 font-bold" },
    { text: "Nandan", className: "text-blue-500 dark:text-blue-400 font-bold" },
  ];

  const specializationWords = [
    "LLMs",
    "MLOps", 
    "AI Agents",
    "RAG Systems",
    "LangChain",
    "NLP",
    "Vision-Language Models",
    "Prompt Engineering",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <>
      <ParticlesBackground />
      <FloatingElements />

      {/* Main Content Container */}
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center relative z-20 px-4 py-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Centered Profile Section */}
        <motion.div 
          className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          {/* Profile Photo */}
          <motion.div
            className="relative mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-2xl scale-110 animate-pulse" />
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-1 rounded-full backdrop-blur-sm border border-white/10">
                <ProfileImage 
                  src="/me.jpg" 
                  alt="Raghu Nandan" 
                  size="lg"
                  className="rounded-full shadow-2xl"
                />
              </div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900 shadow-lg animate-pulse" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.div className="space-y-2" variants={itemVariants}>
            <TypewriterEffectSmooth
              words={nameWords}
              className="justify-center text-4xl md:text-6xl lg:text-7xl"
              cursorClassName="bg-blue-500 dark:bg-blue-400"
            />
          </motion.div>

          {/* Title */}
          <motion.div
            className="flex items-center gap-3 text-xl md:text-2xl"
            variants={itemVariants}
          >
            
            <Cover className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text font-bold">
              Generative AI Developer
            </Cover>
         
          </motion.div>

          {/* Specialization */}
          <motion.div
            className="text-lg md:text-2xl lg:text-3xl text-white/90 font-medium max-w-3xl leading-relaxed"
            variants={itemVariants}
          >
            Specializing in{" "}
            <FlipWords
              words={specializationWords}
              className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text font-bold"
              duration={2500}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-light"
            variants={itemVariants}
          >
            Crafting the future of AI-powered applications with{" "}
            <span className="text-blue-400 font-medium">creative solutions</span> and{" "}
            <span className="text-purple-400 font-medium">cutting-edge technology</span>.
            Building intelligent systems that transform ideas into reality.
          </motion.p>

         

          {/* Buttons */}
          <motion.div
            className="flex gap-6 flex-col sm:flex-row mt-8"
            variants={itemVariants}
          >
            <AnimatedButton 
              href="/projects" 
              variant="primary"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="button-bg"
              />
            </AnimatedButton>
            
            <AnimatedButton 
              href="/contact" 
              variant="outline"
              className="group relative border-2 border-slate-600 hover:border-slate-500 text-slate-200 hover:text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm bg-slate-800/30 hover:bg-slate-700/50 transition-all duration-300"
            >
              Contact Me
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Book, Award, Briefcase, GraduationCap } from 'lucide-react';
import { ProfileImage } from '@/components/ProfileImage';
import ParticlesBackground from '@/components/ParticlesBackground';
import { FloatingElements } from '@/components/FloatingElements';

export default function AboutContent() {
  return (
    <>
      <ParticlesBackground />
      <FloatingElements />
      
      <div className="min-h-screen pt-32 pb-12 px-4 md:px-8 max-w-6xl mx-auto relative z-40">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Profile Section */}
          <motion.div 
            className="lg:col-span-1 flex flex-col items-center lg:items-start"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
             <div className="md:hidden mt-16 mb-8">
         <ProfileImage 
  src="/Raghu-removebg-preview.png"
  alt="Raghu Nandan"
  size="md"
/>
        </div>
            
            <motion.h1 
              className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Raghu Nandan
            </motion.h1>
            
            <motion.h2 
              className="text-xl text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Generative AI Developer
            </motion.h2>
            
            <motion.div
              className="flex flex-col gap-3 w-full max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-purple-400">Email:</span>
                <span>raghunandanerukulla@gmail.com</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Bio Section */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative p-8 rounded-2xl backdrop-blur-lg bg-background/20 border border-border h-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-50 pointer-events-none" />
              
              <motion.h3 
                className="flex items-center gap-2 text-2xl font-semibold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Book className="w-5 h-5 text-purple-400" />
                About Me
              </motion.h3>
              
              <motion.div
                className="space-y-6 text-muted-foreground relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p>
                  I'm a passionate Generative AI Developer with over 5 years of experience in creating AI-powered applications. My expertise spans across various AI domains including natural language processing, computer vision, and machine learning.
                </p>
                <p>
                  I specialize in developing AI solutions that solve real-world problems. My approach combines technical expertise with creative problem-solving to deliver applications that are not just functional but also intuitive and user-friendly.
                </p>
                <p>
                  When I'm not coding, you can find me exploring the latest advancements in AI, contributing to open-source projects, or mentoring aspiring developers.
                </p>
              </motion.div>
              
              {/* Experience Section */}
              <motion.div
                className="mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="flex items-center gap-2 text-2xl font-semibold mb-6">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                  Experience
                </h3>
                
                <div className="space-y-8">
                  <div className="border-l-2 border-purple-500 pl-6 relative">
                    <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-1"></div>
                    <h4 className="text-lg font-medium">Senior AI Developer</h4>
                    <p className="text-purple-400">AI Solutions Inc.</p>
                    <p className="text-sm text-muted-foreground">2021 - Present</p>
                    <p className="mt-2">Leading the development of generative AI applications for enterprise clients.</p>
                  </div>
                  
                  <div className="border-l-2 border-purple-500 pl-6 relative">
                    <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-1"></div>
                    <h4 className="text-lg font-medium">Machine Learning Engineer</h4>
                    <p className="text-purple-400">Tech Innovations</p>
                    <p className="text-sm text-muted-foreground">2018 - 2021</p>
                    <p className="mt-2">Developed and deployed machine learning models for predictive analytics.</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Education Section */}
<motion.div
  className="mt-12"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
>
  <h3 className="flex items-center gap-2 text-2xl font-semibold mb-6">
    <GraduationCap className="w-5 h-5 text-purple-400" />
    Education
  </h3>
  
  <div className="border-l-2 border-purple-500 pl-6 relative">
    <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-1"></div>
    <h4 className="text-lg font-medium">B.Tech in Computer Science and Engineering</h4>
    <p className="text-purple-400">Indian Institute of Information Technology, Nagpur</p>
    <p className="text-sm text-muted-foreground">2023 - 2027 (Expected)</p>
    <p className="mt-2">Currently pursuing core subjects in computer science with a focus on artificial intelligence, machine learning, and full-stack development.</p>
  </div>
</motion.div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import Image from 'next/image';
import ParticlesBackground from '@/components/ParticlesBackground';
import { FloatingElements } from '@/components/FloatingElements';

const projects = [
  {
    title: 'GPT-2 from Scratch',
    description: 'Built GPT-2 from scratch, implementing the core mechanics of transformer models and language modeling.',
    image: 'https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg',
    tags: ['Transformers', 'NLP', 'PyTorch'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'EduVerseAI',
    description: 'A Multimodal RAG application for interacting with learning materials like documents, images, and videos. Features a FastAPI backend and a React frontend.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    tags: ['React', 'FastAPI', 'LangChain', 'Multimodal RAG', 'Qdrant','Supabase','Gemini','Langfuse','Redis','Pydantic'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Telugu Language Tokenizer',
    description: 'Custom tokenizer for Telugu, handling complex linguistic morphology and character structures.',
    image: 'https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg',
    tags: ['Tokenizer', 'NLP', 'Indic Languages'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Tool Calling - Deepseek-R1 & Gemini 3',
    description: 'Integrated tool calling for Deepseek-R1 and Gemini 3 to enable advanced AI toolchains.',
    image: 'https://images.pexels.com/photos/3861955/pexels-photo-3861955.jpeg',
    tags: ['Tool Use', 'LLM', 'Gemini', 'Deepseek'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'AI Blog Generator & Agentic Restaurant Bot',
    description: 'Generated blog summaries and built a conversational AI for automating restaurant bookings.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
    tags: ['LangChain', 'Agents', 'NLP', 'Automation'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Paligemma Vision-Language Model',
    description: 'Built Paligemma from scratch using SigLip encoder and sigmoid loss, a custom VLM.',
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg',
    tags: ['Vision-Language', 'CLIP', 'Sigmoid'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Custom MCP Server',
    description: 'Built Model Context Protocol (MCP) server to manage AI model context and model switching.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    tags: ['FastAPI', 'LLM Infra', 'MCP'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'MedScribe Website',
    description: 'Developed MedScribe.in to generate structured prescriptions from doctor-patient conversations.',
    image: 'https://images.pexels.com/photos/4225886/pexels-photo-4225886.jpeg',
    tags: ['Next.js', 'FastAPI', 'Transcription', 'Healthcare AI'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Sparse Mixture of Experts in GPT-2',
    description: 'Optimized GPT-2 by replacing dense layers with sparse Mixture of Experts to boost efficiency.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    tags: ['MoE', 'Efficiency', 'Transformers'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'vLLM & BitNet Inference on Laptop',
    description: 'Ran optimized inference using vLLM and 1-bit BitNet on local hardware.',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg',
    tags: ['BitNet', 'vLLM', 'Inference'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Medical GraphRAG',
    description: 'Built a GraphRAG using Neo4j to handle complex medical queries with structured reasoning.',
    image: 'https://images.pexels.com/photos/7659579/pexels-photo-7659579.jpeg',
    tags: ['Neo4j', 'RAG', 'Healthcare AI'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Gemma 3 to GGUF + Object Detection',
    description: 'Converted Gemma 3 to GGUF and ran object detection via Paligemma + Gemini.',
    image: 'https://images.pexels.com/photos/920381/pexels-photo-920381.jpeg',
    tags: ['GGUF', 'Object Detection', 'LLaMA.cpp'],
    demoLink: '#',
    codeLink: '#'
  }
];

export default function ProjectsContent() {
  return (
    <>
      <ParticlesBackground />
      <FloatingElements />
      
      <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in Large Language Models and Agentic AI Workflows. Each project demonstrates
            different aspects of my technical skills and problem-solving approach.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="rounded-xl overflow-hidden border border-border backdrop-blur-lg bg-background/20 h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.2)" }}
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex gap-2">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background/50 hover:bg-purple-500/20 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background/50 hover:bg-purple-500/20 transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 text-purple-400 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
            <Code className="w-4 h-4" />
            <span>More projects coming soon!</span>
          </div>
        </motion.div>
      </div>
    </>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import Image from 'next/image';
import ParticlesBackground from '@/components/ParticlesBackground';
import { FloatingElements } from '@/components/FloatingElements';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
};

const projects: Project[] = [
  {
    title: 'Cortex: AI Agent BaaS',
    description:
      'Provider-agnostic AI agent builder platform for B2B. Features multi-tenant RBAC (Clerk), MCP server registry, WebRTC voice sessions, and secure E2B sandboxed execution.',
    image:
      'https://portfolio-five-beryl-ompt4e9qtp.vercel.app/cortex.png',
    tags: ['MCP', 'WebRTC', 'RBAC', 'FastAPI', 'E2B', 'Multi-tenant'],
    demoLink: 'https://cortexruntime.info',
  },
  {
    title: 'BlitzCoder',
    description:
      'Autonomous CLI Dev Agent built with LangGraph. Features stateful ReAct loops, semantic memory via HuggingFace, and secure shell execution for codebase scaffolding.',
    image:
      'https://portfolio-five-beryl-ompt4e9qtp.vercel.app/blitzcoder.png',
    tags: ['Python', 'LangGraph', 'PyPI', 'Gemini 2.0', 'RAG'],
    demoLink: 'https://pypi.org/project/blitzcoder/',
  },
  {
    title: 'IANL Agent',
    description:
      'Autonomous Infrastructure-as-Code agent. Transcribes NL requirements and architecture diagrams into production-ready Terraform using Multimodal VLM pipelines.',
    image:
      'https://portfolio-five-beryl-ompt4e9qtp.vercel.app/IANL.png',
    tags: ['Terraform', 'AWS', 'LangGraph', 'Pixtral', 'Postgres'],
  },
  {
    title: 'DevOps Remediation Agent',
    description:
      'Autonomous agent for production incident remediation. Features custom state management, retry logic, and factory-pattern integration for diverse infra stacks.',
    image:
      'https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg',
    tags: ['Kubernetes', 'LangGraph', 'Jenkins', 'Prometheus', 'LLMOps'],
    demoLink:
      'https://github.com/Raghu6798/DevOps_Incidence_Remediation_Agent',
    codeLink:
      'https://github.com/Raghu6798/DevOps_Incidence_Remediation_Agent',
  },
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
            A showcase of my work in Large Language Models and Agentic AI
            Workflows. Each project demonstrates different aspects of my
            technical skills and problem-solving approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group rounded-xl overflow-hidden border border-border backdrop-blur-lg bg-background/20 h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow:
                  '0 10px 30px -10px rgba(139, 92, 246, 0.2)',
              }}
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

              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>

                  <div className="flex gap-2">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-background/50 hover:bg-purple-500/20 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-background/50 hover:bg-purple-500/20 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
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
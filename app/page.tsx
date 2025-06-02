"use client"
import { Spotlight } from "@/components/ui/spotlight"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { Cover } from "@/components/ui/cover"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { SparklesCore } from "@/components/ui/sparkles"
import { FloatingDock } from "@/components/ui/floating-dock"
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import { Timeline } from "@/components/ui/timeline"
import { cn } from "@/lib/utils"
import { Github, Linkedin, Mail, Code, Brain, Zap, BookOpen, ExternalLink, Download, MapPin, Calendar } from "lucide-react"
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconFileText } from "@tabler/icons-react"
import { useState } from "react"

const words = [
  {
    text: "Generative",
    className: "text-yellow-400 dark:text-yellow-400 font-bold",
  },
  {
    text: "AI",
    className: "text-yellow-400 dark:text-yellow-400 font-bold",
  },
  { text: "Developer", className: "text-blue-500 dark:text-blue-400" },
]

const skills = [
  {
    icon: Brain,
    name: "Machine Learning",
    description: "Neural networks, deep learning, and transformer architectures",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-200 dark:from-purple-900 dark:to-purple-800 to-purple-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse"></div>
      </div>
    ),
  },
  {
    icon: Code,
    name: "Full-Stack Development",
    description: "Python, JavaScript, React, Next.js, FastAPI",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-200 dark:from-blue-900 dark:to-blue-800 to-blue-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse"></div>
      </div>
    ),
  },
  {
    icon: Zap,
    name: "LLMs & NLP",
    description: "Large Language Models, tokenization, fine-tuning",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-yellow-200 dark:from-yellow-900 dark:to-yellow-800 to-yellow-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse"></div>
      </div>
    ),
  },
  {
    icon: BookOpen,
    name: "AI Research & Innovation",
    description: "RAG systems, multimodal AI, computer vision",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-200 dark:from-green-900 dark:to-green-800 to-green-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse"></div>
      </div>
    ),
  },
]

const aboutText =
  "As a sophomore diving deep into the world of generative AI, I'm fascinated by the potential of large language models and their applications. Currently honing my skills in machine learning, neural networks, and building AI-powered applications that solve real-world problems. When I'm not coding or researching the latest AI breakthroughs, you'll find me experimenting with new frameworks, contributing to open-source projects, and exploring how AI can make technology more accessible and impactful."

// Enhanced Timeline data with better styling
const timelineData = [
  {
    title: "January 2025",
    content: (
      <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Foundation</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              GPT-2 from Scratch
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Built GPT-2 from scratch, implementing transformer architecture including attention mechanisms, 
              positional encoding, and autoregressive generation. Served as foundational work for understanding 
              large language model architectures.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Jan - Feb 2025",
    content: (
      <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Multimodal AI</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Multi-Modal RAG System
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Developed comprehensive Multi-Modal Retrieval-Augmented Generation system processing images, 
              audio, video and documents. Implemented vector embeddings and semantic search across modalities.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "February 2025",
    content: (
      <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Specialization</span>
          </div>
          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Telugu Language Tokenizer
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Created custom tokenizer for Telugu addressing unique linguistic features and morphological complexity, 
                improving NLP capabilities for low-resource languages.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Tool Calling for Deepseek-R1
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Implemented advanced tool calling capabilities enabling external tool integration for complex 
                reasoning tasks, expanding model functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Feb - Mar 2025",
    content: (
      <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Applications</span>
          </div>
          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                AI Blog Generator
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Built AI-powered blog summarizer using LangChain to generate concise summaries while preserving key 
                information and context from long-form content.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Agentic AI for Restaurant Booking
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Developed conversational AI agent automating restaurant bookings through natural language interactions, 
                demonstrating practical agentic workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "March 2025",
    content: (
      <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-300">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Innovation</span>
          </div>
          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Paligemma from Scratch
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Created vision-language model using SigLip encoder with sigmoid loss, pioneering alternative to 
                traditional CLIP architectures for multimodal understanding.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Startup Contributions
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Joined bootstrapped startup, building custom AI tools including Gemini 3 tool calling integration 
                and LangChain image generation pipelines.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-rose-400 to-fuchsia-400 bg-clip-text text-transparent">
                MCP Server
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Developed custom Model Context Protocol server from scratch to manage AI model context and facilitate 
                efficient inter-model communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "April 2025",
    content: (
      <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
            <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">Breakthroughs</span>
          </div>
          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                GRPO Fine-Tuning
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Fine-tuned GRPO on Microsoft Phi-4 for reasoning tokens, achieving significant improvements in 
                complex reasoning task performance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Medical GraphRAG
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Developed medical knowledge system using Neo4j graph database for efficient retrieval and 
                reasoning over medical information.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                MedScribe Platform
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Built MedScribe.in from scratch - AI system automating medical prescription generation by analyzing 
                doctor-patient conversations, eliminating manual paperwork while maintaining clinical accuracy.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Optimization Work
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Advanced model efficiency through BitNet CPP inference, Gemma 3 GGUF conversion, sparse MoE 
                implementation in GPT-2, and vLLM optimizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

// Enhanced Social Links
const socialLinks = [
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-neutral-300 hover:text-white transition-colors" />,
    href: "https://github.com/raghunandan",
  },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin className="h-full w-full text-neutral-300 hover:text-blue-400 transition-colors" />,
    href: "https://www.linkedin.com/in/raghu-nandan-82a23b283/",
  },
  {
    title: "Email",
    icon: <IconMail className="h-full w-full text-neutral-300 hover:text-green-400 transition-colors" />,
    href: "mailto:raghu@example.com",
  },
  {
    title: "Resume",
    icon: <IconFileText className="h-full w-full text-neutral-300 hover:text-yellow-400 transition-colors" />,
    href: "#resume",
  },
]

// Enhanced Navbar
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div className={cn("fixed top-4 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#hero">Home</HoveredLink>
            <HoveredLink href="#about">About Me</HoveredLink>
            <HoveredLink href="#skills">Skills & Expertise</HoveredLink>
            <HoveredLink href="#timeline">Project Journey</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="GPT-2 from Scratch"
              href="https://github.com/raghunandan"
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop"
              description="Complete transformer implementation with training pipeline."
            />
            <ProductItem
              title="Multi-Modal RAG"
              href="https://github.com/raghunandan"
              src="https://images.unsplash.com/photo-1676299081847-824916de030a?w=500&h=300&fit=crop"
              description="Advanced retrieval system for multiple data types."
            />
            <ProductItem
              title="Telugu Tokenizer"
              href="https://github.com/raghunandan"
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop"
              description="Specialized NLP tokenizer for Telugu language."
            />
            <ProductItem
              title="MedScribe Platform"
              href="https://github.com/raghunandan"
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop"
              description="AI-powered medical prescription automation."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Connect">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://github.com/Raghu6798">GitHub</HoveredLink>
            <HoveredLink href="https://www.linkedin.com/in/raghu-nandan-82a23b283/">LinkedIn</HoveredLink>
            <HoveredLink href="mailto:raghu@example.com">Email</HoveredLink>
            <HoveredLink href="#contact">Get in Touch</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default function RaghuPortfolioHomepage() {
  return (
    <div className="min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <BackgroundBeams className="absolute inset-0 opacity-30" />
      
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(59, 130, 246, 0.5)" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="rgba(147, 51, 234, 0.3)" />

      <div className="max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        {/* Navigation */}
        <Navbar className="top-2" />

        {/* Enhanced Hero Section with Picture */}
        <div id="hero" className="flex flex-col lg:flex-row items-center justify-between min-h-[90vh] px-6 md:px-8 relative pt-20 lg:pt-16">
          <SparklesCore
            id="hero-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1.4}
            particleDensity={80}
            className="absolute inset-0 opacity-70"
            particleColor="#FFFFFF"
          />

          {/* Left Side - Text Content */}
          <div className="flex-1 lg:max-w-2xl relative z-10 text-center lg:text-left mb-12 lg:mb-0">
            <div className="mb-6">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400 text-sm">Hyderabad, India</span>
                <Calendar className="w-5 h-5 text-blue-400 ml-4" />
                <span className="text-gray-400 text-sm">Sophomore • 2025</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 via-blue-100 to-neutral-400 mb-6 leading-tight">
                Hi, I&apos;m <Cover>Raghu Nandan</Cover>
              </h1>
            </div>

            <div className="mb-8">
              <TypewriterEffect words={words} />
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <span className="flex items-center gap-2">
                  View My Journey
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group px-8 py-4 border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white hover:bg-white/5 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </span>
              </button>
            </div>
          </div>

          {/* Right Side - Professional Picture */}
          <div className="flex-1 lg:max-w-lg relative z-10 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-pink-400/10 rounded-3xl blur-lg animate-pulse"></div>
              
              {/* Picture Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[500px] rounded-3xl overflow-hidden border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 shadow-2xl group-hover:shadow-blue-500/25">
                {/* Placeholder for your picture - Replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Replace this div with your actual image */}
                  <img 
                    src="/Raghu.jpg" 
                    alt="Raghu Nandan - AI Developer" 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Professional Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                      <h3 className="text-white font-semibold text-lg mb-1">Raghu Nandan</h3>
                      <p className="text-blue-400 text-sm mb-2">Generative AI Developer</p>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        Available for opportunities
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/30 animate-bounce">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-500/30 animate-bounce delay-1000">
                <Code className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Floating Dock */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <FloatingDock
            items={socialLinks}
            desktopClassName="bg-black/80 backdrop-blur-lg border border-gray-700/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            mobileClassName="bg-black/80 backdrop-blur-lg border border-gray-700/50 shadow-2xl"
          />
        </div>

        {/* Enhanced Project Timeline Section */}
        <div id="timeline" className="relative py-20 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                My AI Journey
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                A chronological exploration of my projects, achievements, and technical growth in artificial intelligence and machine learning.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
            </div>
            <Timeline data={timelineData} />
          </div>
        </div>

        {/* Enhanced Skills Section */}
        <div id="skills" className="px-6 md:px-8 py-20 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-6">
              Skills & Expertise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Technologies and domains I&apos;m passionate about and actively developing
            </p>
          </div>

          <BentoGrid className="max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <BentoGridItem
                key={index}
                title={skill.name}
                description={skill.description}
                header={skill.header}
                icon={<skill.icon className="h-5 w-5 text-neutral-400" />}
                className={cn(
                  "hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border-gray-700/50 hover:border-blue-500/50",
                  index === 3 ? "md:col-span-2" : ""
                )}
              />
            ))}
          </BentoGrid>
        </div>

        {/* Enhanced About Section */}
        <div id="about" className="relative py-24 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
          <div className="text-center relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent mb-8">
              About Me
            </h2>
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <div className="text-white">
                <TextGenerateEffect 
  words={aboutText} 
  className="text-white text-lg leading-relaxed" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Contact Section */}
        <div id="contact" className="px-6 md:px-8 py-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent mb-6">
              Let&apos;s Connect
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Open to collaborations, opportunities, and conversations about AI and technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <CardSpotlight className="h-80 w-full bg-gradient-to-br from-black/80 to-gray-900/80 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-center relative z-20 p-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
                  <Github className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">GitHub</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">Explore my open-source projects and contributions to the AI community</p>
                <a
                  href="https://github.com/raghunandan"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-all duration-300 border border-blue-500/30 hover:border-blue-500/60"
                >
                  View Profile <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </CardSpotlight>

            <CardSpotlight className="h-80 w-full bg-gradient-to-br from-black/80 to-gray-900/80 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-center relative z-20 p-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-500/30">
                  <Linkedin className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">LinkedIn</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">Connect with me professionally and follow my career journey</p>
                <a
                  href="https://www.linkedin.com/in/raghu-nandan-82a23b283/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-lg transition-all duration-300 border border-purple-500/30 hover:border-purple-500/60"
                >
                  Connect <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </CardSpotlight>

            <CardSpotlight className="h-80 w-full bg-gradient-to-br from-black/80 to-gray-900/80 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
              <div className="text-center relative z-20 p-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                  <Mail className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Email</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">Reach out for collaborations, opportunities, or just to chat about AI</p>
                <a
                  href="mailto:raghu@example.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg transition-all duration-300 border border-green-500/30 hover:border-green-500/60"
                >
                  Send Email <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </CardSpotlight>
          </div>
        </div>

        {/* Enhanced Footer */}
  <footer className="px-6 md:px-8 py-12 border-t border-gray-800 mb-20 bg-black/[0.96]">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Raghu Nandan. Building the future with AI.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
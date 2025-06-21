'use client';

import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Github } from 'lucide-react';
import { FaKaggle } from "react-icons/fa";
import { SiHuggingface, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import ParticlesBackground from '@/components/ParticlesBackground';
import { FloatingElements } from '@/components/FloatingElements';

export default function ContactContent() {
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Raghu6798' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/raghu-nandan-82a23b283/' },
    { icon: FaKaggle, label: 'Kaggle', href: "https://www.kaggle.com/raghunandan9605" },
    { icon: SiHuggingface, label: 'HuggingFace', href: "https://huggingface.co/RaghuCourage9605" },
    { icon: SiLeetcode, label: 'Leetcode', href: "https://leetcode.com/u/Raghu6798/" }
  ];

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
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative p-8 rounded-2xl backdrop-blur-lg bg-background/20 border border-border h-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-50 pointer-events-none" />
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    placeholder="Subject"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-white font-medium flex items-center justify-center gap-2"
                  type="submit"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Social + Info */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative p-8 rounded-2xl backdrop-blur-lg bg-background/20 border border-border h-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-50 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">Let's Connect</h3>
                  <p className="text-muted-foreground">
                    I'm always interested in hearing about new projects and opportunities.
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>
                </div>

                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors p-4 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/50"
                    >
                      <link.icon className="w-6 h-6" />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

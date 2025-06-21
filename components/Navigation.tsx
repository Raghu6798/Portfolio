"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Code2, Mail, Layers } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/about", icon: User, label: "About" },
    { href: "/projects", icon: Code2, label: "Projects" },
    { href: "/tech-stack", icon: Layers, label: "Tech Stack" },
    { href: "/contact", icon: Mail, label: "Contact" },
  ]

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        className="flex gap-2 bg-background/80 backdrop-blur-xl px-6 py-3 rounded-full border border-border/50 shadow-2xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
        whileHover={{ scale: 1.02 }}
      >
        {links.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href

          return (
            <Link key={href} href={href} className="relative group">
              <motion.div
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-foreground bg-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="relative flex flex-col items-center gap-1">
                  <Icon className="w-4 h-4" />
                  <span className="text-xs font-medium">{label}</span>
                </div>
              </motion.div>
            </Link>
          )
        })}
      </motion.div>
    </nav>
  )
}

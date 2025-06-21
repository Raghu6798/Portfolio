"use client"

import React, { useState, useEffect, useId } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ContainerTextFlipProps {
  words?: string[]
  interval?: number
  className?: string
  textClassName?: string
  animationDuration?: number
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const textRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, interval)

    return () => clearInterval(intervalId)
  }, [words, interval])

  if (!mounted) return null

  return (
    <motion.p
      animate={{ opacity: 1 }}
      transition={{ duration: animationDuration / 1000 }}
      className={cn(
        "relative inline-block rounded-lg pt-2 pb-3 text-center text-2xl font-bold text-white dark:text-white",
        className,
      )}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("inline-block", textClassName)}
        ref={textRef}
      >
        <motion.div className="inline-block">
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: index * 0.02 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.p>
  )
}

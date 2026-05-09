"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface PhoneMockupProps {
  imageSrc: string
  alt: string
  className?: string
  delay?: number
}

export function PhoneMockup({ imageSrc, alt, className = "", delay = 0 }: PhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`relative ${className}`}
      style={{ perspective: "1000px" }}
    >
      {/* Phone frame */}
      <div className="relative w-[280px] h-[580px] bg-foreground rounded-[3rem] p-2 shadow-2xl">
        {/* Inner bezel */}
        <div className="relative w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground rounded-b-2xl z-20" />
          
          {/* Screen content */}
          <div className="relative w-full h-full">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              className="object-cover object-top"
              sizes="280px"
            />
          </div>
        </div>
      </div>

      {/* Reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-[3rem] pointer-events-none" />
    </motion.div>
  )
}

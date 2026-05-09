"use client"

import { motion } from "framer-motion"
import { CameraIcon, ArchiveIcon, GridIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const qrPatterns = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  x1: Math.random() * 100,
  y1: Math.random() * 100,
  y2: Math.random() * 100,
  duration: 20 + Math.random() * 10,
}))

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating QR patterns - only render after mount to avoid hydration mismatch */}
        {mounted && qrPatterns.map((pattern) => (
          <motion.div
            key={pattern.id}
            className="absolute w-20 h-20 md:w-32 md:h-32 opacity-10"
            initial={{ 
              x: pattern.x1 + "%",
              y: pattern.y1 + "%",
              rotate: 0,
              scale: 0.5
            }}
            animate={{ 
              y: [pattern.y1 + "%", pattern.y2 + "%"],
              rotate: [0, 360],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: pattern.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
              <rect x="0" y="0" width="30" height="30" />
              <rect x="70" y="0" width="30" height="30" />
              <rect x="0" y="70" width="30" height="30" />
              <rect x="10" y="10" width="10" height="10" fill="white" />
              <rect x="80" y="10" width="10" height="10" fill="white" />
              <rect x="10" y="80" width="10" height="10" fill="white" />
              <rect x="40" y="0" width="20" height="10" />
              <rect x="40" y="40" width="20" height="20" />
              <rect x="0" y="40" width="10" height="20" />
              <rect x="70" y="40" width="10" height="30" />
              <rect x="40" y="70" width="30" height="10" />
            </svg>
          </motion.div>
        ))}

        {/* Gradient orbs */}
        {mounted && (
          <>
            <motion.div
              className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                x: [0, -50, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-primary">Proximamente en Android</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
        >
          <span className="text-balance">Escanea. Genera.</span>
          <br />
          <motion.span 
            className="text-primary inline-block"
            animate={{ 
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              background: "linear-gradient(90deg, oklch(0.65 0.20 145), oklch(0.55 0.18 145), oklch(0.65 0.20 145))",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Organiza.
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
        >
          La app definitiva de códigos QR con acciones contextuales inteligentes. 
          Detecta automáticamente URLs, WiFi, contactos y más.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-default" disabled>
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Proximamente en Play Store
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-2xl" asChild>
            <a href="https://github.com/JesusMaVe/QrApp" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Ver en GitHub
            </a>
          </Button>
        </motion.div>

        {/* Feature icons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {[
            { icon: CameraIcon, label: "Escaneo Rápido" },
            { icon: GridIcon, label: "Genera QR" },
            { icon: ArchiveIcon, label: "Historial" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center gap-2"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-card shadow-md flex items-center justify-center border border-border">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}

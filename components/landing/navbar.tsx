"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { QrIcon, GitHubIcon } from "@/components/ui/qr-icon"
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"

const navLinks = [
  { label: "Características", href: "#features" },
  { label: "Beneficios", href: "#benefits" },
  { label: "GitHub", href: "https://github.com/JesusMaVe/QrApp", external: true },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  // Optimized: only update state when crossing threshold
  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldBeScrolled = latest > 50
    // Only trigger re-render when value actually changes
    setIsScrolled(prev => prev !== shouldBeScrolled ? shouldBeScrolled : prev)
  })

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <QrIcon className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground hidden sm:block">QrApplication</span>
          </motion.a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button className="hidden sm:flex rounded-full px-6" asChild>
              <a href="https://github.com/JesusMaVe/QrApp" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="mr-2" />
                Ver Codigo
              </a>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <Cross1Icon className="w-5 h-5" />
              ) : (
                <HamburgerMenuIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden md:hidden"
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary transition-colors text-lg font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <Button className="w-full rounded-full mt-4" asChild>
            <a href="https://github.com/JesusMaVe/QrApp" target="_blank" rel="noopener noreferrer">
              Ver Codigo en GitHub
            </a>
          </Button>
        </div>
      </motion.div>
    </>
  )
}
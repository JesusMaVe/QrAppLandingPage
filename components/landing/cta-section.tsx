"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GitHubIcon, ShieldIcon, LockIcon } from "@/components/ui/qr-icon"

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      
      {/* Animated shapes */}
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* QR Code illustration */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1, bounce: 0.4 }}
            className="w-32 h-32 mx-auto mb-8"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.rect
                x="5" y="5" width="25" height="25"
                className="fill-primary"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              />
              <motion.rect
                x="70" y="5" width="25" height="25"
                className="fill-primary"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              />
              <motion.rect
                x="5" y="70" width="25" height="25"
                className="fill-primary"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              />
              <motion.rect
                x="12" y="12" width="11" height="11"
                className="fill-background"
              />
              <motion.rect
                x="77" y="12" width="11" height="11"
                className="fill-background"
              />
              <motion.rect
                x="12" y="77" width="11" height="11"
                className="fill-background"
              />
              <motion.rect
                x="40" y="40" width="20" height="20"
                className="fill-primary"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              />
              {/* Pattern dots */}
              {[
                [35, 10], [50, 10], [10, 35], [10, 50],
                [35, 35], [70, 40], [40, 70], [85, 45],
                [45, 85], [60, 60], [75, 75], [60, 85]
              ].map(([x, y], i) => (
                <motion.rect
                  key={i}
                  x={x} y={y} width="8" height="8"
                  className="fill-primary/70"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.03 }}
                />
              ))}
            </svg>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance"
          >
            Proximamente en Play Store
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground mb-10 text-pretty"
          >
            Se el primero en probar la app cuando este disponible. Mientras tanto, explora el codigo fuente en GitHub
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="text-lg px-10 py-7 rounded-2xl shadow-lg" asChild>
                <a href="https://github.com/JesusMaVe/QrApp" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="mr-2" />
                  Ver en GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-muted-foreground text-sm"
          >
            <div className="flex items-center gap-2">
              <ShieldIcon />
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <LockIcon />
              <span>Sin Anuncios</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

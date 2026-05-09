"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import {
  RocketIcon,
  LockClosedIcon,
  LayersIcon,
  TimerIcon,
  CheckIcon
} from "@radix-ui/react-icons"

const benefits = [
  {
    icon: RocketIcon,
    title: "Ultra Rápido",
    description: "Escaneo instantáneo con tecnología CameraX optimizada"
  },
  {
    icon: LockClosedIcon,
    title: "Privacidad Total",
    description: "Todos tus datos se guardan localmente en tu dispositivo"
  },
  {
    icon: LayersIcon,
    title: "Sin Publicidad",
    description: "Experiencia limpia sin anuncios molestos"
  },
  {
    icon: TimerIcon,
    title: "Ahorra Tiempo",
    description: "Burst mode para escanear múltiples códigos rápidamente"
  }
]

const stats = [
  { value: "10+", label: "Formatos soportados" },
  { value: "0.5s", label: "Tiempo de escaneo" },
  { value: "100%", label: "Offline" }
]

export function BenefitsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <motion.div
        style={{ scale, opacity }}
        className="relative max-w-6xl mx-auto px-4"
      >
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            La mejor experiencia de escaneo
          </motion.h2>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-card rounded-3xl p-8 shadow-lg border border-border h-full transition-shadow hover:shadow-xl">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                >
                  <benefit.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-primary">
                    {stat.value}
                  </span>
                  {stat.icon && <stat.icon className="w-6 h-6 text-yellow-500" />}
                </div>
                <span className="text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature list */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-4 max-w-3xl mx-auto"
        >
          {[
            "Escaneo de códigos QR y barras",
            "Generador de códigos QR personalizados",
            "Historial con carpetas organizables",
            "Acciones contextuales inteligentes",
            "Haptic feedback para mejor UX",
            "Material Design 3",
            "Modo oscuro",
            "Completamente offline"
          ].map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <CheckIcon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

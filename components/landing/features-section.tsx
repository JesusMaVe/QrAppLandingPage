"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { 
  CameraIcon, 
  LightningBoltIcon, 
  MagicWandIcon, 
  ArchiveIcon,
  GlobeIcon,
  MobileIcon,
  Share1Icon,
  BellIcon
} from "@radix-ui/react-icons"
import { PhoneMockup } from "./phone-mockup"

const features = [
  {
    id: "scanner",
    icon: CameraIcon,
    title: "Escaneo en Tiempo Real",
    description: "Escanea códigos QR, EAN, UPC, Code128, AZTEC y DataMatrix con CameraX. Marco de seguimiento adaptativo y linterna integrada.",
    color: "from-emerald-500 to-green-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-08%20at%2015.46.03%20%281%29-tO1wroCrD6IdSRHNCe5mFNELmPqhym.jpeg"
  },
  {
    id: "burst",
    icon: LightningBoltIcon,
    title: "Burst Mode",
    description: "Escaneo ultrarrápido con auto-guardado y 500ms debounce. Perfecto para inventarios y escaneo masivo de productos.",
    color: "from-green-500 to-teal-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-08%20at%2015.46.03%20%281%29-tO1wroCrD6IdSRHNCe5mFNELmPqhym.jpeg"
  },
  {
    id: "generator",
    icon: MagicWandIcon,
    title: "Generador de QR",
    description: "Crea códigos QR personalizados para URLs, texto, WiFi, contactos y más. Guarda tu historial de QR generados.",
    color: "from-teal-500 to-emerald-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-08%20at%2015.46.03-fTh7JQda1IeXMGfJEmaUFQDPxDp3GM.jpeg"
  },
  {
    id: "history",
    icon: ArchiveIcon,
    title: "Historial Organizado",
    description: "Organiza tus escaneos en carpetas. Renombra, elimina y busca con persistencia local usando DataStore.",
    color: "from-emerald-400 to-green-500",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-08%20at%202.30.45%E2%80%AFp.m.-SJ2qf2TMdKIbPdpBWiFtUUfNYHoj4f.png"
  }
]

const contextActions = [
  { icon: GlobeIcon, label: "URLs", description: "Abre enlaces automáticamente" },
  { icon: MobileIcon, label: "Teléfono", description: "Llama o envía SMS" },
  { icon: Share1Icon, label: "WiFi", description: "Conecta con un toque" },
  { icon: BellIcon, label: "Contactos", description: "Agrega a la agenda" },
]

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex items-center py-20"
      style={{ opacity }}
    >
      <div className={`max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center ${isEven ? "" : "md:flex-row-reverse"}`}>
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={isEven ? "" : "md:order-2"}
        >
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}>
            <feature.icon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {feature.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
            {feature.description}
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap gap-3">
            {["Rápido", "Preciso", "Intuitivo"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          style={{ y }}
          className={`flex justify-center ${isEven ? "md:order-2" : ""}`}
        >
          <PhoneMockup
            imageSrc={feature.image}
            alt={feature.title}
            delay={0.2}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function FeaturesSection() {
  return (
    <section className="relative">
      {/* Section header */}
      <div className="max-w-4xl mx-auto text-center px-4 py-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-primary font-semibold mb-4"
        >
          CARACTERÍSTICAS
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
        >
          Todo lo que necesitas en una sola app
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground text-pretty"
        >
          Escanea, genera y organiza tus códigos QR con las herramientas más potentes
        </motion.p>
      </div>

      {/* Feature cards */}
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} feature={feature} index={index} />
      ))}

      {/* Context Actions Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Acciones Contextuales Inteligentes
          </h3>
          <p className="text-lg text-muted-foreground text-pretty">
            La app detecta automáticamente el tipo de contenido y ejecuta la acción correcta
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contextActions.map((action, index) => (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <action.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{action.label}</h4>
              <p className="text-sm text-muted-foreground">{action.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

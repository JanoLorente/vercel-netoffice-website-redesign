"use client"

import { motion } from "framer-motion"
import { 
  Globe, 
  Download, 
  MapPinned, 
  Sparkles, 
  PiggyBank, 
  Shield, 
  Plug, 
  Cloud 
} from "lucide-react"

const benefits = [
  {
    icon: Globe,
    title: "El navegador es la aplicación",
    description: "Accede desde cualquier dispositivo con un navegador. Sin instalaciones, sin limitaciones.",
  },
  {
    icon: Download,
    title: "Sin instalación PC por PC",
    description: "Despliegue inmediato para toda la organización. Actualizaciones automáticas sin interrupciones.",
  },
  {
    icon: MapPinned,
    title: "Acceso desde cualquier lugar",
    description: "Trabaja desde la oficina, el almacén o en movimiento. Tu ERP siempre disponible.",
  },
  {
    icon: Sparkles,
    title: "IA integrada desde la base",
    description: "No es un añadido, es el core. Cada módulo aprovecha la inteligencia artificial.",
  },
  {
    icon: PiggyBank,
    title: "Reducción de costes",
    description: "Menos infraestructura, menos mantenimiento. ROI demostrable desde el primer mes.",
  },
  {
    icon: Shield,
    title: "Cumplimiento normativo",
    description: "VeriFactu, TicketBAI, SII y todas las normativas actuales y futuras integradas.",
  },
  {
    icon: Plug,
    title: "Integraciones rápidas",
    description: "Conecta con tu ecosistema existente. APIs abiertas y conectores prediseñados.",
  },
  {
    icon: Cloud,
    title: "Cloud Azure o propia",
    description: "Flexibilidad total. Elige cloud llave en mano o despliega en tu infraestructura.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
            <span className="text-sm text-muted-foreground">Ventajas competitivas</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Tecnología que transforma
            <br />
            <span className="gradient-text">tu operación</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Más rápido. Más conectado. Preparado para el futuro.
            Descubre por qué las empresas líderes eligen NetOffice.
          </p>
        </motion.div>

        {/* Benefits grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group p-6 rounded-xl border border-border bg-card/30 hover:bg-card/60 transition-all duration-300 hover:border-primary/30 ${
                index === 0 || index === 3 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

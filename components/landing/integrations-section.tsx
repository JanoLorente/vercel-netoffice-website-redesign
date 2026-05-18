"use client"

import { motion } from "framer-motion"
import { Link2, Zap, ArrowRight } from "lucide-react"

const integrations = [
  { name: "GPS Tracking", category: "Telematica", logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop" },
  { name: "Telematica", category: "Flotas", logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop" },
  { name: "Power BI", category: "Analytics", logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop" },
  { name: "Microsoft Azure", category: "Cloud", logo: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=100&h=100&fit=crop" },
  { name: "SAP", category: "ERP", logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=100&h=100&fit=crop" },
  { name: "Navision", category: "ERP", logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=100&h=100&fit=crop" },
  { name: "AGV Systems", category: "Automatizacion", logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop" },
  { name: "VeriFactu", category: "Fiscal", logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=100&h=100&fit=crop" },
  { name: "TicketBAI", category: "Fiscal", logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=100&h=100&fit=crop" },
  { name: "SII", category: "Fiscal", logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=100&h=100&fit=crop" },
]

const categories = ["Todos", "Telematica", "Cloud", "ERP", "Fiscal", "Automatizacion"]

export function IntegrationsSection() {
  return (
    <section id="integraciones" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      
      {/* Decorative connection lines */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600">
          <motion.path
            d="M 100 300 Q 300 100 500 300 T 900 300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M 100 350 Q 350 500 500 350 T 900 350"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-chart-2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
          />
        </svg>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
            <Link2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Ecosistema conectado</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Se integra con
            <br />
            <span className="gradient-text">todo tu stack</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conecta NetOffice con las herramientas que ya utilizas.
            APIs abiertas y conectores listos para usar.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                index === 0
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Integration cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-muted overflow-hidden mb-4 group-hover:scale-110 transition-transform">
                  <img
                    src={integration.logo}
                    alt={integration.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-foreground text-center">{integration.name}</span>
                <span className="text-xs text-muted-foreground mt-1">{integration.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats and API callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="p-6 rounded-2xl bg-card border border-border text-center">
            <div className="text-4xl font-bold text-foreground mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Conectores predefinidos</div>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border text-center">
            <div className="text-4xl font-bold text-foreground mb-2">REST</div>
            <div className="text-sm text-muted-foreground">API abierta documentada</div>
          </div>
          <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center group cursor-pointer hover:bg-primary/20 transition-colors">
            <div className="flex items-center justify-center gap-2 text-primary mb-2">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Integracion personalizada</span>
            </div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Contacta con nosotros <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

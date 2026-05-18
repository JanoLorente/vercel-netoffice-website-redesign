"use client"

import { motion } from "framer-motion"
import { Cloud, Server, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const cloudFeatures = [
  "Despliegue en Azure llave en mano",
  "Escalabilidad automatica",
  "Backups diarios automaticos",
  "Actualizaciones sin intervencion",
  "SLA garantizado 99.9%",
  "Soporte 24/7 incluido",
]

const onPremiseFeatures = [
  "Control total de datos",
  "Sin dependencia de conexion",
  "Cumplimiento normativo especifico",
  "Integracion con infraestructura existente",
  "Personalizacion avanzada",
  "Licencia perpetua disponible",
]

export function CloudSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />
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
            <Cloud className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Flexibilidad total</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Cloud o infraestructura propia
            <br />
            <span className="gradient-text">Tu decides</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            La misma potencia, diferentes modelos de despliegue.
            Elige lo que mejor se adapte a tu organizacion.
          </p>
        </motion.div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cloud Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-full p-8 rounded-2xl bg-card border border-border shadow-sm group-hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center">
                    <Cloud className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Cloud Azure</h3>
                    <span className="text-sm text-primary font-medium">Recomendado</span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  Popular
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Despliega NetOffice en la nube de Microsoft Azure.
                Sin preocupaciones de infraestructura, maxima disponibilidad.
              </p>

              {/* Visual representation */}
              <div className="mb-6 p-4 rounded-xl bg-muted/50 border border-border">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground">Disponibilidad</span>
                  <span className="text-sm font-semibold text-foreground">99.9%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "99.9%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full"
                  />
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {cloudFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Empezar con Cloud
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* On-Premise Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="relative h-full p-8 rounded-2xl bg-card border border-border shadow-sm group-hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center">
                  <Server className="w-7 h-7 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">On-Premise</h3>
                  <span className="text-sm text-muted-foreground">Tu infraestructura</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Instala NetOffice en tus propios servidores.
                Control total sobre tus datos y tu entorno.
              </p>

              {/* Visual representation */}
              <div className="mb-6 p-4 rounded-xl bg-muted/50 border border-border">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground">Control de datos</span>
                  <span className="text-sm font-semibold text-foreground">100%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-muted-foreground/50 rounded-full"
                  />
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {onPremiseFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full border-border hover:bg-muted">
                Solicitar informacion
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom note with icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 p-6 rounded-2xl bg-muted/30 border border-border">
            {[
              { label: "Multiempresa", icon: "building" },
              { label: "Seguridad Enterprise", icon: "shield" },
              { label: "Todas las funcionalidades", icon: "check" },
              { label: "Migracion incluida", icon: "arrow" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

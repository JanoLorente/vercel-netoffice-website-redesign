"use client"

import { motion } from "framer-motion"
import { Cloud, Server, Check } from "lucide-react"

const cloudFeatures = [
  "Despliegue en Azure llave en mano",
  "Escalabilidad automática",
  "Backups diarios automáticos",
  "Actualizaciones sin intervención",
  "SLA garantizado 99.9%",
  "Soporte 24/7 incluido",
]

const onPremiseFeatures = [
  "Control total de datos",
  "Sin dependencia de conexión",
  "Cumplimiento normativo específico",
  "Integración con infraestructura existente",
  "Personalización avanzada",
  "Licencia perpetua disponible",
]

export function CloudSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
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
            <span className="text-sm text-muted-foreground">Flexibilidad total</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Cloud o infraestructura propia
            <br />
            <span className="gradient-text">Tú decides</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            La misma potencia, diferentes modelos de despliegue.
            Elige lo que mejor se adapte a tu organización.
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
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-full p-8 rounded-2xl border border-border bg-card/30 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <Cloud className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Cloud Azure</h3>
                  <span className="text-sm text-primary">Recomendado</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Despliega NetOffice en la nube de Microsoft Azure.
                Sin preocupaciones de infraestructura, máxima disponibilidad.
              </p>

              <ul className="space-y-3">
                {cloudFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
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
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-border to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-full p-8 rounded-2xl border border-border bg-card/30 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-500/20 to-gray-600/20 flex items-center justify-center">
                  <Server className="w-7 h-7 text-gray-400" />
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

              <ul className="space-y-3">
                {onPremiseFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Ambas opciones incluyen <span className="text-foreground font-medium">multiempresa</span>,{" "}
            <span className="text-foreground font-medium">seguridad enterprise</span> y{" "}
            <span className="text-foreground font-medium">todas las funcionalidades</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

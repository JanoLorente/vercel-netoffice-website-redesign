"use client"

import { motion } from "framer-motion"

const integrations = [
  { name: "GPS", category: "Telemática" },
  { name: "Telemática", category: "Flotas" },
  { name: "Power BI", category: "Analytics" },
  { name: "Azure", category: "Cloud" },
  { name: "SAP", category: "ERP" },
  { name: "Navision", category: "ERP" },
  { name: "AGV", category: "Automatización" },
  { name: "VeriFactu", category: "Fiscal" },
  { name: "TicketBAI", category: "Fiscal" },
  { name: "SII", category: "Fiscal" },
]

export function IntegrationsSection() {
  return (
    <section id="integraciones" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
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
            <span className="text-sm text-muted-foreground">Ecosistema conectado</span>
          </span>
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

        {/* Integration logos grid */}
        <div className="relative">
          {/* Connection lines effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[600px] rounded-full border border-border/30 opacity-30" />
            <div className="absolute w-[400px] h-[400px] rounded-full border border-border/30 opacity-30" />
            <div className="absolute w-[200px] h-[200px] rounded-full border border-primary/30 opacity-50" />
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-300 aspect-square">
                  <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                    <span className="text-lg font-bold text-foreground">{integration.name.slice(0, 2)}</span>
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">{integration.name}</span>
                  <span className="text-xs text-muted-foreground mt-1">{integration.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* API callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card/30">
            <span className="text-sm text-muted-foreground">¿No ves tu integración?</span>
            <span className="text-sm font-medium text-primary">APIs REST abiertas para cualquier conexión</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

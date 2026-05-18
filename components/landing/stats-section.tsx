"use client"

import { motion } from "framer-motion"

const stats = [
  {
    value: "30+",
    label: "Años de experiencia",
    description: "Pioneros en software de transporte desde 1994",
  },
  {
    value: "300+",
    label: "Empresas confían en nosotros",
    description: "Desde pymes hasta grandes flotas internacionales",
  },
  {
    value: "9.500+",
    label: "Conductores activos",
    description: "Utilizando NetOffice Driver cada día",
  },
  {
    value: "150",
    label: "Camiones de media por cliente",
    description: "Preparados para cualquier escala de operación",
  },
]

export function StatsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse, oklch(0.70 0.18 250 / 0.05) 0%, transparent 60%)',
          }}
        />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Números que hablan
            <br />
            <span className="gradient-text">por sí solos</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity" />
              <div className="relative p-8">
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="text-5xl md:text-6xl font-bold gradient-text mb-4"
                >
                  {stat.value}
                </motion.div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

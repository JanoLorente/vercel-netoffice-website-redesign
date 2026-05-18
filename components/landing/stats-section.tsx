"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  {
    value: 30,
    suffix: "+",
    label: "Anos de experiencia",
    description: "Pioneros en software de transporte desde 1994",
  },
  {
    value: 300,
    suffix: "+",
    label: "Empresas confian en nosotros",
    description: "Desde pymes hasta grandes flotas internacionales",
  },
  {
    value: 9500,
    suffix: "+",
    label: "Conductores activos",
    description: "Utilizando NetOffice Driver cada dia",
  },
  {
    value: 150,
    suffix: "",
    label: "Camiones de media por cliente",
    description: "Preparados para cualquier escala de operacion",
  },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const stepValue = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += stepValue
        if (current >= value) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-foreground">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          poster="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/3191572/3191572-uhd_2732_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-1">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgb(47 120 203 / 0.1) 0%, transparent 60%)',
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background text-balance">
            Numeros que hablan
            <br />
            <span className="text-primary-foreground/80">por si solos</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center group"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              
              <div className="relative p-6">
                {/* Large number with animation */}
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-3">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Decorative line */}
                <div className="w-12 h-1 bg-primary mx-auto mb-4 rounded-full" />
                
                <div className="text-lg font-semibold text-background/90 mb-2">{stat.label}</div>
                <div className="text-sm text-background/60">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional visual: Progress bars */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            { label: "Satisfaccion del cliente", value: 98 },
            { label: "Tiempo de implementacion reducido", value: 85 },
            { label: "ROI primer ano", value: 92 },
          ].map((item, index) => (
            <div key={item.label} className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-background/80">{item.label}</span>
                <span className="text-background font-semibold">{item.value}%</span>
              </div>
              <div className="h-2 bg-background/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

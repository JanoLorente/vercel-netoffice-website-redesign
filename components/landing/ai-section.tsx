"use client"

import { motion } from "framer-motion"
import { 
  ScanText, 
  MessageSquare, 
  AlertTriangle, 
  MapPin, 
  Route, 
  Clock 
} from "lucide-react"

const aiFeatures = [
  {
    icon: ScanText,
    title: "OCR con Azure IA",
    description: "Reconocimiento automático de documentos, albaranes, CMR y facturas. Extracción inteligente de datos sin intervención manual.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageSquare,
    title: "Asistentes Contextuales",
    description: "IA conversacional que conoce tu negocio. Consultas en lenguaje natural sobre cualquier dato de tu operación.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: AlertTriangle,
    title: "Anomalías en Tiempo Real",
    description: "Detección proactiva de problemas antes de que ocurran. Alertas inteligentes basadas en patrones históricos.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Route,
    title: "Optimización de Rutas",
    description: "Algoritmos avanzados que calculan las rutas más eficientes considerando tráfico, restricciones y ventanas horarias.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    title: "Geolocalización Avanzada",
    description: "Seguimiento GPS en tiempo real con predicción de llegada y alertas de desviación automáticas.",
    gradient: "from-red-500 to-rose-500",
  },
  {
    icon: Clock,
    title: "Interpretación Tacógrafo",
    description: "Lectura automática de tacógrafos digitales con análisis de tiempos de conducción y descanso.",
    gradient: "from-teal-500 to-cyan-500",
  },
]

export function AISection() {
  return (
    <section id="ia" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px]"
          style={{
            background: 'radial-gradient(circle, oklch(0.70 0.18 250 / 0.08) 0%, transparent 60%)',
          }}
        />
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary">IA Viva</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Inteligencia Artificial
            <br />
            <span className="gradient-text">que trabaja por ti</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            No es un módulo extra. La IA está integrada en el core de NetOffice,
            optimizando cada proceso y anticipando cada necesidad.
          </p>
        </motion.div>

        {/* AI Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-border to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full p-8 rounded-2xl border border-border bg-background/50 backdrop-blur-sm">
                {/* Icon with gradient */}
                <div className="relative mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                    <feature.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <div className={`absolute -inset-2 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20"
        >
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl blur-2xl" />
            <div className="relative glass-card rounded-2xl overflow-hidden p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">IA</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Asistente NetOffice</div>
                  <div className="text-xs text-muted-foreground">Analizando datos en tiempo real</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs text-muted-foreground">U</div>
                  <div className="flex-1 p-4 rounded-xl bg-secondary/50 text-sm text-foreground">
                    ¿Cuáles son las rutas con mayor retraso esta semana?
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-bold">IA</div>
                  <div className="flex-1 p-4 rounded-xl bg-primary/10 border border-primary/20 text-sm text-foreground">
                    <p className="mb-3">He analizado 1,284 entregas de esta semana. Las rutas con mayor retraso son:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-destructive" />
                        Madrid → Barcelona: +45min promedio (congestión A-2)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-chart-4" />
                        Valencia → Sevilla: +28min promedio (obras AP-4)
                      </li>
                    </ul>
                    <p className="mt-3 text-primary">Recomiendo ajustar las ventanas de entrega o usar rutas alternativas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

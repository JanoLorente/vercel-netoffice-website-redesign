"use client"

import { motion } from "framer-motion"
import { 
  ScanText, 
  MessageSquare, 
  AlertTriangle, 
  MapPin, 
  Route, 
  Clock,
  Brain,
  Zap
} from "lucide-react"

const aiFeatures = [
  {
    icon: ScanText,
    title: "OCR con Azure IA",
    description: "Reconocimiento automatico de documentos, albaranes, CMR y facturas.",
    stat: "99.2%",
    statLabel: "precision",
  },
  {
    icon: MessageSquare,
    title: "Asistentes Contextuales",
    description: "IA conversacional que conoce tu negocio. Consultas en lenguaje natural.",
    stat: "24/7",
    statLabel: "disponible",
  },
  {
    icon: AlertTriangle,
    title: "Anomalias en Tiempo Real",
    description: "Deteccion proactiva de problemas antes de que ocurran.",
    stat: "-67%",
    statLabel: "incidencias",
  },
  {
    icon: Route,
    title: "Optimizacion de Rutas",
    description: "Algoritmos avanzados que calculan las rutas mas eficientes.",
    stat: "23%",
    statLabel: "ahorro combustible",
  },
  {
    icon: MapPin,
    title: "Geolocalizacion Avanzada",
    description: "Seguimiento GPS en tiempo real con prediccion de llegada.",
    stat: "< 3m",
    statLabel: "precision GPS",
  },
  {
    icon: Clock,
    title: "Interpretacion Tacografo",
    description: "Lectura automatica con analisis de tiempos de conduccion.",
    stat: "100%",
    statLabel: "compliance",
  },
]

export function AISection() {
  return (
    <section id="ia" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      
      {/* Decorative grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground font-medium">IA Viva</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Inteligencia Artificial
            <br />
            <span className="gradient-text">que trabaja por ti</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            No es un modulo extra. La IA esta integrada en el core de NetOffice,
            optimizando cada proceso y anticipando cada necesidad.
          </p>
        </motion.div>

        {/* AI Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                {/* Header with icon and stat */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">{feature.stat}</div>
                    <div className="text-xs text-muted-foreground">{feature.statLabel}</div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Demo Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20"
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-chart-2/5 to-primary/5 rounded-3xl blur-2xl" />
            
            <div className="relative glass-card rounded-2xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left: Chat Interface */}
                <div className="p-8 border-r border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Asistente NetOffice</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Analizando en tiempo real
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {/* User message */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">U</div>
                      <div className="flex-1 p-4 rounded-2xl bg-muted text-sm text-foreground">
                        ¿Cuales son las rutas con mayor retraso esta semana?
                      </div>
                    </div>
                    
                    {/* AI response */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 p-4 rounded-2xl bg-primary/5 border border-primary/10 text-sm">
                        <p className="text-foreground mb-3">He analizado 1,284 entregas. Las rutas con mayor retraso:</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-destructive" />
                            Madrid - Barcelona: +45min (congestion A-2)
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-chart-4" />
                            Valencia - Sevilla: +28min (obras AP-4)
                          </div>
                        </div>
                        <p className="mt-3 text-primary font-medium">Recomiendo ajustar ventanas de entrega.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Data Visualization */}
                <div className="p-8 bg-muted/20">
                  <div className="text-sm font-semibold text-foreground mb-6">Analisis en tiempo real</div>
                  
                  {/* Mini chart */}
                  <div className="bg-card rounded-xl p-4 border border-border mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-muted-foreground">Retrasos por ruta</span>
                      <span className="text-xs text-destructive font-medium">Esta semana</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { route: "MAD-BCN", delay: 45, max: 60 },
                        { route: "VAL-SEV", delay: 28, max: 60 },
                        { route: "BIO-MAD", delay: 12, max: 60 },
                      ].map((item, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">{item.route}</span>
                            <span className="text-foreground font-medium">+{item.delay}min</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(item.delay / item.max) * 100}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                              className={`h-full rounded-full ${
                                item.delay > 40 ? 'bg-destructive' : item.delay > 20 ? 'bg-chart-4' : 'bg-chart-2'
                              }`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Precisión IA", value: "99.2%" },
                      { label: "Tiempo resp.", value: "0.3s" },
                    ].map((metric, i) => (
                      <div key={i} className="bg-card rounded-xl p-4 border border-border text-center">
                        <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
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

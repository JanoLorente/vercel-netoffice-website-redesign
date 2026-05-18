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
  Cloud,
  Check
} from "lucide-react"

const benefits = [
  {
    icon: Globe,
    title: "El navegador es la aplicacion",
    description: "Accede desde cualquier dispositivo con un navegador. Sin instalaciones, sin limitaciones.",
    highlight: "100% Web",
  },
  {
    icon: Download,
    title: "Sin instalacion PC por PC",
    description: "Despliegue inmediato para toda la organizacion. Actualizaciones automaticas sin interrupciones.",
    highlight: "Deploy instantaneo",
  },
  {
    icon: MapPinned,
    title: "Acceso desde cualquier lugar",
    description: "Trabaja desde la oficina, el almacen o en movimiento. Tu ERP siempre disponible.",
    highlight: "Movilidad total",
  },
  {
    icon: Sparkles,
    title: "IA integrada desde la base",
    description: "No es un anadido, es el core. Cada modulo aprovecha la inteligencia artificial.",
    highlight: "IA nativa",
  },
  {
    icon: PiggyBank,
    title: "Reduccion de costes",
    description: "Menos infraestructura, menos mantenimiento. ROI demostrable desde el primer mes.",
    highlight: "-40% TCO",
  },
  {
    icon: Shield,
    title: "Cumplimiento normativo",
    description: "VeriFactu, TicketBAI, SII y todas las normativas actuales y futuras integradas.",
    highlight: "Compliance 100%",
  },
  {
    icon: Plug,
    title: "Integraciones rapidas",
    description: "Conecta con tu ecosistema existente. APIs abiertas y conectores predisenados.",
    highlight: "50+ conectores",
  },
  {
    icon: Cloud,
    title: "Cloud Azure o propia",
    description: "Flexibilidad total. Elige cloud llave en mano o despliega en tu infraestructura.",
    highlight: "Tu eleccion",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
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
            <Check className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Ventajas competitivas</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Tecnologia que transforma
            <br />
            <span className="gradient-text">tu operacion</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Mas rapido. Mas conectado. Preparado para el futuro.
            Descubre por que las empresas lideres eligen NetOffice.
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
              className={`group ${index === 0 || index === 3 || index === 6 || index === 7 ? 'lg:col-span-2' : ''}`}
            >
              <div className={`h-full p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 ${
                index === 0 || index === 3 ? 'flex flex-col md:flex-row md:items-center gap-6' : ''
              }`}>
                {/* Visual for featured cards */}
                {(index === 0 || index === 3) && (
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <benefit.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                )}
                
                <div className="flex-1">
                  {/* Icon for regular cards */}
                  {index !== 0 && index !== 3 && (
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{benefit.description}</p>
                  
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {benefit.highlight}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual comparison chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground">Comparativa de rendimiento</h3>
            <p className="text-muted-foreground mt-2">NetOffice vs ERP tradicional</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { label: "Tiempo de implementacion", netoffice: 85, traditional: 35 },
              { label: "Productividad del equipo", netoffice: 92, traditional: 60 },
              { label: "Coste total de propiedad", netoffice: 40, traditional: 100 },
              { label: "Tiempo de formacion", netoffice: 75, traditional: 30 },
            ].map((item, index) => (
              <div key={item.label} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground font-medium">{item.label}</span>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-primary font-medium">NetOffice</span>
                      <span className="text-xs text-muted-foreground">{item.netoffice}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.netoffice}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-muted-foreground font-medium">ERP Tradicional</span>
                      <span className="text-xs text-muted-foreground">{item.traditional}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.traditional}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                        className="h-full bg-muted-foreground/30 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

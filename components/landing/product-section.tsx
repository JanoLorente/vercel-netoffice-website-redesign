"use client"

import { motion } from "framer-motion"
import { 
  Truck, 
  Calculator, 
  Wrench, 
  Package, 
  FileText, 
  Smartphone, 
  Users, 
  BarChart3, 
  Sparkles 
} from "lucide-react"

const modules = [
  {
    icon: Truck,
    title: "Tráfico TMS",
    description: "Gestión integral de transporte con optimización de rutas y seguimiento en tiempo real.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Calculator,
    title: "Contabilidad",
    description: "Control financiero completo con facturación automática y reporting avanzado.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Wrench,
    title: "Taller Flota",
    description: "Mantenimiento predictivo y gestión de reparaciones con IA.",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: Package,
    title: "SGA / Stock",
    description: "Almacén inteligente con gestión de inventario y trazabilidad total.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: FileText,
    title: "Gestión Documental OCR",
    description: "Digitalización automática con reconocimiento de documentos por IA Azure.",
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    icon: Smartphone,
    title: "NetOffice Driver",
    description: "App móvil para conductores con firma digital y comunicación en tiempo real.",
    color: "from-teal-500/20 to-cyan-500/20",
  },
  {
    icon: Users,
    title: "RRHH / Extranet",
    description: "Gestión de personal, nóminas y portal de empleados integrado.",
    color: "from-indigo-500/20 to-violet-500/20",
  },
  {
    icon: BarChart3,
    title: "Power BI",
    description: "Business Intelligence con dashboards personalizables y KPIs en tiempo real.",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Sparkles,
    title: "IA Integrada",
    description: "Inteligencia artificial en el core: predicciones, anomalías y optimización continua.",
    color: "from-primary/30 to-primary/10",
  },
]

export function ProductSection() {
  return (
    <section id="producto" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
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
            <span className="text-sm text-muted-foreground">Plataforma completa</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Todo el potencial del ERP,
            <br />
            <span className="gradient-text">ahora en el navegador</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Una plataforma unificada que conecta cada área de tu operación logística.
            Módulos especializados que trabajan juntos de forma inteligente.
          </p>
        </motion.div>

        {/* Modules grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="group h-full p-6 rounded-xl border border-border bg-card/50 hover:bg-card/80 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <module.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{module.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{module.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

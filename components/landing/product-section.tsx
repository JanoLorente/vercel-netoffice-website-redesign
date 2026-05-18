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
    title: "Trafico TMS",
    description: "Gestion integral de transporte con optimizacion de rutas y seguimiento en tiempo real.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
    stats: { value: "247", label: "Vehiculos activos" }
  },
  {
    icon: Calculator,
    title: "Contabilidad",
    description: "Control financiero completo con facturacion automatica y reporting avanzado.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop",
    stats: { value: "98%", label: "Automatizado" }
  },
  {
    icon: Wrench,
    title: "Taller Flota",
    description: "Mantenimiento predictivo y gestion de reparaciones con IA.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop",
    stats: { value: "-35%", label: "Costes mantenimiento" }
  },
  {
    icon: Package,
    title: "SGA / Stock",
    description: "Almacen inteligente con gestion de inventario y trazabilidad total.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop",
    stats: { value: "99.9%", label: "Precision inventario" }
  },
  {
    icon: FileText,
    title: "Gestion Documental OCR",
    description: "Digitalizacion automatica con reconocimiento de documentos por IA Azure.",
    image: "https://images.unsplash.com/photo-1568234928966-359c35dd8327?w=400&h=300&fit=crop",
    stats: { value: "< 2s", label: "Tiempo procesado" }
  },
  {
    icon: Smartphone,
    title: "NetOffice Driver",
    description: "App movil para conductores con firma digital y comunicacion en tiempo real.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop",
    stats: { value: "9.5K+", label: "Conductores activos" }
  },
  {
    icon: Users,
    title: "RRHH / Extranet",
    description: "Gestion de personal, nominas y portal de empleados integrado.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    stats: { value: "100%", label: "Self-service" }
  },
  {
    icon: BarChart3,
    title: "Power BI",
    description: "Business Intelligence con dashboards personalizables y KPIs en tiempo real.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    stats: { value: "50+", label: "KPIs predefinidos" }
  },
  {
    icon: Sparkles,
    title: "IA Integrada",
    description: "Inteligencia artificial en el core: predicciones, anomalias y optimizacion continua.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    stats: { value: "24/7", label: "Analisis continuo" }
  },
]

export function ProductSection() {
  return (
    <section id="producto" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
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
            <span className="text-sm text-muted-foreground">Plataforma completa</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Todo el potencial del ERP,
            <br />
            <span className="gradient-text">ahora en el navegador</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Una plataforma unificada que conecta cada area de tu operacion logistica.
            Modulos especializados que trabajan juntos de forma inteligente.
          </p>
        </motion.div>

        {/* Modules grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group ${index === 0 || index === 8 ? 'lg:col-span-2' : ''}`}
            >
              <div className="h-full rounded-2xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                {/* Image header for featured cards */}
                {(index === 0 || index === 8) && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={module.image}
                      alt={module.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/90 flex items-center justify-center">
                          <module.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{module.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  {/* Header for non-featured cards */}
                  {index !== 0 && index !== 8 && (
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <module.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-foreground">{module.stats.value}</div>
                        <div className="text-xs text-muted-foreground">{module.stats.label}</div>
                      </div>
                    </div>
                  )}
                  
                  {index !== 0 && index !== 8 && (
                    <h3 className="text-lg font-semibold text-foreground mb-2">{module.title}</h3>
                  )}
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">{module.description}</p>
                  
                  {/* Stats for featured cards */}
                  {(index === 0 || index === 8) && (
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Rendimiento</span>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-foreground">{module.stats.value}</span>
                        <span className="text-xs text-muted-foreground">{module.stats.label}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

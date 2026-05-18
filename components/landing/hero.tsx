"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, TrendingUp, Package, Clock } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://netoffice.es/video.mp4"
            type="video/mp4"
          />
        </video>
        {/* Blue tint overlay */}
        <div className="absolute inset-0 bg-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
      </div>

      {/* Hero gradient overlay */}
      <div className="hero-gradient absolute inset-0 z-1" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden z-1">
        <motion.div
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-[15%] w-80 h-80 rounded-full bg-chart-2/5 blur-3xl"
          animate={{ y: [0, 20, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground font-medium">Con IA integrada desde la base</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance"
            >
              <span className="text-foreground">Nueva era.</span>
              <br />
              <span className="gradient-text">El futuro del</span>
              <br />
              <span className="gradient-text">transporte</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl text-pretty"
            >
              El ERP mas avanzado para transporte y logistica. 
              Mas rapido. Mas conectado. Con IA viva que transforma tu operacion.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base shadow-lg shadow-primary/25">
                Solicitar demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary px-8 h-14 text-base">
                <Play className="mr-2 w-5 h-5" />
                Ver plataforma
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-8"
            >
              {[
                { value: "30+", label: "Anos" },
                { value: "300+", label: "Empresas" },
                { value: "9.5K+", label: "Conductores" },
              ].map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Dashboard Visual with Charts */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Dashboard Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 rounded-3xl blur-2xl" />
              
              <div className="relative glass-card rounded-2xl overflow-hidden shadow-2xl">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/70" />
                    <div className="w-3 h-3 rounded-full bg-chart-4/70" />
                    <div className="w-3 h-3 rounded-full bg-chart-2/70" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1.5 rounded-lg bg-background text-xs text-muted-foreground border border-border">
                      app.netoffice.es
                    </div>
                  </div>
                </div>
                
                {/* Dashboard content */}
                <div className="p-6 bg-gradient-to-b from-card to-muted/20">
                  {/* KPI Cards */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { icon: TrendingUp, label: "Entregas hoy", value: "1,284", change: "+12%", color: "text-green-600" },
                      { icon: Package, label: "Flota activa", value: "247", change: "98%", color: "text-primary" },
                      { icon: Clock, label: "Tiempo medio", value: "2.4h", change: "-8%", color: "text-chart-2" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="p-4 rounded-xl bg-card border border-border shadow-sm"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <item.icon className="w-4 h-4 text-muted-foreground" />
                          <span className={`text-xs font-medium ${item.color}`}>{item.change}</span>
                        </div>
                        <div className="text-2xl font-bold text-foreground">{item.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Chart Area */}
                  <div className="rounded-xl bg-card border border-border p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-foreground">Rendimiento semanal</span>
                      <span className="text-xs text-muted-foreground">Ultimos 7 dias</span>
                    </div>
                    <div className="h-32 flex items-end gap-2">
                      {[65, 45, 80, 55, 90, 70, 95].map((height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 0.6, delay: 0.7 + index * 0.08, ease: "easeOut" }}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-primary to-primary/60 relative group"
                        >
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                            {height}%
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>Lun</span>
                      <span>Mar</span>
                      <span>Mie</span>
                      <span>Jue</span>
                      <span>Vie</span>
                      <span>Sab</span>
                      <span>Dom</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute -left-12 top-1/4 glass-card rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">+23%</div>
                  <div className="text-xs text-muted-foreground">Eficiencia</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Notification */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="absolute -right-8 bottom-1/4 glass-card rounded-xl p-4 shadow-xl max-w-[200px]"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-medium text-foreground">IA Optimizacion</div>
                  <div className="text-xs text-muted-foreground mt-0.5">3 rutas mejoradas</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}

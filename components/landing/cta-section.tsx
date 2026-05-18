"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, CheckCircle2, Play } from "lucide-react"

export function CTASection() {
  return (
    <section id="contacto" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/4429107/4429107-uhd_2732_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/95 to-foreground/90" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <div className="glass-card-dark rounded-3xl p-8 md:p-12 lg:p-16 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
          >
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm text-background font-medium">Demo personalizada gratuita</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-background text-balance mb-6"
          >
            Hecho para empresas
            <br />
            <span className="text-primary">que no pueden parar</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto mb-10 text-pretty"
          >
            Unete a mas de 300 empresas que ya confian en NetOffice 
            para gestionar su operacion logistica. Es hora de dar el salto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base shadow-lg shadow-primary/25">
              Solicitar demo gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-background/30 bg-background/5 hover:bg-background/10 text-background px-8 h-14 text-base">
              <MessageSquare className="mr-2 w-5 h-5" />
              Hablar con un experto
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-background/60"
          >
            {[
              "Sin compromiso",
              "Demo personalizada",
              "Respuesta en 24h",
              "Soporte en espanol",
            ].map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {item}
              </span>
            ))}
          </motion.div>

          {/* Company logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-8 border-t border-background/10"
          >
            <p className="text-xs text-background/40 mb-6">Empresas que confian en nosotros</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {["Transportes Garcia", "Logistica Express", "MoviCarga", "TransEuropa", "FleetMax"].map((company, index) => (
                <div key={index} className="text-background/60 text-sm font-medium">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

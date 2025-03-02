"use client"

import Link from "next/link"
import { Brain, Database, Factory, GraduationCap } from "lucide-react"
import { useTranslations } from "@/lib/i18n"

const services = [
  {
    key: "ai-solutions",
    icon: Brain,
    href: "/services/ai-solutions",
    features: ["agents", "integration", "analytics", "vision"]
  },
  {
    key: "data-platforms",
    icon: Database,
    href: "/services/data-platforms",
    features: ["analytics", "integration", "dashboards", "models"]
  },
  {
    key: "iiot-mes",
    icon: Factory,
    href: "/services/iiot-mes",
    features: ["sensors", "monitoring", "maintenance", "quality"]
  },
  {
    key: "digital-academy",
    icon: GraduationCap,
    href: "/services/digital-academy",
    features: ["learning", "labs", "mentoring", "certification"]
  }
]

export function ServicesSection() {
  const { t } = useTranslations()

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('services.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.key}
              href={service.href}
              className="group relative bg-background/80 backdrop-blur-sm rounded-xl transition-all duration-300
                after:absolute after:-inset-px after:rounded-[calc(0.75rem+1px)] after:bg-gradient-to-b after:from-primary/30 after:to-transparent after:opacity-0 after:transition-opacity
                hover:after:opacity-100
                hover:shadow-[0_0_25px_-5px_rgba(52,211,153,0.3)]"
            >
              <div className="relative p-8">
                <div className="mb-6">
                  <div className="relative inline-block">
                    <service.icon className="h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                    <div className="absolute inset-0 animate-ping bg-primary/20 rounded-full" style={{ animationDuration: '3s' }} />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-muted-foreground mb-8">
                  {t(`services.${service.key}.description`)}
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {service.features.map((feature) => (
                    <div 
                      key={feature}
                      className="relative bg-muted/50 rounded-lg p-4 transition-all duration-300
                        hover:bg-primary/5 group/feature"
                    >
                      <h4 className="font-medium text-primary mb-1 group-hover/feature:translate-x-2 transition-transform">
                        {t(`services.${service.key}.features.${feature}.title`)}
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover/feature:translate-x-2 transition-transform">
                        {t(`services.${service.key}.features.${feature}.description`)}
                      </p>
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/30 rounded-l-lg 
                        group-hover/feature:h-full group-hover/feature:bg-primary transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
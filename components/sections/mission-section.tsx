"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Users, Lightbulb, Shield } from "lucide-react"
import { useTranslations } from "@/lib/i18n"

const values = [
  {
    icon: Target,
    titleKey: "values.innovation.title",
    descriptionKey: "values.innovation.description"
  },
  {
    icon: Users,
    titleKey: "values.partnership.title",
    descriptionKey: "values.partnership.description"
  },
  {
    icon: Lightbulb,
    titleKey: "values.excellence.title",
    descriptionKey: "values.excellence.description"
  },
  {
    icon: Shield,
    titleKey: "values.reliability.title",
    descriptionKey: "values.reliability.description"
  }
]

export function MissionSection() {
  const { t } = useTranslations()

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('mission.title')}</h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('mission.description')}
            </p>
            <Button asChild>
              <a href="#contact">
                {t('mission.cta')} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.titleKey}
                className="group bg-background/80 backdrop-blur-sm rounded-xl p-6 transition-all duration-300
                  before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-primary/5 before:to-primary/10 before:opacity-0 before:transition-opacity
                  hover:before:opacity-100
                  after:absolute after:-inset-px after:rounded-[calc(0.75rem+1px)] after:bg-gradient-to-b after:from-primary/30 after:to-transparent after:opacity-0 after:transition-opacity
                  hover:after:opacity-100
                  hover:shadow-[0_0_25px_-5px_rgba(52,211,153,0.3)]
                  relative"
              >
                <value.icon className="h-8 w-8 text-primary mb-4 transition-transform group-hover:scale-110" />
                <h3 className="font-semibold mb-2">{t(value.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(value.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Cpu, Network, LineChart } from "lucide-react"
import { useTranslations } from "@/lib/i18n"

const courses = [
  {
    title: "Building RAG Systems",
    description: "Learn to build production-ready Retrieval Augmented Generation systems for enterprise applications",
    duration: "8 weeks",
    level: "Advanced",
    icon: BookOpen,
    topics: ["Vector Databases", "LLM Integration", "Context Window Optimization", "Response Generation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop"
  },
  {
    title: "Agentic AI for Business",
    description: "Implement autonomous AI agents to automate complex business processes and decision-making",
    duration: "10 weeks",
    level: "Advanced",
    icon: Cpu,
    topics: ["Agent Architecture", "Task Planning", "Memory Systems", "Multi-Agent Coordination"],
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=1932&auto=format&fit=crop"
  },
  {
    title: "Industrial IIoT Best Practices",
    description: "Master the implementation of IIoT solutions in industrial environments following industry standards",
    duration: "12 weeks",
    level: "Intermediate",
    icon: Network,
    topics: ["Sensor Networks", "Edge Computing", "Data Collection", "Predictive Maintenance"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1740&auto=format&fit=crop"
  },
  {
    title: "Advanced Data Analytics",
    description: "Learn advanced techniques for industrial data analysis and visualization",
    duration: "8 weeks",
    level: "Advanced",
    icon: LineChart,
    topics: ["Statistical Analysis", "Machine Learning", "Time Series Analysis", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop"
  }
]

export function AcademySection() {
  const { t } = useTranslations()

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('academy.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('academy.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {courses.map((course) => (
            <a
              key={course.title}
              href="https://academy.cognitechx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-background/80 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300
                hover:shadow-[0_0_25px_-5px_rgba(52,211,153,0.3)]"
            >
              <div className="aspect-video relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <course.icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{course.duration}</span>
                    <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <a
              href="https://academy.cognitechx.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('academy.cta')} <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
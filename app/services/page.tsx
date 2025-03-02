import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Brain, Database, Factory, GraduationCap } from "lucide-react"

const services = [
  {
    title: "AI Solutions",
    description: "Leverage machine learning and predictive analytics to automate processes and drive intelligent decision-making.",
    icon: Brain,
    href: "/services/ai-solutions",
    features: [
      "Predictive Analytics",
      "Process Automation",
      "Computer Vision",
      "NLP Solutions"
    ]
  },
  {
    title: "Data Platform",
    description: "Transform raw data into actionable insights with our comprehensive data integration and analytics platform.",
    icon: Database,
    href: "/services/data-platforms",
    features: [
      "Data Integration",
      "Real-time Analytics",
      "Visual Dashboards",
      "Predictive Models"
    ]
  },
  {
    title: "IIOT & MES",
    description: "Connect and optimize your industrial operations with our advanced IoT and manufacturing solutions. Streamline processes and enhance productivity.",
    icon: Factory,
    href: "/services/iiot-mes",
    features: [
      "Smart Sensors",
      "Real-time Monitoring",
      "Predictive Maintenance",
      "Process Optimization"
    ]
  },
  {
    title: "Digital Academy",
    description: "Empower your team with cutting-edge digital skills through our comprehensive training programs. Transform your workforce for the digital age.",
    icon: GraduationCap,
    href: "/services/digital-academy",
    features: [
      "Custom Curricula",
      "Hands-on Labs",
      "Expert Mentoring",
      "Certification Paths"
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-12">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive range of industrial technology solutions designed to 
            transform your business and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative bg-background/80 backdrop-blur-sm rounded-xl p-6 transition-all duration-300
                before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-primary/5 before:to-primary/10 before:opacity-0 before:transition-opacity
                hover:before:opacity-100
                after:absolute after:-inset-px after:rounded-[calc(0.75rem+1px)] after:bg-gradient-to-b after:from-primary/30 after:to-transparent after:opacity-0 after:transition-opacity
                hover:after:opacity-100
                hover:shadow-[0_0_25px_-5px_rgba(52,211,153,0.3)]"
            >
              <div className="relative">
                <div className="mb-4">
                  <div className="relative inline-block">
                    <service.icon className="h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                    <div className="absolute inset-0 animate-ping bg-primary/20 rounded-full" style={{ animationDuration: '3s' }} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 group-hover:animate-pulse" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
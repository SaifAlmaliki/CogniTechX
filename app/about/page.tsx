import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Target, Users, Lightbulb, Shield } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We constantly push the boundaries of what's possible in industrial technology."
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We build lasting relationships by truly understanding our clients' needs."
  },
  {
    icon: Lightbulb,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do."
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Our solutions are built to be dependable and secure."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Driving Industrial Innovation
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              CogniTechX is at the forefront of industrial digital transformation, 
              combining cutting-edge technology with deep industry expertise to help 
              businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We empower industries to embrace digital transformation through innovative 
                IIoT solutions, advanced AI capabilities, and comprehensive training programs. 
                Our goal is to help businesses become more efficient, sustainable, and 
                competitive in the global market.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Work with Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-background rounded-lg p-6 shadow-lg"
                >
                  <value.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-card rounded-lg p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted" />
              <h3 className="text-xl font-semibold mb-2">Dr. Sarah Schmidt</h3>
              <p className="text-primary mb-2">Chief Executive Officer</p>
              <p className="text-sm text-muted-foreground">
                20+ years of experience in industrial automation and digital transformation.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-card rounded-lg p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted" />
              <h3 className="text-xl font-semibold mb-2">Michael Weber</h3>
              <p className="text-primary mb-2">Chief Technology Officer</p>
              <p className="text-sm text-muted-foreground">
                Leading expert in IIoT solutions and AI implementation.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-card rounded-lg p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted" />
              <h3 className="text-xl font-semibold mb-2">Anna Müller</h3>
              <p className="text-primary mb-2">Head of Digital Academy</p>
              <p className="text-sm text-muted-foreground">
                Specialized in industrial workforce development and training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with us to transform your industrial operations and prepare for the future of manufacturing.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
"use client"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="relative bg-background/80 backdrop-blur-sm rounded-xl p-12 transition-all duration-300
          before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-primary/5 before:to-primary/10 before:opacity-0 before:transition-opacity
          hover:before:opacity-100
          after:absolute after:-inset-px after:rounded-[calc(0.75rem+1px)] after:bg-gradient-to-b after:from-primary/30 after:to-transparent after:opacity-0 after:transition-opacity
          hover:after:opacity-100
          hover:shadow-[0_0_25px_-5px_rgba(52,211,153,0.3)]"
        >
          <div className="relative">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              Let's discuss how CogniTechX can help you achieve your digital transformation goals.
            </p>
            <Button size="lg" asChild>
              <a href="#contact">Contact Us Today</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
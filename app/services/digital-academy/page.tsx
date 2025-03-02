import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DigitalAcademyPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-12">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-4xl font-bold mb-6">Digital Academy</h1>
        <p className="text-lg text-muted-foreground">
          Coming soon...
        </p>
      </div>
    </div>
  )
}
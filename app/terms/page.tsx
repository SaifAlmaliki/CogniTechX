import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: `By accessing and using CogniTechX's website, products, or services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.`
  },
  {
    id: "services",
    title: "Services Description",
    content: [
      "CogniTechX provides the following services:",
      "- Industrial IoT Solutions",
      "- AI and Machine Learning Solutions",
      "- Data Platform Services",
      "- Digital Academy Training",
      "",
      "We reserve the right to modify, suspend, or discontinue any part of our services at any time."
    ].join("\n")
  },
  {
    id: "user-obligations",
    title: "User Responsibilities",
    content: [
      "Users of our services agree to:",
      "- Provide accurate and complete information",
      "- Maintain the security of account credentials",
      "- Use services in compliance with applicable laws",
      "- Not engage in unauthorized access or use",
      "- Not interfere with service operation",
      "- Not use services for illegal purposes"
    ].join("\n")
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    content: `All content, trademarks, software, and technology used in our services are the property of CogniTechX or its licensors. Users may not copy, modify, distribute, sell, or lease any part of our services or included software without explicit permission.`
  },
  {
    id: "data-privacy",
    title: "Data Privacy and Security",
    content: [
      "We handle your data according to our Privacy Policy. By using our services, you agree to:",
      "- Our data collection practices",
      "- Data processing procedures",
      "- Data storage methods",
      "- Third-party data sharing policies",
      "",
      "For complete details, please refer to our Privacy Policy."
    ].join("\n")
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, COGNITECHX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.`
  },
  {
    id: "warranty",
    title: "Disclaimer of Warranty",
    content: `THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. COGNITECHX DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.`
  },
  {
    id: "disputes",
    title: "Dispute Resolution",
    content: [
      "In the event of any dispute:",
      "1. Parties will attempt to resolve issues informally",
      "2. Mandatory mediation before litigation",
      "3. Arbitration in Duisburg, Germany",
      "4. German law governs these Terms",
      "",
      "Users waive rights to class action lawsuits."
    ].join("\n")
  },
  {
    id: "termination",
    title: "Termination",
    content: [
      "CogniTechX may terminate or suspend access to services:",
      "- For Terms violations",
      "- For illegal activities",
      "- To protect other users",
      "- For service maintenance",
      "",
      "Users may terminate by discontinuing service use."
    ].join("\n")
  },
  {
    id: "modifications",
    title: "Modifications to Terms",
    content: `We may modify these Terms at any time. Continued use of services after changes constitutes acceptance of modified Terms. Users will be notified of significant changes.`
  },
  {
    id: "contact",
    title: "Contact Information",
    content: `For questions about these Terms, contact us at:
    
Email: legal@cognitechx.com
Address: Duisburg, 47057, Germany`
  }
]

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last Updated: January 25, 2024</p>
        </div>

        {/* Table of Contents */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-muted/50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <nav>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-20 mb-12"
            >
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <div className="prose prose-neutral dark:prose-invert">
                {section.content.split('\n').map((line, i) => (
                  <p key={i} className="text-muted-foreground whitespace-pre-line">
                    {line}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
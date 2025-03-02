import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: `This Privacy Policy explains how CogniTechX ("we," "us," or "our") collects, uses, and protects your personal information. This policy applies to our website, products, and services. By using our services, you agree to the collection and use of information in accordance with this policy.`
  },
  {
    id: "data-collected",
    title: "Information We Collect",
    content: [
      "Personal Information:",
      "- Name and contact details",
      "- Email address",
      "- Company information",
      "- Professional title",
      "",
      "Usage Data:",
      "- IP address",
      "- Browser type and version",
      "- Pages visited and time spent",
      "- Device information",
      "",
      "Cookies and Tracking:",
      "- Essential cookies for site functionality",
      "- Analytics cookies for site improvement",
      "- Preference cookies for user experience"
    ].join("\n")
  },
  {
    id: "collection-methods",
    title: "How We Collect Information",
    content: [
      "We collect information through:",
      "- Direct interactions (forms, email)",
      "- Automated technologies (cookies, logs)",
      "- Third-party services (analytics, payment processors)",
      "- Public sources (when applicable)"
    ].join("\n")
  },
  {
    id: "data-use",
    title: "How We Use Your Information",
    content: [
      "We use your information to:",
      "- Provide and improve our services",
      "- Communicate with you",
      "- Process transactions",
      "- Analyze and optimize our website",
      "- Comply with legal obligations",
      "- Protect against fraud and abuse"
    ].join("\n")
  },
  {
    id: "data-security",
    title: "Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. We strive to protect your personal information but cannot guarantee its absolute security.`
  },
  {
    id: "data-sharing",
    title: "Information Sharing",
    content: [
      "We may share your information with:",
      "- Service providers and partners",
      "- Legal authorities when required",
      "- Business transferees in case of sale or merger",
      "",
      "We do not sell your personal information to third parties."
    ].join("\n")
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    content: `When we transfer your data internationally, we ensure appropriate safeguards are in place in compliance with GDPR and other applicable laws. This includes using standard contractual clauses and ensuring adequate data protection measures.`
  },
  {
    id: "user-rights",
    title: "Your Rights",
    content: [
      "You have the right to:",
      "- Access your personal data",
      "- Correct inaccurate data",
      "- Request data deletion",
      "- Object to processing",
      "- Data portability",
      "- Withdraw consent",
      "",
      "Contact us to exercise these rights."
    ].join("\n")
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    content: `Our services are not intended for children under 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.`
  },
  {
    id: "policy-updates",
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.`
  },
  {
    id: "contact",
    title: "Contact Us",
    content: `For questions about this Privacy Policy or our privacy practices, contact us at:
    
Email: privacy@cognitechx.com
Address: Duisburg, 47057, Germany`
  }
]

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
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
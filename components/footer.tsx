"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { useTranslations } from "@/lib/i18n"

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100064241105829",
    icon: Facebook,
    labelKey: "social.facebook"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/cognitechx/",
    icon: Instagram,
    labelKey: "social.instagram"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/106037567/admin/page-posts/published/",
    icon: Linkedin,
    labelKey: "social.linkedin"
  }
]

export function Footer() {
  const { t } = useTranslations()

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:grid md:grid-cols-4 md:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">CogniTechX</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t('footer.company.description')}
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t(social.labelKey)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110"
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">{t(social.labelKey)}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 md:col-span-3 md:mt-0">
            <div>
              <h3 className="text-sm font-semibold">{t('footer.sections.services')}</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/services/iiot-mes" className="text-sm text-muted-foreground hover:text-foreground">
                    {t('footer.links.iiot')}
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-solutions" className="text-sm text-muted-foreground hover:text-foreground">
                    {t('footer.links.ai')}
                  </Link>
                </li>
                <li>
                  <Link href="/services/data-platforms" className="text-sm text-muted-foreground hover:text-foreground">
                    {t('footer.links.data')}
                  </Link>
                </li>
                <li>
                  <Link href="/services/digital-academy" className="text-sm text-muted-foreground hover:text-foreground">
                    {t('footer.links.academy')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">{t('footer.sections.resources')}</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="https://blog.cognitechx.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {t('footer.links.blog')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://academy.cognitechx.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {t('footer.links.academyPortal')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              {t('footer.legal.copyright').replace('{year}', new Date().getFullYear().toString())}
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/privacy-policy">{t('footer.legal.privacy')}</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/terms">{t('footer.legal.terms')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslations, SupportedLanguage } from "@/lib/i18n"

const navigation = [
  {
    title: "Services",
    items: [
      {
        title: "IIoT & MES Solutions",
        href: "/services/iiot-mes",
        description: "Industrial IoT and Manufacturing Execution Systems",
      },
      {
        title: "AI Solutions",
        href: "/services/ai-solutions",
        description: "Advanced AI and Machine Learning Solutions",
      },
      {
        title: "Data Platforms",
        href: "/services/data-platforms",
        description: "Enterprise Data Management Solutions",
      },
      {
        title: "Digital Academy",
        href: "/services/digital-academy",
        description: "Training and Skill Development",
      },
    ],
  }
]

export function Navbar() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { currentLanguage, setLanguage, t } = useTranslations()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const languages = {
    en: { name: 'English', flag: '🇺🇸' },
    ar: { name: 'العربية', flag: '🇸🇦' }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className={cn(
          "rounded-full transition-all duration-200",
          isScrolled 
            ? "bg-background/80 backdrop-blur-md shadow-lg" 
            : "bg-background/50 backdrop-blur-sm"
        )}>
          <div className="mx-auto px-4">
            <div className="flex h-16 items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold text-primary">CogniTechX</span>
              </Link>
              
              <div className="flex-1 flex items-center justify-end">
                <nav className="hidden md:flex items-center space-x-8">
                  {navigation.map((group) => (
                    <div key={group.title} className="relative group">
                      <button className="flex items-center gap-1 p-2 text-foreground/80 hover:text-foreground">
                        {t(`navigation.${group.title.toLowerCase()}`)}
                      </button>
                      <div className="absolute top-full left-0 w-64 hidden group-hover:block">
                        <div className="pt-2">
                          <div className="bg-background/80 backdrop-blur-md rounded-lg shadow-lg ring-1 ring-black/5 p-2">
                            {group.items.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className={cn(
                                  "block px-4 py-2 rounded-md hover:bg-muted",
                                  pathname === item.href && "bg-muted"
                                )}
                              >
                                <div className="text-sm font-medium">{t(`services.${item.href.split('/').pop()}.title`)}</div>
                                <div className="text-xs text-muted-foreground">
                                  {t(`services.${item.href.split('/').pop()}.description`)}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <a
                    href="https://blog.cognitechx.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "text-foreground/80 hover:text-foreground"
                    )}
                  >
                    {t('navigation.blog')}
                  </a>
                  <a
                    href="https://academy.cognitechx.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-foreground"
                  >
                    {t('navigation.academy')}
                  </a>
                </nav>
                <div className="flex items-center gap-4 ml-8">
                  {/* Language Switcher */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="relative group"
                      >
                        <Globe className="h-5 w-5 transition-transform group-hover:scale-110" />
                        <span className="sr-only">Switch language</span>
                        <div className="absolute -bottom-1 -right-1 h-3 w-3 flex items-center justify-center">
                          <span className="text-xs">{languages[currentLanguage].flag}</span>
                        </div>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                      {Object.entries(languages).map(([code, { name, flag }]) => (
                        <DropdownMenuItem
                          key={code}
                          onClick={() => setLanguage(code as SupportedLanguage)}
                          className={cn(
                            "flex items-center gap-2",
                            currentLanguage === code && "bg-muted"
                          )}
                        >
                          <span>{flag}</span>
                          <span>{name}</span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button
                    onClick={scrollToContact}
                    className="hidden md:inline-flex rounded-full"
                  >
                    {t('navigation.contact')}
                  </Button>
                  <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                      <Button
                        variant="ghost"
                        className="md:hidden"
                        size="icon"
                      >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="pr-0">
                      <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                        <div className="flex flex-col space-y-4">
                          {navigation.map((group) => (
                            <div key={group.title} className="flex flex-col space-y-2">
                              <h4 className="font-medium">{t(`navigation.${group.title.toLowerCase()}`)}</h4>
                              {group.items.map((item) => (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  onClick={() => setOpen(false)}
                                  className={cn(
                                    "text-muted-foreground",
                                    pathname === item.href && "text-foreground"
                                  )}
                                >
                                  {t(`services.${item.href.split('/').pop()}.title`)}
                                </Link>
                              ))}
                            </div>
                          ))}
                          <div className="flex flex-col space-y-2">
                            <a
                              href="https://blog.cognitechx.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cn(
                                "text-muted-foreground"
                              )}
                              onClick={() => setOpen(false)}
                            >
                              {t('navigation.blog')}
                            </a>
                            <a
                              href="https://academy.cognitechx.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-foreground"
                              onClick={() => setOpen(false)}
                            >
                              {t('navigation.academy')}
                            </a>
                            <button
                              onClick={() => {
                                setOpen(false)
                                scrollToContact()
                              }}
                              className="text-muted-foreground hover:text-foreground text-left"
                            >
                              {t('navigation.contact')}
                            </button>
                          </div>
                        </div>
                      </ScrollArea>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
"use client"

import { Button } from "@/components/ui/button"
import { useTranslations, SupportedLanguage } from "@/lib/i18n"

export function LanguageSwitcher() {
  const { currentLanguage, setLanguage } = useTranslations()

  const toggleLanguage = () => {
    const newLang: SupportedLanguage = currentLanguage === 'en' ? 'ar' : 'en'
    setLanguage(newLang)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="font-medium"
    >
      {currentLanguage === 'en' ? 'العربية' : 'English'}
    </Button>
  )
}
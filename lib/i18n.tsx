"use client"

import * as React from 'react'

export type SupportedLanguage = 'en' | 'ar'
const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['en', 'ar']

// Load translations synchronously
const loadTranslations = (lang: SupportedLanguage) => {
  try {
    // Import all translation files for the language
    const metadata = require(`../locales/${lang}/metadata.json`)
    const navigation = require(`../locales/${lang}/navigation.json`)
    const academy = require(`../locales/${lang}/academy.json`)
    const hero = require(`../locales/${lang}/hero.json`)
    const mission = require(`../locales/${lang}/mission.json`)
    const values = require(`../locales/${lang}/values.json`)
    const services = require(`../locales/${lang}/services.json`)
    const contact = require(`../locales/${lang}/contact.json`)
    const footer = require(`../locales/${lang}/footer.json`)

    // Combine all translations into a single object
    return {
      metadata,
      navigation,
      academy,
      hero,
      mission,
      values,
      services,
      contact,
      footer
    }
  } catch (error) {
    console.error(`Failed to load translations for ${lang}:`, error)
    return {}
  }
}

// Get nested object value by path
const getNestedValue = (obj: any, path: string): string => {
  try {
    const value = path.split('.').reduce((acc, part) => {
      if (acc === undefined || acc === null) {
        throw new Error(`Translation path ${path} not found`)
      }
      return acc[part]
    }, obj)
    
    if (value === undefined || value === null) {
      console.warn(`Translation missing for key: ${path}`)
      return `[${path}]`
    }
    
    return value
  } catch (error) {
    console.warn(`Error getting translation for key: ${path}`, error)
    return `[${path}]`
  }
}

export interface LanguageContextType {
  currentLanguage: SupportedLanguage
  setLanguage: (lang: SupportedLanguage) => void
  t: (key: string) => string
  direction: 'ltr' | 'rtl'
}

const TranslationsContext = React.createContext<LanguageContextType | null>(null)

export function TranslationsProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const [currentLanguage, setCurrentLanguage] = React.useState<SupportedLanguage>('en')
  const [translations, setTranslations] = React.useState(loadTranslations('en'))
  const [direction, setDirection] = React.useState<'ltr' | 'rtl'>('ltr')

  React.useEffect(() => {
    // Try to get language from localStorage
    const savedLang = localStorage.getItem('language') as SupportedLanguage
    if (SUPPORTED_LANGUAGES.includes(savedLang)) {
      handleLanguageChange(savedLang, false)
    }
  }, [])

  const handleLanguageChange = (lang: SupportedLanguage, reload: boolean = true) => {
    localStorage.setItem('language', lang)
    
    if (reload && typeof window !== 'undefined') {
      // Force a complete page reload with cache busting
      const timestamp = new Date().getTime()
      const currentPath = window.location.pathname
      const newUrl = `${currentPath}?lang=${lang}&t=${timestamp}`
      window.location.href = newUrl
      return
    }

    const newTranslations = loadTranslations(lang)
    setTranslations(newTranslations)
    setCurrentLanguage(lang)
    setDirection(newTranslations.metadata?.direction || 'ltr')
    document.documentElement.dir = newTranslations.metadata?.direction || 'ltr'
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    return getNestedValue(translations, key)
  }

  const value = React.useMemo(() => ({
    currentLanguage,
    setLanguage: (lang: SupportedLanguage) => handleLanguageChange(lang, true),
    t,
    direction,
  }), [currentLanguage, translations, direction])

  return (
    <TranslationsContext.Provider value={value}>
      {children}
    </TranslationsContext.Provider>
  )
}

export function useTranslations() {
  const context = React.useContext(TranslationsContext)
  if (context === null) {
    throw new Error('useTranslations must be used within a TranslationsProvider')
  }
  return context
}
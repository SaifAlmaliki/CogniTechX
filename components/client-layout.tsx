"use client"

import { useState, useEffect } from 'react'
import { Navbar } from './navbar'
import { Footer } from './footer'
import { GridBackground } from './grid-background'
import { Loading } from './loading'
import { useTranslations } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const { direction } = useTranslations()

  useEffect(() => {
    setIsMounted(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Prevent hydration issues by not rendering until mounted
  if (!isMounted) return null

  return (
    <div className={cn("transition-all duration-300", direction === 'rtl' ? 'rtl' : 'ltr')}>
      {isLoading ? (
        <Loading />
      ) : (
        <GridBackground className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </GridBackground>
      )}
    </div>
  )
}
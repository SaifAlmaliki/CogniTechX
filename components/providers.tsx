"use client"

import { ThemeProvider } from "next-themes"
import { TranslationsProvider } from "@/lib/i18n"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TranslationsProvider>
        {children}
      </TranslationsProvider>
    </ThemeProvider>
  )
}
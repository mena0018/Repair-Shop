"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children }: React.PropsWithChildren) {
  return (
    <NextThemesProvider disableTransitionOnChange attribute="class" defaultTheme="dark">
      {children}
    </NextThemesProvider>
  )
}

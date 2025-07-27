"use client"

import { PropsWithChildren } from "react"
import { Toaster } from "sonner"

import { ThemeProvider } from "@/styles/theme/theme-provider"

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <Toaster richColors closeButton position="top-right" />
      {children}
    </ThemeProvider>
  )
}

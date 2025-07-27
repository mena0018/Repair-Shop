import { PropsWithChildren } from "react"
import type { Metadata } from "next"
import { Lato } from "next/font/google"

import { Providers } from "@/components/layout"
import { baseMetadata } from "@/libs/site-config"
import { cn } from "@/libs/utils"

import "@/styles/globals.css"

const font = Lato({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
})
export const metadata: Metadata = baseMetadata

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html suppressHydrationWarning lang="en" className="h-full">
      <body suppressHydrationWarning className={cn(font.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

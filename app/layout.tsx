import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "مجدي بن مروان - فنان كفيف، عازف عود ومغني",
  description: "الموقع الرسمي للفنان مجدي بن مروان - فنان كفيف متخصص في العزف على آلة العود والغناء",
  keywords: "مجدي بن مروان, عود, موسيقى عربية, فنان كفيف, غناء, تراث",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

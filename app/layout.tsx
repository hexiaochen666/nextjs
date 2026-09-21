import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ASF — Maison of Brand & Digital Craft",
  description: "A private design atelier for distinctive brands, spaces, and digital experiences.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}

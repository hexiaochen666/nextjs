import type { Metadata } from "next"
import Link from "next/link"
import "./globals.css"

export const metadata: Metadata = { title: "ASF — 独立设计工作室", description: "品牌策略、视觉识别与数字产品设计" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="zh-CN"><body>{children}<footer className="footer container"><span>ASF® 2024</span><span>保持好奇，持续创造。</span><span>SHANGHAI / CHINA</span></footer></body></html>
}

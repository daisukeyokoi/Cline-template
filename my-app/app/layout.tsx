import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dify AIエージェント一覧 | オフィスワークを効率化",
  description:
    "Difyで作成したAIエージェントがあなたの業務を効率化。議事録作成、データ分析、スケジュール管理など、様々な業務をサポートします。",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


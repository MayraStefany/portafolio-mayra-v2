import type React from "react"
import type { Metadata } from "next"
import { Concert_One } from "next/font/google"
import "./globals.css"

const concertOne = Concert_One({
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Mayra | DevOps Engineer Portfolio",
  description: "Portfolio profesional de Mayra - DevOps Engineer con experiencia en Cloud, automatización y MLOps",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${concertOne.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}

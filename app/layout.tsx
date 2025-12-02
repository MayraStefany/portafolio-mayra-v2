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
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
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

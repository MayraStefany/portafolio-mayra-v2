/**
 * NAVIGATION - Versión 2
 *
 * Componente de navegación sticky con branding personalizado
 * Incluye: Logo/Branding, menú de navegación y botón hamburguesa para móvil
 *
 * Características:
 * - Sticky positioning
 * - Responsive (hidden en móvil, visible en desktop)
 * - Smooth transitions
 */

"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Inicio", href: "#home" },
    { label: "Sobre mí", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Proyectos", href: "#projects" },
    { label: "Experiencia", href: "#experience" },
    { label: "Contacto", href: "#contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Branding */}
        <Link href="/" className="text-xl font-bold gradient-text whitespace-nowrap">
          Mayra <span className="text-muted">| DevOps Engineer</span>
        </Link>

        {/* Menu Desktop (Hidden en móvil) */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted hover:text-accent smooth-transition">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Botón Hamburguesa (Solo en móvil) */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-accent">
          ☰
        </button>
      </div>
    </nav>
  )
}

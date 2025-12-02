/**
 * FOOTER SECTION - Versión 2
 *
 * Componente del pie de página con navegación rápida, contacto y redes sociales
 * Incluye: Links, información de contacto, botón de CV y copyright
 *
 * Características:
 * - Links navegables con scroll suave
 * - Botones sociales funcionales
 * - Descarga de CV integrada
 */

"use client"

import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleDownloadCV = () => {
    const cvUrl = "CV_Mayra Torres Munares.pdf"
    const link = document.createElement("a")
    link.href = cvUrl
    link.download = "CV_Mayra Torres Munares.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleEmail = () => {
    window.location.href = "mailto:mayratorresmunares@gmail.com"
  }

  const handleGitHub = () => {
    window.open("https://github.com/MayraStefany", "_blank")
  }

  const handleLinkedIn = () => {
    window.open("https://linkedin.com/in/mayra-stefany-torres-munares", "_blank")
  }

  const socialLinks = [
    { label: "GitHub", action: handleGitHub, color: "hover:text-slate-300" },
    { label: "LinkedIn", action: handleLinkedIn, color: "hover:text-blue-400" },
    { label: "Email", action: handleEmail, color: "hover:text-orange-400" },
  ]

  const quickLinks = [
    { label: "Inicio", href: "#home" },
    { label: "Sobre mí", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Proyectos", href: "#projects" },
    { label: "Experiencia", href: "#experience" },
  ]

  return (
    <footer
      id="contact"
      className="py-16 px-4 bg-gradient-to-t from-slate-950 via-slate-950 to-transparent border-t border-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Grid Principal - 4 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-3">Mayra</h3>
            <p className="text-muted text-sm">
              Soluciones de infraestructura, automatización y escalabilidad para empresas modernas.
            </p>
          </div>

          {/* Navegación Rápida */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Navegación</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted hover:text-blue-400 smooth-transition text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>Email: mayratorresmunares@gmail.com</li>
              <li>Teléfono: +51 951 062 517</li>
              <li>Ubicación: Perú</li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Sígueme</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <button
                  key={social.label}
                  onClick={social.action}
                  className={`text-slate-400 ${social.color} smooth-transition cursor-pointer hover:scale-110 active:scale-95`}
                  title={social.label}
                  type="button"
                >
                  <div className="w-6 h-6 flex items-center justify-center text-sm font-bold">
                    {social.label.charAt(0)}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider y Botón de CV */}
        <div className="py-8 text-center border-t border-slate-800">
          <button
            onClick={handleDownloadCV}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg smooth-transition mb-4 active:scale-95"
          >
            Descargar Mi CV
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-slate-800 text-center text-muted text-sm">
          <p>© {currentYear} Mayra | DevOps Engineer. Todos los derechos reservados.</p>
          <p className="mt-2 text-slate-600">Diseñado y desarrollado con pasión por la tecnología</p>
        </div>
      </div>
    </footer>
  )
}

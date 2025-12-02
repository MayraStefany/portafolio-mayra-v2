/**
 * HERO SECTION - Versión 2
 *
 * Componente hero principal con animaciones visuales y llamadas a acción
 * Incluye: Título principal, descripción, botones y elementos visuales animados
 *
 * Características:
 * - Blobs animados de fondo
 * - Fade-in animation al cargar
 * - Botones funcionales (CV y Proyectos)
 * - Efecto scroll indicator
 */

"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleDownloadCV = () => {
    const cvUrl = "/cv-mayra-devops.pdf"
    const link = document.createElement("a")
    link.href = cvUrl
    link.download = "Mayra_DevOps_Engineer_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleGoToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Elementos visuales animados de fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Contenido Principal */}
      <div
        className={`max-w-4xl mx-auto text-center smooth-transition ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Badge de Especialidad */}
        <div className="mb-8 inline-block">
          <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-400/30">
            ⚡ DevOps Engineer & MLOps Enthusiast
          </span>
        </div>

        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text text-balance">
          Automatización y Infraestructura en la Nube
        </h1>

        {/* Descripción */}
        <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
          Especializado en crear soluciones escalables y seguras que optimizan infraestructura, automatizan procesos
          críticos y reducen tiempos operativos en entornos Cloud y On-Premise.
        </p>

        {/* Botones de CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleDownloadCV}
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg smooth-transition shadow-lg hover:shadow-blue-500/50 active:scale-95"
          >
            Descargar CV
          </button>
          <button
            onClick={handleGoToProjects}
            className="px-8 py-4 border-2 border-blue-400 text-blue-300 hover:bg-blue-500/10 font-semibold rounded-lg smooth-transition active:scale-95"
          >
            Mis Proyectos
          </button>
        </div>

        {/* Indicador de Scroll */}
        <div className="mt-16 flex justify-center">
          <div className="animate-bounce text-blue-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

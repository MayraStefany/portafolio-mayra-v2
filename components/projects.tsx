/**
 * PROJECTS SECTION - Versión 2
 *
 * Componente que muestra proyectos destacados con filtrado por categoría
 * Incluye: Título, descripción, tecnologías, estado e impacto
 *
 * Características:
 * - Filtros funcionales por categoría
 * - Cards de proyecto con información detallada
 * - Animación escalonada de entrada
 */

"use client"

import { useState, useEffect, useRef } from "react"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Automatización de Infraestructura Empresarial",
      description:
        "Solución completa de automatización para provisioning de servidores y gestión de configuración en múltiples datacenters",
      tags: ["Ansible", "Python", "Azure", "Infrastructure as Code"],
      category: "automation",
      status: "Completado",
      impact: "Reducción de 70% en tiempo de deployment",
    },
    {
      title: "Chatbot SAP con Teams Integration",
      description:
        "Bot personalizado para consultas automatizadas en SAP con notificaciones en tiempo real en Microsoft Teams",
      tags: ["Python", "SAP API", "Microsoft Teams", "REST API"],
      category: "integration",
      status: "Completado",
      impact: "Automatizó 500+ consultas mensuales",
    },
    {
      title: "Pipeline CI/CD Multi-Stage",
      description:
        "Implementación de pipeline completo con Jenkins para orquestación de microservicios y deployes automatizados",
      tags: ["Jenkins", "Docker", "Kubernetes", "Git"],
      category: "devops",
      status: "Completado",
      impact: "Aumentó velocidad de release a 5x",
    },
    {
      title: "MLOps Platform",
      description:
        "Plataforma de MLOps con versionado de modelos, experimentos y deploys automáticos usando MLflow y Airflow",
      tags: ["MLOps", "MLflow", "Airflow", "Docker", "Python"],
      category: "mlops",
      status: "En Progreso",
      impact: "Redujo ciclo de ML en 60%",
    },
  ]

  const categories = ["all", "automation", "integration", "devops", "mlops"]
  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">Proyectos Destacados</h2>
        <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
          Trabajos destacados que demuestran expertise en DevOps, Automatización e Infraestructura
        </p>

        {/* Botones de Filtro */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full smooth-transition ${
                selectedCategory === cat ? "bg-blue-500 text-white" : "bg-slate-800 text-muted hover:bg-slate-700"
              }`}
            >
              {cat === "all" ? "Todos" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-8 border border-slate-700 hover:border-blue-400 smooth-transition hover:shadow-lg hover:shadow-blue-500/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              {/* Encabezado del Proyecto */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground flex-1">{project.title}</h3>
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold ml-2">
                  {project.status}
                </span>
              </div>

              {/* Descripción */}
              <p className="text-muted mb-4">{project.description}</p>

              {/* Box de Impacto */}
              <div className="bg-slate-900/50 rounded p-3 mb-4 border-l-2 border-cyan-400">
                <p className="text-sm text-cyan-300">
                  <strong>Impacto:</strong> {project.impact}
                </p>
              </div>

              {/* Tags de Tecnologías */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded text-xs bg-slate-700/50 text-slate-300 hover:bg-blue-500/30 hover:text-blue-300 smooth-transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * EXPERIENCE SECTION - Versión 2
 *
 * Componente que muestra historial profesional y certificaciones
 * Timeline de experiencias con logros e información detallada
 *
 * Características:
 * - Timeline visual con animaciones
 * - Grid de certificaciones
 * - Logros destacados por rol
 */

"use client"

import { useEffect, useState, useRef } from "react"

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      role: "Senior DevOps Engineer",
      company: "Enterprise Solutions",
      period: "2022 - Presente",
      description:
        "Liderazgo en automatización de infraestructura, implementación de soluciones cloud escalables y gestión de ambientes multi-cloud. Reducción de 70% en tiempos de deployment.",
      technologies: ["Kubernetes", "Azure", "Ansible", "Jenkins", "Python"],
      achievements: [
        "Implementó CI/CD para 50+ microservicios",
        "Migración completa a Kubernetes",
        "Reducción 40% en costos cloud",
      ],
    },
    {
      role: "DevOps Engineer",
      company: "Tech Startup",
      period: "2021 - 2022",
      description:
        "Desarrollo e implementación de pipelines CI/CD, gestión de contenedores y automatización de deployments. Integración con herramientas empresariales.",
      technologies: ["Docker", "Jenkins", "GitHub Actions", "PostgreSQL", "REST APIs"],
      achievements: ["Creó pipeline completamente automatizado", "Redujo downtime en 85%", "Implementó monitoreo 24/7"],
    },
    {
      role: "Junior DevOps Engineer",
      company: "Global Tech Corp",
      period: "2020 - 2021",
      description:
        "Soporte en infraestructura, configuración de servidores y asistencia en proyectos de automatización. Mentoría en prácticas DevOps.",
      technologies: ["Bash", "PowerShell", "Linux", "IIS", "SQL"],
      achievements: ["Certificado en Azure Fundamentals", "Soporte 99.9% uptime", "Documentación de procesos"],
    },
  ]

  const certifications = [
    { name: "Azure Administrator", issuer: "Microsoft", year: "2023" },
    { name: "Kubernetes Application Developer", issuer: "CNCF", year: "2022" },
    { name: "AWS Solutions Architect", issuer: "Amazon", year: "2022" },
    { name: "Ansible Automation", issuer: "Red Hat", year: "2021" },
  ]

  return (
    <section id="experience" className="py-20 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Encabezado */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">Experiencia & Certificaciones</h2>
        <p className="text-center text-muted mb-16 max-w-2xl mx-auto">
          Trayectoria profesional y credenciales en tecnologías DevOps y Cloud
        </p>

        {/* Sección de Historial Profesional */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-blue-400">Historial Profesional</h3>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`group relative pb-8 border-l-2 border-slate-700 hover:border-blue-400 pl-8 smooth-transition ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                {/* Punto del Timeline */}
                <div className="absolute -left-3 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950 group-hover:scale-125 smooth-transition"></div>

                {/* Título y Periodo */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-400">{exp.role}</h4>
                    <p className="text-muted">{exp.company}</p>
                  </div>
                  <span className="text-sm text-slate-500 whitespace-nowrap ml-4">{exp.period}</span>
                </div>

                {/* Descripción */}
                <p className="text-muted mb-3">{exp.description}</p>

                {/* Tecnologías Usadas */}
                <div className="mb-3">
                  <p className="text-sm text-slate-400 mb-2">Tecnologías:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs rounded bg-slate-700/50 text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Logros Principales */}
                <ul className="text-sm text-slate-400 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de Certificaciones */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-blue-400">Certificaciones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-4 border border-slate-700 hover:border-blue-400 smooth-transition ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${experiences.length * 100 + idx * 100}ms`,
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{cert.name}</p>
                    <p className="text-sm text-muted">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-slate-500">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

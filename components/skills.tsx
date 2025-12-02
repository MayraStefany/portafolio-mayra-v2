/**
 * SKILLS SECTION - Versión 2
 *
 * Componente que muestra todas las tecnologías y competencias técnicas
 * Organizadas en 6 categorías con iconos y colores distintivos
 *
 * Características:
 * - Grid responsivo 1x3 con categorías
 * - Animación escalonada al entrar en viewport
 * - Hover effects en skills
 */

"use client"

import { useEffect, useState, useRef } from "react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Cloud & Infrastructure",
      skills: ["Azure", "AWS", "Kubernetes", "Docker", "Terraform", "VMware"],
      icon: "☁️",
      color: "from-blue-400 to-cyan-400",
    },
    {
      title: "Automation & Scripting",
      skills: ["Bash", "PowerShell", "Python", "Ansible", "Go", "Ruby"],
      icon: "⚙️",
      color: "from-purple-400 to-pink-400",
    },
    {
      title: "CI/CD & DevOps",
      skills: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD", "Spinnaker", "Helm"],
      icon: "🚀",
      color: "from-green-400 to-emerald-400",
    },
    {
      title: "Data & ML Ops",
      skills: ["MLOps", "Docker", "MLflow", "Airflow", "Apache Spark", "DVC"],
      icon: "🤖",
      color: "from-orange-400 to-red-400",
    },
    {
      title: "Web & Backend",
      skills: ["React", "Next.js", "Firebase", "REST APIs", "GraphQL", "Node.js"],
      icon: "💻",
      color: "from-indigo-400 to-blue-400",
    },
    {
      title: "Enterprise Tools",
      skills: ["IIS", "SAP", "Microsoft Teams", "SQL Server", "PostgreSQL", "Oracle"],
      icon: "🏢",
      color: "from-slate-400 to-gray-400",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">Skills & Tech Stack</h2>
        <p className="text-center text-muted mb-16 max-w-2xl mx-auto">
          Dominio en múltiples plataformas y tecnologías para soluciones integrales de infraestructura
        </p>

        {/* Grid de Categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-blue-400 smooth-transition hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              {/* Icono de Categoría */}
              <div className="text-3xl mb-3">{category.icon}</div>

              {/* Título de Categoría con Gradiente */}
              <h3
                className={`text-lg font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>

              {/* Skills como Badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-slate-700/60 text-xs text-slate-200 hover:bg-blue-500 hover:text-white smooth-transition"
                  >
                    {skill}
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

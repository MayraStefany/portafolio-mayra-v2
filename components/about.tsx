/**
 * ABOUT SECTION - Versión 2
 *
 * Componente que muestra información profesional sobre Mayra
 * Incluye: Descripción, experiencia, skills principales y estadísticas
 *
 * Características:
 * - Animación de entrada con Intersection Observer
 * - Estadísticas visuales con grid responsivo
 * - Colores temáticos para destacar información clave
 */

"use client"

import { useEffect, useState, useRef } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: "5+", label: "Años Experiencia" },
    { number: "50+", label: "Proyectos Completados" },
    { number: "12+", label: "Tecnologías" },
    { number: "100%", label: "Dedicación" },
  ]

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sección de Contenido - Texto sobre Mayra */}
          <div
            className={`space-y-6 smooth-transition ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Sobre mí</h2>

            <div className="space-y-4 text-base md:text-lg text-muted leading-relaxed">
              <p>
                Soy <span className="text-blue-400 font-semibold">DevOps Engineer</span> con experiencia en{" "}
                <span className="text-cyan-300 font-semibold">automatización de procesos críticos</span> en entornos{" "}
                <span className="text-indigo-300 font-semibold">Cloud y On-Premise</span>.
              </p>

              <p>
                He desarrollado <span className="text-purple-300 font-semibold">chatbots personalizados</span>, flujos
                automatizados con APIs REST, e integraciones con herramientas empresariales como{" "}
                <span className="font-semibold">IIS, SQL, SAP y Microsoft Teams</span>.
              </p>

              <p>
                Mis <span className="text-blue-400 font-semibold">skills principales</span> incluyen:{" "}
                <strong>Bash, PowerShell, Python, Ansible, Kubernetes, Jenkins, Azure</strong> y{" "}
                <strong>React/Firebase</strong>.
              </p>

              <p>
                Actualmente en formación en <span className="text-cyan-300 font-semibold">MLOps</span>, explorando{" "}
                <strong>Docker, MLflow y Airflow</strong> para ampliar capacidades en ingeniería de datos y modelos ML.
              </p>

              <p className="italic text-slate-500 pt-4">
                Apasionado por la mejora continua, documentación de buenas prácticas y soluciones innovadoras que
                faciliten el trabajo en equipo.
              </p>
            </div>
          </div>

          {/* Sección de Estadísticas - Grid de 2x2 */}
          <div
            className={`grid grid-cols-2 gap-4 smooth-transition ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700 hover:border-blue-400 smooth-transition hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

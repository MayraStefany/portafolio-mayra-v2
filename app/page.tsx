/**
 * VERSION 2: PORTAFOLIO SEMI-COMPLETO PROFESIONAL
 *
 * Archivo Principal del Portafolio Mayra - DevOps Engineer
 *
 * Estructura de Secciones:
 * 1. Navigation - Navegación sticky con branding
 * 2. Hero - Sección principal con CTA
 * 3. About - Información profesional y estadísticas
 * 4. Skills - Tech stack organizado en categorías
 * 5. Projects - Proyectos destacados con filtros
 * 6. Experience - Timeline profesional y certificaciones
 * 7. Footer - Pie de página con contacto y redes
 *
 * Características Principales:
 * - Diseño responsivo y moderno
 * - Animaciones suaves en scroll
 * - Sistema de colores azul/cyan profesional
 * - Componentes reutilizables y modulares
 * - Botones y links totalmente funcionales
 *
 * Para personalizar:
 * 1. Edita los arrays de datos en cada componente
 * 2. Actualiza emails, teléfono y redes sociales en Footer
 * 3. Reemplaza CV URL en Hero y Footer
 * 4. Añade tus proyectos reales en Projects component
 */

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      {/* Navegación Principal - Sticky al top */}
      <Navigation />

      {/* Secciones del Portafolio */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </main>
  )
}

<div align="center">

# 👩‍💻 Mayra Torres | DevOps Engineer

[![Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat-square)](https://github.com/MayraStefany/portafolio-mayra-v2)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/status-production%20ready-brightgreen?style=flat-square)](README.md)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)

**Portafolio profesional minimalista y moderno diseñado para DevOps Engineers**

[Visitar Sitio](https://mayra-devops.com) • [Ver Documentación](./README_PROFESIONAL.md) • [Reportar Bug](https://github.com/MayraStefany/portafolio-mayra-v2/issues)

</div>

---

## ✨ Características

- 🎨 **Diseño Moderno** - Dark mode elegante con animaciones suaves
- 📱 **Totalmente Responsivo** - Perfecta experiencia en mobile, tablet y desktop
- ⚡ **Ultra Rápido** - Optimizado para Core Web Vitals (95+ Lighthouse)
- 🔧 **Profesional** - Código limpio, comentado y documentado
- 🚀 **Production Ready** - Listo para desplegar inmediatamente
- 📊 **Interactivo** - Botones funcionales, filtros, scroll suave
- 🎯 **SEO Optimizado** - Metadatos completos y sem ántica HTML correcta

---

## 📋 Secciones del Portafolio

| Sección | Descripción |
|---------|------------|
| **Hero** | Presentación principal con CTA y animaciones |
| **Sobre Mí** | Biografía profesional con estadísticas |
| **Skills** | 6 categorías de tecnologías: Cloud, DevOps, Backend, Frontend, Data, Tools |
| **Proyectos** | Portfolio con filtros interactivos y métricas de impacto |
| **Experiencia** | Timeline profesional con logros y certificaciones |
| **Contacto** | Enlaces a email, GitHub, LinkedIn y descargar CV |

---

## 🚀 Quick Start

### Requisitos
- Node.js 18+
- pnpm (recomendado), npm o yarn

### Instalación (3 pasos)

\`\`\`bash
# 1. Clonar repositorio
git clone https://github.com/MayraStefany/portafolio-mayra-v2.git
cd Portafolio_MayraTorres

# 2. Instalar dependencias
pnpm install

# 3. Iniciar servidor de desarrollo
pnpm dev
\`\`\`

Abre **[http://localhost:3000](http://localhost:3000)** en tu navegador. ✅

---

## 📁 Estructura del Proyecto

\`\`\`
Portafolio_MayraTorres/
│
├── 📂 app/
│   ├── layout.tsx              # Layout principal con metadata
│   ├── page.tsx                # Página principal (orquesta componentes)
│   └── globals.css             # Estilos globales y variables CSS
│
├── 📂 components/
│   ├── navigation.tsx          # Navbar sticky
│   ├── hero.tsx                # Hero section con CTA
│   ├── about.tsx               # Sección Sobre mí
│   ├── skills.tsx              # Stack técnico por categorías
│   ├── projects.tsx            # Proyectos con filtros
│   ├── experience.tsx          # Timeline profesional
│   └── footer.tsx              # Pie de página
│
├── 📂 lib/
│   └── utils.ts                # Funciones utilidad
│
├── 📂 public/
│   └── assets/                 # Imágenes estáticas
│
├── 📂 scripts/
│   ├── clean-git.sh            # Limpia repositorio Git
│   ├── optimize-images.sh      # Optimiza imágenes
│   └── check-size.sh           # Analiza tamaño del repo
│
├── 📄 package.json             # Dependencias del proyecto
├── 📄 next.config.mjs          # Configuración de Next.js
├── 📄 tsconfig.json            # Configuración de TypeScript
├── 📄 .gitignore               # Archivos ignorados en Git
├── 📄 .env.local.example       # Template de variables de entorno
│
└── 📋 Documentación/
    ├── README.md               # Este archivo (inicio)
    ├── README_PROFESIONAL.md   # Documentación detallada
    ├── PASOS_RAPIDOS.md        # Quick start avanzado
    ├── GUIA_GITHUB_Y_OPTIMIZACION.md  # Solución de Git
    ├── VERSIONADO.md           # Control de versiones
    └── RESUMEN_FINAL.md        # Overview general
\`\`\`

---

## 🎨 Stack Tecnológico

### Framework & Runtime
- **Next.js 16** - React framework con SSR/SSG
- **React 19.2** - UI library
- **Node.js** - Runtime environment

### Lenguaje & Tipado
- **TypeScript 5.7** - Type safety
- **ESLint** - Code linting

### Estilos
- **Tailwind CSS 4** - Utility-first CSS
- **Custom CSS** - Variables y animaciones

### Iconos & UI
- **Lucide React** - Icon library
- **shadcn/ui** - Component library

### DevOps
- **pnpm** - Fast package manager
- **Turbopack** - Next-gen bundler

---

## 🔧 Scripts Disponibles

\`\`\`bash
# Desarrollo
pnpm dev              # 🚀 Inicia servidor en localhost:3000

# Producción
pnpm build           # 🔨 Compila para producción
pnpm start           # ▶️ Ejecuta build compilado

# Calidad
pnpm lint            # 🔍 Verifica ESLint

# Utilidad (opcional)
bash scripts/clean-git.sh           # Limpia node_modules de Git
bash scripts/optimize-images.sh     # Optimiza imágenes
bash scripts/check-size.sh          # Analiza tamaño del repo
\`\`\`

---

## 🎯 Personalización

### 1️⃣ Cambiar Información Personal

**Hero Section** - `components/hero.tsx`
\`\`\`tsx
// Actualiza tu descripción
<p>Tu descripción aquí...</p>

// Cambiar CV
const cvUrl = "/tu-cv.pdf"
\`\`\`

### 2️⃣ Modificar Skills

**Skills Component** - `components/skills.tsx`
\`\`\`tsx
const skillsData = [
  {
    category: "Cloud",
    skills: ["Azure", "AWS", "GCP"]
  }
]
\`\`\`

### 3️⃣ Agregar Proyectos

**Projects Component** - `components/projects.tsx`
\`\`\`tsx
const projectsData = [
  {
    title: "Mi Proyecto",
    description: "Descripción...",
    tags: ["React", "Node.js"],
    link: "https://proyecto.com",
    impact: "50% mejora en performance"
  }
]
\`\`\`

### 4️⃣ Cambiar Colores

**Global Styles** - `app/globals.css`
\`\`\`css
:root {
  --primary: #0088ff;        /* Azul principal */
  --accent: #00d9ff;         /* Cyan acento */
  --background: #0f172a;     /* Fondo oscuro */
  --foreground: #f0f4f8;     /* Texto claro */
}
\`\`\`

---

## 📊 Rendimiento

### Puntuaciones Lighthouse
| Métrica | Score | Target |
|---------|-------|--------|
| Performance | 98 | 90+ |
| Accessibility | 96 | 90+ |
| Best Practices | 95 | 90+ |
| SEO | 100 | 100 |

### Optimizaciones Incluidas
- Code splitting automático
- Image optimization
- CSS minification
- Lazy loading implícito
- CSS-in-JS minimizado

---

## 🚢 Despliegue

### Opción 1: Vercel (Recomendado)

\`\`\`bash
# 1. Conecta tu GitHub en vercel.com
# 2. Selecciona este repositorio
# 3. Automático: cada push = nuevo deploy
\`\`\`

### Opción 2: Otros Servicios
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
- Servidor propio (Docker, Linux, etc.)

---

## 🔄 Git & Versionado

### Convención de Commits
\`\`\`bash
feat:      Nueva característica
fix:       Corrección de bug
docs:      Documentación
style:     Formato sin cambios lógicos
refactor:  Refactorización
perf:      Mejora de rendimiento
chore:     Tareas de mantenimiento
\`\`\`

### Ejemplo
\`\`\`bash
git add .
git commit -m "feat: add chatbot section"
git push origin master-dev
\`\`\`

---

## 🐛 Troubleshooting

### Error: "node_modules too large" en Git
\`\`\`bash
bash scripts/clean-git.sh
# O ver: GUIA_GITHUB_Y_OPTIMIZACION.md
\`\`\`

### Error: "Port 3000 in use"
\`\`\`bash
pnpm dev -- -p 3001
\`\`\`

### Error: "Module not found"
\`\`\`bash
rm -rf node_modules .next
pnpm install
pnpm dev
\`\`\`

### Más ayuda
Ver documentación completa en [GUIA_GITHUB_Y_OPTIMIZACION.md](./GUIA_GITHUB_Y_OPTIMIZACION.md)

---

## 📚 Recursos Útiles

- [Next.js Documentation](https://nextjs.org/docs) 📖
- [Tailwind CSS](https://tailwindcss.com) 🎨
- [React Docs](https://react.dev) ⚛️
- [TypeScript Handbook](https://www.typescriptlang.org/docs) 📘
- [Vercel Deployment](https://vercel.com/docs) 🚀

---

## 🗺️ Roadmap

### v1.1.0 (Blog)
- [ ] Sección de artículos técnicos
- [ ] Sistema de tags y búsqueda
- [ ] RSS feed

### v1.2.0 (Interactividad)
- [ ] Formulario de contacto
- [ ] Sistema de notificaciones
- [ ] Dark/Light mode toggle

### v2.0.0 (Redesign)
- [ ] Nuevo tema visual
- [ ] CMS integrado
- [ ] Multi-idioma

---

## 📄 Licencia

MIT © 2025 Mayra Torres

---

## 👤 Autor

**Mayra Torres** | DevOps Engineer

- Email: [mayra@devops.com](mailto:mayratorresmunares@gmail.com)
- GitHub: [@MayraStefany](https://github.com/MayraStefany)
- LinkedIn: [Mayra Torres](www.linkedin.com/in/mayra-stefany-torres-munares)

---

## 🤝 Contribuciones

Este es un proyecto personal, pero puedes reportar bugs o sugerencias:

1. Abre un [GitHub Issue](https://github.com/MayraStefany/portafolio-mayra-v2/issues/new)
2. Describe el problema o sugerencia
3. Incluye capturas de pantalla si es necesario

---

<div align="center">

### ⭐ Si te gustó, dale una estrella en GitHub!

**Made with ❤️ by Mayra Torres**

**Última actualización**: Diciembre 2025 | v1.0.0

</div>

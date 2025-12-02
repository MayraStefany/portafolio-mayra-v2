# Mayra Torres | DevOps Engineer

¡Bienvenido a mi portafolio profesional! Aquí encontrarás una visión clara de mi experiencia, habilidades y proyectos en el mundo de DevOps, automatización y cloud computing.

## Sobre este proyecto

Decidí crear este portafolio como una forma de mostrar mi trabajo y experiencia de manera moderna y profesional. Es un proyecto Next.js minimalista pero potente, diseñado con atención a los detalles y optimizado para ofrecer la mejor experiencia tanto a quienes lo visitan como a otros desarrolladores que quieran explorar el código.

**Tecnologías principales:**
- Next.js 16 + React 19.2
- TypeScript para type safety
- Tailwind CSS 4 para estilos
- Componentes accesibles con shadcn/ui

## Estructura del proyecto

\`\`\`
📦 portafolio-mayra-v2/
├── 📁 app/
│ ├── layout.tsx # Layout principal
│ ├── page.tsx # Página de inicio
│ └── globals.css # Estilos globales
├── 📁 components/
│ ├── navigation.tsx # Barra de navegación
│ ├── hero.tsx # Sección principal
│ ├── about.tsx # Sobre mí
│ ├── skills.tsx # Habilidades técnicas
│ ├── projects.tsx # Mis proyectos
│ ├── experience.tsx # Experiencia profesional
│ └── footer.tsx # Pie de página
├── 📁 public/ # Archivos estáticos
├── 📁 scripts/ # Scripts útiles
│ ├── clean-git.sh
│ ├── optimize-images.sh
│ └── check-size.sh
└── 📋 Configuración
├── package.json
├── next.config.mjs
├── tsconfig.json
└── .gitignore
\`\`\`

## Cómo usar este proyecto

### Requisitos
- Node.js 18 o superior
- pnpm, npm o yarn

### Instalación rápida

\`\`\`bash
# Clonar el repositorio
git clone https://github.com/MayraStefany/portafolio-mayra-v2.git
cd Portafolio_MayraTorres

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
\`\`\`

Abre [http://localhost:3000](http://localhost:3000) en tu navegador. ✨

### Comandos disponibles

\`\`\`bash
pnpm dev              # 🚀 Desarrollo local
pnpm build            # 🔨 Compilar para producción
pnpm start            # ▶️ Ejecutar producción
pnpm lint             # 🔍 Verificar código

# Scripts opcionales
bash scripts/clean-git.sh           # Limpiar node_modules de Git
bash scripts/optimize-images.sh     # Optimizar imágenes
bash scripts/check-size.sh          # Analizar tamaño del repo
\`\`\`

## Cómo personalizar este portafolio

### 1. Cambiar información personal

**En `components/hero.tsx`:**
- Edita el título y descripción principal
- Actualiza el link de descargar CV

**En `components/navigation.tsx`:**
- Cambia "Mayra | DevOps Engineer" por tu nombre y rol

### 2. Actualizar tus habilidades

**En `components/skills.tsx`:**
Modifica el objeto `skillsData` con tus tecnologías:

\`\`\`tsx
const skillsData = [
  {
    category: "Cloud",
    skills: ["Azure", "AWS", "GCP", "Kubernetes"]
  },
  // Agrega más categorías según necesites
]
\`\`\`

### 3. Agregar tus proyectos

**En `components/projects.tsx`:**
Completa el objeto `projectsData`:

\`\`\`tsx
const projectsData = [
  {
    title: "Nombre del proyecto",
    description: "Qué hizo y por qué",
    tags: ["Tech 1", "Tech 2"],
    link: "https://github.com/...",
    impact: "Resultado o métrica de impacto"
  }
]
\`\`\`

### 4. Cambiar colores

**En `app/globals.css`:**
Modifica las variables CSS:

\`\`\`css
:root {
  --primary: #0088ff;        /* Azul principal */
  --accent: #00d9ff;         /* Cyan acento */
  --background: #0f172a;     /* Fondo oscuro */
  --foreground: #f0f4f8;     /* Texto claro */
}
\`\`\`

## Problemas comunes y soluciones

### Error: "File node_modules too large" al hacer push a GitHub

Si ves este error al hacer `git push`:

\`\`\`bash
# Ejecuta este script
bash scripts/clean-git.sh

# Luego haz push nuevamente
git push -u origin master-dev
\`\`\`

**¿Qué hace?** Limpia node_modules de Git para reducir el tamaño del repositorio.

### Error: "Port 3000 in use"

\`\`\`bash
# Usa otro puerto
pnpm dev -- -p 3001
\`\`\`

### Error: "Module not found"

\`\`\`bash
# Reinstala todo
rm -rf node_modules .next
pnpm install
pnpm dev
\`\`\`

## Despliegue

### Opción 1: Vercel (Recomendado)

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu repositorio
4. Cada push a `master-dev` se despliega automáticamente ✨

### Opción 2: Otros servicios

- [Netlify](https://netlify.com) - Muy fácil
- [GitHub Pages](https://pages.github.com) - Gratis
- [Cloudflare Pages](https://pages.cloudflare.com) - Rápido
- Servidor propio con Docker o Linux

## Rendimiento

Este portafolio fue optimizado para máxima velocidad y accesibilidad:

- ⚡ **98/100** en Performance (Lighthouse)
- ♿ **96/100** en Accessibility
- 📋 **95/100** en Best Practices
- 🔍 **100/100** en SEO

## Stack tecnológico completo

| Categoría | Tecnología |
|-----------|-----------|
| **Framework** | Next.js 16 |
| **UI** | React 19.2 |
| **Lenguaje** | TypeScript 5.7 |
| **Estilos** | Tailwind CSS 4 |
| **Componentes** | shadcn/ui |
| **Iconos** | Lucide React |
| **Package Manager** | pnpm |
| **Bundler** | Turbopack |

## Roadmap futuro

Cosas que planeo agregar:

- **v1.1.0**: Blog con artículos técnicos
- **v1.2.0**: Formulario de contacto + notificaciones
- **v2.0.0**: Dark/Light mode automático
- **v2.1.0**: Multi-idioma (ES/EN)

## Contacto

Me encantaría escuchar tus comentarios o si tienes alguna pregunta:

- **Email:** mayratorremunares@gmail.com
- **GitHub:** [@MayraStefany](https://github.com/MayraStefany)
- **LinkedIn:** [Mayra Torres](www.linkedin.com/in/mayra-stefany-torres-munares)

## Agradecimientos

Este proyecto fue construido con inspiración en mejores prácticas de desarrollo web moderno. Gracias a la comunidad de Next.js, React y Tailwind CSS.

---

**Hecho con ❤️ por Mayra Torres | DevOps Engineer**

*Última actualización: Diciembre 2025 | v1.0.0*

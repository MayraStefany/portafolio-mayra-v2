/** @type {import('next').NextConfig} */
const nextConfig = {
  // <CHANGE> Configuración optimizada para producción
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  // <CHANGE> Desabilitar React Compiler por compatibilidad
  reactCompiler: false,
  // <CHANGE> Turbopack es el bundler por defecto en Next.js 16
  // No necesita configuración explícita
  swcMinify: true,
}

export default nextConfig

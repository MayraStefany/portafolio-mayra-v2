#!/bin/bash
# Script para optimizar imágenes del portafolio

echo "🖼️  Optimizando imágenes..."

# Crear carpeta optimizada
mkdir -p public/optimized

# Comprimir PNGs (requiere optipng)
if command -v optipng &> /dev/null; then
    echo "Optimizando PNGs..."
    optipng -o2 -strip all public/*.png -out public/optimized/
else
    echo "⚠️  optipng no instalado. Salta PNGs."
fi

echo "✅ Optimización completada!"

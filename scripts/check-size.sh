#!/bin/bash
# Script para revisar tamaño de archivos

echo "📊 Análisis de tamaño de repositorio"
echo "===================================="
echo ""

echo "Tamaño total de .git:"
du -sh .git

echo ""
echo "Top 10 archivos más grandes:"
find . -name '.git' -prune -o -type f -exec ls -lh {} \; | \
    sort -k5 -hr | head -20 | awk '{print $5 "\t" $9}'

echo ""
echo "Directorios grandes:"
du -sh */ 2>/dev/null | sort -hr | head -10

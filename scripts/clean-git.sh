#!/bin/bash
# Script para limpiar el repositorio Git y resolver problemas de tamaño

echo "🧹 Iniciando limpieza de repositorio..."

# Desinstalar Git LFS si está activo
echo "1. Desinstalando Git LFS..."
git lfs uninstall || true

# Limpiar reflog
echo "2. Limpiando reflog..."
git reflog expire --expire=now --all

# Garbage collection agresivo
echo "3. Ejecutando garbage collection..."
git gc --aggressive --prune=now

# Remover node_modules del tracking
echo "4. Removiendo node_modules del tracking..."
git rm -r --cached node_modules/ || true
git rm -r --cached pnpm-lock.yaml || true
git rm -r --cached .next/ || true

# Crear commit
echo "5. Creando commit de limpieza..."
git commit -m "chore: remove large files and cache" || true

# Push
echo "6. Haciendo push..."
read -p "Presiona Enter para continuar con el push o Ctrl+C para cancelar"
git push -u origin master-dev -f

echo "✅ Limpieza completada!"
echo "📊 Tamaño del repositorio:"
du -sh .git

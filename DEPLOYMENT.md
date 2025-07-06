# 🚀 Deployment Guide - AleskyGym con Vercel

## 📋 Configuración de Vercel

### 1. Crear cuenta en Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Regístrate con GitHub
3. Conecta tu repositorio `AleskyGym`

### 2. Configurar el proyecto
1. En Vercel Dashboard → "New Project"
2. Importa `GrupoRosaSistemaII/AleskyGym`
3. Configuración:
   - **Framework Preset**: Angular
   - **Build Command**: `npm run build:vercel`
   - **Output Directory**: `dist/angular`

### 3. Obtener tokens para CI/CD
1. En Vercel → Settings → Tokens → Create
2. Copia el token generado

### 4. Configurar GitHub Secrets
En tu repositorio de GitHub → Settings → Secrets and variables → Actions:

Agregar estos secrets:
```
VERCEL_TOKEN=tu_token_de_vercel
VERCEL_ORG_ID=tu_org_id_de_vercel
VERCEL_PROJECT_ID=tu_project_id_de_vercel
```

## 🔧 Cómo obtener IDs de Vercel

### Método 1: Desde el Dashboard
- **ORG_ID**: Settings → General → Organization ID
- **PROJECT_ID**: Project Settings → General → Project ID

### Método 2: Desde CLI
```bash
npm i -g vercel
vercel login
vercel link
# Los IDs aparecerán en .vercel/project.json
```

## 🚀 Proceso de Deployment

### Deployment Automático
- **Push a `main`**: Deploy automático a producción
- **Push a `pipeline`**: Deploy automático a producción
- **Pull Request**: Preview deployment

### Deployment Manual
```bash
npm run build:vercel
vercel --prod
```

## 📊 URLs del proyecto
- **Producción**: https://alesky-gym.vercel.app
- **Preview**: Se genera automáticamente para PRs

## 🔍 Verificación
1. El pipeline ejecuta tests
2. Build de producción
3. Deploy a Vercel
4. Verificación final

## 📝 Notas importantes
- Los builds fallan → No se despliega
- Solo ramas `main` y `pipeline` se despliegan automáticamente
- Variables de entorno en `.env.production`

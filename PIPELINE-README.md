# 🚀 Pipeline CI/CD - AleskyGym

## 📋 Descripción General

Este pipeline de CI/CD está diseñado para automatizar la instalación, testing y verificación del sistema AleskyGym en un entorno Ubuntu 20.04.

## 🔧 Configuración del Pipeline

### Triggers (Activadores)
- **Push** a las ramas: `main`, `develop`, `pipeline`
- **Pull Request** hacia las ramas: `main`, `develop`
- **Ejecución manual** con `workflow_dispatch`

### 📊 Estructura del Pipeline

El pipeline consta de **3 jobs principales**:

#### 1. 🔧 **Installation (Instalación)**
- Actualización del sistema Ubuntu
- Instalación de dependencias del sistema:
  - curl, wget, git
  - build-essential
  - Python 3 y pip
  - Node.js y npm
  - nginx
- Instalación de paquetes Python: pytest, flask, requests
- Generación de artefactos de estado

#### 2. 🧪 **Testing (Pruebas)**
- Descarga de artefactos de instalación
- Reinstalación de dependencias necesarias
- Creación y ejecución de tests:
  - **Tests de Python**: Verificación de versión e importación de módulos
  - **Tests de Node.js**: Verificación de versión y funcionalidad de npm
  - **Tests del sistema**: Verificación de herramientas instaladas
  - **Tests de conectividad**: Verificación de acceso a internet
- Generación de reporte de tests

#### 3. ✅ **Verification (Verificación)**
- Descarga de reportes de tests
- Verificación de que todos los tests pasaron
- Mensaje de éxito final
- Generación de badges de estado
- Información del entorno de ejecución

## 🆕 Mejoras Implementadas

### Versión Actual (Actualizada)
- ✅ **Versiones actualizadas**: Migración a actions/checkout@v4 y actions/upload-artifact@v4
- ✅ **Trigger adicional**: Agregado soporte para la rama `pipeline`
- ✅ **Ejecución manual**: Agregado `workflow_dispatch` para ejecutar manualmente
- ✅ **Mejor manejo de artefactos**: Uso de las versiones más recientes de las acciones

### Funcionalidades Existentes
- ✅ **Tests comprehensivos**: Cobertura completa de Python, Node.js, sistema y conectividad
- ✅ **Artefactos**: Generación y compartición de artefactos entre jobs
- ✅ **Reportes**: Generación automática de reportes de tests
- ✅ **Verificación**: Validación final de que todos los tests pasaron
- ✅ **Información del entorno**: Reporte detallado del sistema utilizado

## 🎯 Cómo Usar el Pipeline

### Ejecución Automática
El pipeline se ejecuta automáticamente cuando:
- Haces push a las ramas `main`, `develop`, o `pipeline`
- Creas un Pull Request hacia `main` o `develop`

### Ejecución Manual
1. Ve a tu repositorio en GitHub
2. Navega a la pestaña "Actions"
3. Selecciona "CI Pipeline - Ubuntu 20.04"
4. Haz clic en "Run workflow"
5. Selecciona la rama y haz clic en "Run workflow"

## 📈 Monitoreo y Resultados

### Badges de Estado
El pipeline genera automáticamente badges que indican:
- ![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
- ![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
- ![Platform](https://img.shields.io/badge/platform-ubuntu%2020.04-blue)

### Artefactos Generados
- **installation-artifacts**: Estado de la instalación
- **test-report**: Reporte completo de tests ejecutados

## 🛠️ Tecnologías Utilizadas

- **GitHub Actions**: Plataforma de CI/CD
- **Ubuntu 20.04**: Sistema operativo base
- **Python 3**: Lenguaje de programación y testing
- **Node.js**: Runtime de JavaScript
- **nginx**: Servidor web
- **pytest**: Framework de testing para Python

## 📋 Requisitos

- Repositorio en GitHub
- GitHub Actions habilitado
- Acceso a runners de Ubuntu 20.04

## 🔍 Troubleshooting

### Problemas Comunes

1. **Error de dependencias**: Verificar que todas las dependencias están en la lista de instalación
2. **Tests fallidos**: Revisar los logs específicos de cada test
3. **Artefactos no encontrados**: Verificar que el job anterior completó exitosamente

### Logs y Debugging

- Cada step del pipeline tiene logs detallados
- Los artefactos contienen información adicional de debugging
- El reporte final incluye información completa del entorno

## 🚀 Estado Actual

**Estado**: ✅ **ACTIVO Y FUNCIONANDO**
**Última actualización**: Diciembre 2024
**Versión**: 2.0 (Actualizada)

---

*Este pipeline está diseñado para garantizar la calidad y funcionalidad del sistema AleskyGym en un entorno Ubuntu 20.04.*

# Proyecto Final API - Nutrivista

## Información General

- **Curso:** Ingeniería Web
- **Fecha:** 29 de Enero de 2024
- **Autores:** David Andrés Guillén Balarezo; Iván Andrés Tulcán Jaya
- **Ubicación:** Quito, Ecuador
- **GitHub Repo:** [ProyectoFinalAPI](https://github.com/davidguillen2002/ProyectoFinalAPI)
- **Deployed App:** [Nutrivista App](https://apinutrivista.onrender.com)

## Descripción

Este repositorio contiene el backend de nuestra aplicación Nutrivista, implementada como parte del proyecto final para el curso de Arquitectura de Software y Diseño de Sistemas. La API desarrollada gestiona los datos de nutrición, permitiendo operaciones CRUD en los recursos de alimentos y nutrientes.

### Características Claves

- Listado y detallado de alimentos.
- Calculadora de calorías.
- Serialización de datos en formato JSON.
- Filtros y capacidades de búsqueda avanzada.

## Mejoras Implementadas

### 1. Mejoras Basadas en Principios SOLID

- **Single Responsibility Principle:** Separación de responsabilidades en el modelo `Alimento`.
- **Open/Closed Principle:** Estructura de modelo extensible para nuevas relaciones.

### 2. Mejoras con Patrones de Diseño

- **Repository Pattern:** Clase `AlimentoRepository` para abstracción de operaciones CRUD.
- **Service Pattern:** Clase `AlimentoService` como intermediario entre la presentación y el repositorio.

## API Funcionalidad

- CRUD operaciones para `Alimento` y `Nutriente`.
- Uso de `DjangoFilterBackend` y `filters.SearchFilter` para filtrado y búsqueda.
- Serializadores para transformar datos del modelo a JSON.

## Frontend en React

La aplicación frontend se estructura en los siguientes componentes:

- **App:** Navegación y búsqueda de alimentos.
- **AlimentoDetalle:** Detalle de alimentos seleccionados.
- **CalculadoraCalorias:** Cálculo de calorías necesarias.

### Características Técnicas

- Uso de React Router para navegación.
- Estados y ciclos de vida manejados con hooks `useState` y `useEffect`.
- Diseño responsivo y adaptativo.

## Enlaces

- **Repositorio GitHub:** [ProyectoFinalAPI](https://github.com/davidguillen2002/ProyectoFinalAPI)
- **Aplicación Deployada:** [Nutrivista App](https://apinutrivista.onrender.com)

## Contacto

- **David Andrés Guillén Balarezo:** [Perfil de GitHub](https://github.com/davidguillen2002)
- **Iván Andrés Tulcán Jaya:** [Perfil de GitHub](https://github.com/ivantulcan)

---
Desarrollado con ❤️ por David y Iván.

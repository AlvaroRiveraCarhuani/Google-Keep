# 💡 Google Keep Clone - Pro Edition

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

Una implementación moderna, segura y elegante del gestor de notas más popular, construida con una arquitectura de microservicios dockerizada y un diseño centrado en el usuario.

---

## 🏗️ Arquitectura del Sistema

El proyecto sigue una arquitectura de **Tres Capas (3-Tier Architecture)** completamente aislada mediante contenedores:

1. **Capa de Presentación (Frontend)**: Angular 17+ con una interfaz reactiva inspirada en Google Keep, utilizando PrimeNG para componentes complejos y TailwindCSS para un estilizado ultra-personalizado.
2. **Capa de Negocio (Backend)**: NestJS (Node.js framework) actuando como una API REST robusta, encargada de la lógica de negocio, autenticación JWT y validación de datos.
3. **Capa de Datos (Persistence)**: PostgreSQL como base de datos relacional para garantizar la integridad y escalabilidad de las notas y usuarios.

---

## 🚀 Tecnologías Core

### **Frontend**

* **Angular**: Framework principal para una SPA (Single Page Application) fluida.
* **PrimeNG Sakai**: Base estética para componentes de alta calidad.
* **TailwindCSS**: Utilizado para el rediseño "Pixel Perfect" del estilo Keep.
* **RxJS**: Gestión de flujos de datos asíncronos (búsqueda en tiempo real).

### **Backend**

* **NestJS**: Modularidad y escalabilidad empresarial.
* **TypeORM**: Mapeo objeto-relacional para interactuar con la DB de forma segura.
* **Passport.js & JWT**: Sistema de seguridad y sesiones persistentes.

### **Infraestructura**

* **Docker & Docker Compose**: Orquestación de servicios para un despliegue "un solo comando".

---

## ✨ Características Principales

* 🌑 **Modo Oscuro/Claro**: Adaptable según las preferencias del sistema.
* 📋 **Notas y Listas**: Soporta tanto texto plano como checklists dinámicas.
* 🔍 **Búsqueda Inteligente**: Filtrado instantáneo de notas en todas las secciones.
* 🎨 **Personalización**: Cambio de colores, fijado de notas y gestión de etiquetas.
* 🛡️ **Seguridad Multi-inquilino**: Cada usuario solo tiene acceso a su propia información.

---

## 📖 Guía de Referencia y Despliegue

Esta sección contiene la información técnica original para la gestión del contenedor.

### Inicio Rápido

1. **Clonar el repositorio**:

    ```bash
    git clone https://github.com/AlvaroRiveraCarhuani/Google-Keep.git
    cd Google-Keep
    ```

2. **Levantar la infraestructura**:

    ```bash
    docker compose up -d --build
    ```

### Acceso a los Servicios

* 🌍 **Frontend**: [http://localhost:4200](http://localhost:4200)
* ⚙️ **Backend API**: [http://localhost:3000/api/v1](http://localhost:3000/api/v1)
* 📚 **Documentación Swagger**: [http://localhost:3000/api](http://localhost:3000/api)

### Comandos de Mantenimiento

* **Logs**: `docker compose logs -f`
* **Resetear DB**:
    1. `docker compose down -v`
    2. `docker compose up -d --build`
* **Detener todo**: `docker compose down`

---

## 🛠️ Notas de Desarrollo

* No instalar dependencias fuera de Docker para mantener la paridad ambiental.
* Las variables de entorno se gestionan en el archivo `.env` dentro de la carpeta `backend/`.

---
*Desarrollado con ❤️ por el equipo de Google Keep Clone.*

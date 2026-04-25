# Google Keep Clone - Arquitectura Dockerizada

Este proyecto está completamente dockerizado. No es necesario instalar Node.js, Angular CLI ni NestJS en tu máquina local. Todo el entorno se ejecuta dentro de contenedores.

---

## Requisitos Previos

Asegúrate de tener instalado:

* Docker
* Docker Compose
* Git

---

## Inicio Rápido

### 1. Clonar el repositorio

```bash
https://github.com/AlvaroRiveraCarhuani/Google-Keep.git
cd Google-Keep
```

### 2. Levantar toda la infraestructura

Este comando construye las imágenes y levanta automáticamente la base de datos, backend y frontend:

```bash
docker compose up -d --build
```

---

## Acceso a la Aplicación

Una vez que los contenedores estén corriendo, puedes acceder a:

* Frontend (Angular):
  http://localhost:4200

* Backend API (NestJS):
  http://localhost:3000

* Documentación API (Swagger):
  http://localhost:3000/api

---

## Estructura del Proyecto (Backlog)

El desarrollo está dividido en módulos para evitar conflictos en Git:

* Módulo de Identidad (Auth)
  Login, Registro, autenticación con JWT

* Módulo Core (Notas)
  Dashboard, CRUD de notas, visualización tipo grid

* Módulo de Gestión
  Etiquetas, barra lateral, archivo y papelera

---

## Comandos Útiles

### Ver logs en tiempo real

```bash
docker compose logs -f
```

### Reiniciar completamente la base de datos

Usar solo si modificaste archivos como `init.sql`:

```bash
docker compose down -v
docker compose up -d --build
```

---

## Detener el proyecto

```bash
docker compose down
```

---

## Notas Finales

* No instales dependencias manualmente fuera de Docker
* Todos los cambios deben hacerse dentro del proyecto
* Si algo falla, revisa los logs antes de reconstruir

---

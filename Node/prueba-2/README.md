# 📚 My Book App

Proyecto guiado de **LMSGI 25-26** — Biblioteca personal de libros.

## Tecnologías

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4

## Estructura del proyecto

```
my-book-app/
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Hito 1 — Paso 2
│   │   ├── Book.tsx          # Hito 1 — Pasos 4-6 · Hito 2 — Pasos 10, 12
│   │   └── IconButton.tsx    # Hito 2 — Paso 8
│   ├── pages/
│   │   └── Library.tsx       # Hito 1 — Paso 3 · Hito 2 — Paso 13 · Hito 3 — Pasos 15-16
│   ├── types/
│   │   └── Interfaces.ts     # IBook interface
│   ├── App.tsx               # 16 libros · useState dataBook
│   ├── main.tsx
│   └── index.css             # Tailwind + estilos personalizados
├── index.html
├── vite.config.ts
└── package.json
```

## Hitos implementados

| Hito | Pasos | Descripción |
|------|-------|-------------|
| Hito 1 | 1–7 | Componentes, Props, estructura de carpetas, interfaz IBook, listado con `.map()` |
| Hito 2 | 8–13 | `useState` para favoritos y estado de lectura, paginación |
| Hito 3 | 14–16 | 16 libros, 4 por página con `useEffect`, filtro por texto y estado |

## Instalación y uso

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en modo desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:5173
```

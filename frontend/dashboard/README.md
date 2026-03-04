# VOLUMIA Architectural Dashboard (React + Tailwind)

UI demo modular para gestión de proyectos arquitectónicos.

## Componentes

- `DashboardLayout`
- `ProjectCard`
- `SystemPanel`

## Funcionalidades demo

- Diseño minimalista y contemporáneo con paleta neutra.
- Estados visuales por color:
  - Verde: `COMPLETED`
  - Azul: `IN PROGRESS`
  - Amarillo: `REVIEW`
  - Rojo: `DRAFT`
- Buscador superior y botón `Compartir`.
- Filtros por categoría y estado.
- Menú de acciones rápidas en tarjetas (renombrar/duplicar/eliminar como feedback demo).
- Tarjeta especial `New Project`.
- Panel lateral de sistema con indicadores AI/GPU y actividad reciente.
- Toast notifications para feedback inmediato.
- Layout responsive para desktop/tablet.

## Ejecución

```bash
npm install
npm run dev
```

> Si el entorno bloquea acceso a `registry.npmjs.org`, instala dependencias en una red con acceso y luego ejecuta localmente.

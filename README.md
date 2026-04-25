# AV Guarico 1 - Plataforma Visual Operativa (MVP)

MVP construido con Astro como framework principal y React como islas para interaccion puntual.

## Stack

- Astro
- React (islas)
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Ejecutar

```bash
npm install
npm run dev
```

## Estructura

- `src/pages/`: Home, Grupos, Organigramas, Eventos, Guias.
- `src/components/ui/`: componentes base reutilizables.
- `src/components/sections/`: secciones de la landing.
- `src/components/data-display/`: visualizacion de datos operativos.
- `src/data/`: datos simulados listos para reemplazar por datos reales.
- `src/lib/`: tipos, utilidades y roadmap tecnico.

## Escalado

1. Reemplazar datos en `src/data` por fuentes reales normalizadas.
2. Añadir CMS para que coordinacion edite contenido.
3. Evolucionar organigramas a una experiencia interactiva.

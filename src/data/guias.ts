import type { GuideItem } from '@/lib/types';

export const guias: GuideItem[] = [
  {
    id: 'guia-audio',
    titulo: 'Guia de Instalacion de Audio',
    categoria: 'Audio',
    descripcion: 'Checklist de conexion, prueba de linea y balance de niveles.',
    href: '/docs/guia-audio.pdf',
  },
  {
    id: 'guia-video',
    titulo: 'Guia de Instalacion de Video',
    categoria: 'Video',
    descripcion: 'Flujo recomendado para camaras, switcher y streaming.',
    href: '/docs/guia-video.pdf',
  },
];

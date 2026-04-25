import type { EventItem } from '@/lib/types';

export const eventos: EventItem[] = [
  {
    id: 'ev1',
    titulo: 'Asamblea Regional Tecnica',
    fechaISO: '2026-05-05',
    lugar: 'San Juan de los Morros',
    detalle: 'Montaje general de audio y video para plenaria central.',
    tipo: 'Asamblea',
  },
  {
    id: 'ev2',
    titulo: 'Capacitacion de Consola Digital',
    fechaISO: '2026-05-18',
    lugar: 'Valle de la Pascua',
    detalle: 'Entrenamiento de flujo de señal y mezclas por escena.',
    tipo: 'Capacitacion',
  },
  {
    id: 'ev3',
    titulo: 'Operativo de Produccion Distrital',
    fechaISO: '2026-06-02',
    lugar: 'Calabozo',
    detalle: 'Cobertura multicamara y transmision interna.',
    tipo: 'Operativo',
  },
  {
    id: 'ev4',
    titulo: 'Asamblea de Coordinacion AV',
    fechaISO: '2026-06-15',
    lugar: 'Altagracia de Orituco',
    detalle: 'Ajuste de roles y calendarizacion del trimestre.',
    tipo: 'Asamblea',
  },
];

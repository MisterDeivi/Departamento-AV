import type { EventItem } from '@/lib/types';

export const formatFecha = (fechaISO: string) =>
  new Date(`${fechaISO}T00:00:00`).toLocaleDateString('es-VE', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

export const formatDiaMes = (fechaISO: string) =>
  new Date(`${fechaISO}T00:00:00`).toLocaleDateString('es-VE', {
    day: '2-digit',
    month: 'short',
  });

export const sortEventosProximos = (eventos: EventItem[]) =>
  [...eventos].sort(
    (a, b) => new Date(`${a.fechaISO}T00:00:00`).getTime() - new Date(`${b.fechaISO}T00:00:00`).getTime(),
  );

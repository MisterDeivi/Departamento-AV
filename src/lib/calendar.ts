import type { EventItem } from '@/lib/types';

export const makeDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const parseISODate = (isoDate: string) => new Date(`${isoDate}T00:00:00`);

export const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() == b.getDate();

export const getMonthMatrix = (year: number, month: number) => {
  const firstOfMonth = new Date(year, month, 1);
  const firstWeekday = (firstOfMonth.getDay() + 6) % 7;
  const startDate = new Date(year, month, 1 - firstWeekday);

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);
    return date;
  });
};

export const groupEventsByDate = (eventos: EventItem[]) => {
  const map = new Map<string, EventItem[]>();

  eventos.forEach((evento) => {
    const current = map.get(evento.fechaISO) ?? [];
    current.push(evento);
    map.set(evento.fechaISO, current);
  });

  return map;
};

import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { EventItem } from '@/lib/types';
import { formatFecha } from '@/lib/format';
import { getMonthMatrix, groupEventsByDate, isSameDay, makeDateKey, parseISODate } from '@/lib/calendar';

interface Props {
  eventos: EventItem[];
}

const dias = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];

export default function EventsCalendar({ eventos }: Props) {
  const initialDate = parseISODate(eventos[0]?.fechaISO ?? new Date().toISOString().slice(0, 10));
  const [currentMonth, setCurrentMonth] = useState(new Date(initialDate.getFullYear(), initialDate.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate);

  const eventsByDate = useMemo(() => groupEventsByDate(eventos), [eventos]);
  const monthDays = useMemo(
    () => getMonthMatrix(currentMonth.getFullYear(), currentMonth.getMonth()),
    [currentMonth],
  );

  const monthLabel = currentMonth.toLocaleDateString('es-VE', {
    month: 'long',
    year: 'numeric',
  });

  const selectedKey = makeDateKey(selectedDate);
  const selectedEvents = eventsByDate.get(selectedKey) ?? [];

  const moveMonth = (offset: number) => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + offset, 1));
  };

  return (
    <section className="space-y-4">
      <div className="surface-glass rounded-2xl p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => moveMonth(-1)}
            className="rounded-xl border border-[color:var(--stroke)] bg-white p-2 text-[color:var(--brand-gray)] hover:bg-[color:var(--bg-soft)]"
            aria-label="Mes anterior"
          >
            <ChevronLeft size={16} />
          </button>
          <p className="text-sm font-semibold capitalize text-[color:var(--brand-gray)] sm:text-base">{monthLabel}</p>
          <button
            type="button"
            onClick={() => moveMonth(1)}
            className="rounded-xl border border-[color:var(--stroke)] bg-white p-2 text-[color:var(--brand-gray)] hover:bg-[color:var(--bg-soft)]"
            aria-label="Mes siguiente"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold uppercase tracking-[0.06em] text-[color:var(--text-soft)]">
          {dias.map((dia) => (
            <div key={dia} className="py-2">{dia}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {monthDays.map((date) => {
            const inMonth = date.getMonth() === currentMonth.getMonth();
            const key = makeDateKey(date);
            const hasEvents = eventsByDate.has(key);
            const selected = isSameDay(date, selectedDate);

            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedDate(date)}
                className={`relative min-h-10 rounded-lg border text-sm transition sm:min-h-11 ${
                  selected
                    ? 'border-[color:var(--brand-green)] bg-[color:var(--brand-green)] text-white'
                    : inMonth
                      ? 'border-[color:var(--stroke)] bg-white text-[color:var(--brand-gray)] hover:bg-[color:var(--bg-soft)]'
                      : 'border-transparent bg-transparent text-[color:var(--text-soft)]/65'
                }`}
              >
                {date.getDate()}
                {hasEvents && (
                  <span
                    className={`absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full ${selected ? 'bg-white' : 'bg-[color:var(--brand-green)]'}`}
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="card-elevated rounded-2xl p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--brand-green)]">Eventos del dia</p>
        <h3 className="mt-1 text-base font-semibold text-[color:var(--brand-gray)]">{formatFecha(selectedKey)}</h3>

        {selectedEvents.length > 0 ? (
          <ul className="mt-3 space-y-3">
            {selectedEvents.map((evento) => (
              <li key={evento.id} className="rounded-xl border border-[color:var(--stroke)] bg-white/80 p-3">
                <p className="text-sm font-semibold text-[color:var(--brand-gray)]">{evento.titulo}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.06em] text-[color:var(--brand-green)]">{evento.tipo}</p>
                <p className="mt-1 text-sm text-[color:var(--text-soft)]">{evento.lugar}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-[color:var(--text-soft)]">No hay eventos planificados para este dia.</p>
        )}
      </div>
    </section>
  );
}

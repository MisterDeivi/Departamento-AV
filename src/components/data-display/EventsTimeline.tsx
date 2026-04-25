import { motion } from 'framer-motion';
import { CalendarDays, MapPin } from 'lucide-react';
import type { EventItem } from '@/lib/types';
import { formatFecha, sortEventosProximos } from '@/lib/format';

interface Props {
  eventos: EventItem[];
}

export default function EventsTimeline({ eventos }: Props) {
  const ordered = sortEventosProximos(eventos);

  return (
    <section className="space-y-4">
      {ordered.map((evento, index) => (
        <motion.article
          key={evento.id}
          initial={{ opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.25, delay: index * 0.04 }}
          className="card-elevated relative rounded-2xl p-4 sm:p-5"
        >
          <div className="absolute left-3 top-0 h-full w-px bg-[color:var(--stroke)]" aria-hidden="true" />
          <div className="relative pl-5">
            <span className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-[color:var(--brand-green)]" aria-hidden="true" />
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--brand-green)]">
              <span>{evento.tipo}</span>
              <span className="text-[color:var(--text-soft)]">•</span>
              <span className="inline-flex items-center gap-1 text-[color:var(--text-soft)]">
                <CalendarDays size={14} /> {formatFecha(evento.fechaISO)}
              </span>
            </div>
            <h3 className="mt-2 text-base font-semibold text-[color:var(--brand-gray)] sm:text-lg">{evento.titulo}</h3>
            <p className="mt-2 inline-flex items-center gap-1 text-sm text-[color:var(--text-soft)]">
              <MapPin size={14} /> {evento.lugar}
            </p>
            <p className="mt-2 text-sm text-[color:var(--text-soft)]">{evento.detalle}</p>
          </div>
        </motion.article>
      ))}
    </section>
  );
}

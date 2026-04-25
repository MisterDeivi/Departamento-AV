import { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Target, ShieldCheck } from 'lucide-react';
import type { WorkGroup } from '@/lib/types';

interface Props {
  grupos: WorkGroup[];
}

const filtros: Array<WorkGroup['area'] | 'Todos'> = ['Audio', 'Video', 'Plataforma', 'Todos'];

export default function GroupFilterGrid({ grupos }: Props) {
  const [activo, setActivo] = useState<(typeof filtros)[number]>('Audio');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const areaParam = params.get('area');
    if (areaParam && filtros.includes(areaParam as any)) {
      setActivo(areaParam as any);
    }
  }, []);

  const visibles = useMemo(() => {
    if (activo === 'Todos') return grupos;
    return grupos.filter((grupo) => grupo.area === activo);
  }, [activo, grupos]);

  return (
    <div className="space-y-8">
      {/* Segmented Control / Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-2xl bg-[color:var(--stroke)] p-1.5 shadow-inner">
          {filtros.map((filtro) => {
            const isSelected = activo === filtro;
            return (
              <button
                key={filtro}
                onClick={() => setActivo(filtro)}
                className={`relative px-6 py-2.5 text-sm font-bold tracking-wide rounded-xl transition-colors duration-300 ${
                  isSelected ? 'text-[color:var(--brand-green)]' : 'text-[color:var(--brand-gray)] hover:text-[color:var(--brand-green-soft)]'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-xl shadow-sm"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{filtro}</span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibles.map((grupo) => (
            <motion.article
              key={grupo.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, type: 'spring', bounce: 0.3 }}
              className="group flex flex-col rounded-[1.5rem] bg-white p-6 shadow-sm border border-[color:var(--stroke)] hover:shadow-xl hover:shadow-[color:var(--brand-green)]/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-[color:var(--brand-green)] opacity-[0.03] rounded-full blur-2xl group-hover:opacity-[0.08] transition-opacity duration-500"></div>

              <div className="mb-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-extrabold tracking-tight text-[color:var(--brand-gray)] leading-tight">{grupo.equipo}</h3>
                  <span className="shrink-0 rounded-full bg-[color:var(--brand-green)]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[color:var(--brand-green)]">
                    {grupo.area}
                  </span>
                </div>
                {grupo.zona && (
                  <p className="text-[13px] font-semibold text-[color:var(--text-soft)] inline-flex items-center gap-1.5 bg-[color:var(--bg-soft)] px-2.5 py-1 rounded-md">
                   <LayoutGrid size={14} className="opacity-70" />
                   {grupo.zona}
                  </p>
                )}
              </div>

              {/* Tasks / Description */}
              <div className="mb-6 flex-1">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[color:var(--brand-gray)] opacity-60 mb-2">
                  <Target size={14} /> Tareas
                </p>
                <div className="flex flex-wrap gap-2 text-[13px] text-[color:var(--brand-gray)]">
                  {grupo.tareas.map((t, idx) => (
                    <span key={idx} className="block text-sm leading-snug">
                      • {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px w-full bg-[color:var(--stroke)] mb-5"></div>

              {/* Roles */}
              <div className="space-y-4">
                {grupo.roles.map((rolData, idx) => {
                  const isCapitan = rolData.rol.toLowerCase().includes('capit');
                  return (
                    <div key={idx}>
                      <p className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide mb-1.5 ${isCapitan ? 'text-[color:var(--brand-green)]' : 'text-[color:var(--text-soft)]'}`}>
                        {isCapitan && <ShieldCheck size={14} /> }
                        {rolData.rol}
                      </p>
                      <ul className="flex flex-wrap gap-1.5">
                        {rolData.miembros.map((miembro) => (
                          <li key={miembro} className={`text-[13px] px-2.5 py-1 rounded-lg border ${
                            isCapitan 
                              ? 'bg-[color:var(--brand-green)]/5 border-[color:var(--brand-green)]/20 text-[color:var(--brand-gray)] font-semibold' 
                              : 'bg-white border-[color:var(--stroke)] text-[color:var(--text-soft)]'
                          }`}>
                            {miembro}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

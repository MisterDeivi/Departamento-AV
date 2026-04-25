import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, List, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import type { EventItem } from '@/lib/types';

interface HeroEventsWidgetProps {
  events: EventItem[];
}

export default function HeroEventsWidget({ events }: HeroEventsWidgetProps) {
  const [viewMode, setViewMode] = useState<'timeline' | 'calendar'>('timeline');
  const [currentMonthDate, setCurrentMonthDate] = useState(new Date(2026, 4)); // Inferred from data (May 2026)

  // Sort events chronologically just in case
  const sortedEvents = [...events].sort((a, b) => new Date(a.fechaISO).getTime() - new Date(b.fechaISO).getTime());
  
  // Handlers for Calendar
  const goPrevMonth = () => setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() - 1));
  const goNextMonth = () => setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1));

  // Calendar logic
  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();
  
  const daysInMonth = getDaysInMonth(currentMonthDate.getFullYear(), currentMonthDate.getMonth());
  const firstDay = getFirstDayOfMonth(currentMonthDate.getFullYear(), currentMonthDate.getMonth());
  
  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const fullDate = `${currentMonthDate.getFullYear()}-${String(currentMonthDate.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
    const dayEvents = sortedEvents.filter(e => e.fechaISO === fullDate);
    calendarDays.push({ num: i, date: fullDate, events: dayEvents });
  }

  return (
    <div className="w-full max-w-lg mx-auto lg:mx-0 surface-glass overflow-hidden shadow-2xl flex flex-col h-[400px]">
      
      {/* Widget Header Toggle */}
      <div className="flex border-b border-white/20 bg-white/40 backdrop-blur-md p-2 relative z-10">
        <button 
          onClick={() => setViewMode('timeline')}
          className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all flex justify-center items-center gap-2 ${viewMode === 'timeline' ? 'bg-white text-[var(--brand-green)] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
        >
          <List size={16} />
          Próximos
        </button>
        <button 
          onClick={() => setViewMode('calendar')}
          className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all flex justify-center items-center gap-2 ${viewMode === 'calendar' ? 'bg-white text-[var(--brand-green)] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
        >
          <Calendar size={16} />
          Calendario
        </button>
      </div>

      <div className="flex-1 relative overflow-hidden bg-white/30 backdrop-blur-sm">
        <AnimatePresence mode="wait">
          {viewMode === 'timeline' ? (
            <motion.div 
              key="timeline"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 p-5 overflow-y-auto custom-scrollbar"
            >
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--brand-green)] before:to-transparent">
                {sortedEvents.slice(0, 4).map((evt, idx) => {
                  const dateObj = new Date(evt.fechaISO);
                  return (
                    <div key={evt.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[var(--brand-green)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white/90">
                        <Clock size={18} />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-white/80 border border-white/50 shadow-sm backdrop-blur transition-all hover:bg-white">
                        <div className="text-[10px] font-bold text-[var(--brand-green)] uppercase tracking-wider mb-1">
                          {dateObj.toLocaleDateString('es-ES', { month: 'short', day: 'numeric' })}
                        </div>
                        <h4 className="font-bold text-gray-800 text-sm mb-2">{evt.titulo}</h4>
                        <div className="flex items-center text-xs text-gray-500 gap-1">
                          <MapPin size={12} />
                          <span className="truncate">{evt.lugar}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="calendar"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 p-5 flex flex-col"
            >
              <div className="flex justify-between items-center mb-4">
                <button onClick={goPrevMonth} className="p-1 hover:bg-white/50 rounded-full transition"><ChevronLeft size={20} className="text-gray-600" /></button>
                <div className="font-bold text-gray-800 capitalize">{monthNames[currentMonthDate.getMonth()]} <span className="font-normal text-gray-500">{currentMonthDate.getFullYear()}</span></div>
                <button onClick={goNextMonth} className="p-1 hover:bg-white/50 rounded-full transition"><ChevronRight size={20} className="text-gray-600" /></button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-500 mb-2">
                <div>D</div><div>L</div><div>M</div><div>M</div><div>J</div><div>V</div><div>S</div>
              </div>

              <div className="grid grid-cols-7 gap-1 flex-1">
                {calendarDays.map((ds, i) => (
                  <div key={i} className={`relative flex items-center justify-center rounded-lg ${ds ? 'bg-white/40 border border-white/20' : ''} ${ds && ds.events.length > 0 ? 'bg-[var(--brand-green)]/10 border-[var(--brand-green)]/30 font-bold text-[var(--brand-green)]' : 'text-gray-700'}`}>
                    {ds ? (
                      <>
                        <span className="z-10">{ds.num}</span>
                        {ds.events.length > 0 && (
                          <div className="absolute inset-0 cursor-pointer overflow-hidden rounded-lg group">
                            <div className="absolute opacity-0 group-hover:opacity-100 bg-[var(--brand-green)] text-white inset-0 flex flex-col items-center justify-center text-[8px] leading-tight p-1 text-center transition duration-200 z-20">
                              <span className="truncate w-full">{ds.events[0].titulo}</span>
                            </div>
                            <div className="absolute bottom-1 w-full flex justify-center gap-[2px]">
                               {ds.events.map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-[var(--brand-green)]"></div>)}
                            </div>
                          </div>
                        )}
                      </>
                    ) : null}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Global CSS injected specifically for the scrollbar within this react component instance */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(70, 123, 86, 0.2);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

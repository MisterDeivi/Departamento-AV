import type { WorkGroup } from '@/lib/types';

export const gruposTrabajo: WorkGroup[] = [
  // --- GRUPO AUDIO ---
  {
    id: 'aud-eq1',
    equipo: 'Equipo 1',
    area: 'Audio',
    zona: 'Gradas Derechas',
    tareas: ['Instalar Cornetas 1 al 6'],
    roles: [
      { rol: 'Capitan', miembros: ['Miguel Sievers'] },
      { rol: 'Integrantes', miembros: ['Esteban Girón', 'Dixon Jaramillo', 'Roberto Diaz', 'Angel Nacache', 'Jessica Hernández', 'Andrea Manaure'] },
    ],
  },
  {
    id: 'aud-eq2',
    equipo: 'Equipo 2',
    area: 'Audio',
    zona: 'Centro',
    tareas: ['Instalar Cornetas 07 al 14'],
    roles: [
      { rol: 'Capitan', miembros: ['Saul Aguilar'] },
      { rol: 'Integrantes', miembros: ['Jesús Fernández', 'José Manuel Flores', 'Andrés Requena', 'Francheska Luna', 'Sara Bosett', 'Diego Machín'] },
    ],
  },
  {
    id: 'aud-eq3',
    equipo: 'Equipo 3',
    area: 'Audio',
    zona: 'Gradas Izquierdas',
    tareas: ['Instalar Cornetas 15 al 20, 21'],
    roles: [
      { rol: 'Capitan', miembros: ['David Espinoza'] },
      { rol: 'Integrantes', miembros: ['Guillermo Olivo', 'Sara Castillo', 'Darwin Torrealba', 'Santiago Hernández', 'María Sandoval', 'Lenny Coa'] },
    ],
  },
  {
    id: 'aud-eq4',
    equipo: 'Equipo 4',
    area: 'Audio',
    zona: 'Cableado',
    tareas: ['Extensión de cables troncales', 'cables de arranque', 'cable culebra', 'micrófonos'],
    roles: [
      { rol: 'Capitan', miembros: ['Joselo Rangel'] },
      { rol: 'Integrantes', miembros: ['Richard Bolívar', 'Jessimar de Rangel', 'Liceth de Suarez'] },
    ],
  },
  {
    id: 'aud-eq5',
    equipo: 'Equipo 5',
    area: 'Audio',
    zona: 'Electricidad',
    tareas: ['Instalación de la acometida eléctrica', 'inversores', 'plantas eléctricas'],
    roles: [
      { rol: 'Capitan', miembros: ['José Salazar'] },
      { rol: 'Integrantes', miembros: ['Alfredo Álvarez'] },
    ],
  },
  {
    id: 'aud-eq6',
    equipo: 'Equipo 6',
    area: 'Audio',
    zona: 'Hidratación',
    tareas: ['Agua', 'Hielo', 'Café'],
    roles: [
      { rol: 'Capitan', miembros: ['Johan Parra'] },
      { rol: 'Integrantes', miembros: ['Santiago Parra', 'Heidi Daboin', 'Delvalle Carrillo', 'María Espinoza', 'Georgina Hernández', 'Verónica Villamil', 'Ámbar Rangel'] },
    ],
  },
  {
    id: 'aud-eq7',
    equipo: 'Equipo 7',
    area: 'Audio',
    zona: 'Almacén',
    tareas: ['Inventario'],
    roles: [
      { rol: 'Integrantes', miembros: ['Jutwhalia Torrealba', 'Sandra de Bosett'] },
    ],
  },

  // --- GRUPO VIDEO & OTHERS ---
  {
    id: 'vid-pant1',
    equipo: 'Pantalla 1',
    area: 'Video',
    tareas: ['Instalar y Configurar con procesador'],
    roles: [
      { rol: 'Capitan', miembros: ['Eladio Flores'] },
      { rol: 'Auxiliar', miembros: ['Raymiller Rodriguez'] },
      { rol: 'Equipos', miembros: ['Ronny Seijas', 'Abrahan Perez', 'Johans Suarez'] },
    ],
  },
  {
    id: 'vid-pant2',
    equipo: 'Pantalla 2',
    area: 'Video',
    tareas: ['Instalar y Configurar con procesador'],
    roles: [
      { rol: 'Capitan', miembros: ['Jorge Hernandez'] },
      { rol: 'Auxiliar', miembros: ['Darwin Torrealba'] },
      { rol: 'Equipos', miembros: ['Eduardo Diaz', 'Daniel Higuera', 'Rafael Armas'] },
    ],
  },
  {
    id: 'vid-proc',
    equipo: 'Procesador',
    area: 'Video',
    tareas: ['Instalar y Configurar con procesador'],
    roles: [
      { rol: 'Capitan', miembros: ['Jhoan Parra'] },
    ],
  },
  {
    id: 'vid-cableado',
    equipo: 'Cableado',
    area: 'Video',
    tareas: ['Conexión e instalación general'],
    roles: [
      { rol: 'Capitan', miembros: ['Maria Sandoval'] },
      { rol: 'Auxiliar', miembros: ['Sara Bosett'] },
    ],
  },
  {
    id: 'vid-audio',
    equipo: 'Audio (Anexo Video)',
    area: 'Video',
    tareas: ['Instalar y Configurar sonido y FM'],
    roles: [
      { rol: 'Capitan', miembros: ['David Espinoza'] },
      { rol: 'Auxiliar', miembros: ['Miguel Sievers'] },
    ],
  },
  {
    id: 'vid-mix',
    equipo: 'Video',
    area: 'Video',
    tareas: ['Instalar computadoras, mezclador'],
    roles: [
      { rol: 'Capitan', miembros: ['Ismael Barrios'] },
      { rol: 'Auxiliar', miembros: ['Jhoan Parra'] },
      { rol: 'Auxiliares de Video', miembros: ['Dixon Jaramillo', 'Guillermo Olivo'] },
    ],
  },
  {
    id: 'vid-elec',
    equipo: 'Electricidad',
    area: 'Video',
    tareas: ['Pantalla, Plataforma y planta eléctrica'],
    roles: [
      { rol: 'Capitan', miembros: ['Jose Salazar'] },
      { rol: 'Auxiliar', miembros: ['Alfredo Alvarez'] },
    ],
  },
  {
    id: 'vid-plat',
    equipo: 'Plataforma',
    area: 'Video',
    tareas: ['Instalar Cámaras, TV y Micrófonos'],
    roles: [
      { rol: 'Capitan', miembros: ['Eladio Flores'] },
      { rol: 'Auxiliar', miembros: ['Miguel Sievers'] },
    ],
  },
  {
    id: 'vid-log',
    equipo: 'Logística',
    area: 'Video',
    tareas: ['Hidratación'],
    roles: [
      { rol: 'Capitan', miembros: ['Jhoan Parra'] },
      { rol: 'Auxiliar', miembros: ['Santiago Parra'] },
    ],
  },
  {
    id: 'vid-it',
    equipo: 'Tecnología Informática',
    area: 'Video',
    tareas: ['Equipos Tecnología'],
    roles: [
      { rol: 'Capitan', miembros: ['Ismael Barrios'] },
      { rol: 'Auxiliar', miembros: ['David Espinoza'] },
    ],
  },
  {
    id: 'vid-apoyo',
    equipo: 'Personal de Apoyo',
    area: 'Video',
    tareas: ['Supervisión y cobertura general'],
    roles: [
      { rol: 'Apoyo General', miembros: ['Saul Aguilar', 'Jose Salazar'] },
    ],
  },
  // --- GRUPO PLATAFORMA ---
  {
    id: 'plat-eq1',
    equipo: 'Equipo de Plataforma',
    area: 'Plataforma',
    zona: 'Escenario',
    tareas: ['Ajustes de micrófonos', 'Atención a oradores', 'Manejo de atriles'],
    roles: [
      { rol: 'Capitán', miembros: ['Por Asignar'] },
      { rol: 'Auxiliar', miembros: ['Por Asignar'] },
    ],
  }
];

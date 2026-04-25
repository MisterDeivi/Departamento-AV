export type AreaType = 'Audio' | 'Video' | 'Plataforma' | 'Organizacion';

export interface TeamMember {
  nombre: string;
  rol: 'Capitan' | 'Integrante' | 'Auxiliar';
}

export interface GroupRole {
  rol: string; // e.g. "Capitanes", "Auxiliares", "Integrantes", "Apoyo"
  miembros: string[];
}

export interface WorkGroup {
  id: string;
  equipo: string;       // e.g. "Equipo 1", "Pantalla 1"
  area: AreaType;       // 'Audio' or 'Video' etc
  zona?: string;        // e.g. "Gradas Derechas"
  tareas: string[];     // Work description/Tasks
  roles: GroupRole[];
}

export interface OrganigramaNode {
  id: string;
  titulo: string;
  responsable: string;
  descripcion: string;
  area: AreaType;
  reportaA?: string;
}

export interface EventItem {
  id: string;
  titulo: string;
  fechaISO: string;
  lugar: string;
  detalle: string;
  tipo: 'Asamblea' | 'Capacitacion' | 'Operativo';
}

export interface GuideItem {
  id: string;
  titulo: string;
  categoria: 'Audio' | 'Video' | 'Plataforma';
  descripcion: string;
  href: string;
}

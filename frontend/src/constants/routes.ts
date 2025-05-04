export const ROUTES = {
  HOME: '/',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  PARCELAS: '/info/parcelas',
  ANALISIS: '/info/analisis',
  REPORTES: '/info/reportes',
  CONFIGURACION: '/info/configuracion',
  PERFIL: '/users/profile',
  EDIT_PERFIL: '/users/edit',
  formulario1: '/formulario1', // Corregir la ruta
  formulario2: '/formulario2',
} as const;

// Tipo para las rutas
export type AppRoutes = typeof ROUTES;
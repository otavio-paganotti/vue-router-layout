export const allRoutes = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: () => import('@/pages/Dashboard.vue')
  },
  // outras rotas aqui...
];

export const serviceRoutes = [
  {
    name: 'Login',
    path: '/login', // acesse via /auth/login
    component: () => import('@/pages/Login.vue')
  },
];

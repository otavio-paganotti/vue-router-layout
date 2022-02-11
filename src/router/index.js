import Vue from 'vue';
import VueRouter from 'vue-router';
import { allRoutes, serviceRoutes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/Default'),
      meta: {
        requiresAuth: true,
      },
      children: allRoutes
    },
    {
      path: '/auth',
      component: () => import('@/layouts/Auth'),
      meta: {
        requiresAuth: false,
      },
      children: serviceRoutes
    },
    {
      path: '*',
      component: () => import('@/pages/404')
    }
  ]
});

router.beforeEach((to, from, next) => {
  // busca o token no localStorage ou em qualquer outro lugar...
  const token = localStorage.getItem('token');

  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    next("/login");
  } else if (
    !to.matched.some(record => record.meta.requiresAuth)
    && to.matched.path === '/login' && token
  ) {
    next("/dashboard");
  } else if (!to.matched.some(record => record.meta.requiresAuth) &&
  to.matched.path !== '/login') {
    localStorage.removeItem('token');
  }

  next();
});

export default router;

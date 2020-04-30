import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    alias: '/es',
    name: 'Home' || 'Inicio',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/game',
    alias: '/es/game',
    name: 'Game' || 'Juego',
    component: () => import('../views/Game.vue'),
  },
  {
    path: '/about',
    alias: '/es/about',
    name: 'About Us' || 'Sobre nosotros',
    component: () => import('../views/AboutUs.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

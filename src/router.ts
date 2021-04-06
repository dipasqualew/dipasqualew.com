import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  {
    path: '/',
    /**
     * Component
     */
    component: () => import('./pages/Home.vue'),
  },
  {
    path: '/cv',
    /**
     * Component
     */
    component: () => import('./pages/CV.vue'),
  },
  {
    path: '/contact',
    /**
     * Component
     */
    component: () => import('./pages/Contact.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

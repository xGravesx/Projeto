// router/index.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import BlackFriday from '@/components/BlackFriday.vue';
import CrowPrime from '@/components/CrowPrime.vue';
import Colecoes from '@/components/Colecoes.vue';
import Acessorios from '@/components/Acessorios.vue';
import Decoracao from '@/components/Decoracao.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home },
  { path: '/black-friday', component: BlackFriday },
  { path: '/crow-prime', component: CrowPrime },
  { path: '/colecoes', component: Colecoes },
  { path: '/acessorios', component: Acessorios },
  { path: '/decoracao', component: Decoracao },
];

const router = new VueRouter({
  routes,
});

export default router;

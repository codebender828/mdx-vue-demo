import Vue from 'vue';
import VueRouter from 'vue-router';
import Mdx from '../views/test.mdx';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Mdx
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

import Vue from 'vue';
import Router from 'vue-router';

import NotFound from '@/views/NotFound';

import Login from '@/views/Login'

Vue.use(Router);

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '*',
    component: NotFound
  }
];

export default new Router({
  'mode': 'history',
  routes
});

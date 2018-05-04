import Vue from 'vue';
import Router from 'vue-router';

import NotFound from '@/views/NotFound';
import SubpageNotFound from '@/views/SubpageNotFound'

import Login from '@/views/Login'
import Index from '@/views/Index'

Vue.use(Router);

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '',
        component: SubpageNotFound // 首页视图
      },
      {
        path: 'users',
        component: SubpageNotFound // 用户系统
      }
    ]
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

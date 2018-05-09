import Vue from 'vue';
import Router from 'vue-router';

import NotFound from '@/views/NotFound';
import SubpageNotFound from '@/views/SubpageNotFound'

import Login from '@/views/Login'
import Base from '@/views/Base'
import Index from '@/views/Index'

import Articles from '@/views/articles/Base'
import articlesRouter from '@/router/articles'

Vue.use(Router);

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Base,
    children: [
      {
        path: '',
        component: Index
      },
      {
        path: 'users',
        component: SubpageNotFound // 用户系统
      },
      {
        path: 'articles',
        component: Articles,
        children: articlesRouter
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

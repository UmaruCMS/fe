import Vue from 'vue';
import Router from 'vue-router';

import NotFound from '@/views/NotFound';

import Login from '@/views/Login'
import Base from '@/views/Base'
import Index from '@/views/Index'

import Users from '@/views/users/Base'
import usersRouter from '@/router/users'
import Articles from '@/views/articles/Base'
import articlesRouter from '@/router/articles'
import Files from '@/views/files/Base'
import filesRouter from '@/router/files'

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
        component: Users,
        children: usersRouter
      },
      {
        path: 'articles',
        component: Articles,
        children: articlesRouter
      },
      {
        path: 'files',
        component: Files,
        children: filesRouter
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

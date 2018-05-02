import Vue from 'vue'
import Router from 'vue-router'

import NotFound from '@/views/NotFound'

Vue.use(Router)

const routes = [
    {
        path: '*',
        component: NotFound
    }
]

export default new Router({
    mode: 'history',
    routes
})
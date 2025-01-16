import type { RouteRecordRaw } from 'vue-router';

export const HomeRoutes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue')
        // meta: {
        //     requiresLogin: false
        // }
    },
    {
        path: '/parameter/:data',
        name: 'parameter',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/parameter.vue'),
        props: true
    },
    {
        path: '/state',
        name: 'state',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/state.vue')
    },
    {
        path: '/query',
        name: 'query',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/query.vue')
    }
];

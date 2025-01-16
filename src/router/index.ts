import { createRouter, createWebHistory } from 'vue-router';
import { HomeRoutes } from './routes/HomeRoutes';
import { ErrorRoutes } from './routes/ErrorRoutes';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/error/404'
        },
        ...HomeRoutes,
        ...ErrorRoutes
    ]
});

// router.beforeEach(async (to, from) => {
//     if (to.path === '/login') {
//         // authStore.clearToken();
//     } else {
//         if (to.meta.requiresLogin) {
//             return '/login';
//         }
//     }
// });

// router.afterEach(async (toString, from) => {});

export default router;

import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/form'
    },
    {
        path: '/form',
        name: 'Form',
        component: () => import('../components/Form_Start'),
        props: {
            label: 'Форма',
        },
    },
    {
        path: '/preview',
        name: 'Preview',
        component: () => import('../components/Preview'),
        props: {
            label: 'Превью',
        },
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
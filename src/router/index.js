import { createRouter, createWebHistory } from 'vue-router'
import Main from '/src/components/Main.vue'
import Location from '/src/components/location.vue'
import Header from '/src/components/header.vue'


const routes = [
    {
        path: '/',
        name: "Main",
        component: Main,
        children: [
            {
                path: '/',
                name: 'Hero',
                component: Header,
            },
            {
                path: '/location',
                name: 'Location',
                component: Location,
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router
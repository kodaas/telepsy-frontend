import { createRouter, createWebHistory } from 'vue-router'
import Main from '/src/components/Main.vue'
import LocationForm from '/src/components/locationForm.vue'
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
                component: LocationForm,
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router
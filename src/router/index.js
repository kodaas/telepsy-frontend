import { createRouter, createWebHistory } from 'vue-router'
import Main from '/src/components/Main.vue'


const routes = [
    {
        path: '/',
        name: "Main",
        component: Main,
    },

    // {
    //     path: '**',
        
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router
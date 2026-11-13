import {createRouter, createWebHistory} from 'vue-router'
import Homepage from '@/components/Homepage.vue'
import CityHall from '@/components/views/CityHall.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name:'home',
            component: Homepage
        },
        {
            path:'/city_hall',
            name: 'city-hall',
            component: CityHall
        },
        
    ]
})

export default router
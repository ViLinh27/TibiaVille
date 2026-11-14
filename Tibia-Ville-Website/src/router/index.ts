import { createRouter, createWebHashHistory } from "vue-router";
import Homepage from "@/pages/Homepage.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:Homepage
        },
        {
            path:'/city_hall',
            name:'city-hall',
            component: () => import('../pages/CityHall.vue')
        },
        {
            path:'/arcade',
            name:'arcade',
            component: () => import('../pages/Arcade.vue')
        },
        {
            path:'/lab',
            name:'lab',
            component:() => import ('../pages/Lab.vue')
        },
        {
            path:'/library',
            name:'library',
            component:() => import ('../pages/Library.vue')
        },
        {
            path:'/tibias_house',
            name:'tibias-house',
            component:() => import ('../pages/TibiasHouse.vue')
        },
        {
            path:'/cinema',
            name:'cinema',
            component: () => import('../pages/Cinema.vue')
        },
        {
            path:'/school',
            name:'school',
            component:() => import('../pages/School.vue')
        },
        {
            path:'/post_office',
            name:'post-office',
            component: () => import('../pages/PostOffice.vue')
        },
        {
            path:'/art_museum',
            name:'art-museum',
            component: () => import('../pages/ArtMuseum.vue')
        },
        {
            path:'/record_store',
            name:'record-store',
            component: () => import('../pages/RecordStore.vue')
        },
        {
            path:'/shopping_center',
            name:'shopping-center',
            component: () => import('../pages/ShoppingCenter.vue')
        },
        {
            path:'/fountain',
            name:'fountain',
            component: () => import('../pages/Fountain.vue')
        },
        {
            path:'/interest_town',
            name:'interest-town',
            component:() => import ('../pages/InterestTown.vue')
        },
        {
            path:'/bulletin_board',
            name:'bulletinl-board',
            component: () => import('../pages/BulletinBoard.vue')
        },
    ]
})

export default router
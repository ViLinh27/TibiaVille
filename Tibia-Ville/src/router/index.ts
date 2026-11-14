import {createRouter, createWebHistory} from 'vue-router'
import Homepage from '@/components/Homepage.vue'

import CityHall from '@/components/views/CityHall.vue'
import Arcade from '@/components/views/Arcade.vue'
import Lab from '@/components/views/Lab.vue'
import Library from '@/components/views/Library.vue'
import TibiasHouse from '@/components/views/TibiasHouse.vue'

import Cinema from '@/components/views/Cinema.vue'
import School from '@/components/views/School.vue'
import PostOffice from '@/components/views/PostOffice.vue'
import ArtMuseum from '@/components/views/ArtMuseum.vue'
import RecordStore from '@/components/views/RecordStore.vue'

import ShoppingCentre from '@/components/views/ShoppingCentre.vue'
import Fountain from '@/components/views/Fountain.vue'
import InterestTown from '@/components/views/InterestTown.vue'
import BulletinBoard from '@/components/views/BulletinBoard.vue'

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
        {
            path: '/arcade',
            name:'arcade',
            component: Arcade
        },
        {
            path: '/lab',
            name:'lab',
            component: Lab
        },
        {
            path: '/library',
            name:'library',
            component: Library
        },
        {
            path: '/tibias_house',
            name:'tibias-house',
            component: TibiasHouse
        },
        {
            path: '/cinema',
            name:'cinema',
            component: Cinema
        },
        {
            path: '/school',
            name:'school',
            component: School
        },
        {
            path: '/post_office',
            name:'post-office',
            component: PostOffice
        },
        {
            path: '/art_museum',
            name:'art-museum',
            component: ArtMuseum
        },
        {
            path: '/record_store',
            name:'record-store',
            component: RecordStore
        },
        {
            path: '/shopping_centre',
            name:'shopping-centre',
            component: ShoppingCentre
        },
        {
            path: '/fountain',
            name:'fountain',
            component: Fountain
        },
        {
            path: '/interest_town',
            name:'interest-town',
            component: InterestTown
        },
        {
            path: '/bulletin_board',
            name:'bulletin-board',
            component: BulletinBoard
        },
    ]
})

export default router
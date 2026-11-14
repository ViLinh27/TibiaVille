<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
// import Homepage from './components/Homepage.vue';
// import CityGlance from './components/city_at_a_Glance/CityGlance.vue';
import { RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <main>
    <RouterLink to ="/">Home</RouterLink>
    <RouterLink to ="/city_hall">City Hall</RouterLink>
    <RouterLink to ="/arcade">Arcade</RouterLink>
    <RouterLink to ="/lab">Lab</RouterLink>

    <RouterLink to ="/library">Library</RouterLink>
    <RouterLink to ="/tibias_house">Tibia's House</RouterLink>
    <RouterLink to ="/cinema">Cinema</RouterLink>
    <RouterLink to ="/school">School</RouterLink>

    <RouterLink to ="/post_office">Post Office</RouterLink>
    <RouterLink to ="/art_museum">Art Museum</RouterLink>
    <RouterLink to ="/record_store">Record Store</RouterLink>
    <RouterLink to ="/shopping_centre">Shopping Centre</RouterLink>

    <RouterLink to ="/fountain">Fountain</RouterLink>
    <RouterLink to ="/interest_town">Interest Town</RouterLink>
    <RouterLink to ="/bulletin_board">Bulletin Board</RouterLink>

    <RouterView/>
  </main>
</template>

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
    <RouterLink to ="/">Arcade</RouterLink>
    <RouterLink to ="/">Lab</RouterLink>

    <RouterLink to ="/">Library</RouterLink>
    <RouterLink to ="/">Tibia's House</RouterLink>
    <RouterLink to ="/">Cinema</RouterLink>
    <RouterLink to ="/">School</RouterLink>

    <RouterLink to ="/">Post Office</RouterLink>
    <RouterLink to ="/">Art Museum</RouterLink>
    <RouterLink to ="/">Record Store</RouterLink>
    <RouterLink to ="/">Shopping Centre</RouterLink>

    <RouterLink to ="/">Fountain</RouterLink>
    <RouterLink to ="/">Interest Town</RouterLink>
    <RouterLink to ="/">Bulletin Board</RouterLink>

    <RouterView/>
  </main>
</template>

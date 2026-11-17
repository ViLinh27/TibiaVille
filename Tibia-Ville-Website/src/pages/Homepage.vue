<script setup lang="ts">
import { VueMarkdown } from '@crazydos/vue-markdown';
import {ref} from 'vue'
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <div class="map_wrapper">
      
        <RouterLink to="/city_hall" class="map_1">
          City Hall
        </RouterLink>
      
     
        <RouterLink to="/arcade" class="map_2"> 
          Arcade
        </RouterLink> 
     
        <RouterLink to="/lab" class="map_3">
          Lab
        </RouterLink>
      
        <RouterLink to="/library" class="map_4">Library</RouterLink>

        <RouterLink to="/tibias_house" class="map_5">Tibia's House</RouterLink>

        <RouterLink to="/cinema" class="map_6">Cinema</RouterLink>

        <RouterLink to="/school" class="map_7">School</RouterLink>

        <RouterLink to="/post_office" class="map_8">Post Office</RouterLink>

         <RouterLink to="/art_museum" class="map_9">Art Museum</RouterLink>

        <RouterLink to="/record_store" class="map_10">Record Store</RouterLink>

        <RouterLink to="/shopping_center" class="map_11">Shopping Center</RouterLink>

        <RouterLink to="/fountain" class="map_12">Fountain</RouterLink>

        <RouterLink to="/interest_town" class="map_13">Interest Town</RouterLink>

        <RouterLink to="/bulletin_board" class="map_14">Bulletin Board</RouterLink>

    </div>
  </div>
</template>

<style scoped></style>
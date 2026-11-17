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

      <div class="map_10">
        <RouterLink to="/record_store">Record Store</RouterLink>
      </div>
      <div class="map_11">
        <RouterLink to="/shopping_center">Shopping Center</RouterLink>
      </div>
      <div class="map_12">
        <RouterLink to="/fountain">Fountain</RouterLink>
      </div>
      <div class="map_13">
        <RouterLink to="/interest_town">Interest Town</RouterLink>
      </div>
      <div class="map_14">
        <RouterLink to="/bulletin_board">Bulletin Board</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
<script setup lang="ts">
import { VueMarkdown } from '@crazydos/vue-markdown';
import {ref} from 'vue'
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <div class="map_wrapper">
      
        <RouterLink to="/city_hall" class="map_btn" id="map_1">
          <h2 class="mapbdg_name">
            City Hall
          </h2>
        </RouterLink>
      
     
        <RouterLink to="/arcade" class="map_btn" id="map_2"> 
          <h2 class="mapbdg_name">Arcade</h2>
          
        </RouterLink> 
     
        <RouterLink to="/lab" class="map_btn" id="map_3">
          <h2 class="mapbdg_name"> Lab</h2>
         
        </RouterLink>
      
        <RouterLink to="/library" class="map_btn" id="map_4">
          <h2 class="mapbdg_name">Library</h2>
          
        </RouterLink>

        <RouterLink to="/tibias_house" class="map_btn" id="map_5">
          <h2 class="mapbdg_name">Tibia's House</h2>
          
        </RouterLink>

        <RouterLink to="/cinema" class="map_btn" id="map_6">
          <h2 class="mapbdg_name">Cinema</h2>
        </RouterLink>

        <RouterLink to="/school" class="map_btn" id="map_7">
          <h2 class="mapbdg_name">School</h2>
          
        </RouterLink>

        <RouterLink to="/post_office" class="map_btn" id="map_8">
          <h2 class="mapbdg_name">Post Office</h2>
          
        </RouterLink>

         <RouterLink to="/art_museum" class="map_btn" id="map_9">
          <h2 class="mapbdg_name">Art Museum</h2>
          
        </RouterLink>

        <RouterLink to="/record_store" class="map_btn" id="map_10">
          <h2 class="mapbdg_name">Record Store</h2>
          
        </RouterLink>

        <RouterLink to="/shopping_center" class="map_btn" id="map_11">
          <h2 class="mapbdg_name">Shopping Center</h2>
          
        </RouterLink>

        <RouterLink to="/fountain" class="map_btn" id="map_12">
          <h2 class="mapbdg_name">Fountain</h2>
          
        </RouterLink>

        <RouterLink to="/interest_town" class="map_btn" id="map_13">
          <h2 class="mapbdg_name">Interest Town</h2>
          
        </RouterLink>

        <RouterLink to="/bulletin_board" class="map_btn" id="map_14">
          <h2 class="mapbdg_name">Bulletin Board</h2>
          
        </RouterLink>

    </div>
  </div>
</template>

<style scoped></style>
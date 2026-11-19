<script setup lang="ts">
import { VueMarkdown } from '@crazydos/vue-markdown';
import {ref} from 'vue'
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <div class="map_wrapper">
      
        <RouterLink to="/city_hall" class="map_btn" id="map_1">
          <p class="mapbdg_name">
            City Hall
          </p>
        </RouterLink>
      
     
        <RouterLink to="/arcade" class="map_btn" id="map_2"> 
          <p class="mapbdg_name">Arcade</p>
          
        </RouterLink> 
     
        <RouterLink to="/lab" class="map_btn" id="map_3">
          <p class="mapbdg_name"> Lab</p>
         
        </RouterLink>
      
        <RouterLink to="/library" class="map_btn" id="map_4">
          <p class="mapbdg_name">Library</p>
          
        </RouterLink>

        <RouterLink to="/tibias_house" class="map_btn" id="map_5">
          <p class="mapbdg_name">Tibia's House</p>
          
        </RouterLink>

        <RouterLink to="/cinema" class="map_btn" id="map_6">
          <p class="mapbdg_name">Cinema</p>
        </RouterLink>

        <RouterLink to="/school" class="map_btn" id="map_7">
          <p class="mapbdg_name">School</p>
          
        </RouterLink>

        <RouterLink to="/post_office" class="map_btn" id="map_8">
          <p class="mapbdg_name">Post Office</p>
          
        </RouterLink>

         <RouterLink to="/art_museum" class="map_btn" id="map_9">
          <p class="mapbdg_name">Art Museum</p>
          
        </RouterLink>

        <RouterLink to="/record_store" class="map_btn" id="map_10">
          <p class="mapbdg_name">Record Store</p>
          
        </RouterLink>

        <RouterLink to="/shopping_center" class="map_btn" id="map_11">
          <p class="mapbdg_name">Shopping Center</p>
          
        </RouterLink>

        <RouterLink to="/fountain" class="map_btn" id="map_12">
          <p class="mapbdg_name">Fountain</p>
          
        </RouterLink>

        <RouterLink to="/interest_town" class="map_btn" id="map_13">
          <p class="mapbdg_name">Interest Town</p>
          
        </RouterLink>

        <RouterLink to="/bulletin_board" class="map_btn" id="map_14">
          <p class="mapbdg_name">Bulletin Board</p>
          
        </RouterLink>

    </div>
  </div>
</template>

<style scoped></style>
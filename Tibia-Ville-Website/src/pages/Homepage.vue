<script setup lang="ts">
import { VueMarkdown } from '@crazydos/vue-markdown';
import {ref} from 'vue'
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <div class="map_wrapper">
      <div class="map_1">
        <RouterLink to="/city_hall">City Hall</RouterLink>
      </div>
      <div class="map_2">
        <RouterLink to="/arcade">Arcade</RouterLink>
      </div>
      <div class="map_3">
        <RouterLink to="/lab">Lab</RouterLink>
      </div>
      <div class="map_4">
        <RouterLink to="/library">Library</RouterLink>
      </div>
      <div class="map_5">
        <RouterLink to="/tibias_house">Tibia's House</RouterLink>
      </div>
      <div class="map_6">
        <RouterLink to="/cinema">Cinema</RouterLink>
      </div>
      <div class="map_7">
        <RouterLink to="/school">School</RouterLink>
      </div>
      <div class="map_8">
        <RouterLink to="/post_office">Post Office</RouterLink>
      </div>
      <div class="map_9">
         <RouterLink to="/art_museum">Art Museum</RouterLink>
      </div>
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
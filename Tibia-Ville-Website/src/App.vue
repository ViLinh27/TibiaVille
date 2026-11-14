<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="app">
    <Navbar/>
    
    <div class="page_content">
      <RouterView />
    </div>
    
  </div>
  
</template>

<style scoped></style>

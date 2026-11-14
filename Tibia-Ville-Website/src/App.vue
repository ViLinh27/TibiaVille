<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="app">
    <div class="main_content">
      <Navbar/>

      <div class="page_content">
        <RouterView />
      </div>
    </div>

    <Footer/>
  </div>
  
</template>

<style scoped></style>

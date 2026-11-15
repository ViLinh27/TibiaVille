<script setup lang="ts">
  import DisplayMD from '@/components/DisplayMD.vue';
  
  // how arcade works
  import howarcadeworks from '../markdown/Arcade/1_How_does_the_arcade_work.md?raw'
  const btnText = " how the arcade works"
</script>

<template>
  <div>
    <DisplayMD :button_Text="btnText" :mdFile="howarcadeworks"/>
  </div>
  
</template>

<style scoped></style>
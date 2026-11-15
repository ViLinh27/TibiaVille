<script setup lang="ts">
  import DisplayMD from '@/components/DisplayMD.vue';

  // how arcade works
  import howarcadeworks from '../markdown/Arcade/1_How_does_the_arcade_work.md?raw'
  const btnText = " how the arcade works"

  //games I've made
  import gamesivemade from '../markdown/Arcade/2_Games_Ive_made.md?raw'
  const btnText2 = " games I've made"
</script>

<template>
  <div>
    <DisplayMD :button_Text="btnText" :mdFile="howarcadeworks"/>
    <DisplayMD :button_Text="btnText2" :mdFile="gamesivemade"/>
  </div>
  
</template>

<style scoped></style>
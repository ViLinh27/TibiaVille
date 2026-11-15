<script setup lang="ts">
  import howarcadeworks from '../markdown/Arcade/1_How_does_the_arcade_work.md?raw'

  import DisplayMD from '@/components/DisplayMD.vue';

  const btnText = " how the arcade works"
</script>

<template>
  <div>
    <DisplayMD :button_Text="btnText" :mdFile="howarcadeworks"/>
  </div>
  
</template>

<style scoped></style>
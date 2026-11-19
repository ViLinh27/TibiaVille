<script setup lang="ts">
  import DisplayMD from '../components/DisplayMD.vue';

  // how the lab works
  import howlabworks from '../markdown/Lab/1_Howdoesthelabwork.md?raw';
  const btn1 = " how the lab works"

  // what could i build and why?
  import whattobuild from '../markdown/Lab/2_WhatcouldIbuildTibiaVillewithandwhy.md?raw';
  const btn2 = " what i could build Tibia-Ville with and why"

  // circuit simulator platforms
  import circuitsim from '../markdown/Lab/3_Circuitsimulatorplatforms.md?raw'
  const btn3 = " circuit simulator platforms"

  //apps and stuff i could make
  import apptomake from '../markdown/Lab/4_AppsandstuffIcould make.md?raw';
  const btn4 = " apps and stuff I could make"
 
  //electronic project ideas
  import elecProj from '../markdown/Lab/6_Electronicprojectidea.md?raw';
  const btn5 = " electronic projects ideas"

</script>

<template>
  <div>
    <h2 class="page_headers">Lab</h2>
    <DisplayMD :button_Text="btn1" :mdFile="howlabworks"/>
    <DisplayMD :button_Text="btn2" :mdFile="whattobuild"/>
    <DisplayMD :button_Text="btn3" :mdFile="circuitsim"/>
    <DisplayMD :button_Text="btn4" :mdFile="apptomake"/>
    <DisplayMD :button_Text="btn5" :mdFile="elecProj"/>
  </div>
</template>

<style scoped></style>
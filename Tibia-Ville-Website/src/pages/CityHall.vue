<script setup lang="ts">
  import DisplayMD from '@/components/DisplayMD.vue';
  //how city hall works
  import howcityhallworks from '../markdown/CityHall/1_How_does_city_hall_work.md?raw'
  const btnText_how = " how city hall works"

  //site map
  import sitemap from '../markdown/CityHall/2_Site_map.md?raw'
  const btnText_map = " site map"
</script>
<template>
  <div>
   <DisplayMD :button_Text ="btnText_how" :mdFile="howcityhallworks"/>
   <DisplayMD :button_Text="btnText_map" :mdFile="sitemap"/>
  </div>
</template>

<style scoped></style>
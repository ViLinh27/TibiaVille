<script setup lang="ts">
  import DisplayMD from '@/components/DisplayMD.vue';  

  //how does tibia's house work?
  import mdfile1 from '../markdown/Tibiashouse/HowdoesTibiashousework.md?raw';
  const btn = " how Tibia's Houe works"

  //crafts i wanna make
  import mdfile2  from '../markdown/Tibiashouse/Craftsthatlookcooltomake.md?raw';
  const btn2 = " crafts I want to make"

  //digital garden inspo
  import mdfile3 from '../markdown/Tibiashouse/Digitalgardensthatareneattome.md?raw';
  const btn3 = " digital garden inpsiration list"
  
  //mykitchen
  import mdfile4 from '../markdown/Tibiashouse/Mykitchen.md?raw';
  const btn4 = " my kitchen";

  //the study
  import mdFile5 from '../markdown/Tibiashouse/TheStudy.md?raw'
  const btn5 = " the study";

</script>

<template>
  <div>
    <h2 class="page_headers">Tibia's House</h2>
    <DisplayMD :button_Text = "btn" :mdFile="mdfile1"/>
    <DisplayMD :button_Text = "btn2" :mdFile="mdfile2"/>
    <DisplayMD :button_Text = "btn3" :mdFile="mdfile3"/>
    <DisplayMD :button_Text = "btn4" :mdFile="mdfile4"/>
    <DisplayMD :button_Text = "btn5" :mdFile="mdFile5"/>
  </div>
</template>

<style scoped></style>
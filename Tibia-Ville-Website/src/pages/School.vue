<script setup lang="ts">
  import DisplayMD from '@/components/DisplayMD.vue';

  //how school works
  import mdFile1 from '../markdown/School/HowdoestheSchoolwork.md?raw';
  const btn = " how the school works"
  //stem people to follow
  import mdFile2 from '../markdown/School/Stempeopletofollowforideas.md?raw';
  const btn2 = " stem people to follow"
  //cool tutorials
  import mdFile3 from '../markdown/School/TutorialsIthinkarecool.md?raw';
  const btn3 = " cool tutorials links"
  //american prison system
  import mdFile4 from '../markdown/School/Americanprisonsystem.md?raw';
  const btn4 = " american prison system research"
</script>

<template>
  <div>
    <h2 class="page_headers">School</h2>
    <DisplayMD :button_Text = "btn" :mdFile="mdFile1"/>
    <DisplayMD :button_Text = "btn2" :mdFile="mdFile2"/>
    <DisplayMD :button_Text = "btn3" :mdFile="mdFile3"/>
    <DisplayMD :button_Text = "btn4" :mdFile="mdFile4"/>
  </div>
</template>

<style scoped></style>
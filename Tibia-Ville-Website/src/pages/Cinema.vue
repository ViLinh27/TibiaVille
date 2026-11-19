<script setup lang="ts">
  import DisplayMD from '@/components/DisplayMD.vue';

  //how cinema works
  import mdfile1 from "../markdown/Cinema/Howdoesthecinemawork.md?raw"
  const btn = " how cinema works"  

  //movies i wanna see
  import mdfile2 from "../markdown/Cinema/MoviesIdliketowatch.md?raw"
  const btn2 = " movies I'd like to watch" 

  //movies i like
  import mdfile3 from "../markdown/Cinema/MoviesIlike.md?raw"
  const btn3 = "movies I like " 

  //tv shows i like
  import mdfile4 from "../markdown/Cinema/TvShowsIlike.md?raw"
  const btn4 = " tv shows I like" 

</script>

<template>
  <div>
    <h2 class="page_headers">Cinema</h2>
    <DisplayMD :button_Text = "btn" :mdFile="mdfile1"/>
    <DisplayMD :button_Text = "btn2" :mdFile="mdfile2"/>
    <DisplayMD :button_Text = "btn3" :mdFile="mdfile3"/>
    <DisplayMD :button_Text = "btn4" :mdFile="mdfile4"/>
  </div>
</template>

<style scoped></style>
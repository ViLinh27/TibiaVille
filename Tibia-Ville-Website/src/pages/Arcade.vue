<script setup lang="ts">
  import DisplayMD from '@/components/DisplayMD.vue';

  // how arcade works
  import howarcadeworks from '../markdown/Arcade/1_How_does_the_arcade_work.md?raw'
  const btnText = " how the arcade works"

  //games I've made
  import gamesivemade from '../markdown/Arcade/2_Games_Ive_made.md?raw'
  const btnText2 = " games I've made"

  //games I would like to make
  import gamesiwannamake from '../markdown/Arcade/3_Games_that_I_would_like_to_make.md?raw'
  const btnText3 = " games I would like to make"

  //collection of TTRPG
  import collectionttrpgs from '../markdown/Arcade/4_My_collection_of_ttrpgs.md?raw'
  const btnText4 = " my collection of TTRPGs"

  //cool free games
  import freegames from '../markdown/Arcade/5_Cool_free_games.md?raw'
  const btnText5 = " cool free games"

  //cool games to buy??
  import paygames from '../markdown/Arcade/6_Cool_games_to_get_maybe.md?raw'
  const btnText6 = " cool games to get?"
</script>

<template>
  <div>
    <h2 class="page_headers">Arcade</h2>
    <DisplayMD :button_Text="btnText" :mdFile="howarcadeworks"/>
    <DisplayMD :button_Text="btnText2" :mdFile="gamesivemade"/>
    <DisplayMD :button_Text="btnText3" :mdFile="gamesiwannamake"/>
    <DisplayMD :button_Text="btnText4" :mdFile="collectionttrpgs" />
    <DisplayMD :button_Text="btnText5" :mdFile="freegames"/>
    <DisplayMD :button_Text="btnText6" :mdFile="paygames"/>
  </div>
  
</template>

<style scoped></style>
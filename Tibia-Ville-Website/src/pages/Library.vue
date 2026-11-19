<script setup lang="ts">
import DisplayMD from '@/components/DisplayMD.vue';

//how the library worksk
import mdfile1 from '../markdown/Library/1Howdoesthelibrarywork.md?raw'
const btn1 = " how the library works"

//books ive enjoyed
import mdfile2 from '../markdown/Library/2BooksIveenjoyed.md?raw'
const btn2 = " books I've enjoyed"

//books that look cool
import mdfile3 from '../markdown/Library/3Booksthatlookcool.md?raw'
const btn3 = " books that look cool"
//comics wing
//---comics i've emjoyed
import mdfile4 from '../markdown/Library/4ComicWing/4ComicsIveenjoyed.md?raw'
const btn4 = " comics I've enjoyed"

//--- comics that look cool
import mdfile5 from '../markdown/Library/4ComicWing/5Comicsthatlookcool.md?raw'
const btn5 = " comics that look cool"

//books I need to finish

</script>

<template>
  <div>
    <h2 class="page_headers">Library</h2>
    <DisplayMD :button_Text="btn1" :mdFile="mdfile1"/>
    <DisplayMD :button_Text="btn2" :mdFile="mdfile2"/>
    <DisplayMD :button_Text="btn3" :mdFile="mdfile3"/>
    <DisplayMD :button_Text="btn4" :mdFile="mdfile4"/>
    <DisplayMD :button_Text="btn5" :mdFile="mdfile5"/>
  </div>
</template>

<style scoped></style>
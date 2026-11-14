<script setup lang="ts">
  import { VueMarkdown } from '@crazydos/vue-markdown';
  import {ref} from 'vue'
  import howarcadeworks from '../markdown/Arcade/1_How_does_the_arcade_work.md?raw'
</script>

<template>
  <div class="mdFile">
      <VueMarkdown :markdown="howarcadeworks"/>
  </div>
</template>

<style scoped></style>
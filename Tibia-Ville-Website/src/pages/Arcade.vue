<script setup lang="ts">
  import { VueMarkdown } from '@crazydos/vue-markdown';
  import howarcadeworks from '../markdown/Arcade/1_How_does_the_arcade_work.md?raw'

  import { ref } from 'vue';

  const isVisible = ref(false)
</script>

<template>
  <div>
    <button class="md_display_btn" @click = "isVisible = !isVisible">
    {{isVisible ? 'Hide' : 'Show'}} how the arcade works
    </button>
    <div class="mdFile" id="howarcadeworks" v-if="isVisible">
      <VueMarkdown :markdown="howarcadeworks"/>
    </div>
  </div>
  
</template>

<style scoped></style>
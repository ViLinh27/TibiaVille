<script setup lang="ts">
import { VueMarkdown } from '@crazydos/vue-markdown';
import {ref} from 'vue'
const markdowntest = ref('## test markdown')
</script>

<template>
  <div>
    <h1>home</h1>
    <VueMarkdown :markdown="markdowntest"/>

  </div>
</template>

<style scoped></style>
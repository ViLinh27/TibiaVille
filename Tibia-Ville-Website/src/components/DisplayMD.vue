<script setup lang="ts">
  import { VueMarkdown } from '@crazydos/vue-markdown';

  import { ref } from 'vue';

  import remarkGfm from 'remark-gfm'

  const isVisible = ref(false)

  defineProps({
    button_Text:{
        type:String,
        required:true
    },
    mdFile:{
        type:String,
        required:true
    }
  })
</script>

<template>
  <div>
    <button class="md_display_btn" @click = "isVisible = !isVisible">
    {{isVisible ? 'Hide' : 'Show'}} {{ button_Text }}
    </button>
    <div class="mdFile" id="howarcadeworks" v-if="isVisible">
      <VueMarkdown :markdown="mdFile" :remark-plugins="[remarkGfm]"/>
    </div>
  </div>
  
</template>

<style scoped></style>
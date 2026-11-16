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
  <div class="displayMD">
    <button class="md_display_btn" @click = "isVisible = !isVisible">
    {{isVisible ? 'Hide' : 'Show'}} {{ button_Text }}
    </button>
    <div v-if="isVisible" class="mdFile">
      <VueMarkdown 
        :markdown="mdFile" 
        :remark-plugins="[remarkGfm]" 
        :custom-attrs="{ 
          p: { class: 'break-words' }, 
          pre: { class: 'whitespace-pre-wrap break-words' } 
        }" 
      />
    </div>
  </div>
  
</template>

<style scoped>
.displayMD {
  max-width: 100%;
  min-width: 0; 
}
.mdFile :deep(p),
.mdFile :deep(li),
.mdFile :deep(a) {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}
.mdFile :deep(pre),
.mdFile :deep(code) {
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-word;
  max-width: 100%;
}
</style>
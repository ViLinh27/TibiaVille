<script setup lang="ts">
// import WelcomeItem from './WelcomeItem.vue'
import CityGlanceItem from './CityGlanceItem.vue'
import DocumentationIcon from '../icons/IconDocumentation.vue'
import ToolingIcon from '../icons/IconTooling.vue'
import EcosystemIcon from '../icons/IconEcosystem.vue'
import CommunityIcon from '../icons/IconCommunity.vue'
import SupportIcon from '../icons/IconSupport.vue'

import { RouterLink, RouterView } from 'vue-router'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <!-- <RouterLink to="/">Home</RouterLink> -->

  <CityGlanceItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>City Hall</template>

    How does Tibia-Ville work?
  </CityGlanceItem>

  <CityGlanceItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Arcade</template>

    What games do I like? What game projects am I working on?
  </CityGlanceItem>

  <CityGlanceItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Lab</template>

    What STEM projects am I working on? What do I want to make?
  </CityGlanceItem>

  <CityGlanceItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Library</template>

    What books am I reading? What books have I read? What do I want to read?
  </CityGlanceItem>

  <CityGlanceItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Tibia's House</template>
        Who am I? What are my hobbies? Who is Tibia?
  </CityGlanceItem>

  <CityGlanceItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Cinema</template>
        What movies do I like? What movies do I want to see? What tv shows do I like?
  </CityGlanceItem>

  <CityGlanceItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>School</template>
        What am I learning? What topics do I want to learn?
  </CityGlanceItem>

  <CityGlanceItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Post Office</template>
        How to get in touch with me? Cool ways to fold letters.
  </CityGlanceItem>

  <CityGlanceItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Art Museum</template>
        My art. Art of people I've met. Art of people I admire but have never met.
  </CityGlanceItem>

  <CityGlanceItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Record Store</template>
       What music do I like?
  </CityGlanceItem>

  <CityGlanceItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Shopping Centre</template>
       What fashion do I like? What merch do I want? What merch would I like that hasn't been made yet?
  </CityGlanceItem>

  <CityGlanceItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Fountain</template>
        Idea in the making...
  </CityGlanceItem>

  <CityGlanceItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Interest Town</template>
        I store my "dopamine" menu here
  </CityGlanceItem>

  <CityGlanceItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Bulletin Board</template>
       What is on my project to do list? I keep myself accountable here.
  </CityGlanceItem>

  <RouterView/>
</template>

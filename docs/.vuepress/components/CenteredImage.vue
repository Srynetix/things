<template>
  <div class="container">
    <img :src="src" :alt="alt" :width="width" :height="height">
    <div class="caption" v-if="!!caption">{{ caption }}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    src: {
      required: true,
      type: String
    },
    alt: {
      required: true,
      type: String
    },
    caption: {
      type: String
    },
    width: {
      type: String
    },
    height: {
      type: String
    }
  }
})
</script>

<style scoped>
.caption {
  font-style: italic;
  color: var(--c-text);
}

.container {
  text-align: center;
}
</style>

<template>
  <p>
    <RouterLink :to="link">🔙 Back to <b>{{ name }}</b></RouterLink>
  </p>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      required: true,
      type: String
    },
    link: {
      type: String,
      default: "../"
    }
  }
})
</script>

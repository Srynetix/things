<template>
  <Badge :text="stateName" vertical="middle" :class="className" />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    stateName() {
      const state = this.state
      return state.charAt(0).toUpperCase() + state.substring(1)
    },
    className() {
      return `tag-state-${this.state}`
    }
  },
  props: {
    text: String,
    state: {
      type: String,
      validator(value) {
        return ["finished", "active", "paused", "abandoned"].includes(value)
      }
    }
  },
})
</script>

<style>
.badge.tag-state-finished {
  color: #ffffff;
  background-color: #24a335;
}

.badge.tag-state-active {
  color: #ffffff;
  background-color: #2d6c96;
}

.badge.tag-state-paused {
  color: #ffffff;
  background-color: #6d6d6d;
}

.badge.tag-state-abandoned {
  color: #ffffff;
  background-color: #ad363c;
}
</style>

<template>
  <div class="card">
    <div class="card-fields">
      <div class="card-field">
        <div class="card-field-label">Language</div>
        <div class="card-field-value">{{ language }}</div>
      </div>
      <div class="card-field">
        <div class="card-field-label">Date</div>
        <div class="card-field-value"><i>{{ date }}</i></div>
      </div>
      <div class="card-field">
        <div class="card-field-label">Status</div>
        <div class="card-field-value"><Tag :state="status" /></div>
      </div>
      <div class="card-field" v-if="!!urls || !!url">
        <div class="card-field-label">GitHub Project</div>
        <div class="card-field-value">
          <div class="card-field-urls" v-if="!!urls">
            <a :href="curl" v-for="curl in urls" :key="curl" target="_blank">{{ projectName(curl) }}<ExternalLinkIcon /></a>
          </div>
          <div class="card-field-urls" v-else>
            <a :href="url" target="_blank">{{ projectName(url) }}<ExternalLinkIcon /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="card-screenshot" v-if="!!screenshots">
      <img class="card-screenshot-img" v-for="screenshot in screenshots" :key="screenshot" :src="screenshotPath(screenshot)" alt="screenshot" :width="screenshotWidth" :height="screenshotHeight" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue'
import { withBase, usePageData } from '@vuepress/client'
import { DefaultThemePageData } from '@vuepress/theme-default'
import { useMediumZoom } from '@vuepress/plugin-medium-zoom/lib/client'

export default defineComponent({
  methods: {
    projectName(url: string) {
      const split = url.split("/")
      return split[split.length - 1]
    },
    screenshotPath(url: string) {
      return withBase(url)
    }
  },
  props: {
    language: String,
    date: String,
    status: String,
    url: String,
    urls: Array,
    screenshots: Array,
    screenshotWidth: {
      type: Number,
      default: 300
    },
    screenshotHeight: Number,
  },
  setup() {
    const zoom = useMediumZoom()
    const page = usePageData<DefaultThemePageData>()

    nextTick(() => {
      console.log(page)
      zoom.refresh()
    })
  }
})
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-content: space-between;
    gap: 1rem;
  }
}

.card-fields {
  padding: 1rem;

  border: 1px solid;
  border-color: var(--c-border);
  border-radius: 10px;
  background-color: var(--c-bg-light);

  display: flex;
  flex-direction: column;

  align-self: center;
}

.card-screenshot {
  display: flex;
  flex-direction: column;
}

.card-screenshot-img {
  margin: 4px 0;
}

.card-field {
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 320px) {
    flex-direction: column;
  }
}

.card-field-label {
  width: 200px;
  font-weight: bold;
}

.card-field-urls {
  display: flex;
  flex-direction: column;
}
</style>

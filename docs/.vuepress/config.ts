import { defineUserConfig, Page } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { path } from '@vuepress/utils'
import { NavbarConfig } from '@vuepress/theme-default'

const mainIcon = '/images/heh-rounded.png'

function createNavbar(): NavbarConfig {
  return [
    {
      text: 'About me',
      link: '/',
    },
    {
      text: 'Projects',
      link: '/projects/',
    },
    {
      text: 'Experiments',
      link: '/experiments/',
    },
  ]
}

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'fr-FR',
  title: 'Things',
  description: "Documentation and articles about things I like, things I made, and things I'm making",
  base: '/',
  head: [
    ['link', { rel: 'icon', href: mainIcon }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap' }],
    ['meta', { name: 'theme-color', content: '#7263f8' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: mainIcon }],
    ['link', { rel: 'mask-icon', href: mainIcon, color: '#7263f8' }],
    ['meta', { name: 'msapplication-TileImage', content: mainIcon }],
    ['meta', { name: 'msapplication-TileColor', content: '#7263f8' }],
  ],
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: mainIcon,
    repo: 'Srynetix',
    editLink: false,
    docsDir: 'docs',
    contributors: false,
    navbar: createNavbar(),
  },
  plugins: [
    '@vuepress/plugin-pwa',
    [
      '@vuepress/plugin-search',
      {
        // allow searching the `tags` frontmatter
        getExtraFields: (page: Page) => page.frontmatter.tags ?? [],
      },
    ],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],
  // From https://github.com/vuepress/vuepress-next/discussions/72#discussioncomment-472465
  onPrepared: async (app) => {
    const myData = app.pages.map((page) => {
      return {
        title: page.title,
        tags: page.frontmatter.tags || [],
        path: page.path,
      }
    })
    await app.writeTemp('pages-data.js', `export default ${JSON.stringify(myData)}`)
  },
})

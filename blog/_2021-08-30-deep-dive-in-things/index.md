---
slug: deep-dive-in-things
title: Deep dive in Things
authors: [srynetix]
tags: [vuepress, docusaurus]
---

Here it is, my first real blog post!

If you read the title, I'm gonna write about this website: **why doing it**, **how it works**, and **what I want to do in the future**.

<!--truncate-->

## Why?

Well everyone has a website or a personal page!  
Back in the days, I did my own personal page multiple times using good ol' hand-written HTML4 and CSS2 and it was great! (and unmaintainable but I didn't care back then).

Now, in 2022, you have all the tools at your disposal do to something great, without reinventing the wheel, thanks to things like _static site generators_ (also called **SSG**).  
So that's what I tried to do.

### VuePress

First, I tried <ELink href="https://v2.vuepress.vuejs.org/">**VuePress v2**</ELink>, without any experience in <ELink href="https://vuejs.org/">**Vue**</ELink>, because it looked simple enough to configure and do what I wanted.

> - **Simplicity First**: Minimal setup with markdown-centered project structure helps you focus on writing.
> - **Vue-Powered**: Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.
> - **Performant**: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
> - **Themes**: Providing a default theme out of the box. You can also choose a community theme or create your own one.
> - **Plugins**: Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site.
> - **Bundlers**: Default bundler is Vite, while Webpack is also supported. Choose the one you like!
>
> &mdash; <ELink href="https://v2.vuepress.vuejs.org/">VuePress v2</ELink>

So in the end, the first deployed version of this site was completely done thanks to **VuePress**!

The thing I really liked was to include custom Vue components in Markdown, so I was making my first Vue components!  
At each opportunity to encapsulate something reusable (like a "project card" or a simple "back button"), I did a component.

The thing I didn't like was to put all my images at the same place, because it is not possible to store images with articles if you refer to them in Vue components (or I don't know how to do it, I tried looking everywhere but I may have missed something).

So everything was up and running, but I wasn't really happy about it. My lack of understanding and experience around Vue did not help me either.  
So I was thinking: "maybe there is something else, as accessible and at least as configurable than VuePress, but maybe around <ELink href="https://reactjs.org/">React</ELink>", knowing that I have more experience in it?

And the answer is: **yes**, there is something else, it's made by Facebook and it's called <ELink href="https://docusaurus.io/">Docusaurus</ELink>.

### Docusaurus

Let's see the <ELink href="https://docusaurus.io/docs">official docs</ELink>:

> - ⚡️ Docusaurus will help you ship a beautiful documentation site in no time.
> - 💸 Building a custom tech stack is expensive. Instead, focus on your content and just write Markdown files.
> - 💥 Ready for more? Use advanced features like versioning, i18n, search and theme customizations.
> - 💅 Check the best Docusaurus sites for inspiration and read some testimonials.
> - 🧐 Docusaurus is a static-site generator. It builds a single-page application with fast client-side navigation, leveraging the full power of React to make your site interactive. It provides out-of-the-box documentation features but can be used to create any kind of site (personal website, product, blog, marketing landing pages, etc).
>
> &mdash; <ELink href="https://docusaurus.io/docs">Docusaurus</ELink>

## How does it work?

## What do I want in the future?

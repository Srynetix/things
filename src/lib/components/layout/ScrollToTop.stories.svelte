<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';
	import ScrollToTop from './ScrollToTop.svelte';

	export const meta = {
		title: 'Layout / ScrollToTop',
		component: ScrollToTop,
		tags: ['autodocs']
	} satisfies Meta<ScrollToTop>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<div class="container">
		<div class="long"></div>
		<ScrollToTop on:click {...args}></ScrollToTop>
	</div>
</Template>

<Story name="ScrollToTop sample" />

<style>
	.long {
		height: 100vh;
	}
</style>

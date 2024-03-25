<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';
	import Slideshow from './Slideshow.svelte';

	export const meta = {
		title: 'Base / Slideshow',
		component: Slideshow,
		tags: ['autodocs']
	} satisfies Meta<Slideshow>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<div class="container">
		<Slideshow {...args}></Slideshow>
	</div>
</Template>

<Story
	name="Slideshow Sample"
	args={{
		images: ['https://placehold.co/600x400', 'https://placehold.co/400x600']
	}}
/>

<style>
	.container {
		height: 400px;
	}
</style>

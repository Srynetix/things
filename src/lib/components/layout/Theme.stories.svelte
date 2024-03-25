<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';
	import Theme from './Theme.svelte';
	import { Theme as ThemeEnum } from '$lib/stores/theme';

	export const meta = {
		title: 'Layout / Theme',
		component: Theme,
		tags: ['autodocs']
	} satisfies Meta<Theme>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<div class="container">
		<Theme {...args} />
	</div>
</Template>

<Story name="Theme current" />

<Story
	name="Theme dark"
	args={{
		theme: ThemeEnum.Dark
	}}
/>

<Story
	name="Theme light"
	args={{
		theme: ThemeEnum.Light
	}}
/>

<style>
	.container {
		padding: 1rem;
		background-color: gray;
	}
</style>

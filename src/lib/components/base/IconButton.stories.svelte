<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';
	import IconButton from './IconButton.svelte';

	export const meta = {
		title: 'Base / IconButton',
		component: IconButton,
		tags: ['autodocs']
	} satisfies Meta<IconButton>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<IconButton on:click {...args}></IconButton>
</Template>

<Story
	name="IconButton Sample"
	args={{
		icon: 'octicon:reply-16'
	}}
/>

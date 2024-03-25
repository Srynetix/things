<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';
	import IconToggleButton from './IconToggleButton.svelte';

	export const meta = {
		title: 'Base / IconToggleButton',
		component: IconToggleButton,
		tags: ['autodocs']
	} satisfies Meta<IconToggleButton>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<IconToggleButton on:click {...args}></IconToggleButton>
</Template>

<Story
	name="IconToggleButton Sample"
	args={{
		icon: 'octicon:reply-16'
	}}
/>

<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';
	import BackButton from './BackButton.svelte';

	export const meta = {
		title: 'Layout / BackButton',
		component: BackButton,
		tags: ['autodocs']
	} satisfies Meta<BackButton>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<BackButton on:click {...args}></BackButton>
</Template>

<Story name="BackButton Sample" />

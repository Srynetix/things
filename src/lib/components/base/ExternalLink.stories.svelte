<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';
	import ExternalLink from './ExternalLink.svelte';

	export const meta = {
		title: 'Base / ExternalLink',
		component: ExternalLink,
		tags: ['autodocs']
	} satisfies Meta<ExternalLink>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<ExternalLink on:click {...args}></ExternalLink>
</Template>

<Story
	name="ExternalLink Sample"
	args={{
		text: 'This is a test',
		href: 'https://example.com'
	}}
/>

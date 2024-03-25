<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';
	import TopBar from './TopBar.svelte';

	export const meta = {
		title: 'Layout / TopBar',
		component: TopBar,
		tags: ['autodocs']
	} satisfies Meta<TopBar>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<TopBar {...args} />
</Template>

<Story name="TopBar sample" />

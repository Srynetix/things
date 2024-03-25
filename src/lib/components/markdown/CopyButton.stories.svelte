<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';
	import CopyButton from './CopyButton.svelte';

	export const meta = {
		title: 'Markdown / CopyButton',
		component: CopyButton,
		tags: ['autodocs']
	} satisfies Meta<CopyButton>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<CopyButton {...args}></CopyButton>
</Template>

<Story name="CopyButton sample" />

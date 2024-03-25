<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';
	import CodeHeader from './CodeHeader.svelte';

	export const meta = {
		title: 'Markdown / CodeHeader',
		component: CodeHeader,
		tags: ['autodocs']
	} satisfies Meta<CodeHeader>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<CodeHeader {...args}></CodeHeader>
</Template>

<Story
	name="CodeHeader sample"
	args={{
		content: 'Dummy',
		language: 'Text'
	}}
/>

<Story
	name="CodeHeader YAML"
	args={{
		content: 'Dummy',
		language: 'YAML'
	}}
/>

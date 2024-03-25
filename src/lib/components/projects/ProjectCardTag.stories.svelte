<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';
	import ProjectCardTag from './ProjectCardTag.svelte';

	export const meta = {
		title: 'Projects / ProjectCardTag',
		component: ProjectCardTag,
		tags: ['autodocs']
	} satisfies Meta<ProjectCardTag>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<ProjectCardTag on:click {...args}></ProjectCardTag>
</Template>

<Story
	name="ProjectCardTag sample"
	args={{
		tag: 'foo'
	}}
/>

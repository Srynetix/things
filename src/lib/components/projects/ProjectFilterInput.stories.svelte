<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';
	import ProjectFilterInput from './ProjectFilterInput.svelte';

	export const meta = {
		title: 'Projects / ProjectFilterInput',
		component: ProjectFilterInput,
		tags: ['autodocs']
	} satisfies Meta<ProjectFilterInput>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<ProjectFilterInput {...args}></ProjectFilterInput>
</Template>

<Story name="ProjectFilterInput sample" />

<Story
	name="ProjectFilterInput with value"
	args={{
		currentFilter: 'hey'
	}}
/>

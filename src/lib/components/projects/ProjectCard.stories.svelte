<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';
	import ProjectCard from './ProjectCard.svelte';

	export const meta = {
		title: 'Projects / ProjectCard',
		component: ProjectCard,
		tags: ['autodocs']
	} satisfies Meta<ProjectCard>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import { ProjectKind, ProjectStatus } from '$/lib/domain/Project';
</script>

<Template let:args>
	<ProjectCard on:click {...args}></ProjectCard>
</Template>

<Story
	name="ProjectCard sample"
	args={{
		project: {
			slug: 'dummy',
			name: 'dummy',
			technologies: ['dummy'],
			repository: 'dummy',
			screenshots: ['https://placehold.co/600x400', 'https://placehold.co/400x400'],
			summary: 'A dummy project',
			creationDate: new Date(),
			maintenanceStatus: ProjectStatus.Stable,
			mainMarkdownData: null,
			kind: ProjectKind.App,
			appLink: 'dummy',
			appDocLink: null
		}
	}}
/>

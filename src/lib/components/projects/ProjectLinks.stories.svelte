<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';
	import ProjectLinks from './ProjectLinks.svelte';

	export const meta = {
		title: 'Projects / ProjectLinks',
		component: ProjectLinks,
		tags: ['autodocs']
	} satisfies Meta<ProjectLinks>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import { ProjectKind, ProjectStatus } from '$/lib/domain/Project';
</script>

<Template let:args>
	<ProjectLinks {...args}></ProjectLinks>
</Template>

<Story
	name="ProjectLinks sample"
	args={{
		project: {
			slug: 'dummy',
			name: 'dummy',
			technologies: [],
			repository: 'dummy',
			screenshots: [],
			summary: '',
			creationDate: new Date(),
			maintenanceStatus: ProjectStatus.Stable,
			mainMarkdownData: null,
			kind: ProjectKind.App,
			appLink: 'dummy',
			appDocLink: null
		}
	}}
/>

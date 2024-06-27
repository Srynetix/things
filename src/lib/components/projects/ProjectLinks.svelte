<script lang="ts">
	import type { Project } from '$lib/domain/Project';
	import ExternalLink from '$lib/components/base/ExternalLink.svelte';
	import ProjectLink from '$lib/components/projects/ProjectLink.svelte';

	export let project: Project;
</script>

<div
	class="
	w-full
	flex flex-col wrap gap-2
	text-center text-shadow shadow-black
"
>
	<ProjectLink href={project.repository} title="Click here to go to the project repository">
		<iconify-icon icon="octicon:code-16" noobserver></iconify-icon>
		Source code
	</ProjectLink>

	{#if project.kind == 'Game' && project.gameLink}
		<ProjectLink href={project.gameLink} title="Click here to play the game">
			<iconify-icon icon="octicon:rocket-24" noobserver></iconify-icon>
			Play!
		</ProjectLink>
	{:else if project.kind == 'App'}
		{#if project.appLink}
			<ProjectLink href={project.appLink} title="Click here to test the app">
				<iconify-icon icon="octicon:rocket-24" noobserver></iconify-icon>
				Test!
			</ProjectLink>
		{/if}

		{#if project.appDocLink}
			<ProjectLink href={project.appDocLink} title="Click here to read the docs">
				<iconify-icon icon="octicon:book-24" noobserver></iconify-icon>
				Read the docs!
			</ProjectLink>
		{/if}
	{:else if project.kind == 'JamGame'}
		{#if project.jamGameLink}
			<ProjectLink href={project.jamGameLink} title="Click here to play the game">
				<iconify-icon icon="octicon:rocket-24" noobserver></iconify-icon>
				Play!
			</ProjectLink>
		{/if}

		{#if project.jamPageLink}
			<ProjectLink href={project.jamPageLink} title="Click here to go to the jam page">
				<iconify-icon icon="octicon:people-24" noobserver></iconify-icon>
				Jam page
			</ProjectLink>
		{/if}
	{:else if project.kind == 'Framework'}
		{#if project.frameworkSampleLink}
			<ProjectLink href={project.frameworkSampleLink} title="Click here to test the framework">
				<iconify-icon icon="octicon:rocket-24" noobserver></iconify-icon>
				Test!
			</ProjectLink>
		{/if}

		{#if project.frameworkDocLink}
			<ProjectLink href={project.frameworkDocLink} title="Click here to read the docs">
				<iconify-icon icon="octicon:book-24" noobserver></iconify-icon>
				Read the docs!
			</ProjectLink>
		{/if}
	{/if}
</div>

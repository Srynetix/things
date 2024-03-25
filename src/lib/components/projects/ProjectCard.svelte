<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import type { Project } from '$lib/domain/Project';
	import ExternalLink from '$lib/components/base/ExternalLink.svelte';
	import Slideshow from '$lib/components/base/Slideshow.svelte';
	import ProjectCardTag from '$lib/components/projects/ProjectCardTag.svelte';
	import ProjectLinks from '$lib/components/projects/ProjectLinks.svelte';

	const dispatch = createEventDispatcher();

	export let project: Project;
</script>

<Slideshow class="app-project-card" images={project.screenshots}>
	<div class="app-project-card__overlay"></div>

	<a
		id={project.slug}
		href="/projects/{project.slug}"
		class="app-project-card__title"
		title="Click here to see more info about the project"
	>
		{project.name}

		<div class="app-project-card__kind">
			{#if project.kind == 'JamGame'}
				Jam Game
			{:else}
				{project.kind}
			{/if}
		</div>
	</a>

	<div class="app-project-card__summary">
		{project.summary}
		<br />

		{#if project.kind == 'JamGame'}
			<br />
			Submission for
			<br />
			<ExternalLink href={project.jamPageLink} class="app-project-card__inner-link"
				>{project.jamName} edition #{project.jamEdition}.</ExternalLink
			>
			{#if project.jamRank}
				Ranked {project.jamRank}.
			{:else}
				Not ranked.
			{/if}
		{/if}
	</div>

	<div class="app-project-card__tags">
		{#each project.technologies as technology}
			<ProjectCardTag tag={technology} on:click={() => dispatch('tag:click', technology)} />
		{/each}
	</div>

	<div class="app-project-card__actions">
		<ProjectLinks {project} />
	</div>
</Slideshow>

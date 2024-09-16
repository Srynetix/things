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

<div
	class="
	shadow-lg
	w-64
	lg:w-96
	h-96
	self-center
"
>
	<Slideshow
		class="
			relative
			flex flex-col items-center justify-between
			border-none rounded-lg
			text-zinc-100
			bg-cover bg-zinc-900
			transition
		"
		images={project.screenshots}
	>
		<div
			class="
			absolute w-full h-full rounded-lg
			backdrop-blur-lg
			bg-black/25
		"
		></div>

		<a
			id={project.slug}
			href="/projects/{project.slug}"
			class="
				w-full pt-3 z-10
				text-center font-semibold
				rounded-t-lg
				text-shadow shadow-black
				bg-black/25
			"
			title="Click here to see more info about the project"
		>
			{project.name}

			<div
				class="
				w-full z-10
				pb-4
				text-sm
			"
			>
				{#if project.kind == 'JamGame'}
					Jam Game
				{:else}
					{project.kind}
				{/if}
			</div>
		</a>

		<div
			class="
			w-full z-10
			justify-center
			px-2
			py-8
			overflow-hidden
			text-center
			text-shadow
			shadow-black
			text-inherit
		"
		>
			{project.summary}
			<br />

			{#if project.kind == 'JamGame'}
				<br />
				Submission for
				<br />
				<ExternalLink
					href={project.jamPageLink}
					class="
						font-semibold
						text-inherit
						gap-1
					"
				>
					{project.jamName} edition #{project.jamEdition}.</ExternalLink
				>
				{#if project.jamRank}
					Ranked {project.jamRank}.
				{:else}
					Not ranked.
				{/if}
			{/if}
		</div>

		<div
			class="
			w-full flex wrap items-center justify-center gap-1 pb-2 z-10
		"
		>
			{#each project.technologies as technology}
				<ProjectCardTag tag={technology} on:click={() => dispatch('tag:click', technology)} />
			{/each}
		</div>

		<div
			class="
			w-full p-2 rounded-b-lg
			z-10
			bg-black/25
		"
		>
			<ProjectLinks {project} />
		</div>
	</Slideshow>
</div>

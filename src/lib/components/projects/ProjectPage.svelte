<script lang="ts">
	import Slideshow from '$lib/components/base/Slideshow.svelte';
	import MarkdownLayout from '$lib/components/markdown/MarkdownLayout.svelte';
	import type { Project } from '$lib/domain/Project';
	import ProjectLinks from '$lib/components/projects/ProjectLinks.svelte';

	export let project: Project;
</script>

<div class="flex flex-col gap-2 grow">
	<div class="flex flex-col my-4">
		<div class="text-2xl font-bold">{project.name}</div>
		<div class="text-sm">
			{new Date(project.creationDate).toLocaleDateString()}
		</div>
	</div>

	{#if project.screenshots.length > 0}
		<Slideshow class="w-full h-64 bg-contain" images={project.screenshots} />
	{/if}

	<div class="mb-2 italic text-center">
		{project.summary}
	</div>

	{#if project.mainMarkdownData}
		<div class="w-full self-start grow">
			<MarkdownLayout>
				<svelte:component this={project.mainMarkdownData} />
			</MarkdownLayout>
		</div>
	{/if}

	<div class="w-full my-4">
		<ProjectLinks {project} />
	</div>
</div>

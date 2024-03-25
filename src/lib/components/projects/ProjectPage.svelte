<script lang="ts">
	import Slideshow from '$lib/components/base/Slideshow.svelte';
	import MarkdownLayout from '$lib/components/markdown/MarkdownLayout.svelte';
	import type { Project } from '$lib/domain/Project';
	import ProjectLinks from '$lib/components/projects/ProjectLinks.svelte';

	export let project: Project;
</script>

<div class="app-project-page">
	<div class="app-project-page__header">
		<div class="app-project-page__header__title">{project.name}</div>
		<div class="app-project-page__header__date">
			{new Date(project.creationDate).toLocaleDateString()}
		</div>
	</div>

	<div class="app-project-page__summary">
		{project.summary}
	</div>

	{#if project.screenshots.length > 0}
		<Slideshow class="app-project-page__background" images={project.screenshots} />
	{/if}

	{#if project.mainMarkdownData}
		<div class="app-project-page__content">
			<MarkdownLayout>
				<svelte:component this={project.mainMarkdownData} />
			</MarkdownLayout>
		</div>
	{/if}

	<div class="app-project-page__links">
		<ProjectLinks {project} />
	</div>
</div>

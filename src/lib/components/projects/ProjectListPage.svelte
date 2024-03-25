<script lang="ts">
	import type { ProjectsPerYear } from '$lib/domain/Project';
	import { ProjectFilter } from '$lib/domain/ProjectFilter';
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
	import ProjectFilterInput from '$lib/components/projects/ProjectFilterInput.svelte';
	export let projectsPerYear: ProjectsPerYear;

	export let currentFilter: string = '';

	function computeProjectsCount(projectsPerYear: ProjectsPerYear): number {
		return projectsPerYear
			.map((entry) => entry.projects.length)
			.reduce((prev, curr) => curr + prev, 0);
	}

	function addTagToCurrentFilter(tag: string) {
		const filterModel = ProjectFilter.fromString(currentFilter);
		filterModel.addTag(tag);

		currentFilter = filterModel.toString();
	}

	function filterProjects(filter: string): ProjectsPerYear {
		const filterModel = ProjectFilter.fromString(filter);
		if (filterModel.isEmpty()) {
			// No need to filter anything!
			return projectsPerYear;
		}

		const filteredEntries = [];
		for (const entry of projectsPerYear) {
			const projects = [];

			for (const project of entry.projects) {
				let isMatching = true;

				for (const query of filterModel.nameQuery) {
					if (!project.name.toLowerCase().includes(query.toLowerCase())) {
						isMatching = false;
					}
				}

				for (const tag of filterModel.tags) {
					if (!project.technologies.includes(tag)) {
						isMatching = false;
					}
				}

				if (isMatching) {
					projects.push(project);
				}
			}

			if (projects.length > 0) {
				filteredEntries.push({
					year: entry.year,
					projects
				});
			}
		}

		return filteredEntries;
	}

	$: filteredProjectsPerYear = filterProjects(currentFilter);
	$: projectCount = computeProjectsCount(projectsPerYear);
	$: filteredProjectCount = computeProjectsCount(filteredProjectsPerYear);
</script>

<h1 class="app-page__title">Projects</h1>

<p>
	Here you can view
	{#if projectCount !== filteredProjectCount}
		<b>{filteredProjectCount}</b> of my <b>{projectCount}</b> projects.
	{:else}
		my <b>{projectCount}</b> projects.
	{/if}
	<br />
	Click on a <b>project name</b> to see more information about it.
</p>

<ProjectFilterInput bind:currentFilter />

<div class="app-project-list-page__items">
	{#each filteredProjectsPerYear as entry (entry.year)}
		<div class="app-project-list-page__items__year">
			<div class="app-project-list-page__items__year__year">{entry.year}</div>
			<div class="app-project-list-page__items__year__count">
				{entry.projects.length}

				{#if filteredProjectCount != projectCount}
					filtered
				{/if}

				{#if entry.projects.length == 1}
					project
				{:else}
					projects
				{/if}
			</div>
		</div>
		<div class="app-project-list-page__items__cards">
			{#each entry.projects as project (project.slug)}
				<ProjectCard {project} on:tag:click={(e) => addTagToCurrentFilter(e.detail)} />
			{/each}
		</div>
	{/each}
</div>

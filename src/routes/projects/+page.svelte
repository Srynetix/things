<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import ProjectListPage from '$/lib/components/projects/ProjectListPage.svelte';
	import { onMount } from 'svelte';

	export let data: PageData;
	let currentFilter = '';

	onMount(() => {
		currentFilter = $page.url.searchParams.get('q') ?? '';
	});
</script>

<svelte:head>
	<title>Projects | Things</title>
</svelte:head>

<ProjectListPage bind:currentFilter projectsPerYear={data.projectsPerYear} />

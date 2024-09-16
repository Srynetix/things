<script lang="ts">
	import ProjectPage from '$/lib/pages/ProjectPage.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.project.name} | Things</title>
</svelte:head>

<ProjectPage project={data.project} />

<script lang="ts">
	import ExperimentListPage from '$/lib/pages/ExperimentListPage.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Experiments | Things</title>
</svelte:head>

<ExperimentListPage posts={data.posts} />

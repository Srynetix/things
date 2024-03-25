<script lang="ts">
	import ExperimentListPage from '$/lib/components/posts/ExperimentListPage.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Experiments | Things</title>
</svelte:head>

<ExperimentListPage posts={data.posts} />

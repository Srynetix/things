<script lang="ts">
	import GuideListPage from '$/lib/components/posts/GuideListPage.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Guides | Things</title>
</svelte:head>

<GuideListPage posts={data.posts} />

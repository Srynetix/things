<script lang="ts">
	import PostPage from '$/lib/pages/PostPage.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.post.title} | Things</title>
</svelte:head>

<PostPage post={data.post} />

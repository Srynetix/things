<script lang="ts">
	import BlogListPage from '$/lib/components/posts/BlogListPage.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Blog | Things</title>
</svelte:head>

<BlogListPage posts={data.posts} />

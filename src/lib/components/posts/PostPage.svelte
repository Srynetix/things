<script lang="ts">
	import type { Post } from '$/lib/domain/Post';
	import MarkdownLayout from '$lib/components/markdown/MarkdownLayout.svelte';
	import WritingInProgress from '$lib/components/posts/WritingInProgress.svelte';

	export let post: Post;
</script>

<div class="flex flex-col">
	<div class="flex flex-col">
		<h1 class="mb-0">
			{#if post.draft}🚧{/if}
			{post.title}
		</h1>
		<div class="text-sm">
			{post.date.toLocaleDateString()}
		</div>
	</div>

	<main>
		<MarkdownLayout>
			<svelte:component this={post.content} />
		</MarkdownLayout>

		{#if post.draft}
			<WritingInProgress />
		{/if}
	</main>
</div>

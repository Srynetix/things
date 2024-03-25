<script lang="ts">
	import type { Post } from '$/lib/domain/Post';
	import MarkdownLayout from '$lib/components/markdown/MarkdownLayout.svelte';
	import WritingInProgress from '$lib/components/posts/WritingInProgress.svelte';

	export let post: Post;
</script>

<div class="app-post-page">
	<div class="app-post-page__header">
		<div class="app-post-page__header__title">
			{#if post.draft}🚧{/if}
			{post.title}
		</div>
		<div class="app-post-page__header__date">{post.date.toLocaleDateString()}</div>
	</div>

	<main class="app-post-page__content">
		<MarkdownLayout>
			<svelte:component this={post.content} />
		</MarkdownLayout>

		{#if post.draft}
			<WritingInProgress />
		{/if}
	</main>
</div>

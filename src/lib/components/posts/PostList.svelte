<script lang="ts">
	import type { Post, PostCategory } from '$/lib/domain/Post';

	export let category: PostCategory;
	export let posts: Post[];
</script>

<main class="app-post-list">
	{#each posts as post (post.slug)}
		<div class="app-post-list__item">
			<a class="app-post-list__item__link" href="/{category}/{post.slug}">
				<span class="app-post-list__item__title">
					{#if post.draft}🚧{/if}
					{post.title}
				</span>
				<span class="app-post-list__item__date">{new Date(post.date).toLocaleDateString()}</span>
				<span class="app-post-list__item__summary">{post.summary}</span>
				<span class="app-post-list__item__tags">Tags: {post.tags.join(', ')}</span>
			</a>
		</div>
	{/each}
</main>

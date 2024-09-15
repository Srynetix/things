<script lang="ts">
	import type { Post, PostCategory } from '$/lib/domain/Post';

	export let category: PostCategory;
	export let posts: Post[];
</script>

<main
	class="
	flex flex-col gap-3 p-2
"
>
	{#each posts as post (post.slug)}
		<div
			class="
			transition
			border-l-2 border-l-transparent pl-2
			hover:translate-x-2
			dark:hover:border-l-zinc-100 hover:border-l-zinc-900
			dark:active:border-l-zinc-100 active:border-l-zinc-900
		"
		>
			<a
				class="
				flex flex-col
				text-inherit
			"
				href="/{category}/{post.slug}"
			>
				<span
					class="
					font-semibold
				"
				>
					{#if post.draft}🚧{/if}
					{post.title}
				</span>
				<span class="text-xs">{new Date(post.date).toLocaleDateString()}</span>
				<span>{post.summary}</span>
				<span class="text-xs">Tags: {post.tags.join(', ')}</span>
			</a>
		</div>
	{/each}
</main>

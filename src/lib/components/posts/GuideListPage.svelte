<script lang="ts">
	import { PostCategory, type Post } from '$/lib/domain/Post';
	import PostList from '$/lib/components/posts/PostList.svelte';

	export let posts: Post[];
</script>

<h1 class="app-page__title">Guides</h1>

<p>Here you can find my guides.</p>

<PostList category={PostCategory.Guides} {posts} />

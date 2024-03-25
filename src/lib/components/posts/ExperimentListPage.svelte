<script lang="ts">
	import { PostCategory, type Post } from '$/lib/domain/Post';
	import PostList from '$/lib/components/posts/PostList.svelte';

	export let posts: Post[];
</script>

<h1 class="app-page__title">Experiments</h1>

<p>Here you can find my experiments.</p>

<PostList category={PostCategory.Experiments} {posts} />

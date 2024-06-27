<script lang="ts">
	import { PostCategory, type Post } from '$/lib/domain/Post';
	import PostList from '$/lib/components/posts/PostList.svelte';

	export let posts: Post[];
</script>

<div>
	<h1>Guides</h1>
	<p>Here you can find my guides.</p>

	<PostList category={PostCategory.Guides} {posts} />
</div>

<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';
	import PostList from './PostList.svelte';

	export const meta = {
		title: 'Posts / PostList',
		component: PostList,
		tags: ['autodocs']
	} satisfies Meta<PostList>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import { PostCategory } from '$/lib/domain/Post';
</script>

<Template let:args>
	<PostList {...args}></PostList>
</Template>

<Story
	name="PostList sample"
	args={{
		category: PostCategory.Blog,
		posts: [
			{
				slug: 'post',
				title: 'Post',
				summary: 'This is a post',
				date: new Date(),
				published: true,
				tags: ['foo'],
				content: null
			},
			{
				slug: 'post2',
				title: 'Post 2',
				summary: 'This is another post',
				date: new Date(),
				published: true,
				tags: ['foo'],
				content: null
			}
		]
	}}
/>

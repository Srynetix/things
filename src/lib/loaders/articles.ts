import type { Post, PostMarkdownMetadata } from '$/lib/domain/Post';
import type { ComponentType } from 'svelte';

export interface MarkdownFile {
	default: ComponentType;
	metadata: PostMarkdownMetadata;
}

export function loadArticles(markdownPaths: Record<string, MarkdownFile>): Record<string, Post> {
	const posts: Record<string, Post> = {};

	for (const path in markdownPaths) {
		const file = markdownPaths[path] as MarkdownFile;
		const slug = path.split('/').at(-1)?.replace('.md', '') ?? '';

		const date = new Date(file.metadata.date);
		const tags = file.metadata.tags.toSorted();
		const post = { ...file.metadata, slug, date, tags, content: file.default } satisfies Post;
		posts[slug] = post;
	}

	return posts;
}

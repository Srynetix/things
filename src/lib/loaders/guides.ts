import type { Post } from '$/lib/domain/Post';
import { loadArticles, type MarkdownFile } from '$lib/loaders/articles';

function _loadMarkdownPaths(): Record<string, MarkdownFile> {
	return import.meta.glob('/src/data/articles/guides/*.md', { eager: true });
}

const ARTICLES_MAP = loadArticles(_loadMarkdownPaths());

export function getGuideArticle(slug: string): Post {
	return ARTICLES_MAP[slug];
}

export function getGuideArticles() {
	return Object.values(ARTICLES_MAP)
		.filter((a) => a.published)
		.toSorted((first, second) => +second.date - +first.date);
}

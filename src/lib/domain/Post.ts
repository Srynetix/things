import type { ComponentType } from 'svelte';

export enum PostCategory {
	Blog = 'blog',
	Guides = 'guides',
	Experiments = 'experiments'
}

export interface PostMarkdownMetadata {
	title: string;
	date: string;
	published: boolean;
	draft: boolean;
	summary: string;
	tags: string[];
}

export interface Post {
	slug: string;
	title: string;
	summary: string;
	date: Date;
	published: boolean;
	draft: boolean;
	tags: string[];
	content: ComponentType;
}

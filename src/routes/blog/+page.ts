import { getBlogArticles } from '$/lib/loaders/blog';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const posts = getBlogArticles();

	return {
		posts
	};
};

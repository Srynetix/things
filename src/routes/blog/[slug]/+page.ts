import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getBlogArticle } from '$/lib/loaders/blog';

export const load: PageLoad = async ({ params }) => {
	try {
		return {
			post: getBlogArticle(params.slug)
		};
	} catch (e) {
		return error(404);
	}
};

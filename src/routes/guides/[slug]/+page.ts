import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getGuideArticle } from '$/lib/loaders/guides';

export const load: PageLoad = async ({ params }) => {
	try {
		return {
			post: getGuideArticle(params.slug)
		};
	} catch (e) {
		return error(404);
	}
};

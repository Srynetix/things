import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getExperimentArticle } from '$/lib/loaders/experiments';

export const load: PageLoad = async ({ params }) => {
	try {
		return {
			post: getExperimentArticle(params.slug)
		};
	} catch (e) {
		return error(404);
	}
};

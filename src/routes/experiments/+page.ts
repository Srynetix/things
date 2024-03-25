import { getExperimentArticles } from '$/lib/loaders/experiments';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const posts = getExperimentArticles();

	return {
		posts
	};
};

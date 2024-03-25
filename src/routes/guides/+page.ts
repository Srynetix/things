import { getGuideArticles } from '$/lib/loaders/guides';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const posts = getGuideArticles();

	return {
		posts
	};
};

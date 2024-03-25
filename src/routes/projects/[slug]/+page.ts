import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getProject } from '$/lib/loaders/projects';

export const load: PageLoad = async ({ params }) => {
	try {
		const project = getProject(params.slug);
		return {
			project
		};
	} catch (e) {
		return error(404);
	}
};

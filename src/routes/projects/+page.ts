import { getProjects } from '$/lib/loaders/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const projectsPerYear = getProjects();

	return {
		projectsPerYear
	};
};

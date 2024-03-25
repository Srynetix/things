import type { Project, ProjectStatus, ProjectsPerYear } from '$/lib/domain/Project';
import type { ComponentType } from 'svelte';

interface ProjectJsonFile {
	default: Project;
}

interface ProjectImageFile {
	default: string;
}

interface ProjectMarkdownFile {
	default: ComponentType;
}

function _loadProjects(): Record<string, Project> {
	const projectsBySlug: Record<string, Project> = {};

	const imagePaths = import.meta.glob('/src/data/projects/*/images/*.{png,gif}', {
		eager: true
	});
	const jsonPaths = import.meta.glob('/src/data/projects/*/project.json', { eager: true });
	const mainMarkdownPaths = import.meta.glob('/src/data/projects/*/project.md', {
		eager: true
	});

	for (const path in jsonPaths) {
		const file = jsonPaths[path] as ProjectJsonFile;
		const slug = path.split('/').at(-2) ?? '';

		const fileData = file.default;
		if (!fileData.published) {
			continue;
		}

		projectsBySlug[slug] = {
			...fileData,
			creationDate: new Date(fileData.creationDate),
			maintenanceStatus: fileData.maintenanceStatus as ProjectStatus,
			technologies: fileData.technologies.toSorted(),
			screenshots: [],
			slug
		};
	}

	for (const path in imagePaths) {
		const file = imagePaths[path] as ProjectImageFile;
		const slug = path.split('/').at(-3) ?? '';

		if (!(slug in projectsBySlug)) {
			continue;
		}

		projectsBySlug[slug].screenshots.push(file.default);
	}

	for (const path in mainMarkdownPaths) {
		const file = mainMarkdownPaths[path] as ProjectMarkdownFile;
		const slug = path.split('/').at(-2) ?? '';

		if (!(slug in projectsBySlug)) {
			continue;
		}

		projectsBySlug[slug].mainMarkdownData = file.default;
	}

	return projectsBySlug;
}

const PROJECT_MAP = _loadProjects();

export function getProject(slug: string): Project {
	return PROJECT_MAP[slug];
}

export function getProjects(): ProjectsPerYear {
	let projects: Project[] = [];

	projects = Object.values(PROJECT_MAP).sort(
		(first, second) => second.creationDate.getTime() - first.creationDate.getTime()
	);

	const projectsPerYear: Record<number, Project[]> = {};
	for (const project of projects) {
		const year = project.creationDate.getFullYear();
		if (!(year in projectsPerYear)) {
			projectsPerYear[year] = [];
		}

		projectsPerYear[year].push(project);
	}

	const projectsPerYearOrdered = [];
	const sortedYears = Object.keys(projectsPerYear)
		.map((y) => parseInt(y))
		.toSorted((a, b) => b - a);
	for (const year of sortedYears) {
		const projects = projectsPerYear[year];
		projectsPerYearOrdered.push({
			year,
			projects
		});
	}

	return projectsPerYearOrdered;
}

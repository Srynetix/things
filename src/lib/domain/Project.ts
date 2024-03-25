import type { ComponentType } from 'svelte';

export enum ProjectKind {
	App = 'App',
	Game = 'Game',
	Framework = 'Framework',
	JamGame = 'JamGame'
}

export enum ProjectStatus {
	Stable = 'Stable',
	Active = 'Active',
	Abandoned = 'Abandoned'
}

export interface ProjectDataApp {
	kind: ProjectKind.App;
	appLink: string | null;
	appDocLink: string | null;
}

export interface ProjectDataGame {
	kind: ProjectKind.Game;
	gameLink: string | null;
}

export interface ProjectDataJamGame {
	kind: ProjectKind.JamGame;
	jamName: string;
	jamEdition: string;
	jamPageLink: string;
	jamGameLink: string;
	jamRank: string | null;
}

export interface ProjectDataFramework {
	kind: ProjectKind.Framework;
	frameworkDocLink: string | null;
	frameworkSampleLink: string | null;
}

interface ProjectDataCommon {
	slug: string;
	name: string;
	technologies: string[];
	repository: string;
	screenshots: string[];
	summary: string;
	published: boolean;
	creationDate: Date;
	maintenanceStatus: ProjectStatus;
	mainMarkdownData: ComponentType | null;
}

type ProjectData = ProjectDataApp | ProjectDataGame | ProjectDataJamGame | ProjectDataFramework;
export type Project = ProjectDataCommon & ProjectData;

export interface ProjectImageData {
	screenshot: string | null;
	animation: string | null;
}

export type ProjectsPerYear = {
	year: number;
	projects: Project[];
}[];

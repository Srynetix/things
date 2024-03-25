<script lang="ts">
	import type { Project } from '$lib/domain/Project';
	import ExternalLink from '$lib/components/base/ExternalLink.svelte';

	export let project: Project;
</script>

<div class="app-project-links">
	<ExternalLink
		href={project.repository}
		class="app-project-links__link"
		title="Click here to go to the project repository"
	>
		<iconify-icon icon="octicon:code-16" observer="false"></iconify-icon>
		Source code
	</ExternalLink>

	{#if project.kind == 'Game' && project.gameLink}
		<ExternalLink
			href={project.gameLink}
			class="app-project-links__link"
			title="Click here to play the game"
		>
			<iconify-icon icon="octicon:rocket-24" observer="false"></iconify-icon>
			Play!
		</ExternalLink>
	{:else if project.kind == 'App'}
		{#if project.appLink}
			<ExternalLink
				href={project.appLink}
				class="app-project-links__link"
				title="Click here to test the app"
			>
				<iconify-icon icon="octicon:rocket-24" observer="false"></iconify-icon>
				Test!
			</ExternalLink>
		{/if}

		{#if project.appDocLink}
			<ExternalLink
				href={project.appDocLink}
				class="app-project-links__link"
				title="Click here to read the docs"
			>
				<iconify-icon icon="octicon:book-24" observer="false"></iconify-icon>
				Read the docs!
			</ExternalLink>
		{/if}
	{:else if project.kind == 'JamGame'}
		{#if project.jamGameLink}
			<ExternalLink
				href={project.jamGameLink}
				class="app-project-links__link"
				title="Click here to play the game"
			>
				<iconify-icon icon="octicon:rocket-24" observer="false"></iconify-icon>
				Play!
			</ExternalLink>
		{/if}

		{#if project.jamPageLink}
			<ExternalLink
				href={project.jamPageLink}
				class="app-project-links__link"
				title="Click here to go to the jam page"
			>
				<iconify-icon icon="octicon:people-24" observer="false"></iconify-icon>
				Jam page
			</ExternalLink>
		{/if}
	{:else if project.kind == 'Framework'}
		{#if project.frameworkSampleLink}
			<ExternalLink
				href={project.frameworkSampleLink}
				class="app-project-links__link"
				title="Click here to test the framework"
			>
				<iconify-icon icon="octicon:rocket-24" observer="false"></iconify-icon>
				Test!
			</ExternalLink>
		{/if}

		{#if project.frameworkDocLink}
			<ExternalLink
				href={project.frameworkDocLink}
				class="app-project-links__link"
				title="Click here to read the docs"
			>
				<iconify-icon icon="octicon:book-24" observer="false"></iconify-icon>
				Read the docs!
			</ExternalLink>
		{/if}
	{/if}
</div>

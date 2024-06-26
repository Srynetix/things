<script lang="ts">
	import ExternalLink from '$lib/components/base/ExternalLink.svelte';
	import TopBar from '$lib/components/layout/TopBar.svelte';
	import ScrollToTop from '$lib/components/layout/ScrollToTop.svelte';
	import BottomLink from '$lib/components/layout/BottomLink.svelte';

	import { fade } from 'svelte/transition';

	export let url: string;
</script>

<TopBar />

<div
	class="
	w-full min-h-full
	flex flex-col items-center justify-between
"
>
	{#key url}
		<div
			class="
				w-full h-full max-w-screen-sm
				px-2 mt-12
				flex flex-col grow
			"
			in:fade={{ duration: 100 }}
		>
			<slot />
		</div>
	{/key}

	<div
		class="
		flex flex-col items-center justify-center
		py-4 text-sm
	"
	>
		<div
			class="
			flex flex-row items-center justify-center gap-1
		"
		>
			Made with 💜 thanks to <BottomLink href="https://kit.svelte.dev">SvelteKit</BottomLink>
		</div>
		<div
			class="
			flex flex-row items-center justify-center gap-1
		"
		>
			<span> Denis Bourge </span>
			&mdash;
			<BottomLink href="https://github.com/Srynetix" icon="octicon:mark-github-24">
				GitHub
			</BottomLink>
			<BottomLink
				href="https://www.linkedin.com/in/denis-bourge-09676a110/"
				icon="ant-design:linkedin-filled"
			>
				LinkedIn
			</BottomLink>
		</div>
	</div>
</div>

<ScrollToTop />

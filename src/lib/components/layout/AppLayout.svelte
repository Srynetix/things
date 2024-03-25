<script lang="ts">
	import ExternalLink from '$lib/components/base/ExternalLink.svelte';
	import TopBar from '$lib/components/layout/TopBar.svelte';
	import ScrollToTop from '$lib/components/layout/ScrollToTop.svelte';

	import { fade } from 'svelte/transition';

	export let url: string;
</script>

<TopBar />

<div class="app-layout">
	{#key url}
		<div class="app-layout__content" out:fade={{ duration: 10 }} in:fade={{ duration: 200 }}>
			<slot />
		</div>
	{/key}

	<div class="app-layout__bottom">
		<div class="app-layout__bottom__line">
			Made with 💜 thanks to <ExternalLink
				class="app-layout__bottom__line__link"
				href="https://kit.svelte.dev"
			>
				SvelteKit
			</ExternalLink>
		</div>
		<div class="app-layout__bottom__line">
			<span class="app-layout__bottom__name"> Denis Bourge </span>
			&mdash;
			<ExternalLink class="app-layout__bottom__line__link" href="https://github.com/Srynetix">
				@Srynetix
			</ExternalLink>
		</div>
	</div>
</div>

<ScrollToTop />

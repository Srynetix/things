<script lang="ts">
	import { goto, onNavigate } from '$app/navigation';
	import type { OnNavigate } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	let pathname = '/';

	function navigateHandler(navigation: OnNavigate) {
		pathname = navigation.to?.route.id ?? '/';
	}

	function handleBackButton() {
		const thisPathname = location.pathname;

		if (thisPathname == '/') {
			pathname = thisPathname;
		} else {
			const newPathname = pathname.split('/').slice(0, -1);
			pathname = newPathname.join('/') || '/';
			goto(pathname);
		}
	}

	onMount(() => {
		pathname = location.pathname;
	});

	onNavigate(navigateHandler);
</script>

<div
	class="
		flex flex-row items-center justify-center
		px-4 m-hover-filter
	"
	role="button"
	tabindex="0"
	on:keypress={() => handleBackButton()}
	on:click={() => handleBackButton()}
	style:visibility={pathname === '/' ? 'hidden' : null}
>
	<iconify-icon width="2rem" icon="octicon:chevron-up-16" title="Go to the parent page" noobserver
	></iconify-icon>
</div>

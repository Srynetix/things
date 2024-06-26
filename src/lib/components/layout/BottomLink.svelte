<script lang="ts">
	import ExternalLink from '$lib/components/base/ExternalLink.svelte';

	export let href;
	export let icon;
</script>

<ExternalLink
	class="
		flex flex-row items-center justify-center gap-1
		text-inherit underline
	"
	{href}
>
	{#if icon}
		<iconify-icon {icon} class="-mb-1 -mr-1"></iconify-icon>
	{/if}
	<slot />
</ExternalLink>

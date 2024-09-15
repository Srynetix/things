<script lang="ts">
	import ExternalLink from '$lib/components/base/ExternalLink.svelte';

	export let href: string;
	export let title: string;
</script>

<ExternalLink
	{href}
	{title}
	class="
		flex flex-row items-center justify-center
		gap-2 p-1
		rounded-lg
		text-shadow shadow-black
		bg-zinc-900
		text-zinc-100
	"
>
	<slot />
</ExternalLink>

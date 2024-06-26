<script>
	import ExternalLink from '$lib/components/base/ExternalLink.svelte';

	export let href;
	export let title;
</script>

<ExternalLink
	{href}
	{title}
	class="
		flex flex-row items-center justify-center
		gap-2 p-2
		rounded-lg
		text-shadow shadow-black
		bg-slate-700
		text-slate-100
	"
>
	<slot />
</ExternalLink>

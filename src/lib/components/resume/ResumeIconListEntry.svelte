<script lang="ts">
	export let href: string | undefined = undefined;
	export let icon: string;
</script>

<li class="flex flex-row items-center justify-stretch gap-1 m-0 list-none">
	<iconify-icon class="mt-1" {icon} noobserver></iconify-icon>
	{#if href}
		<a {href} target="_blank" rel="noreferrer noopener nofollow">
			<slot />
		</a>
	{:else}
		<slot />
	{/if}
</li>

<script lang="ts">
	/** @restProps a */
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
	{...$$restProps}
	class={['flex flex-row items-center justify-center', $$props.class].filter((c) => c).join(' ')}
	target="_blank"
	rel="noreferrer noopener nofollow"
>
	<slot />
	<iconify-icon class="-ml-1 pb-1" icon="octicon:link-external-16" observer="false"></iconify-icon>
</a>

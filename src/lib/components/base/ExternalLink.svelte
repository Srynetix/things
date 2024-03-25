<script lang="ts">
	/** @restProps a */
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
	{...$$restProps}
	class={['app-external-link', $$props.class].filter((c) => c).join(' ')}
	target="_blank"
	rel="noreferrer noopener nofollow"
>
	<slot />
	<iconify-icon class="app-external-link__icon" icon="octicon:link-external-16" observer="false"
	></iconify-icon>
</a>

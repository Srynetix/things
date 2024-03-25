<script lang="ts">
	/** @restProps button */

	/** Icon name (from iconify-icon) */
	export let icon: string;
</script>

<button
	{...$$restProps}
	class={['app-icon-button', $$props.class].filter((c) => c).join(' ')}
	on:click
>
	<iconify-icon {icon} width="1rem" observer="false"></iconify-icon>
</button>

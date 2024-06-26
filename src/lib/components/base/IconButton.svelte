<script lang="ts">
	/** @restProps button */

	/** Icon name (from iconify-icon) */
	export let icon: string;
</script>

<button
	{...$$restProps}
	class={['p-1 text-inherit flex flex-col items-center justify-center', $$props.class]
		.filter((c) => c)
		.join(' ')}
	on:click
>
	<iconify-icon {icon} width="1rem" observer="false"></iconify-icon>
</button>

<script lang="ts">
	import IconButton from './IconButton.svelte';
	/** @restProps IconButton */

	/** Icon name (from iconify-icon). */
	export let icon: string;

	/** Is the button toggled? */
	export let toggled: boolean = false;
</script>

<IconButton
	{...$$restProps}
	{icon}
	data-toggled={toggled}
	class={['data-[toggled=true]:text-slate-500', $$props.class].filter((c) => c).join(' ')}
	on:click={() => (toggled = !toggled)}
	on:click
/>

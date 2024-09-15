<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let tag: string;

	const dispatch = createEventDispatcher();
</script>

<div
	class="
		flex flex-row items-center justify-center
		p-1 rounded-lg text-shadow shadow-black
		m-hover-filter
	"
	role="button"
	tabindex="0"
	on:click={() => dispatch('click')}
	on:keypress={() => dispatch('click')}
	title="Click here to add tag to current filter"
>
	<span class="self-center text-sm">#</span>
	<span class="underline">{tag}</span>
</div>

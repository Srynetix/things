<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let tag: string;

	const dispatch = createEventDispatcher();
</script>

<div
	class="app-project-card-tag"
	role="button"
	tabindex="0"
	on:click={() => dispatch('click')}
	on:keypress={() => dispatch('click')}
	title="Click here to add tag to current filter"
>
	<span class="app-project-card-tag__hash">#</span>{tag}
</div>

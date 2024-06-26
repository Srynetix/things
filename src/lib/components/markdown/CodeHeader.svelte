<script lang="ts">
	import IconToggleButton from '$lib/components/base/IconToggleButton.svelte';
	import CopyButton from '$lib/components/markdown/CopyButton.svelte';

	export let content: string = '';
	export let language: string = 'Text';

	let lineWrapping = false;

	function toggleLineWrapping() {
		lineWrapping = !lineWrapping;
	}
</script>

<div
	class="
		c-header
		w-full
		flex flex-row items-center justify-between
		rounded-t-lg
		py-2 px-2
		dark:bg-slate-700 bg-slate-300
	"
	data-wrap={lineWrapping.toString()}
>
	<div
		class="
		text-lg font-medium uppercase
	"
	>
		{language}
	</div>
	<div
		class="
		flex flex-row gap-1
	"
	>
		<CopyButton {content} />
		<IconToggleButton
			title="Toggle ligne wrapping"
			toggled={lineWrapping}
			icon="octicon:reply-16"
			on:click={toggleLineWrapping}
		/>
	</div>
</div>

<style>
	.c-header[data-wrap='true'] + :global(pre) {
		white-space: pre-wrap;
	}
</style>

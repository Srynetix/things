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

<div class="app-code-header" data-wrap={lineWrapping.toString()}>
	<div class="app-code-header__language">
		{language}
	</div>
	<div class="app-code-header__buttons">
		<CopyButton {content} />
		<IconToggleButton
			title="Toggle ligne wrapping"
			toggled={lineWrapping}
			icon="octicon:reply-16"
			on:click={toggleLineWrapping}
		/>
	</div>
</div>

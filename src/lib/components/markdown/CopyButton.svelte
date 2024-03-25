<script lang="ts">
	import IconToggleButton from '$lib/components/base/IconToggleButton.svelte';

	export let content: string;

	const RESET_TIMEOUT = 1000;

	let copied: boolean;

	function copyToClipboard() {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(content);
		}

		copied = true;

		setTimeout(() => {
			copied = false;
		}, RESET_TIMEOUT);
	}

	$: icon = copied ? 'octicon:check-16' : 'octicon:copy-16';
</script>

<IconToggleButton
	class="app-copy-button"
	title="Copy to clipboard"
	toggled={copied}
	{icon}
	on:click={copyToClipboard}
/>

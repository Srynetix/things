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
	class="
		data-[toggled=true]:pointer-events-none
		data-[toggled=true]:text-green-500
	"
	title="Copy to clipboard"
	toggled={copied}
	{icon}
	on:click={copyToClipboard}
/>

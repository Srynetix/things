<script lang="ts">
	import CodeHeader from '$lib/components/markdown/CodeHeader.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		for (const node of document.querySelectorAll('pre > code')) {
			new CodeHeader({
				target: node.parentElement!.parentElement!,
				anchor: node.parentElement!,
				props: {
					language: node.attributes.getNamedItem('data-language')?.value,
					content: node.textContent ?? ''
				}
			});
		}
	});
</script>

<div class="app-project-markdown">
	<slot />
</div>

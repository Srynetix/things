<script lang="ts">
	import '$lib/styles/index.css';
	import 'iconify-icon';

	import AppLayout from '$/lib/components/layout/AppLayout.svelte';

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<AppLayout url={data.url}>
	<slot />
</AppLayout>

<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="h-full grow flex flex-col items-center justify-center">
	<h1 class="text-3xl">{$page.status}</h1>
	{#if $page.status == 404}
		<p>Oops, you are lost.</p>
	{:else}
		<p>Oops, something is wrong.</p>
	{/if}
	<p>Don't worry and <a class="underline" href="/">go back to the home page!</a></p>
</div>

<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="app-error-page">
	<h1 class="app-error-page__status">{$page.status}</h1>
	{#if $page.status == 404}
		<div class="app-error-page__message">
			Oops, you are lost.<br />
			<br />
			Don't worry and<br />
			<a href="/">go back to the home page!</a>
		</div>
	{:else}
		<div class="app-error-page__message">Oops, something is wrong.</div>
	{/if}
</div>

<style>
	.app-error-page {
		height: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.app-error-page__status {
		font-size: var(--app-font-size-4);
	}

	.app-error-page__message {
		text-align: center;
	}

	.app-error-page__message > a {
		color: inherit;
	}

	.app-error-page__message > a:hover {
		filter: var(--app-filter-hover);
	}

	.app-error-page__message > a:active {
		filter: var(--app-filter-active);
	}
</style>

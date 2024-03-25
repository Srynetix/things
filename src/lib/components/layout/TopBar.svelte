<script>
	import BackButton from '$lib/components/layout/BackButton.svelte';
	import Theme from '$lib/components/layout/Theme.svelte';
</script>

<main class="app-top-bar">
	<div class="app-top-bar__left">
		<BackButton />
	</div>
	<a href="/" class="app-top-bar__middle" title="Click here to go to the homepage">
		<div class="app-top-bar__middle__img"></div>
		Things
	</a>
	<div class="app-top-bar__right">
		<Theme />
	</div>
</main>

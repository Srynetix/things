<script lang="ts">
	import myPhoto from '$/data/assets/images/me.jpg';
	import myBio from '$/data/bio.md';
	import MarkdownLayout from '$lib/components/markdown/MarkdownLayout.svelte';
</script>

<div class="app-about-me-page">
	<h1 class="app-page__title">About me</h1>

	<img class="app-about-me-page__picture" src={myPhoto} alt="Me" />

	<MarkdownLayout>
		<svelte:component this={myBio} />
	</MarkdownLayout>
</div>

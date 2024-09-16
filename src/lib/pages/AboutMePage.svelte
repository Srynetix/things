<script lang="ts">
	import myPhoto from '$/data/assets/images/me.jpg';
	import myBio from '$/data/bio.md';
	import MarkdownLayout from '$lib/components/markdown/MarkdownLayout.svelte';
</script>

<div
	class="
	flex flex-col self-center
"
>
	<h1>About me</h1>
	<img class="self-center m-2 rounded-3xl w-32 lg:w-48" src={myPhoto} alt="Me" />

	<MarkdownLayout>
		<svelte:component this={myBio} />
	</MarkdownLayout>
</div>

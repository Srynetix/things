<script lang="ts">
	export let scrollY: number = 0;

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

<svelte:window bind:scrollY />

<button
	class="app-scroll-to-top"
	class:app-scroll-to-top--hidden={scrollY == 0}
	on:click={scrollToTop}
	title="Scroll to top"
>
	<iconify-icon icon="octicon:move-to-top-16" width="2rem" height="2rem" observer="false">
	</iconify-icon>
</button>

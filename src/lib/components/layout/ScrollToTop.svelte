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
	class="
		fixed right-4 bottom-4
		flex flex-row items-center justify-center
		w-12 h-12
		z-20
		border-none
		rounded-full
		bg-indigo-300
		dark:bg-indigo-950
	"
	class:invisible={scrollY == 0}
	class:opacity-0={scrollY == 0}
	on:click={scrollToTop}
	title="Scroll to top"
>
	<iconify-icon icon="octicon:arrow-up-16" width="2rem" height="2rem" noobserver> </iconify-icon>
</button>

<script>
	import BackButton from '$lib/components/layout/BackButton.svelte';
	import Theme from '$lib/components/layout/Theme.svelte';

	export let hidden = false;
</script>

<main
	class="
	fixed w-full z-20
	flex flex-row items-center justify-between
	backdrop-blur-md
"
	class:bg-zinc-200={!hidden && false}
	class:dark:bg-zinc-900={!hidden && false}
>
	<div
		class="
		h-full
		flex flex-row items-stretch justify-center
		text-left
	"
	>
		<BackButton />
	</div>

	{#if !hidden}
		<a
			href="/"
			class="
			h-full
			flex flex-row items-center justify-center gap-4
			py-2
			text-center text-lg select-none text-inherit
		"
			title="Click here to go to the homepage"
		>
			<div
				class="
			w-8 h-8
			bg-contain bg-[url('../../data/assets/images/things.png')]
		"
			></div>
			Things
		</a>
	{/if}

	<div
		class="
		h-12
		flex flex-row items-stretch justify-center
		text-right
	"
	>
		<Theme />
	</div>
</main>

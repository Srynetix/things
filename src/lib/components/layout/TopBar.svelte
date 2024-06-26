<script>
	import BackButton from '$lib/components/layout/BackButton.svelte';
	import Theme from '$lib/components/layout/Theme.svelte';
</script>

<main
	class="
	fixed w-full z-20
	flex flex-row items-center justify-between
	bg-indigo-300 dark:bg-indigo-900
"
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
	<a
		href="/"
		class="
			h-full
			flex flex-row items-center justify-center gap-4
			py-2
			text-center text-lg select-none text-inherit
			m-hover-filter
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
	<div
		class="
		h-full
		flex flex-row items-stretch justify-center
		text-right
	"
	>
		<Theme />
	</div>
</main>

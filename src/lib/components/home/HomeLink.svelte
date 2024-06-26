<script>
	export let href;
</script>

<a
	class="
		flex flex-col items-center justify-center
		mx-2 my-1 p-3 rounded-lg
		text-2xl text-inherit font-semibold no-underline
		select-none
		bg-indigo-200 dark:bg-indigo-950
	"
	{href}
>
	<slot />
</a>

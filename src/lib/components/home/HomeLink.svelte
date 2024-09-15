<script lang="ts">
	export let href: string;
</script>

<a
	class="
		flex flex-col items-center justify-center
		py-1
		lg:w-48
		rounded-lg
		text-2xl text-inherit font-semibold no-underline
		select-none
		underline-offset-3
		transition-all
		hover:underline
		focus:underline
	"
	{href}
>
	<slot />
</a>

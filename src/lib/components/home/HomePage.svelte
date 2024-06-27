<script>
	import HomeLink from './HomeLink.svelte';
</script>

<div
	class="
	flex flex-col grow items-center justify-between self-center
"
>
	<div></div>
	<div
		class="
		flex flex-col items-center justify-center gap-3
	"
	>
		<div class="pt-2 text-5xl">Things.</div>
		<div class="text-2xl text-center px-4">Things I made, things I like, things I'm making.</div>
	</div>
	<div
		class="
		w-full
		flex flex-col items-stretch justify-center
		p-1
	"
	>
		<HomeLink href="/projects">Projects</HomeLink>
		<HomeLink href="/blog">Blog</HomeLink>
		<HomeLink href="/guides">Guides</HomeLink>
		<HomeLink href="/experiments">Experiments</HomeLink>
		<HomeLink href="/me">About me</HomeLink>
	</div>
	<div></div>
</div>

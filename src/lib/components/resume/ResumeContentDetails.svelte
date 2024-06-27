<div class="text-left px-1 py-2 c-details">
	<slot />
</div>

<style lang="postcss">
	.c-details :global(p) {
		@apply my-2;
	}

	.c-details :global(li) {
		@apply my-0;
		list-style-type: '- ';
	}

	.c-details > :global(p) {
		@apply underline;
	}
</style>

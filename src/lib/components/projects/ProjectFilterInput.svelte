<script lang="ts">
	export let currentFilter = '';

	function clearFilter() {
		currentFilter = '';
	}
</script>

<div
	class="
	w-full
	flex flex-row items-center gap-2
"
>
	<span title="You can filter by name or by tag">Filter: </span>
	<div
		class="
			relative
			flex flex-row items-center grow
		"
	>
		<input
			class="
				h-6
				text-sm
				grow
				pr-2
				rounded-sm
				dark:bg-slate-800
				bg-slate-300
			"
			type="text"
			bind:value={currentFilter}
		/>
		<button
			class="
				relative right-0
				flex flex-row items-center
				px-1
			"
			title="Clear filter"
			on:click={clearFilter}
		>
			<iconify-icon icon="octicon:x-16" width="1rem" noobserver></iconify-icon>
		</button>
	</div>
</div>

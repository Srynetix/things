<script lang="ts">
	export let currentFilter = '';

	function clearFilter() {
		currentFilter = '';
	}
</script>

<div class="app-project-filter-input">
	<span title="You can filter by name or by tag">Filter: </span>
	<div class="app-project-filter-input__input-wrapper">
		<input
			class="app-project-filter-input__input-wrapper__input"
			type="text"
			bind:value={currentFilter}
		/>
		<button
			class="app-project-filter-input__input-wrapper__clear"
			title="Clear filter"
			on:click={clearFilter}
		>
			<iconify-icon icon="octicon:x-16" width="1rem" observer="false"></iconify-icon>
		</button>
	</div>
</div>

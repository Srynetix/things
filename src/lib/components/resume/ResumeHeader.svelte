<script lang="ts">
	import img from '$/data/assets/images/me.jpg';
	import ResumeIconList from './ResumeIconList.svelte';
	import ResumeIconListEntry from './ResumeIconListEntry.svelte';
</script>

<div class="flex flex-row border-b dark:border-zinc-700 border-zinc-400">
	<div class="flex items-center pl-2">
		<img class="w-32 rounded-lg m-1" src={img} alt="me" />
	</div>

	<div class="flex flex-col items-center justify-center grow">
		<div class="text-lg">Denis BOURGE</div>
		<div class="mb-1">Passionate Software Engineer</div>
		<div class="text-xs text-center w-72">
			Looking for inspiring problems to solve with an open mind and a desire to never stop learning.
		</div>
	</div>

	<div
		class="flex flex-col justify-center pr-2 w-52 border-l border-l-zinc-400 dark:border-l-zinc-700"
	>
		<ResumeIconList class="justify-around">
			<ResumeIconListEntry icon="majesticons:map-marker">
				Saint-Pierre-des-Corps, France
			</ResumeIconListEntry>
			<ResumeIconListEntry icon="fe:phone">+33601249725</ResumeIconListEntry>
			<ResumeIconListEntry icon="octicon:mail-24">bourge.denis@gmail.com</ResumeIconListEntry>
		</ResumeIconList>
	</div>
</div>

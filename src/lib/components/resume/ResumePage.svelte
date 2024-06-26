<script lang="ts">
	import img from '$/data/assets/images/me.jpg';
	import ResumeContent from './ResumeContent.svelte';
	import ResumeSidebar from './ResumeSidebar.svelte';

	import FileSaver from 'file-saver';
	import * as htmlToImage from 'html-to-image';

	let container: HTMLElement;

	async function exportCv() {
		const blob = await htmlToImage.toBlob(container, {
			// A4 size at 96PP
			width: 794,
			height: 1123,
			cacheBust: true
		});
		if (blob) {
			FileSaver.saveAs(blob, 'resume.png');
		}
	}
</script>

<div class="c-page">
	<h1 class="self-start">Resume / CV</h1>

	<div class="c-container" bind:this={container}>
		<div class="c-resume">
			<div class="c-resume-header">
				<div class="flex items-center pl-2">
					<img src={img} alt="me" />
				</div>

				<div class="flex flex-col items-center justify-center grow">
					<div class="text-lg">Denis BOURGE</div>
					<div class="mb-1">Passionate Software Engineer</div>
					<div class="text-xs text-center w-72">
						Looking for inspiring problems to solve with an open mind and a desire to never stop
						learning.
					</div>
				</div>

				<div
					class="flex flex-col justify-center pr-2 w-52 border-l border-l-slate-400 dark:border-l-slate-700"
				>
					<ul class="p-0 m-0">
						<li class="c-right-li">
							<iconify-icon icon="majesticons:map-marker" noobserver
							></iconify-icon>Saint-Pierre-des-Corps, France
						</li>
						<li class="c-right-li">
							<iconify-icon icon="fe:phone" noobserver></iconify-icon>06.01.24.97.25
						</li>
						<li class="c-right-li">
							<iconify-icon icon="octicon:mail-24" noobserver></iconify-icon>bourge.denis@gmail.com
						</li>
					</ul>
				</div>
			</div>
			<div class="flex flex-row grow">
				<ResumeSidebar />
				<ResumeContent />
			</div>
		</div>
	</div>

	<div class="flex flex-col items-center justify-center">
		<button
			class="p-2 border border-slate-700 rounded-lg flex flex-row items-center justify-center gap-1"
			on:click={exportCv}
		>
			<iconify-icon icon="mdi:download"></iconify-icon>
			Download
		</button>
	</div>
</div>

<style>
	@media (min-width: 794px) {
		.c-page {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}

	.c-container {
		overflow-x: auto;
		overflow-y: hidden;
		margin-bottom: 1rem;
	}

	.c-resume {
		@apply bg-slate-100 dark:bg-slate-900 border rounded border-slate-400 dark:border-slate-700;

		display: flex;
		flex-direction: column;

		font-size: 13px;

		/* A4 at 96 PP */
		width: 794px;
		height: 1123px;
	}

	.c-resume-header {
		@apply flex flex-row border-b dark:border-slate-700 border-slate-400;

		img {
			@apply w-32 rounded-lg m-1;
		}
	}

	.c-right-li {
		@apply list-none flex flex-row items-center justify-stretch gap-1 py-1;
	}
</style>

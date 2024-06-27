<script lang="ts">
	import ResumeContent from './ResumeContent.svelte';
	import ResumeHeader from './ResumeHeader.svelte';
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

	<div class="overflow-x-auto overflow-y-hidden mb-4" bind:this={container}>
		<div
			class="c-resume bg-slate-100 dark:bg-slate-900 border rounded border-slate-400 dark:border-slate-700"
		>
			<ResumeHeader />
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
			<iconify-icon icon="mdi:download" noobserver></iconify-icon>
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

	.c-resume {
		display: flex;
		flex-direction: column;

		font-size: 13px;

		/* A4 at 96 PP */
		width: 794px;
		height: 1123px;
	}
</style>

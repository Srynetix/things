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

<div class="app-resume-page">
	<h1 class="app-page__title">Resume / CV</h1>

	<div class="app-resume-container" bind:this={container}>
		<div class="app-resume">
			<div class="app-resume__header">
				<div class="app-resume__header__left">
					<img src={img} alt="me" />
				</div>

				<div class="app-resume__header__middle">
					<div class="app-resume__header__middle__name">Denis BOURGE</div>
					<div class="app-resume__header__middle__title">Passionate Software Engineer</div>
					<div class="app-resume__header__middle__subtitle">
						Looking for inspiring problems to solve with an open mind and a desire to never stop
						learning.
					</div>
				</div>

				<div class="app-resume__header__right">
					<ul>
						<li>
							<iconify-icon icon="majesticons:map-marker" noobserver
							></iconify-icon>Saint-Pierre-des-Corps, France
						</li>
						<li><iconify-icon icon="fe:phone" noobserver></iconify-icon>06.01.24.97.25</li>
						<li>
							<iconify-icon icon="octicon:mail-24" noobserver></iconify-icon>bourge.denis@gmail.com
						</li>
					</ul>
				</div>
			</div>
			<div class="app-resume__body">
				<ResumeSidebar />
				<ResumeContent />
			</div>
		</div>
	</div>

	<div class="app-resume-page__bottom">
		<button class="app-resume-page__bottom__download-btn" on:click={exportCv}>
			<iconify-icon icon="mdi:download"></iconify-icon>
			Download
		</button>
	</div>
</div>

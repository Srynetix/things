<script lang="ts">
	import resumeData from '$/data/resume';
	import QR from '@svelte-put/qr/svg/QR.svelte';
	import thingsLogo from '$/data/assets/images/things.png';
</script>

<div class="app-resume-sidebar">
	<div class="app-resume-sidebar__section">
		<div class="app-resume-sidebar__section__title">Programming skills</div>

		<div class="app-resume-sidebar__section__details">
			<p>Languages</p>
			<ul>
				<li>{resumeData.programmingSkills.languages.join(', ')}</li>
			</ul>

			<p>Frameworks</p>
			<ul>
				<li>{resumeData.programmingSkills.frameworks.join(', ')}</li>
			</ul>

			<p>Tools</p>
			<ul>
				<li>{resumeData.programmingSkills.tools.join(', ')}</li>
			</ul>

			<p>Domains</p>
			<ul>
				<li>{resumeData.programmingSkills.domains.join(', ')}</li>
			</ul>
		</div>
	</div>

	<div class="app-resume-sidebar__section">
		<div class="app-resume-sidebar__section__title">Hobbies</div>

		<div class="app-resume-sidebar__section__details">
			<ul class="app-resume-icon-list">
				{#each resumeData.hobbies as hobby}
					<li><iconify-icon icon={hobby.icon} noobserver></iconify-icon> {hobby.text}</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="app-resume-sidebar__section">
		<div class="app-resume-sidebar__section__title">Misc.</div>

		<div class="app-resume-sidebar__section__details">
			<ul class="app-resume-icon-list">
				{#each resumeData.misc as entry}
					<li><iconify-icon icon={entry.icon} noobserver></iconify-icon> {entry.text}</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="app-resume-sidebar__qrcode">
		<QR logo={thingsLogo} width="125" shape="circle" data="https://things.denisbourge.me" />
	</div>
</div>

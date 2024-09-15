<script lang="ts">
	import resumeData from '$/data/resume';
	import QR from '@svelte-put/qr/svg/QR.svelte';
	import thingsLogo from '$/data/assets/images/things.png';
	import ResumeContentTitle from './ResumeContentTitle.svelte';
	import ResumeIconList from './ResumeIconList.svelte';
	import ResumeIconListEntry from './ResumeIconListEntry.svelte';
	import ResumeContentDetails from './ResumeContentDetails.svelte';
</script>

<div class="flex flex-col">
	<div>
		<ResumeContentTitle>Programming skills</ResumeContentTitle>
		<ResumeContentDetails>
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
		</ResumeContentDetails>
	</div>

	<div>
		<ResumeContentTitle>Hobbies</ResumeContentTitle>
		<ResumeContentDetails>
			<ResumeIconList>
				{#each resumeData.hobbies as hobby}
					<ResumeIconListEntry icon={hobby.icon}>
						{hobby.text}
					</ResumeIconListEntry>
				{/each}
			</ResumeIconList>
		</ResumeContentDetails>
	</div>

	<div>
		<ResumeContentTitle>Misc.</ResumeContentTitle>
		<ResumeContentDetails>
			<ResumeIconList>
				{#each resumeData.misc as entry}
					<ResumeIconListEntry icon={entry.icon}>
						{entry.text}
					</ResumeIconListEntry>
				{/each}
			</ResumeIconList>
		</ResumeContentDetails>
	</div>

	<div>
		<ResumeContentTitle>Social</ResumeContentTitle>
		<ResumeContentDetails>
			<ResumeIconList>
				<ResumeIconListEntry icon="octicon:mark-github-24" href="https://github.com/Srynetix">
					Srynetix
				</ResumeIconListEntry>
				<ResumeIconListEntry
					icon="mdi:linkedin"
					href="https://www.linkedin.com/in/denis-bourge-09676a110"
				>
					denis-bourge-09676a110
				</ResumeIconListEntry>
				<ResumeIconListEntry icon="mdi:web" href="https://things.denisbourge.me">
					things.denisbourge.me
				</ResumeIconListEntry>
			</ResumeIconList>
		</ResumeContentDetails>
	</div>

	<div class="flex grow flex-col items-center justify-end mb-12">
		<QR logo={thingsLogo} width="125" shape="circle" data="https://things.denisbourge.me" />
	</div>
</div>

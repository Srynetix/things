<script lang="ts">
	import resumeData from '$/data/resume';
	import QR from '@svelte-put/qr/svg/QR.svelte';
	import thingsLogo from '$/data/assets/images/things.png';
</script>

<div class="flex flex-col">
	<div>
		<div class="c-title">Programming skills</div>
		<div class="c-details">
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

	<div>
		<div class="c-title">Hobbies</div>
		<div class="c-details">
			<ul class="c-icon-list">
				{#each resumeData.hobbies as hobby}
					<li><iconify-icon icon={hobby.icon} noobserver></iconify-icon> {hobby.text}</li>
				{/each}
			</ul>
		</div>
	</div>

	<div>
		<div class="c-title">Misc.</div>
		<div class="c-details">
			<ul class="c-icon-list">
				{#each resumeData.misc as entry}
					<li><iconify-icon icon={entry.icon} noobserver></iconify-icon> {entry.text}</li>
				{/each}
			</ul>
		</div>
	</div>

	<div>
		<div class="c-title">Social</div>
		<div class="c-details">
			<ul class="c-icon-list">
				<li>
					<iconify-icon icon="octicon:mark-github-24" noobserver></iconify-icon>
					<a href="https://github.com/Srynetix" target="_blank" rel="noreferrer noopener nofollow">
						Srynetix
					</a>
				</li>
				<li>
					<iconify-icon icon="mdi:linkedin" noobserver></iconify-icon>
					<a
						href="https://www.linkedin.com/in/denis-bourge-09676a110/"
						target="_blank"
						rel="noreferrer noopener nofollow"
					>
						denis-bourge-09676a110
					</a>
				</li>
				<li>
					<iconify-icon icon="mdi:web" noobserver></iconify-icon>
					<a
						href="https://things.denisbourge.me"
						target="_blank"
						rel="noreferrer noopener nofollow"
					>
						things.denisbourge.me
					</a>
				</li>
			</ul>
		</div>
	</div>

	<div class="flex grow flex-col items-center justify-end mb-4">
		<QR logo={thingsLogo} width="125" shape="circle" data="https://things.denisbourge.me" />
	</div>
</div>

<style>
	.c-title {
		@apply dark:bg-indigo-950 bg-indigo-300 py-3;

		text-transform: uppercase;
		text-align: center;

		font-weight: bold;
	}

	.c-details {
		@apply my-2 px-2;

		text-align: left;

		> p {
			text-decoration: underline;
		}

		> ul {
			list-style-type: none;
			padding-left: 1rem;
		}
	}

	.c-icon-list {
		list-style: none;

		li {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: stretch;
			gap: 2px;
			margin: 0;

			iconify-icon {
				margin-top: 0.5rem;
			}

			a {
				color: inherit;
			}
		}
	}
</style>

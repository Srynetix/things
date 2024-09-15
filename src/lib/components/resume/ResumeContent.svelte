<script lang="ts">
	import ResumeContentTitle from './ResumeContentTitle.svelte';
	import ResumeContentDetails from './ResumeContentDetails.svelte';
</script>

<div
	class="
		flex flex-col border-solid border-l border-l-zinc-400 dark:border-l-zinc-700
	"
>
	<div>
		<ResumeContentTitle>Professional Experiences</ResumeContentTitle>
		<ResumeContentDetails>
			<p>2016, now &mdash; SharingCloud (Boulogne-Billancourt, France)</p>
			<ul>
				<li>
					2023, now &mdash; Software Architect
					<ul>
						<li>
							Creation of the last iteration of the development machine, based on Bash and
							Kubernetes.
						</li>
						<li>
							Writing of Technical Architecture Documents (TAD) and Architecture Decision Records
							(ADR) to help standardizing our development processes.
						</li>
						<li>Helping the development and infrastructure teams with engineering tasks.</li>
					</ul>
					<br />
				</li>
				<li>
					2019 - 2023 &mdash; Lead Software Engineer
					<ul>
						<li>Leading a small team of developers, in a duo with a Product Owner.</li>
						<li>
							Supervision and lead of a complex migration from Python 2 and Django 1 to Python 3 and
							Django 3 (~200 KLoC), with a CI setup.
						</li>
						<li>
							Creation of a new iteration of the development machine, based on Docker, Docker
							Compose and Ansible.
						</li>
						<li>Creation of a GitHub bot to help us with automated workflows.</li>
					</ul>
					<br />
				</li>
				<li>
					2016 - 2019 &mdash; Junior Software Engineer
					<ul>
						<li>Rewrite of a hybrid mobile app using React and Cordova.</li>
						<li>
							In charge of native mobile development and store management (Play Store, AppStore).
						</li>
						<li>
							Feature development and bug fixes in a Scrum team for the main product in Python and
							JavaScript.
						</li>
						<li>
							Creation of a development machine for SharingCloud developers, based on our official
							installer.
						</li>
					</ul>
					<br />
				</li>
			</ul>

			<p>2016 (6 months) - Orange Labs, Products and Services (Chatillon, France)</p>
			<ul>
				<li>Internship in Research & Development in the cloud computing field.</li>
				<li>Working on the horizontal architecture of the Supercloud european project.</li>
				<li>Writing Python tools and working with Infrastructure as Code.</li>
			</ul>
		</ResumeContentDetails>
	</div>

	<div>
		<ResumeContentTitle>Studies</ResumeContentTitle>
		<ResumeContentDetails>
			<ul>
				<li>
					2016 &mdash; Major of a Master in Computer Science (<i
						>Master Recherche, Informatique Nomade, Intelligence et Sécurité, spécialité Sûreté et
						Sécurité du Logiciel</i
					>) &mdash; Université d'Orléans, France
				</li>
			</ul>
		</ResumeContentDetails>
	</div>

	<div>
		<ResumeContentTitle>Personal Projects</ResumeContentTitle>
		<ResumeContentDetails>
			<ul>
				<li>GitHub Notifier: A tool to view manage your GitHub notifications, made in Svelte.</li>
				<li>A few games for the Ludum Dare game jam since 2019 (two times a year since then).</li>
				<li>...and more things on my personal site.</li>
			</ul>
		</ResumeContentDetails>
	</div>
</div>

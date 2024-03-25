<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';
	import PianoKeys from './PianoKeys.svelte';

	export const meta = {
		title: 'Experiments / PianoKeys',
		component: PianoKeys,
		tags: ['autodocs']
	} satisfies Meta<PianoKeys>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<PianoKeys {...args}></PianoKeys>
</Template>

<Story name="PianoKeys Sample" />

<Story
	name="PianoKeys 3 octaves"
	args={{
		octaves: 3
	}}
/>

<Story
	name="PianoKeys solfege"
	args={{
		solfegeNotation: true
	}}
/>

<Story
	name="PianoKeys caption"
	args={{
		caption: 'There are notes!'
	}}
/>

<Story
	name="PianoKeys active notes"
	args={{
		activeNotes: ['C4', 'D4']
	}}
/>

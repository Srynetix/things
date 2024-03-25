<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';
	import MarkdownLayout from './MarkdownLayout.svelte';

	export const meta = {
		title: 'Markdown / MarkdownLayout',
		component: MarkdownLayout,
		tags: ['autodocs']
	} satisfies Meta<MarkdownLayout>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<MarkdownLayout {...args}>
		<p>Hello</p>
		<pre>
			<code data-language="Python">
				Hello.
			</code>
		</pre>
	</MarkdownLayout>
</Template>

<Story name="MarkdownLayout sample" />

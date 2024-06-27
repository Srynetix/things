import remarkGemoji from 'remark-gemoji';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

import relativeImages from 'mdsvex-relative-images';

import { defineMDSveXConfig as defineConfig, escapeSvelte } from 'mdsvex';
import { getHighlighter } from 'shiki';
import { transformerRenderWhitespace } from '@shikijs/transformers';

const config = defineConfig({
	extensions: ['.md', '.svx'],
	highlight: {
		highlighter: async (code, lang = 'text', meta) => {
			const highlighter = await getHighlighter({
				themes: ['github-dark'],
				langs: ['javascript', 'typescript', 'yaml', 'bash']
			});
			await highlighter.loadLanguage('javascript', 'typescript', 'yaml', 'bash');
			let html = highlighter.codeToHtml(code, {
				lang,
				theme: 'github-dark',
				transformers: [
					{
						code(node) {
							node.properties['data-language'] = lang;

							let hasLineNumbers = false;
							let showSpaces = false;

							if (meta) {
								const metaSplit = meta.split(',');
								if (metaSplit.includes('showLineNumbers')) {
									hasLineNumbers = true;
								}

								if (metaSplit.includes('showSpaces')) {
									showSpaces = true;
								}
							}

							node.properties['data-line-numbers'] = hasLineNumbers.toString();
							node.properties['data-show-spaces'] = showSpaces.toString();
						}
					},
					transformerRenderWhitespace()
				]
			});
			return `{@html \`${escapeSvelte(html)}\` }`;
		}
	},
	rehypePlugins: [
		[
			rehypeExternalLinks,
			{
				rel: 'noreferrer noopener nofollow',
				target: '_blank',
				content: {
					type: 'text',
					value: '<iconify-icon icon="octicon:link-external-16" noobserver></iconify-icon>'
				}
			}
		],
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'prepend',
				content: {
					type: 'text',
					value: '<span class="app-anchor-link"></span>'
				}
			}
		]
	],
	remarkPlugins: [remarkGemoji, relativeImages]
});

export default config;

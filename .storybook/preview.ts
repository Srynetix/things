import type { Preview } from '@storybook/svelte';
import { themes } from '@storybook/theming';

import 'iconify-icon';
import '../src/lib/styles/index.css';

const preview: Preview = {
	parameters: {
		docs: {
			theme: themes.dark
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export default preview;

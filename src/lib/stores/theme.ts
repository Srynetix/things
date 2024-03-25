import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export enum Theme {
	Light = 'light',
	Dark = 'dark'
}

function _getPreferredColorScheme(): Theme {
	if (browser && window.matchMedia) {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return Theme.Dark;
		} else {
			return Theme.Light;
		}
	}

	// Well, choose Light as a default, for the moths.
	return Theme.Light;
}

function _createThemeStore() {
	const DEFAULT_THEME = _getPreferredColorScheme();
	const STORAGE_KEY = 'things-theme';
	const theme = (browser && localStorage.getItem(STORAGE_KEY)) ?? DEFAULT_THEME;
	const { subscribe, set } = writable(theme as Theme);

	return {
		subscribe,
		set: (value: Theme) => {
			browser && localStorage.setItem(STORAGE_KEY, value);
			set(value);
		},
		reset: () => {
			browser && localStorage.removeItem(STORAGE_KEY);
			set(DEFAULT_THEME);
		}
	};
}

export const theme = _createThemeStore();

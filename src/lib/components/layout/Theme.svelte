<script lang="ts">
	import { browser } from '$app/environment';
	import { Theme, theme as themeStore } from '$lib/stores/theme';

	export let theme: Theme = $themeStore;

	function updateHtmlTheme(value: Theme) {
		if (browser) {
			themeStore.set(value);

			document.documentElement.dataset.theme = value;
		}
	}

	function getIconName(value: Theme) {
		if (value == Theme.Light) {
			return 'octicon:sun-16';
		} else {
			return 'octicon:moon-16';
		}
	}

	function getIconTitle(value: Theme) {
		if (value == Theme.Dark) {
			return 'Click here to set light theme';
		} else if (value == Theme.Light) {
			return 'Click here to set dark theme';
		}
	}

	function switchNextTheme(): Theme {
		if (theme == Theme.Light) {
			return Theme.Dark;
		} else {
			return Theme.Light;
		}
	}

	$: iconName = getIconName(theme);
	$: iconTitle = getIconTitle(theme);
	$: updateHtmlTheme(theme);
</script>

<div
	class="
		flex flex-row items-center justify-center
		px-4 m-hover-filter
	"
	role="button"
	tabindex="0"
	on:keypress={() => (theme = switchNextTheme())}
	on:click={() => (theme = switchNextTheme())}
>
	<iconify-icon icon={iconName} title={iconTitle} width="2rem" observer="false"></iconify-icon>
</div>

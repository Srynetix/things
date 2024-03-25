declare module '*.md' {
	import type { ComponentType } from 'svelte';

	const data: ComponentType;
	export default data;
}

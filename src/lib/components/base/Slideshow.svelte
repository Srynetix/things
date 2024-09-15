<script lang="ts">
	import { onMount } from 'svelte';

	/** Time before next image showing. */
	export let swapTime: number = 5000;

	/** Images to show. */
	export let images: string[];

	let imageToShow: string | null = null;
	let imageSwapInterval: number | null = null;
	let currentImageIndex: number = 0;

	onMount(() => {
		if (images.length > 0) {
			const inner = () => {
				currentImageIndex = (currentImageIndex + 1) % images.length;
				imageToShow = images[currentImageIndex];
			};

			imageSwapInterval = window.setInterval(inner, swapTime);
			imageToShow = images[currentImageIndex];
		}

		return () => {
			if (imageSwapInterval != null) {
				clearInterval(imageSwapInterval);
			}
		};
	});
</script>

<div
	class={['bg-no-repeat bg-center h-full min-h-64', $$props.class].filter((c) => c).join(' ')}
	style:background-image={imageToShow ? `url(${imageToShow})` : null}
>
	<slot />
</div>

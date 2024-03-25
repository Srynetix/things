<script lang="ts">
	import { onMount } from 'svelte';
	import { NoteKey } from '$lib/domain/NoteKey';

	const TEXT_SIZE = 11;
	const TEXT_FONT = 'monospace';

	const WHITE_KEY_COLOR = 'rgb(255, 255, 255)';
	const WHITE_STROKE_COLOR = 'rgb(0, 0, 0)';
	const WHITE_KEY_WIDTH = 24;
	const WHITE_KEY_HEIGHT = 86;
	const WHITE_KEY_TEXT_SIZE = 11;
	const WHITE_KEY_NAMES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
	const WHITE_KEY_TEXT_Y = WHITE_KEY_HEIGHT - TEXT_SIZE / 2;

	const BLACK_KEY_COLOR = 'rgb(20, 20, 20)';
	const BLACK_STROKE_COLOR = 'rgb(0, 0, 0)';
	const BLACK_KEY_WIDTH = WHITE_KEY_WIDTH / 1.5;
	const BLACK_KEY_HEIGHT = WHITE_KEY_HEIGHT - WHITE_KEY_HEIGHT / 3;
	const BLACK_KEY_TEXT_SIZE = WHITE_KEY_TEXT_SIZE - 3;
	const BLACK_KEY_NAMES = ['C#', 'D#', 'F#', 'G#', 'A#'];
	const BLACK_KEY_TEXT_Y = BLACK_KEY_HEIGHT - TEXT_SIZE / 2;
	const BLACK_KEY_OFFSETS = (() => {
		const wm = WHITE_KEY_WIDTH;
		return [
			wm - BLACK_KEY_WIDTH / 1.5,
			2 * wm - BLACK_KEY_WIDTH / 2.5,
			4 * wm - BLACK_KEY_WIDTH / 1.5,
			5 * wm - BLACK_KEY_WIDTH / 2,
			6 * wm - BLACK_KEY_WIDTH / 2.5
		];
	})();
	const BLACK_KEY_TEXT_OFFSETS = (() => {
		const textWidth = 8;

		return [
			BLACK_KEY_OFFSETS[0] + textWidth,
			BLACK_KEY_OFFSETS[1] + textWidth,
			BLACK_KEY_OFFSETS[2] + textWidth,
			BLACK_KEY_OFFSETS[3] + textWidth,
			BLACK_KEY_OFFSETS[4] + textWidth
		];
	})();

	const HOVER_KEY_COLOR = 'lightblue';
	const HIGHLIGHTED_KEY_COLOR = 'teal';
	const HIGHLIGHTED_TEXT_COLOR = 'rgb(255, 255, 255)';
	const OCTAVE_WIDTH = 7 * WHITE_KEY_WIDTH;
	const KEY_PADDING = 2;

	export let minOctave: number = 4;
	export let octaves: number = 2;
	export let activeNotes: string[] = [];
	export let solfegeNotation: boolean = false;
	export let caption: string = '';

	let canvas: HTMLCanvasElement;

	function convertUsKeyToSolfege(usKey: string): string {
		const key = NoteKey.fromUsStr(usKey);
		return key.asSolfegeString();
	}

	onMount(() => {
		let requestId: number = -1;
		let mouseX: number = -1;
		let mouseY: number = -1;

		const mousemoveCallback = (ev: MouseEvent) => {
			mouseX = ev.offsetX;
			mouseY = ev.offsetY;
		};

		const mouseleaveCallback = () => {
			mouseX = mouseY = -1;
		};

		canvas.addEventListener('mousemove', mousemoveCallback);
		canvas.addEventListener('mouseleave', mouseleaveCallback);

		const render = () => {
			const width = OCTAVE_WIDTH * octaves;
			const height = WHITE_KEY_HEIGHT;
			const asSolfege = solfegeNotation ?? false;
			const active: string[] = (() => {
				const active = activeNotes || [];
				if (asSolfege) {
					return active.map((a: string) => convertUsKeyToSolfege(a));
				}
				return active;
			})();

			// Resize canvas
			canvas.width = width;
			canvas.height = height;

			const ctx = canvas.getContext('2d');
			if (!ctx) {
				console.log('Could not get canvas 2d context.');
				return;
			}

			ctx.clearRect(0, 0, width, height);
			ctx.textAlign = 'center';
			ctx.lineWidth = KEY_PADDING;

			const isMouseOverRect = (
				left: number,
				top: number,
				width: number,
				height: number
			): boolean => {
				return mouseX >= left && mouseX <= left + width && mouseY >= top && mouseY <= top + height;
			};

			const getKeyName = (usKey: string) => {
				if (asSolfege) {
					return convertUsKeyToSolfege(usKey);
				} else {
					return usKey;
				}
			};

			const drawWhiteKey = (octave: number, idx: number) => {
				ctx.font = `${WHITE_KEY_TEXT_SIZE}px ${TEXT_FONT}`;

				const noteOctave = minOctave + octave;
				const xPos = octave * OCTAVE_WIDTH + WHITE_KEY_WIDTH * idx;
				const keyName = getKeyName(WHITE_KEY_NAMES[idx] + noteOctave);
				const color = active.includes(keyName) ? HIGHLIGHTED_KEY_COLOR : WHITE_KEY_COLOR;
				const textColor = active.includes(keyName) ? HIGHLIGHTED_TEXT_COLOR : BLACK_KEY_COLOR;
				const finalColor = isMouseOverRect(xPos, 0, WHITE_KEY_WIDTH, WHITE_KEY_HEIGHT)
					? HOVER_KEY_COLOR
					: color;

				ctx.fillStyle = finalColor;
				ctx.fillRect(xPos, 0, WHITE_KEY_WIDTH, WHITE_KEY_HEIGHT);
				ctx.strokeStyle = WHITE_STROKE_COLOR;
				ctx.strokeRect(xPos, 0, WHITE_KEY_WIDTH, WHITE_KEY_HEIGHT);
				ctx.fillStyle = textColor;
				ctx.fillText(keyName, xPos + WHITE_KEY_WIDTH / 2, WHITE_KEY_TEXT_Y, WHITE_KEY_WIDTH);
			};

			const drawBlackKey = (octave: number, idx: number) => {
				ctx.font = `${BLACK_KEY_TEXT_SIZE}px ${TEXT_FONT}`;

				const octavePos = octave * OCTAVE_WIDTH;
				const xPos = octavePos + BLACK_KEY_OFFSETS[idx];
				const xPosText = octavePos + BLACK_KEY_TEXT_OFFSETS[idx];
				const noteOctave = minOctave + octave;
				const keyName = getKeyName(BLACK_KEY_NAMES[idx] + noteOctave);
				const color = active.includes(keyName) ? HIGHLIGHTED_KEY_COLOR : BLACK_KEY_COLOR;
				const textColor = WHITE_KEY_COLOR;
				const finalColor = isMouseOverRect(xPos, 0, BLACK_KEY_WIDTH, BLACK_KEY_HEIGHT)
					? HOVER_KEY_COLOR
					: color;

				ctx.fillStyle = finalColor;
				ctx.fillRect(xPos, 0, BLACK_KEY_WIDTH, BLACK_KEY_HEIGHT);
				ctx.strokeStyle = BLACK_STROKE_COLOR;
				ctx.strokeRect(xPos, 0, BLACK_KEY_WIDTH, BLACK_KEY_HEIGHT);
				ctx.fillStyle = textColor;
				ctx.fillText(keyName, xPosText, BLACK_KEY_TEXT_Y, BLACK_KEY_WIDTH);
			};

			for (let octave = 0; octave < octaves; ++octave) {
				for (let i = 0; i < 7; ++i) {
					drawWhiteKey(octave, i);
				}

				for (let i = 0; i < 5; ++i) {
					drawBlackKey(octave, i);
				}
			}

			requestId = requestAnimationFrame(render);
		};

		render();

		return () => {
			canvas.removeEventListener('mousemove', mousemoveCallback);
			canvas.removeEventListener('mouseleave', mouseleaveCallback);
			cancelAnimationFrame(requestId);
		};
	});
</script>

<div class="app-piano-keys">
	<canvas bind:this={canvas} class="app-piano-keys__canvas"></canvas>
	{#if caption}
		<div class="app-piano-keys__caption">
			{caption}
		</div>
	{/if}
</div>

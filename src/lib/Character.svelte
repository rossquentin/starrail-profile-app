<script lang="ts">
	import html2canvas from 'html2canvas';
	import CharacterPortrait from './CharacterPortrait.svelte';
	import CharacterRelics from './CharacterRelics.svelte';
	import CharacterStats from './CharacterStats.svelte';

	export let character: StarRail.Character;

	/**
	 * Downloads the contents of the download container as a png.
	 */
	function download() {
		(document.querySelector('#download-container') as HTMLDivElement).style = `
			background: linear-gradient(0deg, #182534 0%, #2f4845 100%);
			background-repeat: no-repeat;
			background-attachment: fixed;
			border-radius: 0;

		`;

		html2canvas(document.querySelector('#download-container') as HTMLDivElement, {
			useCORS: true,
			allowTaint: true,
			scale: 4,
			scrollX: 0,
			scrollY: 0,
			windowHeight: window.innerHeight,
			windowWidth: window.innerWidth
		}).then((canvas) => {
			const a = document.createElement('a');
			a.href = canvas.toDataURL('image/png');
			a.download = `${character.name}.png`;
			a.click();
			a.remove();
		});

		document.querySelector('#download-container').style =
			'theme(colors.slate.700 / 40%); border-radius: theme(borderRadius.3xl);';
	}
</script>

<div class="h-scrollable -m-2 flex max-w-[100vw] flex-col overflow-x-auto overflow-y-hidden p-2">
	<div
		id="download-container"
		class="scroll-inner flex w-fit flex-row flex-nowrap gap-6 overflow-visible rounded-3xl bg-slate-700 bg-opacity-40 p-6 shadow-[0_0_0.5rem_0_rgba(0,0,0,0.4)]"
	>
		<CharacterPortrait {character} />
		<CharacterStats {character} />
		<CharacterRelics {character} />
	</div>
	<div class="p-0">
		<button
			class="ml-6 rounded-b bg-blue-500 px-4 py-2 font-bold text-white"
			on:click={() => download()}>Download</button
		>
	</div>

	<!-- Gap for scrollbar -->
	<div class="pt-2" />
</div>

<style lang="postcss">
	@layer scrollbar {
		.h-scrollable::-webkit-scrollbar {
			width: 0.5rem;
		}
		.h-scrollable::-webkit-scrollbar {
			width: 0.5rem;
		}

		.h-scrollable::-webkit-scrollbar-track {
			background-color: none;
		}

		.h-scrollable::-webkit-scrollbar-thumb {
			background-color: theme(colors.slate.400 / 40%);
			border-radius: theme(borderRadius.3xl);
		}

		.h-scrollable::-webkit-scrollbar-thumb:hover {
			background-color: theme(colors.slate.500 / 40%);
		}
	}
</style>

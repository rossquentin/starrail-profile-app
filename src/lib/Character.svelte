<script lang="ts">
	import { page } from '$app/stores';
	import CharacterPortrait from './CharacterPortrait.svelte';
	import CharacterRelics from './CharacterRelics.svelte';
	import CharacterStats from './CharacterStats.svelte';
	import Spacer from './Spacer.svelte';

	export let selected: number;

	$: s = selected

	$: character = $page.data.response.characters[s];
</script>

<div class="flex flex-col max-w-[calc(100vw-theme(space[2]))] -m-2 p-2 h-scrollable overflow-x-auto overflow-y-hidden">
	<div
		class="flex flex-row flex-nowrap gap-6 w-fit scroll-inner rounded-3xl overflow-visible bg-slate-700 bg-opacity-40 p-6 shadow-[0_0_0.5rem_0_rgba(0,0,0,0.4)]"
	>
		<CharacterPortrait {character} />
		<CharacterStats {character} />
		<CharacterRelics {character} />
	</div>
	<div class="h-scrollable pt-2" />
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

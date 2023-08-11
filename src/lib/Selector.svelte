<script lang="ts">
	import { page } from '$app/stores';
	import LevelChip from './LevelChip.svelte';
	export let selected: number = 0;
	$: characters = $page.data.response.characters;
</script>

<div class="flex flex-row gap-4">
	{#each characters as character, index (character.id)}
		<div class="relative" on:click={() => (selected = index)} role="button">
			<img
				class="w-[75px] cursor-pointer rounded-full
            bg-sky-500 bg-opacity-25 outline outline-2 outline-sky-500
            transition-all hover:bg-cyan-300
            hover:bg-opacity-25 hover:outline-cyan-300"
				class:selected={index === selected}
				src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/{character.icon}"
				alt=""
			/>
			<div class="absolute bottom-0 right-3">
				<LevelChip level={character.level} />
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	.selected {
		outline-color: theme(colors.teal.200);
		background-color: theme(colors.teal.200 / 25%);
	}
</style>

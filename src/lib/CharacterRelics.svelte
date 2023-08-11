<script lang="ts">
	import LevelChip from './LevelChip.svelte';
	import Spacer from './Spacer.svelte';
	import { hoveredStatName } from './stores';

	export let character: StarRail.Character;

	$: relic_sets = removeDuplicates(character.relic_sets);

	/**
	 * Remove duplicate relic sets and keeps the one with the highest number of relics.
	 * @param relic_sets The relic sets to remove duplicates from.
	 * @returns The relic sets without duplicates.
	 */
	function removeDuplicates(relic_sets: StarRail.RelicSet[]): StarRail.RelicSet[] {
		const result: StarRail.RelicSet[] = [];
		for (const relic_set of relic_sets) {
			const set = result.find((e) => e.name === relic_set.name);
			if (set) {
				if (set.num < relic_set.num) {
					result[result.indexOf(set)] = relic_set;
				}
			} else {
				result.push(relic_set);
			}
		}
		return result;
	}

	function onStatHover(prop: StarRail.Property) {
		hoveredStatName.set(prop.name);
	}

	function onStatHoverEnd() {
		hoveredStatName.set('');
	}
</script>

<div class="flex w-fit flex-col gap-4">
	<!-- Relics -->
	<div class="flex flex-col gap-4">
		{#each character.relics as relic}
			<div class="flex flex-row gap-4">
				<!-- Rarity Border -->
				<div
					class="w-[2px] rounded-full"
					class:bg-orange-300={relic.rarity === 5}
					class:bg-purple-300={relic.rarity === 4}
					class:bg-sky-300={relic.rarity === 3}
					class:bg-green-300={relic.rarity === 2}
				/>
				<div
					class="-m-0.5 flex flex-row gap-2 rounded-lg p-0.5 transition-all"
					on:mouseenter={onStatHover(relic.main_affix)}
					on:mouseleave={onStatHoverEnd}
					class:bg-slate-800={$hoveredStatName === relic.main_affix.name}
				>
					<!-- Relic Icon -->
					<div class="relative">
						<img
							src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/{relic.icon}"
							class="my-auto max-h-[50px] max-w-[50px]"
							alt=""
						/>
						<div class="absolute bottom-0 right-0 -translate-x-1/2">
							<LevelChip level="+{relic.level}" />
						</div>
					</div>
					<!-- Main Stat -->
					<div class="flex w-[60px] flex-col">
						<img
							src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/{relic.main_affix
								.icon}"
							class="h-[30px] w-[30px] self-end"
							alt=""
						/>
						<span class="text-bold self-end pr-1 text-white">{relic.main_affix.display}</span>
					</div>
				</div>
				<!-- Rarity Border -->
				<div
					class="w-[1px] rounded-full opacity-50"
					class:bg-orange-300={relic.rarity === 5}
					class:bg-purple-300={relic.rarity === 4}
					class:bg-sky-300={relic.rarity === 3}
					class:bg-green-300={relic.rarity === 2}
				/>

				<!-- Relic Stats -->
				<div class="flex w-full flex-row gap-2">
					

					<!-- Sub Stats Left Side -->
					<div class="flex w-[80px] flex-col gap-[2px]">
						{#each relic.sub_affix as sub_affix, index}
							{#if index < 2}
								<div class="flex flex-row items-center gap-1 rounded-md px-2 -mx-2 transition-all"
								on:mouseenter={onStatHover(sub_affix)}
								on:mouseleave={onStatHoverEnd}
								class:bg-slate-800={$hoveredStatName === sub_affix.name}>
									<img
										src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/{sub_affix.icon}"
										class="h-250px] w-[25px]"
										alt=""
									/>
									<span class="text-sm text-white">{sub_affix.display}</span>
								</div>
							{/if}
						{/each}
					</div>

					<!-- Sub Stats Right Side -->
					<div class="flex w-[80px] flex-col gap-[2px]">
						{#each relic.sub_affix as sub_affix, index}
							{#if index >= 2}
								<div class="flex flex-row items-center gap-1 rounded-md px-2 -mx-2 transition-all"
								on:mouseenter={onStatHover(sub_affix)}
								on:mouseleave={onStatHoverEnd}
								class:bg-slate-800={$hoveredStatName === sub_affix.name}>
									<img
										src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/{sub_affix.icon}"
										class="h-[25px] w-[25px]"
										alt=""
									/>
									<span class="text-sm text-white">{sub_affix.display}</span>
								</div>
							{/if}
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Relic Sets -->
	<div class="flex flex-col gap-2">
		{#each relic_sets as set, index}
			<div class="flex flex-row gap-2">
				<span class="whitespace-nowrap text-slate-400">{set.name}</span>
				<Spacer direction="h" />
				<span class="text-sky-500">{set.num}</span>
			</div>
		{/each}
	</div>
</div>

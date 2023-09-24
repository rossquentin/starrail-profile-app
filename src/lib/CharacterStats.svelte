<script lang="ts">
	import Spacer from './Spacer.svelte';
	import { onStatHover, onStatHoverEnd, digitToRoman, promotionToMaxLevel } from '$lib/utils/utils';
	import { hoveredStatName } from './stores';
	export let character: StarRail.Character;

	$: attributes = mergeAdditionAttributes(character.additions, character.attributes);

	/**
	 * Merges the addition attributes with the base attributes.
	 * @param additions The addition attributes.
	 * @param attributes The base attributes.
	 * @returns The merged attributes.
	 */
	function mergeAdditionAttributes(
		additions: StarRail.Attribute[],
		attributes: StarRail.Attribute[]
	): StarRail.Attribute[] {
		const result: StarRail.Attribute[] = [...attributes];
		for (const addition of additions) {
			const attribute = attributes.find((e) => e.name === addition.name);
			if (attribute) {
				result[attributes.indexOf(attribute)] = {
					name: attribute.name,
					field: attribute.field,
					icon: attribute.icon,
					value: attribute.value + addition.value,
					display: (attribute.percent
						? (Math.floor((attribute.value + addition.value) * 1000) / 10).toFixed(1) + '%'
						: Math.floor(attribute.value + addition.value)
					).toString(),
					percent: attribute.percent
				};
			} else {
				result.push(addition);
			}
		}
		return result;
	}
</script>

<div class="flex min-w-[400px] max-w-[400px] flex-col gap-2">
	<!-- Light Cone -->
	<div class="mb-2 flex min-w-[75px] flex-row gap-4">
		<!-- Image and Rarity -->
		<div class="relative min-w-[75px]">
			<img
				src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/{character.light_cone
					.portrait}"
				class="w-[75px]"
				alt=""
			/>
			<img
				src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/deco/Star${character.light_cone.rarity}.png?raw=true`}
				class="absolute bottom-[1px] translate-y-1/2 drop-shadow-[0px_-1.5px_1px_black]"
				style={`left: calc(50% - ${character.light_cone.rarity}*10%)`}
				alt=""
			/>
		</div>

		<!-- Name, Level, and Superimposition -->
		<div class="flex flex-col">
			<span class="text-lg font-bold text-white">{character.light_cone.name}</span>
			<div>
				<span class="text-slate-400"
					>Level {character.light_cone.level}/{promotionToMaxLevel(
						character.light_cone.promotion
					)}</span
				>
				<span class="ml-2 font-bold text-orange-300">{digitToRoman(character.light_cone.rank)}</span
				>
			</div>
		</div>

		<!-- Attributes -->
		<div class="ml-auto flex flex-col justify-between">
			{#each character.light_cone.attributes as attribute}
				<div
					class="-mx-2 flex w-[130px] max-w-[130px] flex-row gap-1 rounded-md p-1 px-2 transition-all"
					on:mouseenter={onStatHover(attribute)}
					on:mouseleave={onStatHoverEnd}
					class:bg-slate-800={$hoveredStatName === attribute.name}
				>
					<img
						src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/{attribute.icon}"
						class="h-[20px] w-[20px]"
						alt=""
					/>
					<span class="text-sm text-white">{attribute.name}</span>
					<Spacer direction="h" />
					<span class="text-sm font-bold text-white">{attribute.display}</span>
				</div>
			{/each}
		</div>
	</div>

	<!-- Character Attributes -->
	<div class="flex h-full flex-col justify-between">
		{#each attributes as attribute}
			<div
				class="-mx-2 flex flex-row items-center gap-1 whitespace-nowrap rounded-md p-1 px-2 transition-all"
				on:mouseenter={onStatHover(attribute)}
				on:mouseleave={onStatHoverEnd}
				class:bg-slate-800={$hoveredStatName === attribute.name}
			>
				<img
					src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/{attribute.icon}"
					class="h-[20px] w-[20px]"
					alt=""
				/>
				<span class="text-white"> {attribute.name} </span>
				<Spacer direction="h" />
				<div class="flex flex-col">
					<span class="text-right text-base font-semibold text-white"> {attribute.display} </span>
					<div class="-my-1 flex flex-row justify-end gap-[1px]">
						<span class="text-right text-[0.5rem] font-light text-white">
							{character.attributes.find((e) => e.field === attribute.field)
								? character.attributes.find((e) => e.field === attribute.field)?.display
								: ''}</span
						>

						<span class=" text-right text-[0.5rem] font-light text-amber-300">
							{character.additions.find((e) => e.field === attribute.field)
								? '+' + character.additions.find((e) => e.field === attribute.field)?.display
								: ''}</span
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

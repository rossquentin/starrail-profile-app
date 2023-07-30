<script lang="ts">
	import Spacer from './Spacer.svelte';
	export let character: StarRail.Character;

	$: attributes = mergeAdditionAttributes(character.additions, character.attributes);

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
						? (Math.floor((attribute.value + addition.value) * 1000) / 10).toString() + '%'
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

	function digitToRoman(digit: number) {
		switch (digit) {
			case 1:
				return 'I';
			case 2:
				return 'II';
			case 3:
				return 'III';
			case 4:
				return 'IV';
			case 5:
				return 'V';
			default:
				return '';
		}
	}

	function promotionToMaxLevel(promotion: number) {
		return 20 + promotion * 10;
	}
</script>

<div class="flex min-w-[400px] max-w-[400px] flex-col gap-2">
	<div class="mb-2 flex  min-w-[75px] flex-row gap-4">
		<div class="relative min-w-[75px]">
			<img
				src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/{character.light_cone
					.portrait}"
				class="w-[75px] "
				alt=""
			/>
			<img
				src={`https://github.com/Mar-7th/StarRailRes/blob/master/icon/deco/Star${character.light_cone.rarity}.png?raw=true`}
				class="absolute -translate-y-1/2 drop-shadow-[0px_-1px_2px_black] "
				style={`left: calc(50% - ${character.light_cone.rarity}*10%)`}
				alt=""
			/>
		</div>
		<div class="flex flex-col">
			<span class="text-lg font-bold text-white">{character.light_cone.name}</span>
			<div>
				<span class="text-slate-400"
					>Level {character.light_cone.level}/{promotionToMaxLevel(
						character.light_cone.promotion
					)}</span
				>
				<span class="font-bold text-orange-300 ml-2">{digitToRoman(character.light_cone.rank)}</span>
			</div>
		</div>
		<div class="ml-auto flex flex-col justify-between">
			{#each character.light_cone.attributes as attribute}
				<div class="flex w-[120px] max-w-[120px] flex-row gap-1">
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

	<div class="flex flex-col justify-between h-full">
		{#each attributes as attribute}
			<div class="flex flex-row items-center gap-1 whitespace-nowrap">
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
						
						<span class=" text-right text-[0.5rem] font-light text-sky-500">
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

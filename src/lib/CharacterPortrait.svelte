<script lang="ts">
	import LevelChip from './LevelChip.svelte';
	export let character: StarRail.Character;

	function promotionToMaxLevel(promotion: number) {
		return 20 + promotion * 10;
	}
</script>

<div class="flex flex-col">
	<div class="flex max-h-[450px] max-w-[450px] flex-row">
		<div class="flex flex-col">
			<span class="text-lg font-bold text-white">{character.name}</span>
			<span class="flex-nowrap text-slate-400"
				>Level {character.level}/{promotionToMaxLevel(character.promotion)}</span
			>
		</div>
		<div class="ml-auto flex flex-row gap-6">
			{#each character.skills as skill, index (skill.id)}
				{#if index < 4}
					<div class="flex w-[40px] flex-col items-center gap-2">
						<div class="relative">
							<img
								class="w-[40px] rounded-full border-2 border-slate-400 bg-slate-800"
								src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/{skill.icon}"
								alt=""
							/>
							<div class="absolute -bottom-[8px] right-1/2">
								<LevelChip level={skill.level} />
							</div>
						</div>
						<span class="text-sm text-white">{skill.type_text.split(' ')[0]}</span>
					</div>
				{/if}
			{/each}
		</div>
	</div>
	<div class="relative">
		<img
			class="max-h-[450px] max-w-[450px]"
			src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/{character.portrait}"
			alt=""
		/>
		<div class="absolute bottom-1/2 translate-y-1/2">
			{#each character.rank_icons as eidelon, index (index)}
				{#if index < character.rank}
					<div
						class="relative my-4 rounded-full border-2 border-slate-400 bg-slate-800"
						style={`left:  max(calc(10*${index + 1}px - 35px), -1*calc(10*${index + 1}px - 35px))`}
					>
						<img
							class="h-[40px] w-[40px]"
							class:locked={character.rank <= index}
							src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/{eidelon}"
							alt=""
						/>
					</div>
				{:else}
					<div
						class="relative my-4 rounded-full border-2 border-slate-600 border-opacity-100 bg-slate-800"
						style={`left:  max(calc(10*${index + 1}px - 35px), -1*calc(10*${index + 1}px - 35px))`}
					>
						<img
							class="h-[40px] w-[40px] opacity-40"
							class:locked={character.rank <= index}
							src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/{eidelon}"
							alt=""
						/>
						<div class="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
						<svg
							class=""
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							stroke-width="2"
							fill="none"
						>
							<path
								xmlns="http://www.w3.org/2000/svg"
								d="M16 12H17.4C17.7314 12 18 12.2686 18 12.6V19.4C18 19.7314 17.7314 20 17.4 20H6.6C6.26863 20 6 19.7314 6 19.4V12.6C6 12.2686 6.26863 12 6.6 12H8M16 12V8C16 6.66667 15.2 4 12 4C8.8 4 8 6.66667 8 8V12M16 12H8"
								stroke="white"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>

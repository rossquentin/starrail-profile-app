<script lang="ts">
	import ProfileChip from './ProfileChip.svelte';

	export let player: StarRail.Player;
</script>

<!-- Small screens or larger -->
<div
	class="hidden flex-row gap-4 rounded-3xl bg-slate-700 bg-opacity-40 p-6 shadow-[0_0_0.5rem_0_rgba(0,0,0,0.4)] sm:flex"
>
	<!-- Profile Picture -->
	<div class="relative h-auto w-[75px]">
		<img
			class="absolute bottom-1/2 translate-y-1/2 rounded-full bg-slate-800 outline outline-4 outline-slate-500"
			src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/{player.avatar.icon}"
			alt=""
		/>
	</div>

	<!-- Profile Info -->
	<div class="flex flex-col p-0">
		<div class="flex flex-row">
			<span class="text-xl font-semibold text-white">{player.nickname}</span>

			<span class="ml-auto text-slate-400">{player.uid}</span>
		</div>
		<div class="grid grid-cols-3 gap-4">
			<ProfileChip label={'Trailblaze Level'} value={player.level} />
			<ProfileChip label={'Characters'} value={player.space_info.avatar_count} />
			<ProfileChip label={'Achievements'} value={player.space_info.achievement_count} />
		</div>
		<div class="grid grid-cols-3 gap-4">
			<ProfileChip label={'Equilibrium Level'} value={player.world_level} />
			<ProfileChip label={'Light Cones'} value={player.space_info.light_cone_count} />
			<ProfileChip
				label={'Memory of Chaos'}
				value={player.space_info.memory_data.chaos_level}
			/>
		</div>
	</div>
</div>

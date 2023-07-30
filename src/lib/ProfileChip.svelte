<script lang="ts">
	import Spacer from "./Spacer.svelte";
	export let label = 'UNDEFINED LABEL';
	export let value = 'UNKNOWN VALUE';
</script>

<div class="items-bottom flex w-[160px] flex-row">
	<span class="my-auto whitespace-nowrap text-sm text-slate-400">
		{label}
	</span>
	<Spacer direction={"h"} />
	<span class=" my-autofont-bold text-white">
		{value}
	</span>
</div>

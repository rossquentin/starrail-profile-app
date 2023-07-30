<script lang="ts">
	export let direction: 'h' | 'v';
</script>

{#if direction === 'h'}
	<div class="mx-2 my-auto h-[2px] w-full rounded-full bg-slate-600" />
{:else if direction === 'v'}
	<div class="mx-auto my-2 h-full w-[2px] rounded-full bg-slate-600" />
{/if}

<script>
	import '../app.css';
	import Search from '$lib/Search.svelte';
	import { navigating } from '$app/stores';
</script>

<div class="mt-4 flex flex-col items-center">
	<Search />
	{#if $navigating}
		<div
			class="absolute top-[30vh] inline-block h-16 w-16 animate-spin rounded-full
			border-4 border-current border-x-transparent border-t-transparent text-white"
		>
			<span class="sr-only">Loading...</span>
		</div>
	{/if}
</div>
<slot />

<style lang="postcss">
	:global(body) {
		background: linear-gradient(0deg, #182534 0%, #2f4845 100%);
		background-repeat: no-repeat;
		background-attachment: fixed;
	}
	:global(*) {
		font-family: 'Inter', sans-serif;
		font-weight: 500;

		/* Disable user-select and drag */
		-webkit-user-select: none; /* Safari */
 		-ms-user-select: none; /* IE 10 and IE 11 */
 		user-select: none; /* Standard syntax */
		-webkit-user-drag: none;
	}
	:global(*::before, *::after) {
		box-sizing: border-box;
	}
</style>

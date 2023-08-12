<script lang="ts">
	import { reveal, setDefaultOptions } from 'svelte-reveal';
	import Profile from '$lib/Profile.svelte';
	import Selector from '$lib/Selector.svelte';
	import Character from '$lib/Character.svelte';
	import type { PageData } from './$types';
	import { navigating } from '$app/stores';

	export let data: PageData;

	setDefaultOptions({
		transition: 'fade',
		duration: 1000,
		delay: 0,
		easing: 'easeOutCubic',
		threshold: 0.2
	});

	function isValidUser(user: StarRail.User | StarRail.Error): user is StarRail.User {
		return (user as StarRail.User).player !== undefined;
	} 
</script>

<slot />

<div class="flex flex-col items-center overflow-hidden gap-6 py-6">
	{#if !$navigating}
		{#if !isValidUser(data.response)}
			<div class="text-white">{data.response.detail}</div>
		{:else}
			<div class="" use:reveal>
				<Profile />
			</div>
			<div use:reveal>
				<Selector />
			</div>
			<div use:reveal>
				<Character />
			</div>
		{/if}
	{/if}
</div>
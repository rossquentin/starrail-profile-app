<script lang="ts">
	import { page } from '$app/stores';
	import { selected } from '$lib/stores';
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

	$: promise = fetchUser($page.params.id);

	const fetchUser = async (uid: string) => {
		return (await fetch('/api/user/' + uid).then((res) => res.json())) as
			| StarRail.User
			| StarRail.Error;
	};
</script>

<slot />

<div class="flex flex-col items-center gap-6 overflow-hidden py-6">
	{#await promise}
		<div
			class="absolute top-[30vh] inline-block h-16 w-16 animate-spin rounded-full
			border-4 border-current border-x-transparent border-t-transparent text-white"
		>
			<span class="sr-only">Loading...</span>
		</div>
	{:then response}
		{#if !isValidUser(response)}
			<div class="text-white">{response.detail}</div>
		{:else}
			<div use:reveal>
				<Profile player={response.player} />
			</div>
			<div use:reveal>
				<Selector characters={response.characters} />
			</div>
			<div use:reveal>
				<Character character={response.characters[$selected]} />
			</div>
		{/if}
	{/await}
</div>

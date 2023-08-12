<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	
	let search: string = $page.url.pathname.slice(1);

	/**
	 * Searches for a UID and navigates to the page.
	 * @param search The UID to search for.
	*/
	function searchUID(search: string) {
		if (isNaN(Number(search)) || Number(search) < 100000000 || Number(search) > 999999999) {
			alert('UID must be a 9-digit number.');
			return;
		}
		goto(`/${search}`);
	}
</script>

<form on:submit|preventDefault={searchUID(search)} class="relative text-slate-600">
	<input
		type="numeric"
		inputmode="numeric"
		maxlength="9"
		placeholder="Enter UID..."
		bind:value={search}
		class="text-medium h-10 w-48 rounded-full bg-slate-200 p-5  focus:outline-none"
		autofocus={true}
	/>
	<button type="submit" class="absolute right-0 top-0 mr-4 mt-3">
		<svg
			class="h-4 w-4 fill-current hover:fill-slate-400 transition-all"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
			id="Capa_1"
			x="0px"
			y="0px"
			viewBox="0 0 451.846 451.847"
			style="enable-background:new 0 0 451.846 451.847;"
			xml:space="preserve"
			width="512px"
			height="512px"
		>
			<path
				d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744   L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284   c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
			/>
		</svg>
	</button>
</form>

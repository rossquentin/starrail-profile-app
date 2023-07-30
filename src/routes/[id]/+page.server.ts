import type { PageServerLoad } from './$types';


export const load: PageServerLoad = (async ({ params }) => {
	let response: StarRail.User | StarRail.Error = await fetch(`https://api.mihomo.me/sr_info_parsed/${params.id}?lang=en`).then(
		(res) => res.json()
	);
	return {
		response: response
	};
});

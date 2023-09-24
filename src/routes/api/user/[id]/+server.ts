export async function GET({ params, fetch }) {
	let data = await fetch(`https://api.mihomo.me/sr_info_parsed/${params.id}?lang=en`).then((res) =>
		res.json()
	);

	return new Response(JSON.stringify(data), {
		headers: {
			'content-type': 'application/json'
		}
	});
}

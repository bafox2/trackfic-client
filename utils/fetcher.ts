export default async function fetcher<T>(
	url: string,
	headers = {},
	credentials: boolean
): Promise<T | null> {
	try {
		const data = await fetch(url, {
			method: "GET",
			headers,
			credentials: credentials ? "include" : "omit",
		});
		return data.json();
	} catch (error) {
		return null;
	}
}

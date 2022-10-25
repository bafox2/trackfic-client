export default async function fetcher<T>(
	url: string,
	headers = {}
): Promise<T | null> {
	try {
		const data = await fetch(url, {
			method: "GET",
			headers,
			credentials: "include",
		});
		return data.json();
	} catch (error) {
		return null;
	}
}

export default async function fetcher<T>(url: string): Promise<any> {
	try {
		const data = await fetch(url, {
			method: "GET",
		});

		return data.json();
	} catch (error) {
		console.log(error, "error in fetcher");
		return null;
	}
}

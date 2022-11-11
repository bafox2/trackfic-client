export default async function fetcher<T>(
	url: string,
	credentials: boolean
): Promise<any> {
	try {
		const data = await fetch(
			url,
			{
				method: "GET",
				credentials: "include",
			}
			//include credentials based on the parameter passed
		);

		console.log(data, "data in fetcher");

		return data.json();
	} catch (error) {
		console.log(error, "error in fetcher");
		return null;
	}
}

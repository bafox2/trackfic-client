export default async function fetcher<T>(url: string): Promise<any> {
	const data = await fetch(url, {
		method: "GET",
		credentials: "include",
	});

	if (!data.ok) {
		const error = new Error();
		error.message = await data.json();
		error.cause = data.status;
		throw error;
	}

	return data.json();
}

// try {
// 	const data = await fetch(url, {
// 		method: "GET",
// 		credentials: "include",
// 	});

// 	return data.json();
// } catch (error: any) {
// 	console.log(error, "error in fetcher");
// 	return error.json();
// }

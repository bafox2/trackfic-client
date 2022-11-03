import { useState, useRef, useMemo } from "react";
import { Autocomplete, Loader, AutocompleteItem } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import { Controller, useForm } from "react-hook-form";

export function MapInput(props: any) {
	//query has windowcleartimeout and timeoutrefcurrent for some reason ?
	//show a loading spinner when component is loading or debounced
	//fetcher can't have credentials

	interface Idata {
		type: string;
		query: string[];
		features: any[];
		attribution: string;
	}
	const { handleSubmit, control } = useForm();
	const [value, setValue] = useState("");
	const debouncedValue = useDebouncedValue(value, 1000);
	const { data, error } = useSWR<Idata | null>(
		debouncedValue
			? `https://api.mapbox.com/geocoding/v5/mapbox.places/${debouncedValue}.json?country=us&limit=3&proximity=ip&types=place%2Cpostcode%2Caddress&language=en&autocomplete=true&worldview=us&access_token=${process.env.NEXT_PUBLIC_MAPAPI_KEY}&autocomplete=true`
			: null,
		fetcher
	);

	const items = useMemo(() => {
		if (!data) return [];
		return data.features.map((place) => place.place_name);
	}, [data]);
	console.log(items);

	console.log(debouncedValue);
	return (
		<Controller
			control={control}
			name="location"
			render={({ field: { value } }) => (
				<Autocomplete
					label="Search for a location"
					placeholder="Enter a location"
					name={props.name}
					value={value}
					onChange={setValue}
					data={items}
					error={error}
				/>
			)}
		/>
	);
}

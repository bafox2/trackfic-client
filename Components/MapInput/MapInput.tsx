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

	return (
		<Controller
			control={props.control}
			name={props.name}
			render={({ field: { onChange, value } }) => (
				<Autocomplete
					label={props.label}
					placeholder={props.placeholder}
					value={value}
					onChange={(value: string) => {
						setValue(value);
						onChange(value);
					}}
					data={items}
					error={error}
				/>
			)}
		/>
	);
}

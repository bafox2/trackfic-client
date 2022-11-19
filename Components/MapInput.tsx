import { useState, useRef, useMemo } from 'react';
import { Autocomplete, Loader, AutocompleteItem } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import useSWR from 'swr';
import fetcher from '../utils/mapFetch';
import { Controller, useForm } from 'react-hook-form';
import {
	IconDots,
	IconCurrentLocation,
	IconCheck,
	TablerIcon,
	IconZoomQuestion,
} from '@tabler/icons';

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
	const [value, setValue] = useState('');
	const [selected, setSelected] = useState(false);
	const debouncedValue = useDebouncedValue(value, 500);
	const { data, error, isValidating } = useSWR<Idata | null>(
		debouncedValue
			? `https://api.mapbox.com/geocoding/v5/mapbox.places/${debouncedValue[0]}.json?country=us&limit=3&proximity=ip&types=place%2Cpostcode%2Caddress&language=en&autocomplete=true&worldview=us&access_token=${process.env.NEXT_PUBLIC_MAPAPI_KEY}&autocomplete=true`
			: null,
		fetcher
	);

	const items = useMemo(() => {
		if (!data) return [];
		return data.features.map((place) => {
			// place.place_name ? place.place_name : place.text;
			if (place.place_name_en) {
				return place.place_name_en;
			}
			if (place.place_name) {
				return place.place_name;
			}
		});
	}, [data]);

	// if (value !== debouncedValue[0]) {
	// 	setIcon(<IconDots />);
	// }

	return (
		<Controller
			control={props.control}
			name={props.name}
			render={({ field: { onChange, value } }) => (
				<Autocomplete
					rightSection={
						value == '' ? (
							<IconCurrentLocation /> //thing is blank iconcurrent
						) : value !== debouncedValue[0] ? (
							<IconDots /> //the thing is loading icondots
						) : selected == true ? (
							<IconCheck /> //the thing is selected
						) : value !== '' && debouncedValue[0] == value ? (
							<IconZoomQuestion /> //thing has no data
						) : isValidating ? (
							<IconDots /> //maybe an isvalidating state?
						) : (
							<IconDots /> //else
						)
					}
					nothingFound={
						value !== '' && debouncedValue[0] == value ? 'No results found' : ''
					}
					label={props.label}
					placeholder={props.placeholder}
					value={value}
					onItemSubmit={(selected) => {
						setSelected(true);
					}}
					onChange={(value: string) => {
						setValue(value);
						onChange(value);
					}}
					defaultValue={props.defaultValue ? props.defaultValue : ''}
					data={items}
					error={error}
					sx={{
						width: '50%',
						'@media (max-width: 768px)': {
							width: '100%',
						},
					}}
				/>
			)}
		/>
	);
}

import { Title } from '@mantine/core';
import AccordionController from '../Components/AccordionController';

export default function ExamplePage() {
	const apiData = [
		{
			__v: 0,
			_id: '636531404d208c495b0539f9',
			createdAt: '2022-11-04T15:35:28.087Z',
			description: 'My daily commute to work',
			destination: 'University Dr. Manassas, Virginia',
			origin: '6400 Hoadly Road Dumphries, Virginia',
			schedule: '5 6 * * 1-5',
			title: 'Commute to work',
			tripNodes: [
				{
					__v: 0,
					_id: '636531404d208c495b053a0b',
					createdAt: '2022-11-04T15:35:28.415Z',
					durationGeneral: 1576,
					durationNow: 1578,
					timeRequested: '2021-10-10T06:00:00.000Z',
					trip: '636531404d208c495b053a09',
					updatedAt: '2022-11-04T15:35:28.415Z',
				},
				{
					__v: 0,
					_id: '636531404d208c495b053a0d',
					createdAt: '2022-11-04T15:35:28.429Z',
					durationGeneral: 1576,
					durationNow: 1699,
					timeRequested: '2021-10-10T06:00:00.000Z',
					trip: '636531404d208c495b053a09',
					updatedAt: '2022-11-04T15:35:28.429Z',
				},
				{
					__v: 0,
					_id: '636531404d208c495b053a0b',
					createdAt: '2022-11-04T15:35:28.415Z',
					durationGeneral: 1576,
					durationNow: 1580,
					timeRequested: '2021-10-10T06:00:00.000Z',
					trip: '636531404d208c495b053a09',
					updatedAt: '2022-11-04T15:35:28.415Z',
				},
				{
					__v: 0,
					_id: '636531404d208c495b053a0d',
					createdAt: '2022-11-04T15:35:28.429Z',
					durationGeneral: 1576,
					durationNow: 1754,
					timeRequested: '2021-10-10T06:00:00.000Z',
					trip: '636531404d208c495b053a09',
					updatedAt: '2022-11-04T15:35:28.429Z',
				},
			],
			updatedAt: '2022-11-04T15:35:28.087Z',
			user: '6365313f4d208c495b0539eb',
		},
		{
			__v: 0,
			_id: '636531404d208c495b053a09',
			createdAt: '2022-11-04T15:35:28.401Z',
			description: 'Going to in-laws house',
			destination: 'Great Oak Dr. Manassas, VA',
			origin: '1744 Seagull Ct. Reston, VA',
			schedule: '* * * * *',
			title: 'Visit Family',
			tripNodes: [
				{
					__v: 0,
					_id: '636531404d208c495b053a0b',
					createdAt: '2022-11-04T23:00:28.415Z',
					durationGeneral: 1076,
					durationNow: 1200,
					timeRequested: '2021-10-10T00:00:00.000Z',
					trip: '636531404d208c495b053a09',
					updatedAt: '2022-11-04T23:35:28.415Z',
				},
				{
					__v: 0,
					_id: '636531404d208c495b053a0d',
					createdAt: '2022-11-04T23:00:28.429Z',
					durationGeneral: 1076,
					durationNow: 1289,
					timeRequested: '2021-10-10T00:00:00.000Z',
					trip: '636531404d208c495b053a09',
					updatedAt: '2022-11-04T15:35:28.429Z',
				},
			],
			updatedAt: '2022-11-04T15:35:28.401Z',
			user: '6365313f4d208c495b0539eb',
		},
	];

	const dataAccordion = apiData.map((trip) => (
		<AccordionController key={trip._id} data={trip} />
	));
	return (
		<>
			<Title order={2}>A couple of trips</Title>
			{dataAccordion}
			<br />
			<Title order={3}>Go make an account to track a trip!</Title>
		</>
	);
}

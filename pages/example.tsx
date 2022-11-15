import AccordionController from "../Components/AccordionController";
import { Title } from "@mantine/core";
const apiData = [
	{
		__v: 0,
		_id: "6365313f4d208c495b0539f0",
		createdAt: "2022-11-04T15:35:27.916Z",
		description: "My daily commute to work",
		destination: "Hidden Spring Dr. Manassas, VA",
		origin: "6400 hoadly road, Virginia",
		schedule: "* * * * *",
		title: "Commute to work",
		tripNodes: [],
		updatedAt: "2022-11-04T15:35:27.916Z",
		user: "6365313f4d208c495b0539eb",
	},
	{
		__v: 0,
		_id: "636531404d208c495b0539f7",
		createdAt: "2022-11-04T15:35:28.072Z",
		description: "My daily commute to work",
		destination: "Hidden Spring Dr. Manassas, VA",
		origin: "6400 hoadly road, Virginia",
		schedule: "* * * * *",
		title: "Commute to work",
		tripNodes: [],
		updatedAt: "2022-11-04T15:35:28.072Z",
		user: "6365313f4d208c495b0539eb",
	},
	{
		__v: 0,
		_id: "636531404d208c495b0539f9",
		createdAt: "2022-11-04T15:35:28.087Z",
		description: "My daily commute to work",
		destination: "Hidden Spring Dr. Manassas, VA",
		origin: "6400 hoadly road, Virginia",
		schedule: "* * * * *",
		title: "Commute to work",
		tripNodes: [
			{
				__v: 0,
				_id: "636531404d208c495b053a0b",
				createdAt: "2022-11-04T15:35:28.415Z",
				durationGeneral: 1256,
				durationNow: 1754,
				timeRequested: "2021-10-10T00:00:00.000Z",
				trip: "636531404d208c495b053a09",
				updatedAt: "2022-11-04T15:35:28.415Z",
			},
			{
				__v: 0,
				_id: "636531404d208c495b053a0d",
				createdAt: "2022-11-04T15:35:28.429Z",
				durationGeneral: 1256,
				durationNow: 1754,
				timeRequested: "2021-10-10T00:00:00.000Z",
				trip: "636531404d208c495b053a09",
				updatedAt: "2022-11-04T15:35:28.429Z",
			},
			{
				__v: 0,
				_id: "636531404d208c495b053a0b",
				createdAt: "2022-11-04T15:35:28.415Z",
				durationGeneral: 1256,
				durationNow: 1754,
				timeRequested: "2021-10-10T00:00:00.000Z",
				trip: "636531404d208c495b053a09",
				updatedAt: "2022-11-04T15:35:28.415Z",
			},
			{
				__v: 0,
				_id: "636531404d208c495b053a0d",
				createdAt: "2022-11-04T15:35:28.429Z",
				durationGeneral: 1256,
				durationNow: 1754,
				timeRequested: "2021-10-10T00:00:00.000Z",
				trip: "636531404d208c495b053a09",
				updatedAt: "2022-11-04T15:35:28.429Z",
			},
		],
		updatedAt: "2022-11-04T15:35:28.087Z",
		user: "6365313f4d208c495b0539eb",
	},
	{
		__v: 0,
		_id: "636531404d208c495b053a01",
		createdAt: "2022-11-04T15:35:28.240Z",
		description: "My daily commute to work",
		destination: "Hidden Spring Dr. Manassas, VA",
		origin: "6400 hoadly road, Virginia",
		schedule: "* * * * *",
		title: "Commute to work",
		tripNodes: [],
		updatedAt: "2022-11-04T15:35:28.240Z",
		user: "6365313f4d208c495b0539eb",
	},
	{
		__v: 0,
		_id: "636531404d208c495b053a09",
		createdAt: "2022-11-04T15:35:28.401Z",
		description: "My daily commute to work",
		destination: "Hidden Spring Dr. Manassas, VA",
		origin: "6400 hoadly road, Virginia",
		schedule: "* * * * *",
		title: "Commute to work",
		tripNodes: [
			{
				__v: 0,
				_id: "636531404d208c495b053a0b",
				createdAt: "2022-11-04T15:35:28.415Z",
				durationGeneral: 1256,
				durationNow: 1754,
				timeRequested: "2021-10-10T00:00:00.000Z",
				trip: "636531404d208c495b053a09",
				updatedAt: "2022-11-04T15:35:28.415Z",
			},
			{
				__v: 0,
				_id: "636531404d208c495b053a0d",
				createdAt: "2022-11-04T15:35:28.429Z",
				durationGeneral: 1256,
				durationNow: 1754,
				timeRequested: "2021-10-10T00:00:00.000Z",
				trip: "636531404d208c495b053a09",
				updatedAt: "2022-11-04T15:35:28.429Z",
			},
		],
		updatedAt: "2022-11-04T15:35:28.401Z",
		user: "6365313f4d208c495b0539eb",
	},
];

const dataAccordion = apiData.map((trip) => {
	return <AccordionController key={trip._id} data={trip} />;
});

export default function ExamplePage() {
	return (
		<>
			<Title order={2}>A couple of trips</Title>

			{dataAccordion}
			<br />
			<Title order={3}>Go make an account to track a trip!</Title>
		</>
	);
}

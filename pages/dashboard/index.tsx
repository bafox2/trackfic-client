import AccordionController from "../../Components/AccordionController/AccordionController";
import AccordionTable from "../../Components/AccordionTable/AccordionTable";
import AccordionHeader from "../../Components/AccordionHeader/AccordionHeader";

function Dashboard() {
	const staticDataNodes = [
		{
			_id: "5f9f1b9b9b9b9b9b9b9b9b9b",
			user: "50341373e894ad16347efe01",
			trip: "5151333e894ad16347efe01",
			date: "2021-08-01T00:00:00.000Z",
			durationGeneral: 1289,
			durationNow: 1357,
			createdAt: "2021-08-01T00:00:00.000Z",
			updatedAt: "2021-08-01T00:00:00.000Z",
		},
		{
			_id: "5f9f1b9b9b9b9b9b9b9b9b9b",
			user: "50341373e894ad16347efe01",
			trip: "5151333e894ad16347efe01",
			date: "2021-08-01T00:00:00.000Z",
			durationGeneral: 1289,
			durationNow: 1357,
			createdAt: "2021-08-01T00:00:00.000Z",
			updatedAt: "2021-08-01T00:00:00.000Z",
		},
		{
			_id: "5f9f1b9b9b9b9b9b9b9b9b9b",
			user: "50341373e894ad16347efe01",
			trip: "5151333e894ad16347efe01",
			date: "2021-08-01T00:00:00.000Z",
			durationGeneral: 1289,
			durationNow: 1357,
			createdAt: "2021-08-01T00:00:00.000Z",
			updatedAt: "2021-08-01T00:00:00.000Z",
		},
	];

	const staticDataHeader = {
		user: "50341373e894ad16347efe01",
		title: "Trip to Berlin",
		description: "This is a trip to Berlin",
		schedule: "2021-08-01T00:00:00.000Z",
		origin: "Berlin",
		destination: "Munich",
		createdAt: "2021-08-01T00:00:00.000Z",
		updatedAt: "2021-08-01T00:00:00.000Z",
	};

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
	return (
		<>
			<div>the accordion that puts them together</div>
			<AccordionController data={apiData} />
			<br />
			<div>the desc, origin, destination</div>
			<AccordionHeader data={staticDataHeader} />
			<br />
			<div>the data nodes</div>
			<AccordionTable data={staticDataNodes} />
		</>
	);
}

export default Dashboard;

const s = [
	{
		resource: "/home/ben/Projects/trackfic-client/pages/dashboard/index.tsx",
		owner: "typescript",
		code: "2322",
		severity: 8,
		message:
			"Type '{ data: { __v: number; _id: string; createdAt: string; description: string; destination: string; origin: string; schedule: string; title: string; tripNodes: { __v: number; _id: string; createdAt: string; ... 4 more ...; updatedAt: string; }[]; updatedAt: string; user: string; }[]; }' is not assignable to type 'IntrinsicAttributes & AccordionControllerProps'.\n  Property 'data' does not exist on type 'IntrinsicAttributes & AccordionControllerProps'.",
		source: "ts",
		startLineNumber: 182,
		startColumn: 25,
		endLineNumber: 182,
		endColumn: 29,
	},
];

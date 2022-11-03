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

	return (
		<>
			<div>the accordion that puts them together</div>
			<AccordionController />
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

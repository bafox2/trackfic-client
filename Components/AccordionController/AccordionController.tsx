import {
	Accordion,
	ActionIcon,
	AccordionControlProps,
	Box,
} from "@mantine/core";
import { IconPlayerPause, IconEdit, IconTrashX } from "@tabler/icons";
import AccordionHeader from "../AccordionHeader/AccordionHeader";
import AccordionTable from "../AccordionTable/AccordionTable";

//will expect data to be passed as props
//data will be an aray of objects from the mongoDB find query of user's _id

interface AccordionControllerProps {
	data: {
		__v: number;
		_id: string;
		createdAt: string;
		description: string;
		destination: string;
		origin: string;
		schedule: string;
		title: string;
		tripNodes: {
			__v: number;
			_id: string;
			createdAt: string;
			durationGeneral: number;
			durationNow: number;
			timeRequested: string;
			trip: string;
			updatedAt: string;
		}[];
		updatedAt: string;
		user: string;
	}[];
}
function AccordionControl(props: AccordionControlProps) {
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Accordion.Control {...props} />
			<ActionIcon size="lg">
				<IconPlayerPause size={16} />
			</ActionIcon>
			<ActionIcon size="lg">
				<IconEdit size={16} />
			</ActionIcon>{" "}
			<ActionIcon size="lg">
				<IconTrashX size={16} />
			</ActionIcon>
		</Box>
	);
}

const dataNodes = [
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
		date: "2021-08-01T00:00:00.0",
		durationGeneral: 1289,
		durationNow: 1357,
		createdAt: "2021-08-01T00:00:00.000Z",
		updatedAt: "2021-08-01T00:00:00.000Z",
	},
];

const dataHeader = {
	user: "50341373e894ad16347efe01",
	title: "5151333e894ad16347efe01",
	description: "2021-08-01T00:00:00.000Z",
	schedule: "1289",
	origin: "1357",
	destination: "2021-08-01T00:00:00.000Z",
	createdAt: "2021-08-01T00:00:00.000Z",
	updatedAt: "2021-08-01T00:00:00.000Z",
};

export default function AccordionController({
	...props
}: AccordionControllerProps) {
	return (
		<Accordion chevronPosition="left" sx={{ maxWidth: 400 }} mx="auto">
			<Accordion.Item value="item-3">
				<AccordionControl>Control 3</AccordionControl>
				<Accordion.Panel>
					<AccordionHeader data={dataHeader} />
					<AccordionTable data={dataNodes} />
				</Accordion.Panel>
			</Accordion.Item>
		</Accordion>
	);
}

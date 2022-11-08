import {
	Accordion,
	ActionIcon,
	AccordionControlProps,
	Box,
} from "@mantine/core";
import {
	IconPlayerPause,
	IconEdit,
	IconTrashX,
	IconPlayerPlay,
} from "@tabler/icons";
import AccordionHeader from "../AccordionHeader/AccordionHeader";
import AccordionTable from "../AccordionTable/AccordionTable";
import { useRouter } from "next/router";

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
	key: string;
}

interface CustomAccordionControlProps extends AccordionControlProps {
	data: {
		__v: number;
		_id: string;
		active: boolean;
		createdAt: string;
		description: string;
		destination: string;
		origin: string;
		schedule: string;
		title: string;
	};
}

function AccordionControl(props: CustomAccordionControlProps) {
	const router = useRouter();
	const onPause = (id: string): any => {
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/trips/${id}/pause`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	const onEdit = (data: object) => {
		//sends the user to the /dashboard/query page with the trip information as a prop
		router.push(
			{
				pathname: "/dashboard/query",
				query: { data: JSON.stringify(data) },
			},
			"/dashboard/query"
		);
	};

	const onDelete = (id: string) => {
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/trips/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};
	console.log("AccordionControl", props);
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Accordion.Control {...props} />
			{props.data.active ? (
				<ActionIcon onClick={() => onPause(props.data._id)} size="lg">
					<IconPlayerPlay size={16} />
				</ActionIcon>
			) : (
				<ActionIcon onClick={() => onPause(props.data._id)} size="lg">
					<IconPlayerPause size={16} />
				</ActionIcon>
			)}
			<ActionIcon onClick={() => onEdit(props)} size="lg">
				<IconEdit size={16} />
			</ActionIcon>{" "}
			<ActionIcon onClick={() => onDelete(props.data._id)} size="lg">
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
	data,
}: any | AccordionControllerProps) {
	return (
		<>
			<Accordion chevronPosition="left" sx={{ minWidth: 500 }} mx="sm">
				<Accordion.Item value="a">
					<AccordionControl data={data}>{data.title}</AccordionControl>
					<Accordion.Panel>
						<AccordionHeader data={data} />
						<AccordionTable data={data.tripNodes} />
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
		</>
	);
}

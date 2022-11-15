import {
	Accordion,
	ActionIcon,
	AccordionControlProps,
	Box,
	Text,
} from "@mantine/core";
import {
	IconPlayerPause,
	IconEdit,
	IconTrashX,
	IconPlayerPlay,
} from "@tabler/icons";
import AccordionHeader from "./AccordionHeader";
import AccordionTable from "./AccordionTable";
import { useRouter } from "next/router";
import { mutate } from "swr";

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
	swrdata: {
		__v: number;
		_id: string;
		active: boolean;
		createdAt: string;
		description: string;
		destination: string;
		origin: string;
		schedule: string;
		title: string;
	}[];
}

function AccordionControl(props: CustomAccordionControlProps) {
	const router = useRouter();
	const onPause = async (id: string) => {
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/trips/${id}/pause`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("api response", data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const onPauseUI = async (id: string) => {
		const newActive = !props.data.active;
		const newData = props.swrdata.map((trip) => {
			if (trip._id == id) {
				trip.active = newActive;
			}
			return trip;
		});
		const options = {
			optimisticData: newData,
			rollbackOnError: true,
		};
		mutate(
			`${process.env.NEXT_PUBLIC_API_URL}/api/me/nodes`,
			onPause(id),
			options
		);
	};

	//use mutate from useSWR with the key `${process.env.NEXT_PUBLIC_API_URL}/api/me/nodes` to update the data
	//use the mutate function to update the data
	//use the mutate function to update the data
	//use the mutate function to update the data
	//use the mutate function to update the data
	//use the mutate function to update the data

	const onDeleteUI = async (id: string) => {
		const newData = props.swrdata.filter((trip) => trip._id !== id);
		const options = {
			optimisticData: newData,
			rollbackOnError: true,
			revalidate: true,
		};
		await mutate(
			`${process.env.NEXT_PUBLIC_API_URL}/api/me/nodes`,
			newData,
			options
		);

		onDelete(id);
	};

	const onEdit = (data: object) => {
		router.push(
			{
				pathname: "/dashboard/query",
				query: { data: JSON.stringify(data) },
			},
			"/dashboard/query"
		);
	};

	const onDelete = async (id: string) => {
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/trips/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		}).then((res) => res.json());
	};
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Accordion.Control {...props} />
			{props.data.active ? (
				<ActionIcon onClick={() => onPauseUI(props.data._id)} size="lg">
					<IconPlayerPause size={16} />
				</ActionIcon>
			) : (
				<ActionIcon onClick={() => onPauseUI(props.data._id)} size="lg">
					<IconPlayerPlay size={16} />
				</ActionIcon>
			)}
			<ActionIcon onClick={() => onEdit(props)} size="lg">
				<IconEdit size={16} />
			</ActionIcon>{" "}
			<ActionIcon onClick={() => onDeleteUI(props.data._id)} size="lg">
				<IconTrashX size={16} />
			</ActionIcon>
		</Box>
	);
}

export default function AccordionController({
	data,
	swrdata,
}: any | AccordionControllerProps) {
	return (
		<>
			<Accordion chevronPosition="left" sx={{ minWidth: 500 }} mx="sm">
				<Accordion.Item value="a">
					<AccordionControl swrdata={swrdata} data={data}>
						{data.title}
					</AccordionControl>
					<Accordion.Panel>
						<AccordionHeader data={data} />
						<AccordionTable data={data.tripNodes} />
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
		</>
	);
}

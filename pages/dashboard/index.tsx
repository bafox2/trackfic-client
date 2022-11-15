import AccordionController from "../../Components/AccordionController";
import useSWR, { useSWRConfig } from "swr";
import fetcher from "../../utils/fetcher";
import { Group, Title, Button, Stack } from "@mantine/core";
import Link from "next/link";

function Dashboard() {
	// const { mutate } = useSWRConfig();
	const { data, error, isValidating, mutate } = useSWR(
		`${process.env.NEXT_PUBLIC_API_URL}/api/me/nodes`,
		fetcher
	);

	console.log(data);

	interface AccordionControllerProps {
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
	}

	const dataAccordion = data?.map((trip: AccordionControllerProps) => {
		return (
			<AccordionController
				key={trip._id}
				data={trip}
				mutate={mutate}
				swrdata={data}
			/>
		);
	});

	return (
		<>
			{error?.cause == 401 ? (
				<Title order={2}>Go make an account to track a trip!</Title>
			) : data?.length == 0 ? (
				<>
					<Title order={2}>No trips yet! Make a new trip.</Title>
					<Link href="/dashboard/query" passHref>
						<Button
							sx={(theme) => ({ color: theme.colors.freshBlue[5] })}
							variant="outline"
						>
							New Trip
						</Button>
					</Link>
				</>
			) : (
				<>
					<Stack sx={{ width: "100%" }}>
						<Group position="apart">
							<Title order={1}>Trips</Title>{" "}
							<Link href="/dashboard/query" passHref>
								<Button
									sx={(theme) => ({ color: theme.colors.freshBlue[5] })}
									variant="outline"
								>
									New Trip
								</Button>
							</Link>
						</Group>
						{dataAccordion}
					</Stack>
				</>
			)}
		</>
	);
}

export default Dashboard;

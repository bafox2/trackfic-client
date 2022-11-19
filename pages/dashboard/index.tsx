import Link from 'next/link';
import useSWR from 'swr';
import { Group, Title, Button, Stack } from '@mantine/core';
import AccordionController from '../../Components/AccordionController';
import fetcher from '../../utils/fetcher';

function Dashboard() {
	let { data, error, mutate } = useSWR(
		`${process.env.NEXT_PUBLIC_API_URL}/api/me/nodes`,
		fetcher
	);

	const onDeleteBackend = async (id: string) => {
		try {
			//use fetch with credentials to delete trip
			await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/trips/${id}`, {
				method: 'DELETE',
				credentials: 'include',
			});
		} catch (e: any) {
			console.log(e); //eslint-disable-line
		}
	};

	const onDelete = async (id: string) => {
		//update the local data
		data = data.filter((trip: any) => trip._id !== id);

		try {
			await mutate(onDeleteBackend(id)),
				{
					optimisticData: data.filter((trip: any) => trip._id !== id),
					rollbackOnError: true,
					populateCache: true,
					revalidate: false,
				};
		} catch (e: any) {
			console.log(e); //eslint-disable-line
		}
	};

	const onPauseBackend = async (id: string) => {
		try {
			//use fetch with credentials to pause trip
			await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/trips/${id}`, {
				method: 'PUT',
				credentials: 'include',
			});
		} catch (e: any) {
			console.log(e); //eslint-disable-line
		}
	};

	const onPaused = async (id: string) => {
		//update the local data
		data = data.map((trip: any) => {
			if (trip._id === id) {
				trip.active = !trip.active;
			}
			return trip;
		});

		try {
			await mutate(onPauseBackend(id)),
				{
					optimisticData: (data = data.map((trip: any) => {
						if (trip._id === id) {
							trip.active = !trip.active;
						}
						return trip;
					})),
					rollbackOnError: true,
					populateCache: true,
					revalidate: false,
				};
		} catch (e: any) {
			console.log(e); //eslint-disable-line
		}
	};

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

	const dataAccordion = data?.map((trip: AccordionControllerProps) => (
		<AccordionController
			key={trip._id}
			data={trip}
			mutate={mutate}
			swrdata={data}
			onDelete={onDelete}
			onPaused={onPaused}
		/>
	));

	return (
		<>
			{error?.cause === 401 ? (
				<Title order={2}>Go make an account to track a trip!</Title>
			) : data?.length === 0 ? (
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
					<Stack sx={{ width: '100%' }}>
						<Group position="apart">
							<Title order={1}>Trips</Title>{' '}
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

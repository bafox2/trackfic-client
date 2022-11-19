import {
	Text,
	createStyles,
	Paper,
	Group,
	ThemeIcon,
	Stack,
	Divider,
} from '@mantine/core';
import {
	IconRoute2,
	IconPennant,
	IconCurrentLocation,
	IconClock,
	IconCalculator,
} from '@tabler/icons';
import { DateTime } from 'luxon';

const useStyles = createStyles((theme) => ({}));

interface AccordionHeaderProps {
	data: {
		user: string;
		title: string;
		description?: string;
		schedule: string;
		origin: string;
		destination: string;
		createdAt: string;
		updatedAt: string;
		tripNodes: {
			_id: string;
			__v: number;
			trip: string;
			timeRequested: string;
			durationGeneral: number;
			durationNow: number;
			createdAt: string;
			updatedAt: string;
		}[];
	};
}

const transformDurationData = (duration: number) => {
	const hours = Math.floor(duration / 3600);
	const minutes = Math.floor((duration % 3600) / 60);
	const seconds = Math.floor((duration % 3600) % 60);
	if (hours === 0) {
		return `${minutes}m ${seconds}s`;
	}
	return `${hours}h ${minutes}m ${seconds}s`;
};

export default function AccordionHeader({ data }: AccordionHeaderProps) {
	return (
		<>
			<Group sx={{ marginBottom: '15px' }}>
				<Stack align="flex-start" spacing="xl">
					<Group>
						<ThemeIcon
							color={'blue'}
							variant={'outline'}
							size={32}
							sx={(theme) => ({ color: theme.colors.freshBlue[3] })}
						>
							<IconCurrentLocation />
						</ThemeIcon>
						<Text>{data.origin}</Text>
					</Group>
					<Group>
						<ThemeIcon
							color={'green'}
							variant={'outline'}
							size={32}
							sx={(theme) => ({ color: theme.colors.teaGreen[6] })}
						>
							<IconPennant />
						</ThemeIcon>

						<Text>{data.destination}</Text>
					</Group>
					<Group>
						<ThemeIcon
							color={'gray'}
							variant={'outline'}
							size={32}
							sx={(theme) => ({ color: theme.colors.platinum[6] })}
						>
							<IconClock />
						</ThemeIcon>
						<Text>Schedule: {data.schedule}</Text>
					</Group>
				</Stack>
				<Divider orientation="vertical" />
				<Stack>
					<Group>
						<ThemeIcon
							color={'gray'}
							variant={'outline'}
							size={64}
							sx={(theme) => ({ color: theme.colors.gray[9] })}
						>
							<IconCalculator size={38} />
						</ThemeIcon>
						<Text>
							{data.tripNodes.length != 0
								? `Average trip estimate: ${transformDurationData(
										data.tripNodes[0].durationGeneral
								  )}`
								: 'Waiting for first trip node confimation!'}
						</Text>
					</Group>
				</Stack>
			</Group>
		</>
	);
}

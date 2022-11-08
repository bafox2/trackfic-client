import { ThemeContext } from "@emotion/react";
import { Text, createStyles, Paper, Group, ActionIcon } from "@mantine/core";
import {
	IconRoute2,
	IconPennant,
	IconCurrentLocation,
	IconClock,
} from "@tabler/icons";

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
	};
}

export default function AccordionHeader({ data }: AccordionHeaderProps) {
	const { classes } = useStyles();
	console.log(data);
	return (
		<>
			<Group align="flex-start" spacing="xl">
				<ActionIcon sx={(theme) => ({ color: theme.colors.freshBlue[3] })}>
					<IconCurrentLocation />
				</ActionIcon>
				<Text>{data.origin}</Text>
				<ActionIcon>
					<IconRoute2 />
				</ActionIcon>
				<ActionIcon sx={(theme) => ({ color: theme.colors.teaGreen[6] })}>
					<IconPennant />
				</ActionIcon>

				<Text>{data.destination}</Text>
				<ActionIcon sx={(theme) => ({ color: theme.colors.platinum[6] })}>
					<IconClock />
				</ActionIcon>
				<Text>Schedule: {data.schedule}</Text>
			</Group>
		</>
	);
}

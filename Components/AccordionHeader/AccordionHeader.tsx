import { Text, Stack, createStyles, Paper } from "@mantine/core";

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
	return (
		<>
			<Stack align="flex-start" justify="center" spacing="xs">
				<Paper shadow="md" radius="md" withBorder={true}>
					<Text>{data.description}</Text>
					<Text>From: {data.origin}</Text>
					<Text>To: {data.destination}</Text>
					<Text>Schedule: {data.schedule}</Text>
				</Paper>
			</Stack>
		</>
	);
}

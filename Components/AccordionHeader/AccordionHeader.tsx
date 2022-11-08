import {
	Text,
	createStyles,
	Paper,
	Group,
	ThemeIcon,
	Stack,
} from "@mantine/core";
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
			<Stack align="flex-start" spacing="xl">
				<Group>
					<ThemeIcon
						color={"blue"}
						variant={"outline"}
						size={32}
						sx={(theme) => ({ color: theme.colors.freshBlue[3] })}
					>
						<IconCurrentLocation />
					</ThemeIcon>
					<Text>{data.origin}</Text>
				</Group>
				<Group>
					<ThemeIcon
						color={"green"}
						variant={"outline"}
						size={32}
						sx={(theme) => ({ color: theme.colors.teaGreen[6] })}
					>
						<IconPennant />
					</ThemeIcon>

					<Text>{data.destination}</Text>
				</Group>
				<Group>
					<ThemeIcon
						color={"gray"}
						variant={"outline"}
						size={32}
						sx={(theme) => ({ color: theme.colors.platinum[6] })}
					>
						<IconClock />
					</ThemeIcon>
					<Text>Schedule: {data.schedule}</Text>
				</Group>
			</Stack>
		</>
	);
}

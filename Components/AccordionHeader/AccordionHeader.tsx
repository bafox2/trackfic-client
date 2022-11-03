import { Text, Stack, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	header: {
		position: "sticky",
		top: 0,
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
		transition: "box-shadow 150ms ease",

		"&::after": {
			content: '""',
			position: "absolute",
			left: 0,
			right: 0,
			bottom: 0,
			borderBottom: `1px solid ${
				theme.colorScheme === "dark"
					? theme.colors.dark[3]
					: theme.colors.gray[2]
			}`,
		},
	},

	th: {
		padding: "0 !important",
	},

	control: {
		width: "100%",
		padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		},
	},

	icon: {
		width: 21,
		height: 21,
		borderRadius: 21,
	},
}));

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
	return (
		<>
			<Stack align="flex-start" justify="center" spacing="xs">
				<Text>{data.description}</Text>
				<Text>From: {data.origin}</Text>
				<Text>To: {data.destination}</Text>
			</Stack>
		</>
	);
}

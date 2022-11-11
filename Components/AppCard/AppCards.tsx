import {
	createStyles,
	Paper,
	Text,
	ThemeIcon,
	Anchor,
	Stack,
	Group,
} from "@mantine/core";
import {
	IconBrandReact,
	IconBrandNextjs,
	IconBrandMantine,
	IconCalendarTime,
	IconMap,
	IconSquareLetterT,
	IconBuildingCircus,
	IconHexagonLetterE,
	IconDiamond,
	IconBrandGoogle,
	IconBrandStackoverflow,
	IconBrandNpm,
} from "@tabler/icons";
import { ReactNode } from "react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
	card: {
		position: "relative",
		cursor: "pointer",
		overflow: "hidden",
		transition: "transform 150ms ease, box-shadow 100ms ease",
		padding: theme.spacing.xl,
		paddingLeft: theme.spacing.xl * 2,
		marginBottom: theme.spacing.xl * 2,
		fontFamily: "Red Hat Text",

		"&:hover": {
			boxShadow: theme.shadows.md,
			transform: "scale(1.02)",
		},

		"&::before": {
			content: '""',
			position: "absolute",
			top: 0,
			bottom: 0,
			left: 0,
			width: 6,
			backgroundImage: theme.fn.linearGradient(
				0,
				theme.colors.teaGreen[6],
				theme.colors.freshBlue[6]
			),
		},
	},
	icon: {
		border: `2px solid ${theme.colors.gray[4]}`,
	},
}));

export default function appCards() {
	const { classes } = useStyles();

	const apps = [
		{
			title: "Cron",
			description:
				"Cron is a web app that allows you to schedule tasks to run on a schedule.",
			link: "https://www.npmjs.com/package/cron",
			color1: "#0FF000",
			color2: "#FAAFFF",
			icon: IconCalendarTime,
		},
		{
			title: "OpenMap",
			description:
				"OpenMap is a web app that allows you to view the locations of your favorite stories on fanfiction.net.",
			link: "https://openmap.vercel.app/",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconMap,
		},
		{
			title: "Mantine",
			description:
				"Mantine is a React UI library that allows you to create beautiful and accessible web apps.",
			link: "https://mantine.dev/",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconBrandMantine,
		},
		{
			title: "Nextjs",
			description:
				"Nextjs is a React framework that allows you to create server-side rendered web apps.",
			link: "https://nextjs.org/",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconBrandNextjs,
		},
		{
			title: "Typescript",
			description:
				"Typescript is a superset of Javascript that allows you to write more robust code.",
			link: "https://www.typescriptlang.org/",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconSquareLetterT,
		},
		{
			title: "React",
			description:
				"React is a Javascript library that allows you to create interactive web apps.",
			link: "https://reactjs.org/",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconBrandReact,
		},
		{
			title: "Jest",
			description:
				"Jest is a Javascript testing framework that allows you to write tests for your code.",
			link: "https://jestjs.io/",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconBuildingCircus,
		},
		{
			title: "Express",
			description:
				"Express is a Node.js framework that allows you to create web servers.",
			link: "https://expressjs.com/",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconHexagonLetterE,
		},
		{
			title: "Mongoose",
			description:
				"Mongoose is a Node.js library that allows you to interact with MongoDB.",
			link: "https://mongoosejs.com/",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconBrandReact,
		},
		{
			title: "Zod",
			description:
				"Zod is a Typescript library that allows you to write schemas for your data.",
			link: "zohttps://github.com/colinhacks/zod",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconDiamond,
		},
		{
			title: "Google Maps",
			description:
				"Google Maps is a Javascript library that allows you to create interactive maps.",
			link: "https://developers.google.com/maps/documentation/javascript/overview",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconBrandGoogle,
		},
		{
			title: "Stack Overflow",
			description:
				"Google Maps is a Javascript library that allows you to create interactive maps.",
			link: "https://developers.google.com/maps/documentation/javascript/overview",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconBrandStackoverflow,
		},
		{
			title: "NPM",
			description:
				"Google Maps is a Javascript library that allows you to create interactive maps.",
			link: "https://developers.google.com/maps/documentation/javascript/overview",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconBrandNpm,
		},
	];

	const cards = apps.map((app) => (
		<Paper withBorder radius="md" className={classes.card}>
			<Group>
				<ThemeIcon
					className={classes.icon}
					size="xl"
					radius="md"
					color={"#FFFFFF"}
				>
					<app.icon color="#7CD657" />
				</ThemeIcon>
				<Text size="xl" weight={500} mt="md">
					{app.title}
				</Text>
			</Group>
			<Text size="sm" mt="sm" color="dimmed">
				{app.description}
			</Text>
			<Link href={app.link} passHref>
				<Anchor component="a">Explore</Anchor>
			</Link>
		</Paper>
	));

	return <Stack>{cards}</Stack>;
}

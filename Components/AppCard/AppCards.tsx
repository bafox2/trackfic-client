import {
	createStyles,
	Paper,
	Text,
	ThemeIcon,
	Anchor,
	Stack,
} from "@mantine/core";
import {
	IconBrandReact,
	IconBrandNextjs,
	IconBrandMantine,
	IconBrandGoogle,
	TablerIcon,
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
				theme.colors.pink[6],
				theme.colors.orange[6]
			),
		},
	},
}));

export default function appCards() {
	const { classes } = useStyles();

	const apps = [
		// React, Typescript, Nextjs, Mantine, Cron, Google Maps, OpenMap, Jest, Express, Mongoose, Zod
		{
			title: "Trackfic",
			description:
				"Trackfic is a web app that allows you to track your favorite stories on fanfiction.net.",
			link: "https://trackfic.vercel.app/",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconBrandMantine,
		},
		{
			title: "Cron",
			description:
				"Cron is a web app that allows you to schedule tasks to run on a schedule.",
			link: "https://cron.vercel.app/",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconBrandReact,
		},
		{
			title: "OpenMap",
			description:
				"OpenMap is a web app that allows you to view the locations of your favorite stories on fanfiction.net.",
			link: "https://openmap.vercel.app/",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconBrandReact,
		},
		{
			title: "Mantine",
			description:
				"Mantine is a React UI library that allows you to create beautiful and accessible web apps.",
			link: "https://mantine.dev/",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconBrandReact,
		},
		{
			title: "Nextjs",
			description:
				"Nextjs is a React framework that allows you to create server-side rendered web apps.",
			link: "https://nextjs.org/",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconBrandReact,
		},
		{
			title: "Typescript",
			description:
				"Typescript is a superset of Javascript that allows you to write more robust code.",
			link: "https://www.typescriptlang.org/",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconBrandReact,
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
			icon: IconBrandReact,
		},
		{
			title: "Express",
			description:
				"Express is a Node.js framework that allows you to create web servers.",
			link: "https://expressjs.com/",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconBrandReact,
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
			icon: IconBrandReact,
		},
		{
			title: "Google Maps",
			description:
				"Google Maps is a Javascript library that allows you to create interactive maps.",
			link: "https://developers.google.com/maps/documentation/javascript/overview",
			color1: "#f5f5f5",
			color2: "#f5f5f5",
			icon: IconBrandReact,
		},
	];

	const cards = apps.map((app) => (
		<Paper withBorder radius="md" className={classes.card}>
			<ThemeIcon
				size="xl"
				radius="md"
				variant="gradient"
				gradient={{ deg: 0, from: `${app.color1}`, to: `${app.color2}` }}
			>
				<app.icon color="red" />
			</ThemeIcon>
			<Text size="xl" weight={500} mt="md">
				{app.title}
			</Text>
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

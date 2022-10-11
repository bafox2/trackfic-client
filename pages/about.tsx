import { Group, Stack, Title } from "@mantine/core";
import AppCards from "../Components/AppCard/AppCards";
import {
	IconBrandReact,
	IconBrandNextjs,
	IconBrandMantine,
	IconBrandGoogle,
	TablerIcon,
} from "@tabler/icons";
import { ReactNode } from "react";

export default function About() {
	return (
		<Stack align="center" spacing="xl">
			<Title order={1}>About</Title>
			<AppCards />
			<Group position="center" spacing="xl"></Group>
		</Stack>
	);
}

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
	// {
	// 	title: "Cron",
	// 	description:
	// 		"Cron is a web app that allows you to schedule tasks to run on a schedule.",
	// 	link: "https://cron.vercel.app/",
	// 	color1: "#f5f5f5",
	// 	color2: "#f5f5f5",
	// 	icon: { IconBrandReact },
	// },
	// {
	// 	title: "OpenMap",
	// 	description:
	// 		"OpenMap is a web app that allows you to view the locations of your favorite stories on fanfiction.net.",
	// 	link: "https://openmap.vercel.app/",
	// 	color1: "#f5f5f5",
	// 	color2: "#f5f5f5",
	// 	icon: { IconBrandReact },
	// },
	// {
	// 	title: "Mantine",
	// 	description:
	// 		"Mantine is a React UI library that allows you to create beautiful and accessible web apps.",
	// 	link: "https://mantine.dev/",
	// 	color1: "#f5f5f5",
	// 	color2: "#f5f5f5",
	// 	icon: { IconBrandReact },
	// },
	// {
	// 	title: "Nextjs",
	// 	description:
	// 		"Nextjs is a React framework that allows you to create server-side rendered web apps.",
	// 	link: "https://nextjs.org/",
	// 	color1: "#f5f5f5",
	// 	color2: "#f5f5f5",
	// 	icon: { IconBrandReact },
	// },
	// {
	// 	title: "Typescript",
	// 	description:
	// 		"Typescript is a superset of Javascript that allows you to write more robust code.",
	// 	link: "https://www.typescriptlang.org/",
	// 	color1: "#f5f5f5",
	// 	color2: "#f5f5f5",
	// 	icon: { IconBrandReact },
	// },
	// {
	// 	title: "React",
	// 	description:
	// 		"React is a Javascript library that allows you to create interactive web apps.",
	// 	link: "https://reactjs.org/",
	// 	color1: "#f5f5f5",
	// 	color2: "#f5f5f5",
	// 	icon: { IconBrandReact },
	// },
	// {
	// 	title: "Jest",
	// 	description:
	// 		"Jest is a Javascript testing framework that allows you to write tests for your code.",
	// 	link: "https://jestjs.io/",
	// 	color1: "#f5f5f5",
	// 	color2: "#f5f5f5",
	// 	icon: { IconBrandReact },
	// },
	// {
	// 	title: "Express",
	// 	description:
	// 		"Express is a Node.js framework that allows you to create web servers.",
	// 	link: "https://expressjs.com/",
	// 	color1: "#f5f5f5",
	// 	color2: "#f5f5f5",
	// 	icon: { IconBrandReact },
	// },
	// {
	// 	title: "Mongoose",
	// 	description:
	// 		"Mongoose is a Node.js library that allows you to interact with MongoDB.",
	// 	link: "https://mongoosejs.com/",
	// 	color1: "#f5f5f5",
	// 	color2: "#f5f5f5",
	// 	icon: { IconBrandReact },
	// },
	// {
	// 	title: "Zod",
	// 	description:
	// 		"Zod is a Typescript library that allows you to write schemas for your data.",
	// 	link: "zohttps://github.com/colinhacks/zod",
	// 	color1: "#f5f5f5",
	// 	color2: "#f5f5f5",
	// 	icon: { IconBrandReact },
	// },
	// {
	// 	title: "Google Maps",
	// 	description:
	// 		"Google Maps is a Javascript library that allows you to create interactive maps.",
	// 	link: "https://developers.google.com/maps/documentation/javascript/overview",
	// 	color1: "#f5f5f5",
	// 	color2: "#f5f5f5",
	// 	icon: { IconBrandReact },
	// },
];

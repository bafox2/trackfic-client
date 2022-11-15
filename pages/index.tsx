import { Welcome } from "../Components/Welcome/Welcome";
import ColorSchemeToggle from "../Components/ColorSchemeToggle/ColorSchemeToggle";
import { GetStaticProps } from "next";
import maps from "../public/maps.png";
import {
	Title,
	Text,
	Container,
	Button,
	Overlay,
	createStyles,
	BackgroundImage,
	Divider,
	Group,
	Stack,
} from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
	wrapper: {
		position: "relative",
		paddingTop: 180,
		paddingBottom: 130,
		"@media (max-width: 520px)": {
			paddingTop: 80,
			paddingBottom: 50,
		},
	},

	inner: {
		position: "relative",
		zIndex: 1,
	},

	title: {
		fontWeight: 800,
		fontSize: 40,
		letterSpacing: -1,
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		color: theme.white,
		marginBottom: theme.spacing.xs,
		textAlign: "center",
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,

		"@media (max-width: 520px)": {
			fontSize: 28,
			textAlign: "left",
		},
	},

	highlight: {
		color: theme.colors.freshBlue[5],
	},

	description: {
		color: theme.colors.platinum[2],
		textAlign: "center",

		"@media (max-width: 520px)": {
			fontSize: theme.fontSizes.md,
			textAlign: "left",
		},
	},

	controls: {
		marginTop: theme.spacing.xl * 1.5,
		display: "flex",
		justifyContent: "center",
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,

		"@media (max-width: 520px)": {
			flexDirection: "column",
		},
	},

	control: {
		height: 42,
		fontSize: theme.fontSizes.md,

		"&:not(:first-of-type)": {
			marginLeft: theme.spacing.md,
		},

		"@media (max-width: 520px)": {
			"&:not(:first-of-type)": {
				marginTop: theme.spacing.md,
				marginLeft: 0,
			},
		},
	},

	secondaryControl: {
		color: theme.white,
		backgroundColor: "rgba(255, 255, 255, .4)",

		"&:hover": {
			backgroundColor: "rgba(255, 255, 255, .45) !important",
		},
	},
	root: {
		display: "flex",
		border: `1px solid ${theme.colors.freshBlue[4]}`,
		padding: theme.spacing.xl * 1.5,
		marginBottom: theme.spacing.xl * 1.5,
		marginTop: theme.spacing.xl * 1.5,
		borderRadius: theme.radius.md,

		[theme.fn.smallerThan("sm")]: {
			flexDirection: "column",
			width: "70%",
		},
	},

	stat: {
		flex: 1,

		"& + &": {
			paddingLeft: theme.spacing.xl,
			marginLeft: theme.spacing.xl,
			borderLeft: `1px solid ${theme.colors.freshBlue[2]}`,

			[theme.fn.smallerThan("sm")]: {
				paddingLeft: 0,
				marginLeft: 0,
				borderLeft: 0,
				paddingTop: theme.spacing.xl,
				marginTop: theme.spacing.xl,
				borderTop: `1px solid ${theme.colors.freshBlue[4]}`,
			},
		},
	},
	count: {
		color: theme.colors.teaGreen[5],
		fontSize: 32,
		lineHeight: 1,
		fontWeight: 700,
		marginBottom: theme.spacing.md,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},

	descriptionStat: {
		color: theme.colors.teaGreen[4],
		fontSize: theme.fontSizes.sm,
		marginTop: 5,
	},
	titleStat: {
		color: theme.colors.teaGreen[5],
		textTransform: "uppercase",
		fontWeight: 700,
		fontSize: theme.fontSizes.sm,
	},
}));

interface StatsGroupProps {
	data: { title: string; stats: string; description: string }[];
}

export default function HomePage({ data }: StatsGroupProps) {
	const { classes, cx } = useStyles();

	const stats = data.map((stat) => (
		<div key={stat.title} className={classes.stat}>
			<Text className={classes.count}>{stat.stats}</Text>
			<Text className={classes.titleStat}>{stat.title}</Text>
			<Text className={classes.descriptionStat}>{stat.description}</Text>
		</div>
	));

	return (
		<>
			<BackgroundImage
				className={classes.wrapper}
				src="https://uploads-ssl.webflow.com/5c29380b1110ec92a203aa84/5d63e3a75629b8615e85d5b4_image.png"
			>
				<Overlay color="#000" opacity={0.5} zIndex={1} />
				<div className={classes.inner}>
					<Title className={classes.title}>
						Google Maps Information{" "}
						<Text component="span" inherit className={classes.highlight}>
							Automated
						</Text>
					</Title>

					<Container size={640}>
						<Text size="lg" className={classes.description}>
							The mental toll of trying to optimize when you schedule things is
							too hard. Let us do it for you.
						</Text>
					</Container>

					<div className={classes.controls}>
						<Link href="/auth/login" passHref>
							<Button className={classes.control} variant="white" size="lg">
								Get started
							</Button>
						</Link>

						<Link href="/example" passHref>
							<Button
								className={cx(classes.control, classes.secondaryControl)}
								size="lg"
							>
								Live demo
							</Button>
						</Link>
					</div>
				</div>
			</BackgroundImage>
			<Stack sx={{ marginBottom: "25px" }} align={"center"}>
				<Welcome />
				<Group sx={{ gap: "30px" }}>
					<Link href="/example" passHref>
						<Button size="xl" variant="light" component="a" href="/example">
							Example
						</Button>
					</Link>
					<Link href="/about" passHref>
						<Button size="xl" variant="light" component="a" href="/about">
							About
						</Button>
					</Link>
				</Group>
			</Stack>
			<Divider />

			<Container size={640} className={classes.root}>
				{stats}
			</Container>

			<ColorSchemeToggle />
		</>
	);
}

export const getStaticProps: GetStaticProps = () => {
	const data = [
		{
			title: "Users",
			stats: "36",
			description: "All time users who have made a trip",
		},
		{
			title: "Trips",
			stats: "102",
			description: "From Alaska to Florida",
		},
		{
			title: "Nodes",
			stats: "1,400",
			description: "Data to help you decide when to go",
		},
	];

	return {
		props: {
			data,
		},
	};
};

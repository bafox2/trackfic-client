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
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
	wrapper: {
		position: "relative",
		paddingTop: 180,
		paddingBottom: 130,
		backgroundImage: "url(../public/maps.png)",
		backgroundSize: "cover",
		backgroundPosition: "center",

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
		color: theme.colors[theme.primaryColor][4],
	},

	description: {
		color: theme.colors.gray[0],
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
		backgroundImage: `linear-gradient(-60deg, ${
			theme.colors[theme.primaryColor][4]
		} 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
		padding: theme.spacing.xl * 1.5,
		borderRadius: theme.radius.md,

		[theme.fn.smallerThan("sm")]: {
			flexDirection: "column",
		},
	},

	count: {
		color: theme.colors.cyan[6],
		fontSize: 32,
		lineHeight: 1,
		fontWeight: 700,
		marginBottom: theme.spacing.md,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},

	stat: {
		flex: 1,

		"& + &": {
			paddingLeft: theme.spacing.xl,
			marginLeft: theme.spacing.xl,
			borderLeft: `1px solid ${theme.colors[theme.primaryColor][3]}`,

			[theme.fn.smallerThan("sm")]: {
				paddingLeft: 0,
				marginLeft: 0,
				borderLeft: 0,
				paddingTop: theme.spacing.xl,
				marginTop: theme.spacing.xl,
				borderTop: `1px solid ${theme.colors[theme.primaryColor][3]}`,
			},
		},
	},

	descriptionStat: {
		color: theme.colors.cyan[6],
		fontSize: theme.fontSizes.sm,
		marginTop: 5,
	},
	titleStat: {
		color: theme.colors.cyan[6],
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
			<div className={classes.wrapper}>
				<Overlay color="#000" opacity={0.65} zIndex={1} />

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
						<Button className={classes.control} variant="white" size="lg">
							Get started
						</Button>
						<Button
							className={cx(classes.control, classes.secondaryControl)}
							size="lg"
						>
							Live demo
						</Button>
					</div>
				</div>
			</div>
			<Welcome />
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

import {
	createStyles,
	Title,
	Text,
	Container,
	Group,
	Anchor,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
	root: {
		paddingTop: 80,
	},

	label: {
		textAlign: 'center',
		fontWeight: 900,
		fontSize: 220,
		lineHeight: 1,
		marginBottom: theme.spacing.xl * 1.5,
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[4]
				: theme.colors.gray[2],

		[theme.fn.smallerThan('sm')]: {
			fontSize: 120,
		},
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		textAlign: 'center',
		fontWeight: 900,
		fontSize: 38,

		[theme.fn.smallerThan('sm')]: {
			fontSize: 32,
		},
	},

	description: {
		maxWidth: 500,
		margin: 'auto',
		marginTop: theme.spacing.xl,
		marginBottom: theme.spacing.xl * 1.5,
	},
}));

export default function NotFoundTitle() {
	const { classes } = useStyles();

	return (
		<Container className={classes.root}>
			<div className={classes.label}>404</div>
			<Title className={classes.title}>Whoopsie!</Title>
			<Text
				color="dimmed"
				size="lg"
				align="center"
				className={classes.description}
			>
				You may have mistyped the address, or the page has been moved to another
				URL. The superb development team of one will be made aware.
			</Text>
			<Group position="center">
				<Anchor href="/"> Home</Anchor>
			</Group>
		</Container>
	);
}

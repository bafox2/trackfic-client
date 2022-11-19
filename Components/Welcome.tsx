import { Title, Text, Anchor, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontSize: 100,
		fontWeight: 900,
		letterSpacing: 4,

		[theme.fn.smallerThan('md')]: {
			fontSize: 50,
		},
	},
}));
export function Welcome() {
	const { classes, cx } = useStyles();
	return (
		<>
			<Title className={classes.title} align="center" mt={100}>
				Welcome to{' '}
				<Text
					inherit
					component="span"
					sx={(theme) => ({ color: theme.colors.freshBlue[5] })}
				>
					Trackfic
				</Text>
			</Title>
			<Text
				color="dimmed"
				align="center"
				size="lg"
				sx={{ maxWidth: 580 }}
				mx="auto"
				mt="xl"
			>
				This website was created because I was frustrated with the Google Maps
				information when you were querying for the future. Having a range of 30+
				minutes for a trip that took 45 minutes on average was no good. <br />{' '}
				<br />I forgot what times I was supposed to remember to check in real
				time, so this website is to do it for me. I hope you find it useful too.
			</Text>
		</>
	);
}

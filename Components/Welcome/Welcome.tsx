import { Title, Text, Anchor } from "@mantine/core";
import useStyles from "./Welcome.styles";

export function Welcome() {
	const { classes } = useStyles();

	return (
		<>
			<Title className={classes.title} align="center" mt={100}>
				Welcome to{" "}
				<Text inherit variant="gradient" component="span">
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
				minutes for a trip that took 45 minutes on average was no good. I also
				did not like having to remember when to punch up the information into
				the app. So I created this website to do it for me. I hope you find it
				useful too.
			</Text>
		</>
	);
}

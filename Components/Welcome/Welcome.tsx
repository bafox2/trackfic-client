import { Title, Text, Anchor } from "@mantine/core";
import useStyles from "./Welcome.styles";

export function Welcome() {
	const { classes } = useStyles();

	return (
		<>
			<Title className={classes.title} align="center" mt={100}>
				Welcome to{" "}
				<Text
					variant="gradient"
					gradient={{ from: "teaGreen", to: "teaGreen.2", deg: 45 }}
					inherit
					component="span"
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
				minutes for a trip that took 45 minutes on average was no good. <br />{" "}
				<br />I forgot what times I was supposed to remember to check in real
				time, so this website is to do it for me. I hope you find it useful too.
			</Text>
		</>
	);
}

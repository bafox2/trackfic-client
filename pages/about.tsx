import { Group, Stack, Title } from '@mantine/core';
import AppCards from '../Components/AppCards';

export default function About() {
	return (
		<Stack align="center" spacing="xl">
			<Title order={1}>About</Title>
			<AppCards />
			<Group position="center" spacing="xl" />
		</Stack>
	);
}

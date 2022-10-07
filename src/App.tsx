import { MantineProvider, Text, Button, Stack } from "@mantine/core";
import { theme } from "./theme";

export default function App() {
	return (
		<MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
			<Stack align="flex-end">
				<Text size="xs">Hello world</Text>
			</Stack>
		</MantineProvider>
	);
}

import {
	MantineProvider,
	Text,
	Button,
	Stack,
	AppShell,
	Navbar,
	Header,
	Footer,
} from "@mantine/core";
import { theme } from "./theme";

export default function App() {
	return (
		<AppShell themeOverride={theme}>
			padding="md"
			// navbar={
			// 	<Navbar width={{ base: 300 }} height={500} p="xs">
			// 		{/* Navbar content */}
			// 	</Navbar>
			// }
			header={
				<Header height={60} p="xs">
					{/* Header content */}
				</Header>
			}
			footer={<Footer height={30}>{/* Footer content */}</Footer>}
		>
			{/* Your application here */}
			<MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
				<Stack align="flex-end">
					<Text size="xs">Hello world</Text>
				</Stack>
			</MantineProvider>
		</AppShell>
	);
}

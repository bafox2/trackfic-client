import { GetServerSidePropsContext } from "next";
import { useState } from "react";
import { AppProps } from "next/app";
import CustomFonts from "../Components/CustomFonts/CustomFonts";
import { getCookie, setCookie } from "cookies-next";
import Head from "next/head";
import {
	MantineProvider,
	ColorScheme,
	ColorSchemeProvider,
} from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import AppLayout from "../Components/AppLayout/AppLayout";

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
	const { Component, pageProps } = props;
	const [colorScheme, setColorScheme] = useState<ColorScheme>(
		props.colorScheme
	);

	const toggleColorScheme = (value?: ColorScheme) => {
		const nextColorScheme =
			value || (colorScheme === "dark" ? "light" : "dark");
		setColorScheme(nextColorScheme);
		setCookie("mantine-color-scheme", nextColorScheme, {
			maxAge: 60 * 60 * 24 * 30,
		});
	};

	const appLayoutProps = {
		fallbackData: {
			user: {
				_id: 0,
				name: "Guest",
				email: "guest@localhost",
				createdAt: "2021-05-01T00:00:00.000Z",
				updatedAt: "2021-05-01T00:00:00.000Z",
				__v: 0,
				session: "guest",
				iat: 0,
				exp: 0,
			},
		},
	};

	return (
		<>
			<Head>
				<title>Trackfic</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚦</text></svg>"
				/>
			</Head>

			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider
					theme={{ colorScheme, fontFamily: "Red Hat Text, sans-serif" }}
					withGlobalStyles
					withNormalizeCSS
				>
					<CustomFonts />
					<NotificationsProvider>
						<AppLayout {...appLayoutProps}>
							<Component {...pageProps} />
						</AppLayout>
					</NotificationsProvider>
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
	colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
});

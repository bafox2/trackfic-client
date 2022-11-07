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
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚙</text></svg>"
				/>
			</Head>

			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider
					theme={{
						colorScheme,
						fontFamily: "Red Hat Text, sans-serif",
						colors: {
							lightSilver: [
								"#F1F2F3",
								"#D9DBDE",
								"#C0C4C9",
								"#A7ADB4",
								"#8E969E",
								"#767F89",
								"#5E666E",
								"#474D52",
								"#2F3337",
								"#181A1B",
							],

							platinum: [
								"#F2F2F2",
								"#DBDBDB",
								"#C4C4C4",
								"#ADADAD",
								"#969696",
								"#808080",
								"#666666",
								"#4D4D4D",
								"#333333",
								"#1A1A1A",
							],
							teaGreen: [
								"#EFFAEB",
								"#D2F1C6",
								"#B6E8A1",
								"#99DF7C",
								"#7CD657",
								"#60CD32",
								"#4CA428",
								"#397B1E",
								"#265214",
								"#13290A",
							],
							freshBlue: [
								"#E5F4FF",
								"#B8E0FF",
								"#8ACCFF",
								"#5CB8FF",
								"#2EA4FF",
								"#0090FF",
								"#0073CC",
								"#005699",
								"#003A66",
								"#001D33",
							],
							bananaYellow: [
								"#FFFBE5",
								"#FFF3B8",
								"#FFEC8A",
								"#FFE45C",
								"#FFDD2E",
								"#FFD600",
								"#CCAB00",
								"#998000",
								"#665500",
								"#332B00",
							],
							mountainYellow: [
								"#FEF7E7",
								"#FBEABC",
								"#F9DC90",
								"#F6CF65",
								"#F3C139",
								"#F1B40E",
								"#C1900B",
								"#916C08",
								"#604806",
								"#302403",
							],
						},
					}}
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

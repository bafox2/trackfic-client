import {
	AppShell,
	Footer,
	Group,
	Text,
	NavLink,
	ActionIcon,
	Button,
} from "@mantine/core";
import ColorSchemeToggle from "./ColorSchemeToggle";
import { IconBrandGithub } from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import React, { ReactNode } from "react";
import { NextPage } from "next";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import Header from "./Header";
import HeaderLoggedin from "./HeaderLoggedin";

interface Props {
	children?: ReactNode;
	data?: any;
	dataProp?: any;
	fallbackData?: any;
	// any props that come into the component
}

interface User {
	user: {
		_id: number;
		name: string;
		email: string;
		createdAt: string;
		updatedAt: string;
		__v: number;
		session: string;
		iat: number;
		exp: number;
	};
}

const AppLayout: NextPage<{ fallbackData: User }> = ({
	children,
	fallbackData,
}: Props) => {
	const router = useRouter();

	const { data, error, isValidating, mutate } = useSWR<User | null>(
		`${process.env.NEXT_PUBLIC_API_URL}/api/me`,
		fetcher,
		{ fallbackData }
	);

	//write a mutute function to update the data when the user logs out
	const onLogout = async () => {
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/sessions`,
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
					// body: JSON.stringify(values),
					credentials: "include",
				}
			);
			console.log("logging out");
			document.cookie =
				"acccessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
			document.cookie =
				"refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
			router.push("/");
			router.reload();
			mutate(null);
		} catch (error: any) {
			console.log(error);
		}
	};

	const links = [
		{ link: "Home", label: "Home", links: [] },
		{ link: "Trips", label: "Trips", links: [] },
		{ link: "About", label: "About", links: [] },
	];

	console.log(data?.user);
	return (
		<AppShell
			sx={(theme) => ({
				main: {
					backgroundColor:
						theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
					width: "100vw",
					height: "100vh",
				},
			})}
			fixed
			header={
				data?.user?.name !== "Guest" || null || undefined ? (
					<HeaderLoggedin logout={onLogout} />
				) : (
					<Header />
				)
			}
			footer={
				<Footer height={50} p="sm">
					<Group position="apart" spacing="xl">
						<Text size="sm">
							<span>bfox © 2022</span>
						</Text>
						<Text size="sm">
							<span style={{ fontWeight: "bolder" }}>Trackfic</span>
						</Text>
						<Link href="https://github.com" passHref>
							<a target="_blank" rel="noopener noreferrer">
								<ActionIcon component={IconBrandGithub}>Next link</ActionIcon>
							</a>
						</Link>
					</Group>
				</Footer>
			}
		>
			{children}
		</AppShell>
	);
};

export default AppLayout;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const data = await fetcher(`${process.env.NEXT_PUBLIC_API_URL}/api/me`);

	return { props: { fallbackData: data } };
};

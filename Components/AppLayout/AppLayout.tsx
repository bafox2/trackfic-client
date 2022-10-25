import {
	AppShell,
	Header,
	Footer,
	Group,
	Text,
	Tabs,
	NavLink,
	ActionIcon,
} from "@mantine/core";
import ColorSchemeToggle from "../ColorSchemeToggle/ColorSchemeToggle";
import {
	IconPhoto,
	IconMessageCircle,
	IconSettings,
	IconBrandGithub,
} from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppContext } from "next/app";
import { GetServerSideProps } from "next";
import React, { ReactNode } from "react";
import { NextPage } from "next";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";

interface Props {
	children?: ReactNode;
	data?: any;
	data1?: any;
	// any props that come into the component
}

interface User {
	_id: number;
	name: string;
	email: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
	session: string;
	iat: number;
	exp: number;
}

const AppLayout: NextPage = ({ children, data1 }: Props) => {
	const router = useRouter();
	const { data, error } = useSWR<User>(
		`${process.env.NEXT_PUBLIC_API_URL}/api/me`,
		{
			fetcher,
		}
	);

	return (
		<AppShell
			sx={(theme) => ({
				main: {
					backgroundColor:
						theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
					width: "100vw",
					height: "100vh",
					paddingLeft: "0px",
				},
			})}
			fixed
			header={
				<Header height={70} p="md">
					<div
						style={{ display: "flex", alignItems: "center", height: "100%" }}
					>
						<Text size="lg" weight="bolder">
							data {data?.name}
							{data1?.name}
						</Text>

						<Link href="/" passHref>
							<NavLink
								component="a"
								label="Home"
								active={router.pathname === "/home"}
							/>
						</Link>
						<Link href="/auth/login" passHref>
							<NavLink
								component="a"
								label="Log in"
								active={router.pathname === "/auth/login"}
							/>
						</Link>
						<Link href="/about" passHref>
							<NavLink
								component="a"
								label="About"
								active={router.pathname === "/about"}
							/>
						</Link>
						<ColorSchemeToggle />
					</div>
				</Header>
			}
			footer={
				<Footer height={50} p="sm">
					<Group position="apart" spacing="xl">
						{/* <Text size="sm">
							<span style={{ fontWeight: "bolder" }}>Trackfic</span>
						</Text> */}
						<Text size="sm">
							<span style={{ fontWeight: "bolder" }}>bfox © 2022</span>
						</Text>
						<Link href="https://github.com" passHref>
							<ActionIcon component={IconBrandGithub}>Next link</ActionIcon>
						</Link>
					</Group>
				</Footer>
			}
		>
			{children}
		</AppShell>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const data1 = await fetcher(`${process.env.NEXT_PUBLIC_API_URL}/api/me`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
	});

	return { props: { user: data1 } };
};

export default AppLayout;

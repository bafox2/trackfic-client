import {
	AppShell,
	Header,
	Footer,
	Group,
	Text,
	Tabs,
	NavLink,
	ActionIcon,
	Button,
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
			document.cookie =
				"acccessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
			document.cookie =
				"refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
			mutate(null);
		} catch (error: any) {
			console.log(error);
		}
	};
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
				//if logged in give dashboard and query else give login about and example
				<Header height={70} p="md">
					<div
						style={{ display: "flex", alignItems: "center", height: "100%" }}
					>
						<Link href="/" passHref>
							<NavLink
								sx={(theme) => ({
									":hover": {
										backgroundColor: "transparent",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										borderRadius: "50%",
									},
								})}
								component="a"
								label={
									<Group>
										<Text
											sx={() => ({
												transform: "rotateY(180deg)",
												marginLeft: "12px",
												marginTop: "4px",
												backgroundColor: "transparent",
												fontSize: "50px",
											})}
										>
											🚙
										</Text>
										<Text
											sx={() => ({
												backgroundColor: "transparent",
												marginLeft: "-78px",
												marginBottom: "17px",
												marginTop: "-20px",
												fontSize: "20px",
											})}
										>
											Trackfic
										</Text>
									</Group>
								}
								active={router.pathname === "/home"}
							/>
						</Link>

						{data?.user?.name}
						{data?.user?.name ? (
							<>
								<Link href="/dashboard" passHref>
									<NavLink
										component="a"
										label="Dashboard"
										active={router.pathname === "/dashboard"}
									/>
								</Link>
								<Link href="/dashboard/query" passHref>
									<NavLink
										component="a"
										label="Query"
										active={router.pathname === "/dashboard/query"}
									/>
								</Link>
								<Button
									onClick={onLogout}
									variant="outline"
									style={{ marginLeft: "auto" }}
								>
									<NavLink
										component="a"
										label="Logout"
										active={router.pathname === "/example"}
									/>
								</Button>
							</>
						) : (
							<>
								<Link href="/about" passHref>
									<NavLink
										component="a"
										label="About"
										active={router.pathname === "/about"}
									/>
								</Link>
								<Link href="/example" passHref>
									<NavLink
										component="a"
										label="Example"
										active={router.pathname === "/example"}
									/>
								</Link>
								<Link href="/auth/login" passHref>
									<NavLink
										component="a"
										label="Log in"
										active={router.pathname === "/auth/login"}
									/>
								</Link>
								<Link href="/auth/register" passHref>
									<NavLink
										component="a"
										label="Register"
										active={router.pathname === "/auth/register"}
									/>
								</Link>
							</>
						)}

						<ColorSchemeToggle />
					</div>
				</Header>
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
	const data = await fetcher(`${process.env.NEXT_PUBLIC_API_URL}/api/me`, true);

	return { props: { fallbackData: data } };
};

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
import React, { ReactNode } from "react";

interface Props {
	children?: ReactNode;
	// any props that come into the component
}

const AppLayout = ({ children }: Props) => {
	const router = useRouter();
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
							Trackfic
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

export default AppLayout;

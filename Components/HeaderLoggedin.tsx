import {
	createStyles,
	Header,
	Group,
	Button,
	Text,
	Divider,
	NavLink,
	Center,
	Box,
	Burger,
	Drawer,
	ScrollArea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import ColorSchemeToggle from "./ColorSchemeToggle";

const useStyles = createStyles((theme) => ({
	link: {
		display: "flex",
		alignItems: "center",
		height: "100%",
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		textDecoration: "none",
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		fontWeight: 500,
		fontSize: theme.fontSizes.sm,

		[theme.fn.smallerThan("sm")]: {
			height: 42,
			display: "flex",
			alignItems: "center",
			width: "100%",
		},

		...theme.fn.hover({
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		}),
	},

	subLink: {
		width: "100%",
		padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
		borderRadius: theme.radius.md,

		...theme.fn.hover({
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[7]
					: theme.colors.gray[0],
		}),

		"&:active": theme.activeStyles,
	},

	dropdownFooter: {
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.colors.dark[7]
				: theme.colors.gray[0],
		margin: -theme.spacing.md,
		marginTop: theme.spacing.sm,
		padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
		paddingBottom: theme.spacing.xl,
		borderTop: `1px solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
		}`,
	},

	hiddenMobile: {
		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},

	hiddenDesktop: {
		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},
}));

export default function HeaderLoggedInMenu({ logout }: { logout: () => void }) {
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
		useDisclosure(false);
	const { classes, theme } = useStyles();
	const router = useRouter();

	return (
		<Box pb={1}>
			<Header height={60} px="md">
				<Group position="apart" sx={{ height: "100%" }}>
					<Group sx={{ marginLeft: "10px" }}>
						<Link href="/" passHref>
							<Text
								sx={() => ({
									transform: "rotateY(180deg)",
									marginLeft: "12px",
									marginTop: "4px",
									backgroundColor: "transparent",
									fontSize: "40px",
									cursor: "pointer",
								})}
							>
								🚙
							</Text>
						</Link>
						<Link href="/" passHref>
							<Text
								size={"xl"}
								weight={700}
								sx={() => ({
									backgroundColor: "transparent",
									marginLeft: "-78px",
									marginBottom: "17px",
									marginTop: "-20px",
									fontSize: "20px",
									cursor: "pointer",
								})}
							>
								Trackfic
							</Text>
						</Link>
					</Group>
					<Group
						sx={{ height: "100%", marginTop: "-5px" }}
						spacing={10}
						className={classes.hiddenMobile}
					></Group>
					<Group className={classes.hiddenMobile}>
						<Link href="/dashboard" passHref>
							<Button
								sx={(theme) => ({ color: theme.colors.freshBlue[5] })}
								variant="default"
							>
								Dashboard
							</Button>
						</Link>
						<Button
							onClick={logout}
							sx={(theme) => ({ background: theme.colors.freshBlue[5] })}
						>
							Log Out
						</Button>

						<ColorSchemeToggle />
					</Group>

					<Burger
						opened={drawerOpened}
						onClick={toggleDrawer}
						className={classes.hiddenDesktop}
					/>
				</Group>
			</Header>

			<Drawer
				opened={drawerOpened}
				onClose={closeDrawer}
				size="100%"
				padding="md"
				title="Navigation"
				className={classes.hiddenDesktop}
				zIndex={1000000}
			>
				<ScrollArea sx={{ height: "calc(95vh - 60px)" }} mx="-md">
					<Divider
						my="sm"
						color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
					/>
					<Link href="/example" passHref>
						<NavLink
							className={classes.link}
							component="a"
							label="Example"
							active={router.pathname === "/example"}
						/>
					</Link>
					<Link href="/about" passHref>
						<NavLink
							className={classes.link}
							component="a"
							label="About"
							active={router.pathname === "/about"}
						/>
					</Link>
					<Divider
						my="sm"
						color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
					/>

					<Group position="center" grow pb="xl" px="md">
						<Link href="/auth/login" passHref>
							<Button variant="default">Log in</Button>
						</Link>
						<Link href="/auth/register" passHref>
							<Button>Sign up</Button>
						</Link>
						<ColorSchemeToggle />
					</Group>
				</ScrollArea>
			</Drawer>
		</Box>
	);
}

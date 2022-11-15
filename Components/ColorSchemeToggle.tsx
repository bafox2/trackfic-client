import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

export default function ColorSchemeToggle() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<ActionIcon
			onClick={() => toggleColorScheme()}
			size={"lg"}
			sx={(theme) => ({
				backgroundColor:
					theme.colorScheme === "dark"
						? theme.colors.dark[6]
						: theme.colors.gray[0],
				color:
					theme.colorScheme === "dark"
						? theme.colors.yellow[4]
						: theme.colors.blue[6],
				marginTop: 0,
				height: 36,
				width: 36,
			})}
		>
			{colorScheme === "dark" ? (
				<IconSun size={24} stroke={1.5} />
			) : (
				<IconMoonStars size={24} stroke={2.5} />
			)}
		</ActionIcon>
	);
}

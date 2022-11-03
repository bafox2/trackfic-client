import { useState } from "react";
import {
	createStyles,
	Table,
	ScrollArea,
	Text,
	Group,
	UnstyledButton,
	Center,
} from "@mantine/core";
import { keys } from "@mantine/utils";
import { IconSelector, IconChevronDown, IconChevronUp } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
	header: {
		position: "sticky",
		top: 0,
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
		transition: "box-shadow 150ms ease",

		"&::after": {
			content: '""',
			position: "absolute",
			left: 0,
			right: 0,
			bottom: 0,
			borderBottom: `1px solid ${
				theme.colorScheme === "dark"
					? theme.colors.dark[3]
					: theme.colors.gray[2]
			}`,
		},
	},

	th: {
		padding: "0 !important",
	},

	control: {
		width: "100%",
		padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		},
	},

	icon: {
		width: 21,
		height: 21,
		borderRadius: 21,
	},
}));

interface RowDataNodes {
	_id: string;
	user: string;
	trip: string;
	date: string;
	durationGeneral: number;
	durationNow: number;
	createdAt: string;
	updatedAt: string;
}
[];

export default function TableData({ data }: { data: RowDataNodes[] }) {
	const { classes, cx } = useStyles();

	const rows = data.map((row) => (
		<tr key={row._id}>
			<td>{row.date.slice(0, 10)}</td>
			<td>{row.date.slice(11, 16)}</td>
			<td>{row.durationGeneral}</td>
			<td>{row.durationNow}</td>
		</tr>
	));

	return (
		<>
			<Table sx={{ minWidth: 700 }}>
				<thead className={cx(classes.header)}>
					<tr>
						<th>Date</th>
						<th>Time</th>
						<th>Estimate</th>
						<th>Estimate with Traffic</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</>
	);
}

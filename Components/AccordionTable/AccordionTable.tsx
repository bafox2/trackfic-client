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
			width: "inherit",
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
}));

interface RowDataNode {
	__v: number;
	_id: string;
	durationGeneral: number;
	durationNow: number;
	timeRequested: string;
	trip: string;
	createdAt: string;
	updatedAt: string;
}
[];

const dummyData = [
	{
		__v: 0,
		_id: "60a6b1b0b0b5b00015b0b0b0",
		durationGeneral: 0,
		durationNow: 0,
		timeRequested: "2021-05-18T00:00:00.000Z",
		trip: "60a6b1b0b0b5b00015b0b0b0",
		createdAt: "2021-05-18T00:00:00.000Z",
		updatedAt: "2021-05-18T00:00:00.000Z",
	},
];

export default function TableData({ data }: RowDataNode | any) {
	const { classes, cx } = useStyles();
	if (data.length === 0) {
		return (
			<>
				<Table sx={{ minWidth: 500 }}>
					<thead className={cx(classes.header)}>
						<tr>
							<th>Date</th>
							<th>Time</th>
							<th>Estimate</th>
							<th>Estimate with Traffic</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>No entries yet</td>
						</tr>
					</tbody>
				</Table>
			</>
		);
	}

	const rows = data.map((row: RowDataNode) => (
		<tr key={row._id}>
			<td>{row.createdAt.slice(0, 10)}</td>
			<td>{row.createdAt.slice(11, 16)}</td>
			<td>{row.durationGeneral}</td>
			<td>{row.durationNow}</td>
		</tr>
	));

	return (
		<>
			<Table sx={{ minWidth: 500 }}>
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
